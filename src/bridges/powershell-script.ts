export const POWERSHELL_BRIDGE_SCRIPT = String.raw`
$ErrorActionPreference = "Stop"
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$hwp = $null

function Send-Response($id, $ok, $result, $errorMessage) {
  $response = [ordered]@{ id = $id; ok = $ok }
  if ($ok) { $response.result = $result } else { $response.error = $errorMessage }
  [Console]::Out.WriteLine(($response | ConvertTo-Json -Compress -Depth 20))
  [Console]::Out.Flush()
}

while (($line = [Console]::In.ReadLine()) -ne $null) {
  $request = $null
  try {
    $request = $line | ConvertFrom-Json
    $id = [int]$request.id
    $method = [string]$request.method
    $params = $request.params

    switch ($method) {
      "init" {
        $hwp = New-Object -ComObject HWPFrame.HwpObject
        Send-Response $id $true $true $null
      }
      "setVisible" {
        $hwp.XHwpWindows.Item(0).Visible = [bool]$params.visible
        Send-Response $id $true $true $null
      }
      "getPID" {
        $processId = $null
        try {
          $window = $hwp.XHwpWindows.Item(0)
          $handle = $null
          foreach ($name in @("Hwnd", "HWND", "Handle")) {
            try {
              $value = $window.$name
              if ($null -ne $value -and [int64]$value -ne 0) {
                $handle = [IntPtr]([int64]$value)
                break
              }
            } catch {}
          }

          if ($null -ne $handle) {
            if (-not ("NativeMethods" -as [type])) {
              Add-Type @"
using System;
using System.Runtime.InteropServices;
public static class NativeMethods {
  [DllImport("user32.dll")]
  public static extern uint GetWindowThreadProcessId(IntPtr hWnd, out uint processId);
}
"@
            }

            $pidValue = [uint32]0
            [void][NativeMethods]::GetWindowThreadProcessId($handle, [ref]$pidValue)
            if ($pidValue -ne 0) { $processId = [int]$pidValue }
          }
        } catch {}

        if ($null -eq $processId) {
          $candidate = Get-Process | Where-Object { $_.ProcessName -match "^Hwp" } | Sort-Object StartTime -Descending | Select-Object -First 1
          if ($null -ne $candidate) { $processId = [int]$candidate.Id }
        }

        if ($null -eq $processId) {
          throw "Unable to resolve HWP process ID."
        }

        Send-Response $id $true $processId $null
      }
      "registerSecurityModule" {
        $result = $hwp.RegisterModule("FilePathCheckDLL", "FilePathCheckerModuleExample")
        Send-Response $id $true ([bool]$result) $null
      }
      "open" {
        $result = $hwp.Open([string]$params.path, [string]$params.format, [string]$params.arg)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP Open returned false."
      }
      "save" {
        $result = $hwp.Save()
        Send-Response $id ([bool]$result) ([bool]$result) "HWP Save returned false."
      }
      "saveAs" {
        $result = $hwp.SaveAs([string]$params.path, [string]$params.format, [string]$params.arg)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP SaveAs returned false."
      }
      "close" {
        $result = $hwp.HAction.Run("FileClose")
        Send-Response $id ([bool]$result) ([bool]$result) "HWP FileClose returned false."
      }
      "quit" {
        $hwp.Quit()
        Send-Response $id $true $true $null
        exit 0
      }
      "insertText" {
        $pset = $hwp.HParameterSet.HInsertText
        $pset.Text = [string]$params.text
        $result = $hwp.HAction.Execute("InsertText", $pset.HSet)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP InsertText returned false."
      }
      "run" {
        $result = $hwp.HAction.Run([string]$params.actionName)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP action returned false."
      }
      "execute" {
        if ($null -ne $params.parameterSet) {
          $parameterSetId = [string]$params.parameterSet.parameterSetId
          $pset = $hwp.HParameterSet.$parameterSetId
          foreach ($property in $params.parameterSet.values.PSObject.Properties) {
            $name = [string]$property.Name
            if ($null -ne $property.Value -and $property.Value -is [System.Management.Automation.PSCustomObject]) {
              $nestedSet = $pset.CreateItemSet($name, $name)
              foreach ($nestedProperty in $property.Value.PSObject.Properties) {
                $nestedName = [string]$nestedProperty.Name
                $nestedSet.$nestedName = $nestedProperty.Value
              }
            } else {
              $pset.$name = $property.Value
            }
          }
          $result = $hwp.HAction.Execute([string]$params.actionName, $pset.HSet)
        } else {
          $result = $hwp.HAction.Execute([string]$params.actionName)
        }
        Send-Response $id ([bool]$result) ([bool]$result) "HWP action returned false."
      }
      "movePos" {
        if ($null -ne $params.para -and $null -ne $params.pos) {
          $result = $hwp.MovePos([uint32]$params.moveId, [uint32]$params.para, [uint32]$params.pos)
        } else {
          $result = $hwp.MovePos([uint32]$params.moveId)
        }
        Send-Response $id ([bool]$result) ([bool]$result) "HWP MovePos returned false."
      }
      "getPosBySet" {
        $pset = $hwp.GetPosBySet()
        $result = [ordered]@{
          list = [int]$pset.Item("List")
          para = [int]$pset.Item("Para")
          pos = [int]$pset.Item("Pos")
        }
        Send-Response $id $true $result $null
      }
      "setPos" {
        $position = $params.position
        $hwp.SetPos([int]$position.list, [int]$position.para, [int]$position.pos)
        Send-Response $id $true $true $null
      }
      "setPosBySet" {
        $position = $params.position
        $pset = $hwp.HParameterSet.ListParaPos
        $pset.List = [int]$position.list
        $pset.Para = [int]$position.para
        $pset.Pos = [int]$position.pos
        $result = $hwp.SetPosBySet($pset.HSet)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP SetPosBySet returned false."
      }
      "selectText" {
        $range = $params.range
        $result = $hwp.SelectText([int]$range.start.para, [int]$range.start.pos, [int]$range.end.para, [int]$range.end.pos)
        Send-Response $id ([bool]$result) ([bool]$result) "HWP SelectText returned false."
      }
      default {
        throw "Unknown bridge method: $method"
      }
    }
  } catch {
    $id = 0
    if ($request -ne $null -and $request.id -ne $null) { $id = [int]$request.id }
    Send-Response $id $false $null $_.Exception.Message
  }
}
`;
