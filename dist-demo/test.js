// src/test.ts
import { join as join2 } from "path";
import { tmpdir as tmpdir2 } from "os";

// src/com/errors.ts
var HwpAutomationError = class extends Error {
  code;
  constructor(code, message, cause) {
    super(message, { cause });
    this.name = "HwpAutomationError";
    this.code = code;
  }
};

// src/spec/generated.ts
var parameterSetDefinitions = [
  {
    "id": "ActionCrossRef",
    "description": "\uC0C1\uD638\uCC38\uC870 \uC0BD\uC785",
    "sourcePage": 1,
    "items": [
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "\u203Bcommand string \uCC38\uC870"
      }
    ]
  },
  {
    "id": "AutoFill",
    "description": "\uC790\uB3D9 \uCC44\uC6B0\uAE30",
    "sourcePage": 2,
    "items": [
      {
        "id": "AutoFillSection",
        "type": "PIT_UI",
        "description": "\uC790\uB3D9 \uCC44\uC6B0\uAE30 \uC139\uC158 : 0 = \uAE30\uBCF8, 1 = \uC0AC\uC6A9\uC790 \uC815\uC758"
      },
      {
        "id": "AutoFillItem",
        "type": "PIT_UI",
        "description": "\uC139\uC158\uC758 \uC544\uC774\uD15C \uC778\uB371\uC2A4 : 0 ~"
      }
    ]
  },
  {
    "id": "AutoNum",
    "description": "\uBC88\uD638 \uB123\uAE30",
    "sourcePage": 3,
    "items": [
      {
        "id": "NumType",
        "type": "PIT_UI1",
        "description": "2 = \uBBF8\uC8FC \uBC88\uD638 3 = \uADF8\uB9BC \uBC88\uD638 4 = \uD45C \uBC88\uD638 5 = \uC218\uC2DD \uBC88\uD638"
      },
      {
        "id": "NewNumber",
        "type": "PIT_UI2",
        "description": "\uC0C8 \uC2DC\uC791 \uBC88\uD638 (1 .. n)"
      },
      {
        "id": "NumFormat",
        "type": "PIT_UI2",
        "description": "\uBC88\uD638 \uBAA8\uC591"
      }
    ]
  },
  {
    "id": "BookMark",
    "description": "\uCC45\uAC08\uD53C",
    "sourcePage": 4,
    "items": [
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "\uCC45\uAC08\uD53C \uC774\uB984"
      },
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "\uCC45\uAC08\uD53C \uC885\uB958 : 0 = \uC77C\uBC18 \uCC45\uAC08\uD53C, 1 = \uBE14\uB85D \uCC45\uAC08\uD53C"
      },
      {
        "id": "Command",
        "type": "PIT_UI",
        "description": "\uCC45\uAC08\uD53C \uBA85\uB839\uC758 \uC885\uB958 : 0 = \uCC45\uAC08\uD53C \uC0DD\uC131, 1 = \uCC45\uAC08\uD53C\uB85C \uC774\uB3D9, 2 = \uCC45\uAC08\uD53C \uC218\uC815"
      }
    ]
  },
  {
    "id": "BorderFill",
    "description": "\uD14C\uB450\uB9AC/\uBC30\uACBD\uC758 \uC77C\uBC18 \uC18D\uC131",
    "sourcePage": 5,
    "items": [
      {
        "id": "BorderTypeLeft",
        "type": "PIT_UI2",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC885\uB958 : \uC67C\uCABD [\uC120 \uC885\uB958]"
      },
      {
        "id": "BorderTypeRight",
        "type": "PIT_UI2",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC885\uB958 : \uC624\uB978\uCABD"
      },
      {
        "id": "BorderTypeTop",
        "type": "PIT_UI2",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC885\uB958 : \uC704"
      },
      {
        "id": "BorderTypeBottom",
        "type": "PIT_UI2",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC885\uB958 : \uC544\uB798"
      },
      {
        "id": "BorderWidthLeft",
        "type": "PIT_UI1",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uB450\uAED8 : \uC67C\uCABD [\uC120 \uC885\uB958]"
      },
      {
        "id": "BorderWidthRight",
        "type": "PIT_UI1",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uB450\uAED8 : \uC624\uB978\uCABD"
      },
      {
        "id": "BorderWidthTop",
        "type": "PIT_UI1",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uB450\uAED8 : \uC704"
      },
      {
        "id": "BorderWidthBottom",
        "type": "PIT_UI1",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uB450\uAED8 : \uC544\uB798"
      },
      {
        "id": "BorderCorlorLeft",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54 : \uC67C\uCABD RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "BorderColorRight",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54 : \uC624\uB978\uCABD RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "BorderColorTop",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54 : \uC704 RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "BorderColorBottom",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54 :\uC544\uB798 RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR) \uC2AC\uB798\uC26C \uB300\uAC01\uC120 \uD50C\uB798\uADF8 : \uBE44\uD2B8 \uD50C\uB798\uADF8\uC758 \uC870\uD569\uC73C\uB85C \uD45C\uD604\uB418\uBA70 \uAC01 \uC704\uCE58\uC758 \uBE44\uD2B8\uB294 \uB2E4\uC74C\uC744 \uB098\uD0C0\uB0B8 \uB2E4."
      },
      {
        "id": "SlashFlag",
        "type": "PIT_UI2",
        "description": "0 = \uD558\uB2E8 \uB300\uAC01\uC120 bit 1 = \uC911\uC559 \uB300\uAC01\uC120 bit 2 = \uC0C1\uB2E8 \uB300\uAC01\uC120 \uB354 \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD558\uB2E8\uC758 \u203B \uB300\uAC01\uC120\uC758 \uD615\uD0DC\uB97C \uCC38\uACE0\uD55C\uB2E4. \uBC31\uC2AC\uB798\uC26C \uB300\uAC01\uC120 \uD50C\uB798\uADF8 : \uBE44\uD2B8 \uD50C\uB798\uADF8\uC758 \uC870\uD569\uC73C\uB85C \uD45C\uD604\uB418\uBA70 \uAC01 \uC704\uCE58\uC758 \uBE44\uD2B8\uB294 \uB2E4\uC74C\uC744 \uB098\uD0C0\uB0B8 \uB2E4.",
        "subType": "bit"
      },
      {
        "id": "BackSlashFlag",
        "type": "PIT_UI2",
        "description": "0 = \uD558\uB2E8 \uB300\uAC01\uC120 bit 1 = \uC911\uC559 \uB300\uAC01\uC120 bit 2 = \uC0C1\uB2E8 \uB300\uAC01\uC120 \uB354 \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD558\uB2E8\uC758 \u203B \uB300\uAC01\uC120\uC758 \uD615\uD0DC\uB97C \uCC38\uACE0\uD55C\uB2E4.",
        "subType": "bit"
      },
      {
        "id": "DiagonalType",
        "type": "PIT_UI2",
        "description": "\uC120 \uC885\uB958 \uC140\uC5D0\uC11C\uB294 \uB300\uAC01\uC120, \uD45C\uC5D0\uC11C\uB294 \uC790\uB3D9\uC73C\uB85C \uB098\uB220\uC9C4 \uACBD\uACC4\uC120\uC5D0\uC11C \uC0AC\uC6A9"
      },
      {
        "id": "DiagonalWidth",
        "type": "PIT_UI1",
        "description": "\uC120 \uC885\uB958 \uC140\uC5D0\uC11C\uB294 \uB300\uAC01\uC120, \uD45C\uC5D0\uC11C\uB294 \uC790\uB3D9\uC73C\uB85C \uB098\uB220\uC9C4 \uACBD\uACC4\uC120\uC5D0\uC11C \uC0AC\uC6A9 \uC120 \uC0C9\uC0C1"
      },
      {
        "id": "DiagonalColor",
        "type": "PIT_UI4",
        "description": "color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR) \uC140\uC5D0\uC11C\uB294 \uB300\uAC01\uC120, \uD45C\uC5D0\uC11C\uB294 \uC790\uB3D9\uC73C\uB85C \uB098\uB220\uC9C4 \uACBD\uACC4\uC120\uC5D0\uC11C \uC0AC\uC6A9",
        "subType": "RGB"
      },
      {
        "id": "BorderFill3D",
        "type": "PIT_UI1",
        "description": "3\uCC28\uC6D0 \uD6A8\uACFC : 0 = off, 1 = on"
      },
      {
        "id": "Shadow",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC790 \uD6A8\uACFC : 0 = off, 1 = on"
      },
      {
        "id": "FillAttr",
        "type": "PIT_SET",
        "description": "\uBC30\uACBD \uCC44\uC6B0\uAE30 \uC18D\uC131",
        "subType": "DrawFillAttr"
      },
      {
        "id": "CrookedSlashFlag",
        "type": "PIT_UI2",
        "description": "\uAEBE\uC778 \uB300\uAC01\uC120 \uD50C\uB798\uADF8 (bit 0, 1\uC774 \uAC01\uAC01 slash, back slash\uC758 \uAC00 \uC6B4\uB370 \uB300\uAC01\uC120\uC774 \uAEBE\uC778 \uB300\uAC01\uC120\uC784\uC744 \uB098\uD0C0\uB0B8\uB2E4.)"
      },
      {
        "id": "BreakCellSeparateLine",
        "type": "PIT_UI1",
        "description": "\uC790\uB3D9\uC73C\uB85C \uB098\uB25C \uD45C\uC758 \uACBD\uACC4\uC120 \uC124\uC815 : 0 = \uACBD\uACC4\uC120 \uC124\uC815\uC744 \uAE30\uBCF8 \uAC12\uC5D0 \uB530\uB984, 1 = \uC0AC\uC6A9\uC790\uAC00 \uACBD\uACC4\uC120 \uC124\uC815 \uC74C\uC601 \uBE44\uC728 \uC99D\uAC00/\uAC10\uC18C."
      },
      {
        "id": "ShadeFaceColorIncDec",
        "type": "PIT_UI1",
        "description": "\uC74C\uC601 \uBE44\uC728 \uC99D\uAC00/\uAC10\uC18C \uC5D1\uC158\uC5D0\uC11C \uC804\uB2EC \uB428. \uAD6C\uD604\uC6A9\uC73C\uB85C\uB9CC \uC4F0\uC784. \uC774 \uC544\uC774\uD15C\uC774 \uC5C6\uC73C\uBA74(\uC74C\uC601 \uBE44\uC728 \uC99D\uAC00/\uAC10\uC18C\uB294 \uC5C6\uB294 \uAC83\uC774\uACE0 \uC788\uB2E4\uBA74 \uAC12 \uC774 TRUE\uC774\uBA74 \uC99D\uAC00, FALSE\uC774\uBA74 \uAC10\uC18C\uC774\uB2E4.)"
      },
      {
        "id": "CounterSlashFlag",
        "type": "PIT_UI1",
        "description": "\uC2AC\uB798\uC26C \uB300\uAC01\uC120\uC758 \uC5ED\uBC29\uD5A5 \uD50C\uB798\uADF8(\uC6B0\uC0C1\uD5A5 \uB300\uAC01\uC120) : 0 = \uC21C\uBC29\uD5A5, 1 = \uC5ED\uBC29\uD5A5"
      },
      {
        "id": "CounterBackSlashFlag",
        "type": "PIT_UI1",
        "description": "\uC5ED\uC2AC\uB798\uC26C \uB300\uAC01\uC120\uC758 \uC5ED\uBC29\uD5A5 \uD50C\uB798\uADF8(\uC88C\uC0C1\uD5A5 \uB300\uAC01\uC120) : 0 = \uC21C\uBC29\uD5A5, 1 = \uC5ED\uBC29\uD5A5"
      },
      {
        "id": "CenterLineFlag",
        "type": "PIT_UI1",
        "description": "\uC911\uC2EC\uC120 : ( 0 = \uC911\uC2EC\uC120 \uC5C6\uC74C, 1 = \uC911\uC2EC\uC120 \uC788\uC74C) \uB354 \uC790\uC138\uD55C \uB0B4\uC6A9\uC740 \uD558\uB2E8\uC758 \u203B \uC911\uC2EC\uC120\uC758 \uD615\uD0DC\uB97C \uCC38\uACE0\uD55C\uB2E4. Low Byte CrookedSlashFlag (\uC2AC\uB798\uC26C \uB300\uAC01\uC120\uC758 \uAEBE\uC784 \uC5EC\uBD80)"
      },
      {
        "id": "CrookedSlashFlag1",
        "type": "PIT_UI1",
        "description": "(CrookedSlashFlag\uB97C \uC4F0\uAE30 \uD3B8\uD558\uB3C4\uB85D CrookedSlashFlag1,2\uB85C \uB098\uB214) High Byte CrookedSlashFlag (\uC5ED\uC2AC\uB798\uC26C \uB300\uAC01\uC120\uC758 \uAEBE\uC784 \uC5EC\uBD80)"
      },
      {
        "id": "CrookedSlashFlag2",
        "type": "PIT_UI1",
        "description": '(CrookedSlashFlag\uB97C \uC4F0\uAE30 \uD3B8\uD558\uB3C4\uB85D CrookedSlashFlag1,2\uB85C \uB098\uB214) \u203B \uB300\uAC01\uC120\uC758 \uD615\uD0DC\uB294 \uB2E4\uC74C\uC758 3\uAC00\uC9C0\uC758 \uC544\uC774\uD15C\uC744 \uD1B5\uD574\uC11C \uACB0\uC815\uB41C\uB2E4. - SlashFlag(BackSlashFlag) -> \uAD04\uD638 \uC548\uC740 \uC5ED\uC2AC\uB798\uC26C\uC758 \uACBD\uC6B0 - CrookedSlashFlag1(CrookedSlashFlag2) - CounterSlashFlag(CounterBackSlashFlag) SlashFlag\uB294 \uB300\uAC01\uC120\uC758 \uC720\uD615\uC744 \uB098\uD0C0\uB0B4\uBA70, \uAC01\uAC01 \uB97C \uB098\uD0C0\uB0B8\uB2E4. (BackSlashFlag\uB294 \uBC18\uB300\uBC29\uD5A5 ) CrookedSlashFlag\uB294 \uB300\uAC01\uC120\uC774 \uAEBE\uC784 \uC5EC\uBD80\uB97C \uB098\uD0C0\uB0B4\uBA70, \uC624\uC9C1 SlashFlag(BackSlashFlag)\uAC00 0x02( or ) \uC778 \uACBD\uC6B0\uC5D0\uB9CC \uC720 \uD6A8\uD558\uB2E4. \uC2E4\uC81C\uB85C \uC801\uC6A9\uB41C \uBAA8\uC2B5\uC740 (SlashFlag) \uB610\uB294 (BackSlashFlag) \uC774\uB2E4. CounterSlashFlag\uB294 \uC5ED\uBC29\uD5A5\uC744 \uB098\uD0DC\uB098\uBA70, Flag\uAC00 \uCF1C\uC788\uC73C\uBA74 \uB97C \uAC01\uAC01 \uB85C \uBCC0\uACBD\uC2DC\uD0A8\uB2E4. (CounterBackSlashFlag\uB294 ) Example : \uD604\uC7AC \uC120\uD0DD\uB41C \uC140\uC5D0 \uAEBE\uC778 \uB300\uAC01\uC120 \uB123\uAE30 Javascript function OnInsertCrookedSlash() { var vAct = vHwpCtrl.CreateAction("CellBorder"); var vSet = act.CreateSet(); // Create CellBorder ParameterSet (drived BorderFill) vAct.GetDefault(vSet); vSet.SetItem("DiagonalType", 1); // Line type is Solid vSet.SetItem("BackSlashFlag", 0x02); // One Line Back-Slash vSet.SetItem("CrookedSlashFlag2", 1); // Slash is Crooked vAct.Execute(vSet); } \u203B \uC911\uC2EC\uC120\uC758 \uD615\uD0DC\uB294 \uB2E4\uC74C\uC758 2\uAC00\uC9C0\uC758 \uC544\uC774\uD15C\uC744 \uD1B5\uD574\uC11C \uACB0\uC815\uB41C\uB2E4. - CenterLineFlag - CrookedSlashFlag1, CrookedSlashFlag2 CenterLineFlag\uB294 \uB2E8\uC21C\uD788 \uC911\uC2EC\uC120\uC744 \uC124\uC815\uD560 \uAC83\uC778\uC9C0 \uC124\uC815\uD558\uC9C0 \uC54A\uC744 \uAC83\uC778\uC9C0\uB97C \uB098\uD0C0\uB0B8\uB2E4. CenterLineFlag\uAC00 1\uB85C \uC124\uC815\uB418\uC5C8\uB2E4\uBA74, \uC2E4\uC81C \uB85C \uC911\uC2EC\uC120\uC758 \uAC00\uB85C \uB610\uB294 \uC138\uB85C\uB97C \uC124\uC815\uD558\uB294 \uAC12\uC740 CrookedSlashFlag\uAC00 \uACB0\uC815\uD558\uAC8C \uB41C\uB2E4. CrookedSlashFlag1 = \uAC00\uB85C \uC911\uC2EC\uC120 \uC720/\uBB34(1/0) CrookedSlashFlag2 = \uC138\uB85C \uC911\uC2EC\uC120 \uC720/\uBB34(1/0) \uAC00\uB85C\uC138\uB85C \uBAA8\uB450 \uC124\uC815\uD558\uB824\uBA74 CrookedSlashFlag1/2 \uBAA8\uB450 \uAC12\uC744 1\uB85C \uC124\uC815\uD558\uBA74 \uB41C\uB2E4. \uC911\uC2EC\uC120\uACFC \uB300\uAC01\uC120\uC740 \uC11C\uB85C \uBC30\uD0C0\uC801\uC73C\uB85C \uC801\uC6A9\uB41C\uB2E4. (\uB300\uAC01\uC120\uC774 \uC124\uC815\uB418\uBA74 \uC911\uC2EC\uC120\uC740 \uCDE8\uC18C\uB418\uBA70, \uC911\uC2EC\uC120\uC774 \uC124\uC815\uB418\uBA74 \uB300\uAC01\uC120\uC740 \uCDE8\uC18C\uB41C\uB2E4.) Example : \uD604\uC7AC \uC120\uD0DD\uB41C \uC140\uC5D0 \uC911\uC2EC\uC120 \uB123\uAE30 Javascript function OnInsertCrookedSlash() { var vAct = vHwpCtrl.CreateAction("CellBorder"); var vSet = act.CreateSet(); // Create CellBorder ParameterSet (drived BorderFill) vAct.GetDefault(vSet); vSet.SetItem("DiagonalType", 1); // Line type is Solid vSet.SetItem("CenterLineFlag", 1); // Set CenterLine vSet.SetItem("CrookedSlashFlag2", 1); // Vertical CenterLine vAct.Execute(vSet); }'
      }
    ]
  },
  {
    "id": "BorderFillExt",
    "description": "UI \uAD6C\uD604\uC744 \uC704\uD55C BorderFill \uD655\uC7A5",
    "sourcePage": 9,
    "items": [
      {
        "id": "TypeHorz",
        "type": "PIT_UI2",
        "description": "\uC911\uC559\uC120 \uC885\uB958 : \uAC00\uB85C [\uC120 \uC885\uB958]"
      },
      {
        "id": "TypeVert",
        "type": "PIT_UI2",
        "description": "\uC911\uC559\uC120 \uC885\uB958 : \uC138\uB85C"
      },
      {
        "id": "WidthHorz",
        "type": "PIT_UI1",
        "description": "\uC911\uC559\uC120 \uB450\uAED8 : \uAC00\uB85C [\uC120 \uC885\uB958]"
      },
      {
        "id": "WidthVert",
        "type": "PIT_UI1",
        "description": "\uC911\uC559\uC120 \uB450\uAED8 : \uC138\uB85C"
      },
      {
        "id": "ColorHorz",
        "type": "PIT_UI4",
        "description": "\uC911\uC559\uC120 \uC0C9\uAE54 : \uAC00\uB85C RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "ColorVert",
        "type": "PIT_UI4",
        "description": "\uC911\uC559\uC120 \uC0C9\uAE54 : \uC138\uB85C RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      }
    ]
  },
  {
    "id": "BulletShape",
    "description": "\uBD88\uB9BF \uBAA8\uC591(\uAE00\uBA38\uB9AC\uD45C \uBAA8\uC591)",
    "sourcePage": 10,
    "items": [
      {
        "id": "HasCharShape",
        "type": "PIT_UI1",
        "description": "\uC790\uCCB4\uC801\uC778 \uAE00\uC790 \uBAA8\uC591\uC744 \uC0AC\uC6A9\uD560\uC9C0 \uC5EC\uBD80 : 0 = \uC2A4\uD0C0\uC77C\uC744 \uB530\uB77C\uAC10, 1 = \uC790\uCCB4 \uBAA8\uC591\uC744 \uAC00\uC9D0"
      },
      {
        "id": "CharShape",
        "type": "PIT_SET",
        "description": "\uAE00\uC790 \uBAA8\uC591 (HasCharShape\uAC00 1\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9)",
        "subType": "CharShape"
      },
      {
        "id": "WidthAdjust",
        "type": "PIT_I",
        "description": "\uBC88\uD638 \uB108\uBE44 \uBCF4\uC815 \uAC12 (HWPUNIT)"
      },
      {
        "id": "TextOffset",
        "type": "PIT_I",
        "description": "\uBCF8\uBB38\uACFC\uC758 \uAC70\uB9AC (percent or HWPUNIT)"
      },
      {
        "id": "Alignment",
        "type": "PIT_UI1",
        "description": "\uBC88\uD638 \uC815\uB82C : 0 = \uC67C\uCABD \uC815\uB82C, 1 = \uAC00\uC6B4\uB370 \uC815\uB82C, 2 = \uC624\uB978\uCABD \uC815\uB82C"
      },
      {
        "id": "UseInstWidth",
        "type": "PIT_UI1",
        "description": "\uBC88\uD638 \uB108\uBE44\uB97C \uBB38\uC11C \uB0B4 \uBB38\uC790\uC5F4\uC758 \uB108\uBE44\uC5D0 \uB530\uB97C\uC9C0 \uC5EC\uBD80 on / off"
      },
      {
        "id": "AutoIndent",
        "type": "PIT_UI1",
        "description": "\uBC88\uD638 \uB108\uBE44 \uC790\uB3D9 \uB4E4\uC5EC\uC4F0\uAE30 \uC5EC\uBD80 : 0 = \uB4E4\uC5EC\uC4F0\uAE30 \uC548\uD568, 1 = \uB4E4\uC5EC\uC4F0\uAE30"
      },
      {
        "id": "TextOffsetType",
        "type": "PIT_UI1",
        "description": "\uBCF8\uBB38\uACFC\uC758 \uAC70\uB9AC \uC885\uB958 : 0 = percent, 1 = HWPUNIT"
      },
      {
        "id": "BulletChar",
        "type": "PIT_UI2",
        "description": "\uBD88\uB9BF \uBB38\uC790 \uCF54\uB4DC"
      },
      {
        "id": "HasImage",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uAE00\uBA38\uB9AC\uD45C \uC5EC\uBD80 : 0 = \uC77C\uBC18 \uAE00\uBA38\uB9AC\uD45C, 1 = \uADF8\uB9BC \uAE00\uBA38\uB9AC\uD45C"
      },
      {
        "id": "BulletImage",
        "type": "PIT_SET",
        "description": "\uAE00\uBA38\uB9AC\uD45C \uC774\uBBF8\uC9C0",
        "subType": "DrawFillAttr"
      },
      {
        "id": "CheckedBulletChar",
        "type": "PIT_UI2",
        "description": "\uCCB4\uD06C\uB41C \uBD88\uB9BF \uBB38\uC790 \uCF54\uB4DC"
      },
      {
        "id": "Checkable",
        "type": "PIT_UI1",
        "description": "\uCCB4\uD06C \uAC00\uB2A5 \uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "Caption",
    "description": "\uCEA1\uC158 \uC18D\uC131",
    "sourcePage": 11,
    "items": [
      {
        "id": "Side",
        "type": "PIT_UI1",
        "description": "\uBC29\uD5A5. 0 = \uC67C\uCABD, 1 = \uC624\uB978\uCABD, 2 = \uC704, 3 = \uC544\uB798"
      },
      {
        "id": "Width",
        "type": "PIT_I",
        "description": "\uCEA1\uC158 \uD3ED (\uAC00\uB85C \uBC29\uD5A5\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428. \uB2E8\uC704 HWPUNIT)"
      },
      {
        "id": "Gap",
        "type": "PIT_I",
        "description": "\uCEA1\uC158\uACFC \uD2C0 \uC0AC\uC774 \uAC04\uACA9(HWPUNIT)"
      },
      {
        "id": "CapFullSize",
        "type": "PIT_UI1",
        "description": "\uCEA1\uC158 \uD3ED\uC5D0 \uC5EC\uBC31\uC744 \uD3EC\uD568\uD560\uC9C0 \uC5EC\uBD80 (\uC138\uB85C \uBC29\uD5A5\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428)"
      }
    ]
  },
  {
    "id": "CaptureEnd",
    "description": "\uAC08\uBB34\uB9AC \uB05D",
    "sourcePage": 12,
    "items": [
      {
        "id": "BeginX",
        "type": "PIT_I",
        "description": "\uC2DC\uC791\uC810\uACFC X \uC88C\uD45C(\uD398\uC774\uC9C0 X\uC88C\uD45C)"
      },
      {
        "id": "BeginY",
        "type": "PIT_I",
        "description": "\uC2DC\uC791\uC810\uACFC Y \uC88C\uD45C(\uD398\uC774\uC9C0 Y\uC88C\uD45C)"
      },
      {
        "id": "EndX",
        "type": "PIT_I",
        "description": "\uB05D\uC810\uC758 X \uC88C\uD45C(\uD398\uC774\uC9C0 X\uC88C\uD45C)"
      },
      {
        "id": "EndY",
        "type": "PIT_I",
        "description": "\uB05D\uC810\uC758 Y \uC88C\uD45C(\uD398\uC774\uC9C0 Y\uC88C\uD45C)"
      },
      {
        "id": "PageNum",
        "type": "PIT_UI",
        "description": "\uD398\uC774\uC9C0 \uBC88\uD638"
      },
      {
        "id": "Path",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uACBD\uB85C, (\uD55C/\uAE00 2022\uBD80\uD130 \uC9C0\uC6D0)"
      },
      {
        "id": "Format",
        "type": "PIT_I",
        "description": "\uD3EC\uB9F7 \uBC88\uD638, (\uD55C/\uAE00 2022\uBD80\uD130 \uC9C0\uC6D0)"
      }
    ]
  },
  {
    "id": "Cell",
    "description": "\uC140",
    "sourcePage": 13,
    "items": [
      {
        "id": "HasMargin",
        "type": "PIT_UI1",
        "description": "\uD14C\uC774\uBE14\uC758 \uAE30\uBCF8 \uC140 \uC5EC\uBC31 \uB300\uC2E0 \uC790\uCCB4 \uC140 \uC5EC\uBC31\uC744 \uC801\uC6A9\uD560\uC9C0 \uC5EC\uBD80. (on / off)"
      },
      {
        "id": "Protected",
        "type": "PIT_UI1",
        "description": "\uC0AC\uC6A9\uC790 \uD3B8\uC9D1\uC744 \uB9C9\uC744\uC9C0 \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "Header",
        "type": "PIT_UI1",
        "description": "\uC81C\uBAA9 \uC140\uC778\uC9C0 \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "\uC140\uC758 \uD3ED (HWPUNIT)"
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "\uC140\uC758 \uB192\uC774 (HWPUNIT)"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "\uC591\uC2DD\uBAA8\uB4DC\uC5D0\uC11C \uD3B8\uC9D1 \uAC00\uB2A5 \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "Dirty",
        "type": "PIT_UI1",
        "description": "\uCD08\uAE30\uD654 \uC0C1\uD0DC\uC778\uC9C0 \uC218\uC815\uB41C \uC0C1\uD0DC\uC778\uC9C0 \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "CellCtrlData",
        "type": "PIT_SET",
        "description": "\uC140 \uB370\uC774\uD130",
        "subType": "CtrlData"
      }
    ]
  },
  {
    "id": "CellBorderFill",
    "description": "\uC140 \uD14C\uB450\uB9AC/\uBC30\uACBD",
    "sourcePage": 14,
    "items": [
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "\uC801\uC6A9 \uB300\uC0C1 : 0 = \uC120\uD0DD\uB41C \uC140, 1 = \uC804\uCCB4 \uC140, 2 = \uC5EC\uB7EC \uC140\uC5D0 \uAC78\uCCD0 \uC801 \uC6A9"
      },
      {
        "id": "NoNeighborCell",
        "type": "PIT_UI1",
        "description": "\uC8FC\uBCC0 \uC140\uC5D0 \uC120 \uBAA8\uC591\uC744 \uC801\uC6A9\uD558\uC9C0 \uC54A\uC744\uC9C0 \uC5EC\uBD80 (1\uC774\uBA74 \uC801\uC6A9\uD558\uC9C0 \uC54A\uB294 \uB2E4)"
      },
      {
        "id": "TableBorderFill",
        "type": "PIT_SET",
        "description": "\uD45C \uD14C\uB450\uB9AC/\uBC30\uACBD",
        "subType": "BorderFill"
      },
      {
        "id": "AllCellsBorderFill",
        "type": "PIT_SET",
        "description": "\uC804\uCCB4 \uC140\uC758 \uD14C\uB450\uB9AC/\uBC30\uACBD",
        "subType": "BorderFill"
      },
      {
        "id": "SelCellsBorderFill",
        "type": "PIT_SET",
        "description": "\uC120\uD0DD\uB41C \uC140\uC758 \uD14C\uB450\uB9AC/\uBC30\uACBD",
        "subType": "BorderFill"
      }
    ]
  },
  {
    "id": "ChangeRome",
    "description": "\uB85C\uB9C8\uC790 \uBCC0\uD658",
    "sourcePage": 15,
    "items": [
      {
        "id": "Option",
        "type": "PIT_UI1",
        "description": "1 = \uC8FC\uC18C 2 = \uC0AC\uB78C\uC774\uB984 3 = \uD55C\uAE00\uBCF5\uC6D0"
      },
      {
        "id": "HanString",
        "type": "PIT_BSTR",
        "description": "\uBCC0\uACBD\uC2DC\uD0AC \uB610\uB294 \uBCC0\uACBD\uB41C \uD55C\uAE00\uBB38\uC790"
      }
    ]
  },
  {
    "id": "CharShape",
    "description": "\uAE00\uC790 \uBAA8\uC591",
    "sourcePage": 16,
    "items": [
      {
        "id": "FaceNameHangul",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34 \uC774\uB984 (\uD55C\uAE00)"
      },
      {
        "id": "FaceNameLatin",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34 \uC774\uB984 (\uC601\uBB38)"
      },
      {
        "id": "FaceNameHanja",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34 \uC774\uB984 (\uD55C\uC790)"
      },
      {
        "id": "FaceNameJapanese",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34 \uC774\uB984 (\uC77C\uBCF8\uC5B4)"
      },
      {
        "id": "FaceNameOther",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34 \uC774\uB984 (\uAE30\uD0C0)"
      },
      {
        "id": "FaceNameSymbol",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34 \uC774\uB984 (\uC2EC\uBC8C)"
      },
      {
        "id": "FaceNameUser",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34 \uC774\uB984 (\uC0AC\uC6A9\uC790)"
      },
      {
        "id": "FontTypeHangul",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 (\uD55C\uAE00) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeLatin",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 (\uC601\uBB38) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeHanja",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 (\uD55C\uC790) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeJapanese",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 (\uC77C\uBCF8\uC5B4) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeOther",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 (\uAE30\uD0C0) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeSymbol",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 (\uC2EC\uBC8C) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeUser",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 (\uC0AC\uC6A9\uC790) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "SizeHangul",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uD06C\uAE30 \uBE44\uC728. (\uD55C\uAE00) 10% - 250%"
      },
      {
        "id": "SizeLatin",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uD06C\uAE30 \uBE44\uC728. (\uC601\uBB38) 10% - 250%"
      },
      {
        "id": "SizeHanja",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uD06C\uAE30 \uBE44\uC728. (\uD55C\uC790) 10% - 250%"
      },
      {
        "id": "SizeJapanese",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uD06C\uAE30 \uBE44\uC728. (\uC77C\uBCF8\uC5B4) 10% - 250%"
      },
      {
        "id": "SizeOther",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uD06C\uAE30 \uBE44\uC728. (\uAE30\uD0C0) 10% - 250%"
      },
      {
        "id": "SizeSymbol",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uD06C\uAE30 \uBE44\uC728. (\uC2EC\uBC8C) 10% - 250%"
      },
      {
        "id": "SizeUser",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uD06C\uAE30 \uBE44\uC728. (\uC0AC\uC6A9\uC790) 10% - 250%"
      },
      {
        "id": "RatioHangul",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC7A5\uD3C9 \uBE44\uC728. (\uD55C\uAE00) 50% - 200%"
      },
      {
        "id": "RatioLatin",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC7A5\uD3C9 \uBE44\uC728. (\uC601\uBB38) 50% - 200%"
      },
      {
        "id": "RatioHanja",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC7A5\uD3C9 \uBE44\uC728. (\uD55C\uC790) 50% - 200%"
      },
      {
        "id": "RatioJapanese",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC7A5\uD3C9 \uBE44\uC728. (\uC77C\uBCF8\uC5B4) 50% - 200%"
      },
      {
        "id": "RatioOther",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC7A5\uD3C9 \uBE44\uC728. (\uAE30\uD0C0) 50% - 200%"
      },
      {
        "id": "RatioSymbol",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC7A5\uD3C9 \uBE44\uC728. (\uC2EC\uBC8C) 50% - 200%"
      },
      {
        "id": "RatioUser",
        "type": "PIT_UI1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC7A5\uD3C9 \uBE44\uC728. (\uC0AC\uC6A9\uC790) 50% - 200%"
      },
      {
        "id": "SpacingHangul",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC790\uAC04. (\uD55C\uAE00) -50% - 50%"
      },
      {
        "id": "SpacingLatin",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC790\uAC04. (\uC601\uBB38) -50% - 50%"
      },
      {
        "id": "SpacingHanja",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC790\uAC04. (\uD55C\uC790) -50% - 50%"
      },
      {
        "id": "SpacingJapanese",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC790\uAC04. (\uC77C\uBCF8\uC5B4) -50% - 50%"
      },
      {
        "id": "SpacingOther",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC790\uAC04. (\uAE30\uD0C0) -50% - 50%"
      },
      {
        "id": "SpacingSymbol",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC790\uAC04. (\uC2EC\uBC8C) -50% - 50%"
      },
      {
        "id": "SpacingUser",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC790\uAC04. (\uC0AC\uC6A9\uC790) -50% - 50%"
      },
      {
        "id": "OffsetHangul",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC624\uD504\uC14B. (\uD55C\uAE00) -100% - 100%"
      },
      {
        "id": "OffsetLatin",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC624\uD504\uC14B. (\uC601\uBB38) -100% - 100%"
      },
      {
        "id": "OffsetHanja",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC624\uD504\uC14B. (\uD55C\uC790) -100% - 100%"
      },
      {
        "id": "OffsetJapanese",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC624\uD504\uC14B. (\uC77C\uBCF8\uC5B4) -100% - 100%"
      },
      {
        "id": "OffsetOther",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC624\uD504\uC14B. (\uAE30\uD0C0) -100% - 100%"
      },
      {
        "id": "OffsetSymbol",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC624\uD504\uC14B. (\uC2EC\uBC8C) -100% - 100%"
      },
      {
        "id": "OffsetUser",
        "type": "PIT_I1",
        "description": "\uAC01 \uC5B8\uC5B4\uBCC4 \uC624\uD504\uC14B. (\uC0AC\uC6A9\uC790) -100% - 100%"
      },
      {
        "id": "Bold",
        "type": "PIT_UI1",
        "description": ": 0 = off, 1 = on",
        "subType": "Bold"
      },
      {
        "id": "Italic",
        "type": "PIT_UI1",
        "description": ": 0 = off, 1 = on",
        "subType": "Italic"
      },
      {
        "id": "SmallCaps",
        "type": "PIT_UI1",
        "description": "Caps : 0 = off, 1 = on",
        "subType": "Small"
      },
      {
        "id": "Emboss",
        "type": "PIT_UI1",
        "description": ": 0 = off, 1 = on",
        "subType": "Emboss"
      },
      {
        "id": "Engrave",
        "type": "PIT_UI1",
        "description": ": 0 = off, 1 = on",
        "subType": "Engrave"
      },
      {
        "id": "SuperScript",
        "type": "PIT_UI1",
        "description": ": 0 = off, 1 = on",
        "subType": "Superscript"
      },
      {
        "id": "SubScript",
        "type": "PIT_UI1",
        "description": ": 0 = off, 1 = on",
        "subType": "Subscript"
      },
      {
        "id": "UnderlineType",
        "type": "PIT_UI1",
        "description": "\uBC11\uC904 \uC885\uB958 : 0 = none, 1 = bottom, 2 = center, 3 = top \uC678\uACFD\uC120 \uC885\uB958 :"
      },
      {
        "id": "OutlineType",
        "type": "PIT_UI1",
        "description": "0 = none, 1 = solid, 2 = dot, 3 = thick, 4 = dash, 5 = dashdot, 6 = dashdotdot"
      },
      {
        "id": "ShadowType",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC790 \uC885\uB958 : 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "TextColor",
        "type": "PIT_UI4",
        "description": "\uAE00\uC790\uC0C9. (COLORREF) RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "ShadeColor",
        "type": "PIT_UI4",
        "description": "\uC74C\uC601\uC0C9. (COLORREF) RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "UnderlineShape",
        "type": "PIT_UI1",
        "description": "\uBC11\uC904 \uBAA8\uC591 : \uC120 \uC885\uB958"
      },
      {
        "id": "UnderlineColor",
        "type": "PIT_UI4",
        "description": "\uBC11\uC904 \uC0C9 (COLORREF) RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I1",
        "description": "\uADF8\uB9BC\uC790 \uAC04\uACA9 (X \uBC29\uD5A5) -100% - 100%"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I1",
        "description": "\uADF8\uB9BC\uC790 \uAC04\uACA9 (Y \uBC29\uD5A5) -100% - 100%"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "\uADF8\uB9BC\uC790 \uC0C9 (COLORREF) RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR) \uCDE8\uC18C\uC120 \uC885\uB958 :"
      },
      {
        "id": "StrikeOutType",
        "type": "PIT_UI1",
        "description": "0 = none, 1 = red single, 2 = red double, 3 = text single, 4 = text double"
      },
      {
        "id": "DiacSymMark",
        "type": "PIT_UI1",
        "description": "\uAC15\uC870\uC810 \uC885\uB958 : 0 = none, 1 = \uAC80\uC815 \uB3D9\uADF8\uB77C\uBBF8, 2 = \uC18D \uBE48 \uB3D9\uADF8\uB77C\uBBF8"
      },
      {
        "id": "UseFontSpace",
        "type": "PIT_UI1",
        "description": "\uAE00\uAF34\uC5D0 \uC5B4\uC6B8\uB9AC\uB294 \uBE48\uCE78 : 0 = off, 1 = on"
      },
      {
        "id": "UseKerning",
        "type": "PIT_UI1",
        "description": "\uCEE4\uB2DD : 0 = off, 1 = on"
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "\uAE00\uC790 \uD06C\uAE30 (HWPUNIT) \uCDE8\uC18C\uC120 \uBAA8\uC591 0 \uC2E4\uC120 1 \uD30C\uC120 2 \uC810\uC120 3 \uC77C\uC810\uC1C4\uC120 4 \uC774\uC810\uC1C4\uC120 5 \uAE34 \uD30C\uC120 6 \uC6D0\uD615 \uC810\uC120 7 \uC774\uC911 \uC2E4\uC120"
      },
      {
        "id": "StrikeOutShape",
        "type": "PIT_UI1",
        "description": "8 \uC587\uACE0 \uAD75\uC740 \uC774\uC911\uC120 9 \uAD75\uACE0 \uC587\uC740 \uC774\uC911\uC120 10 \uC587\uACE0 \uAD75\uACE0 \uC587\uC740 \uC0BC\uC911\uC120 11 \uBB3C\uACB0\uC120 12 \uC774\uC911 \uBB3C\uACB0\uC120 13 3D \uAD75\uC740\uC120 14 3D \uAD75\uC740\uC120 (\uAD11\uC6D0 \uBC18\uB300) 15 3D \uC2E4\uC120 16 3D \uC2E4\uC120 (\uAD11\uC6D0 \uBC18\uB300)"
      },
      {
        "id": "StrikeOutColor",
        "type": "PIT_UI4",
        "description": "\uCDE8\uC18C\uC120\uC0C9 (COLORREF)"
      },
      {
        "id": "BorderFill",
        "type": "PIT_SET",
        "description": "\uD14C\uB450\uB9AC/\uBC30\uACBD",
        "subType": "BorderFill"
      }
    ]
  },
  {
    "id": "ChCompose",
    "description": "\uAE00\uC790 \uACB9\uCE68",
    "sourcePage": 19,
    "items": [
      {
        "id": "Chars",
        "type": "PIT_BSTR",
        "description": "\uACB9\uCCD0\uC9C8 \uAE00\uC790\uB4E4 \uD14C\uB450\uB9AC \uD0C0\uC785 1 \u25CB"
      },
      {
        "id": "CircleType",
        "type": "PIT_UI",
        "description": "3 \u25A1 5 \u25B3 8 \u25C7"
      },
      {
        "id": "CharSize",
        "type": "PIT_I",
        "description": "\uD14C\uB450\uB9AC \uB0B4\uBD80 \uBB38\uC790\uC758 \uD06C\uAE30 \uBE44\uC728 -6 ~ +2 (40%~120%)"
      },
      {
        "id": "CheckCompose",
        "type": "PIT_UI1",
        "description": "\uD14C\uB450\uB9AC \uB0B4\uBD80\uC758 \uBB38\uC790 \uACB9\uCE58\uAE30 \uC5EC\uBD80 TRUE=\uACB9\uCE58\uAE30:FALSE=\uD3BC\uCE58\uAE30"
      },
      {
        "id": "CharShapes",
        "type": "PIT_SET",
        "description": "\uACB9\uCCD0\uC9C0\uB294 \uBB38\uC790\uB4E4\uC758 \uC18D\uC131\uC14B",
        "subType": "ChComposeShapes"
      },
      {
        "id": "TextDir",
        "type": "PIT_UI1",
        "description": "\uD14D\uC2A4\uD2B8 \uBC29\uD5A5"
      }
    ]
  },
  {
    "id": "ChComposeShapes",
    "description": "\uAE00\uC790 \uACB9\uCE58\uAE30 \uAE00\uC790 \uC18D\uC131\uC14B",
    "sourcePage": 20,
    "items": [
      {
        "id": "CircleCharShape",
        "type": "PIT_SET",
        "description": "\uACB9\uCCD0\uC9C0\uB294 \uBB38\uC790\uB4E4\uC758 \uC18D\uC131.",
        "subType": "CharShape"
      },
      {
        "id": "InnerCharShape1-9",
        "type": "PIT_SET",
        "description": "\uACB9\uCCD0\uC9C0\uB294 \uBB38\uC790\uB4E4\uC758 \uC18D\uC131 1~9",
        "subType": "CharShape"
      }
    ]
  },
  {
    "id": "CodeTable",
    "description": "\uBB38\uC790\uD45C",
    "sourcePage": 21,
    "items": [
      {
        "id": "Text",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785\uB420 \uC2A4\uD2B8\uB9C1"
      }
    ]
  },
  {
    "id": "ColDef",
    "description": "\uB2E8 \uC815\uC758 \uC18D\uC131",
    "sourcePage": 22,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "\uB2E8 \uC885\uB958 : 0 = \uBCF4\uD1B5 \uB2E4\uB2E8, 1 = \uBC30\uBD84 \uB2E4\uB2E8, 2 = \uD3C9\uD589 \uB2E4\uB2E8"
      },
      {
        "id": "Count",
        "type": "PIT_UI1",
        "description": "\uB2E8 \uAC1C\uC218. 1-255\uAE4C\uC9C0."
      },
      {
        "id": "SameSize",
        "type": "PIT_UI1",
        "description": "\uB2E8\uC758 \uB108\uBE44\uB97C \uAC19\uB3C4\uB85D \uD560\uC9C0 \uC5EC\uBD80 : 0 = \uB2E8 \uB108\uBE44 \uAC01\uC790 \uC9C0\uC815, 1 = \uB2E8 \uB108\uBE44 \uB3D9\uC77C"
      },
      {
        "id": "SameGap",
        "type": "PIT_I4",
        "description": "\uB2E8 \uC0AC\uC774 \uAC04\uACA9(HWPUNIT) SAME_SIZE\uAC00 1\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB41C\uB2E4. \uAC01 \uB2E8\uC758 \uB108\uBE44\uC640 \uAC04\uACA9(HWPUNIT) col*2 = \uB2E8\uC758 \uD3ED, col*2 + 1 = \uB2E8 \uC0AC\uC774 \uAC04\uACA9."
      },
      {
        "id": "WidthGap",
        "type": "PIT_ARRAY",
        "description": "\uC601\uC5ED \uC804\uCCB4\uC758 \uD3ED\uC744 Column ratio base (=32768)\uB85C \uBCF4\uC558\uC744 \uB54C\uC758 \uBE44\uC728\uB85C \uD658\uC0B0\uD55C\uB2E4. SameSize\uAC00 0\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB41C\uB2E4. \uBC30\uC5F4\uC758 \uC544\uC774\uD15C\uC758 \uAC1C\uC218\uB294 Count*2-1\uACFC \uAC19\uC544\uC57C \uD55C\uB2E4.",
        "subType": "PIT_UI2"
      },
      {
        "id": "Layout",
        "type": "PIT_UI1",
        "description": "\uB2E8 \uBC29\uD5A5 \uC9C0\uC815 : 0 = \uC67C\uCABD\uBD80\uD130, 1 = \uC624\uB978\uCABD\uBD80\uD130, 2 = \uB9DE\uCABD"
      },
      {
        "id": "LineType",
        "type": "PIT_UI1",
        "description": "\uC120 \uC885\uB958"
      },
      {
        "id": "LineWidth",
        "type": "PIT_UI1",
        "description": "\uC120 \uC885\uB958"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "\uC120 \uC0C9\uAE54. (COLORREF) RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR) \uC801\uC6A9\uBC94\uC704 : 0 = \uC120\uD0DD\uB41C \uB2E4\uB2E8 1 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4 2 = \uD604\uC7AC \uB2E4\uB2E8 3 = \uAC1C\uCCB4 \uC804\uCCB4"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "4 = \uC120\uD0DD\uB41C \uC140 5 = \uD604\uC7AC \uAD6C\uC5ED 6 = \uBB38\uC11C \uC804\uCCB4 7 = \uD604\uC7AC \uC140 8 = \uC0C8 \uCABD\uC73C\uB85C 9 = \uC0C8 \uB2E4\uB2E8\uC73C\uB85C 10 = \uBAA8\uB4E0 \uC140 \uC801\uC6A9\uBC94\uC704\uC758 \uBD84\uB958. \uC544\uB798 \uAC12\uC758 \uC870\uD569\uC774\uB2E4."
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": "0x0001 = \uC120\uD0DD\uB41C \uB2E4\uB2E8 0x0002 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4 0x0004 = \uD604\uC7AC \uB2E4\uB2E8 0x0008 = \uAC1C\uCCB4 \uC804\uCCB4 0x0010 = \uC120\uD0DD\uB41C \uC140 0x0020 = \uD604\uC7AC \uAD6C\uC5ED 0x0040 = \uBB38\uC11C\uC804\uCCB4 0x0080 = \uD604\uC7AC \uC140 0x0100 = \uC0C8 \uCABD\uC73C\uB85C 0x0200 = \uC0C8 \uB2E4\uB2E8\uC73C\uB85C 0x0400 = \uBAA8\uB4E0 \uC140"
      }
    ]
  },
  {
    "id": "ConvertCase",
    "description": "\uB300/\uC18C\uBB38\uC790 \uBCC0\uD658",
    "sourcePage": 24,
    "items": []
  },
  {
    "id": "ConvertFullHalf",
    "description": "\uC804/\uBC18\uAC01 \uBCC0\uD658",
    "sourcePage": 25,
    "items": []
  },
  {
    "id": "ConvertHiraToGata",
    "description": "\uD788\uB77C\uAC00\uB098/\uAC00\uD0C0\uAC00\uB098 \uBCC0\uD658",
    "sourcePage": 26,
    "items": []
  },
  {
    "id": "ConvertJianFan",
    "description": "\uAC04/\uBC88\uCCB4 \uBCC0\uD658",
    "sourcePage": 27,
    "items": []
  },
  {
    "id": "ConvertToHangul",
    "description": "\uD55C\uC790, \uC77C\uC5B4, \uAD6C\uACB0\uC744 \uD55C\uAE00\uB85C",
    "sourcePage": 28,
    "items": []
  },
  {
    "id": "CtrlData",
    "description": "\uCEE8\uD2B8\uB864 \uB370\uC774\uD130",
    "sourcePage": 29,
    "items": [
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790\uAC00 \uC9C0\uC815\uD55C \uCEE8\uD2B8\uB864\uC758 \uC774\uB984."
      }
    ]
  },
  {
    "id": "DeleteCtrls",
    "description": "\uC870\uD310 \uBD80\uD638 \uCEE8\uD2B8\uB864 \uC9C0\uC6B0\uAE30",
    "sourcePage": 30,
    "items": [
      {
        "id": "DeleteCtrlType",
        "type": "PIT_ARRAY",
        "description": "\uC9C0\uC6B8 \uAC1C\uCCB4 \uBAA9\uB85D",
        "subType": "PIT_UI"
      }
    ]
  },
  {
    "id": "DocFilters",
    "description": "Document \uD544\uD130 \uB9AC\uC2A4\uD2B8",
    "sourcePage": 31,
    "items": [
      {
        "id": "DocFilters",
        "type": "PIT_BSTR",
        "description": "'|'\uBB38\uC790\uB85C \uBD84\uB9AC\uB41C \uD544\uD130 \uB9AC\uC2A4\uD2B8 \uC2A4\uD2B8\uB9C1(MFC \uC640 \uAC19\uC740 \uBC29\uBC95)\uC744 \uAC00\uC838\uC634"
      },
      {
        "id": "Format",
        "type": "PIT_ARRAY",
        "description": "\uD544\uD130 \uB9AC\uC2A4\uD2B8\uB97C string array\uD615\uD0DC\uB85C \uAC00\uC838\uC634 (Export\uC2DC\uC5D0\uB9CC) Import \uB9AC\uC2A4\uD2B8\uB97C \uAC00\uC838\uC62C \uAC83\uC778\uC9C0 Export \uB9AC\uC2A4\uD2B8\uB97C \uAC00\uC838\uC62C \uAC83\uC778\uC9C0\uC758",
        "subType": "PIT_BSTR"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "\uAD00\uD55C \uD0C0\uC785. Import = 1 Export = 0 (on input)"
      },
      {
        "id": "Hide",
        "type": "PIT_BSTR",
        "description": "\uD544\uD130 \uBAA9\uB85D\uC5D0\uC11C \uC81C\uAC70\uB97C \uC704\uD55C \uD544\uD130 \uC544\uC774\uD15C Format \uBB38\uC790\uC5F4. \uAD6C\uBD84\uC790 '|' \uC0AC\uC6A9"
      }
    ]
  },
  {
    "id": "DocFindInfo",
    "description": "\uBB38\uC11C \uCC3E\uAE30",
    "sourcePage": 32,
    "items": [
      {
        "id": "ListID",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uB9AC\uC2A4\uD2B8"
      },
      {
        "id": "ParaID",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uBB38\uB2E8"
      },
      {
        "id": "Pos",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uAE00\uC790"
      }
    ]
  },
  {
    "id": "DocumentInfo",
    "description": "\uBB38\uC11C\uC5D0 \uB300\uD55C \uC815\uBCF4",
    "sourcePage": 33,
    "items": [
      {
        "id": "CurPara",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uBB38\uB2E8"
      },
      {
        "id": "CurPos",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uC624\uD504\uC14B"
      },
      {
        "id": "CurParaLen",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uBB38\uB2E8\uC758 \uAE38\uC774 \uD604\uC7AC \uB9AC\uC2A4\uD2B8\uC758 \uC885\uB958"
      },
      {
        "id": "CurCtrl",
        "type": "PIT_UI",
        "description": "0 = \uC77C\uBC18 \uD14D\uC2A4\uD2B8 1 = \uAE00\uC0C1\uC790 \uAE30\uD0C0 = \uCEE8\uD2B8\uB864 ID"
      },
      {
        "id": "CurParaCount",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uB9AC\uC2A4\uD2B8\uC758 \uBB38\uB2E8 \uC218"
      },
      {
        "id": "RootPara",
        "type": "PIT_UI",
        "description": "\uB8E8\uD2B8 \uB9AC\uC2A4\uD2B8\uC758 \uD604\uC7AC \uBB38\uB2E8"
      },
      {
        "id": "RootPos",
        "type": "PIT_UI",
        "description": "\uB8E8\uD2B8 \uB9AC\uC2A4\uD2B8\uC758 \uD604\uC7AC \uC624\uD504\uC14B"
      },
      {
        "id": "RootParaCout",
        "type": "PIT_UI",
        "description": "\uB8E8\uD2B8 \uB9AC\uC2A4\uD2B8\uC758 \uBB38\uB2E8 \uC218 \uC790\uC138\uD55C \uC815\uBCF4\uB97C \uAD6C\uD560\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "DetailInfo",
        "type": "PIT_I1",
        "description": "~ \uB85C \uC2DC\uC791\uD558\uB294 \uC544\uC774\uD15C\uC758 \uC815\uBCF4\uB97C \uC5BB\uAE30 \uC704\uD574\uC11C\uB294 \uC774 \uAC12\uC744 1\uB85C \uB123\uC5B4\uC900 \uD6C4\uC5D0 \uC561\uC158\uC744 \uC2E4\uD589\uD574\uC900\uB2E4.",
        "subType": "Detail"
      },
      {
        "id": "DetailCharCount",
        "type": "PIT_UI",
        "description": "\uBB38\uC11C\uC5D0 \uD3EC\uD568\uB41C \uAE00\uC790 \uC218"
      },
      {
        "id": "DetailWordCount",
        "type": "PIT_UI",
        "description": "\uBB38\uC11C\uC5D0 \uD3EC\uD568\uB41C \uC5B4\uC808 \uC218"
      },
      {
        "id": "DetailLineCount",
        "type": "PIT_UI",
        "description": "\uBB38\uC11C\uC5D0 \uD3EC\uD568\uB41C \uC904 \uC218"
      },
      {
        "id": "DetailPageCount",
        "type": "PIT_UI",
        "description": "\uBB38\uC11C\uC5D0 \uD3EC\uD568\uB41C \uCABD \uC218"
      },
      {
        "id": "DetailCurPage",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uCABD \uBC88\uD638"
      },
      {
        "id": "DetailCurPrtPage",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uCABD \uBC88\uD638 (\uC778\uC1C4 \uBC88\uD638) \uAD6C\uC5ED\uC758 \uC18D\uC131\uAE4C\uC9C0 \uAD6C\uD560\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "SectionInfo",
        "type": "PIT_UI",
        "description": "\uC544\uC774\uD15C\uC740 \uC774 \uAC12\uC744 1\uB85C \uB123\uC5B4\uC900 \uD6C4 \uC561\uC158\uC744 \uC2E4\uD589\uD55C \uD6C4\uC5D0 \uC5BB\uC744 \uC218 \uC788\uB2E4.",
        "subType": "SecDef"
      },
      {
        "id": "SecDef",
        "type": "PIT_SET",
        "description": "\uAD6C\uC5ED\uC758 \uC18D\uC131",
        "subType": "SecDef"
      }
    ]
  },
  {
    "id": "DrawArcType",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uBD80\uCC44\uAF34 \uD14C\uB450\uB9AC \uBAA8\uC591",
    "sourcePage": 34,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "\uD638\uC758 \uC720\uD615 : 0 = \uD638, 1 = \uBD80\uCC44\uAF34, 2 = \uD654\uC0B4\uBAA8\uC591"
      },
      {
        "id": "Interval",
        "type": "PIT_ARRAY",
        "description": "\uD655\uC7A5\uD0C0\uC6D0(\uD638)\uC5D0\uC11C \uD638\uC758 \uC2DC\uC791\uC810\uACFC \uB05D\uC810\uC744 \uB098\uD0C0\uB0B4\uAC8C \uD55C\uB2E4.",
        "subType": "PIT_I"
      }
    ]
  },
  {
    "id": "DrawCoordInfo",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uC88C\uD45C \uC815\uBCF4",
    "sourcePage": 35,
    "items": [
      {
        "id": "Count",
        "type": "PIT_UI4",
        "description": "\uC810\uC758 \uAC1C\uC218"
      },
      {
        "id": "Point",
        "type": "PIT_ARRAY",
        "description": "\uC88C\uD45C Array (X1,Y1), (X2,Y2), ..., (Xn,Yn)",
        "subType": "PIT_I"
      },
      {
        "id": "Line",
        "type": "PIT_ARRAY",
        "description": "\uC120 \uC18D\uC131 Array(\uACE1\uC120\uC5D0\uC11C\uB9CC \uC4F0\uC784)",
        "subType": "PIT_UI1"
      }
    ]
  },
  {
    "id": "DrawCtrlHyperlink",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 Hyperlink \uC815\uBCF4",
    "sourcePage": 36,
    "items": [
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "String \uCC38\uC870",
        "subType": "Command"
      }
    ]
  },
  {
    "id": "DrawEditDetail",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uB2E4\uAC01\uD615 \uD3B8\uC9D1",
    "sourcePage": 37,
    "items": [
      {
        "id": "Command",
        "type": "PIT_UI",
        "description": "",
        "subType": "Reserved"
      },
      {
        "id": "Index",
        "type": "PIT_UI",
        "description": "\uACE0\uCE60 \uC810\uC758 \uC778\uB371\uC2A4"
      },
      {
        "id": "PointX",
        "type": "PIT_I",
        "description": "\uC810\uC758 X \uC88C\uD45C"
      },
      {
        "id": "PointY",
        "type": "PIT_I",
        "description": "\uC810\uC758 Y \uC88C\uD45C"
      }
    ]
  },
  {
    "id": "DrawFillAttr",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uCC44\uC6B0\uAE30 \uC18D\uC131",
    "sourcePage": 38,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "1 = \uBA74\uC0C9 \uB610\uB294 \uBB34\uB2AC\uC0C9 2 = \uADF8\uB9BC 3 = \uADF8\uB7EC\uB370\uC774\uC158 \uBC30\uACBD \uC720\uD615\uC774 \uADF8\uB7EC\uB370\uC774\uC158\uC77C \uB54C \uADF8\uB7EC\uB370\uC774\uC158 \uD615\uD0DC 1 = \uC904\uBB34\uB2AC\uD615"
      },
      {
        "id": "GradationType",
        "type": "PIT_I",
        "description": "2 = \uC6D0\uD615 3 = \uC6D0\uBFD4\uD615 4 = \uC0AC\uAC01\uD615"
      },
      {
        "id": "GradationAngle",
        "type": "PIT_I",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158\uC758 \uAE30\uC6B8\uC784(\uC2DC\uC791\uAC01)"
      },
      {
        "id": "GradationCenterX",
        "type": "PIT_I",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158\uC758 \uAC00\uB85C\uC911\uC2EC(\uC911\uC2EC X \uC88C\uD45C)"
      },
      {
        "id": "GradationCenterY",
        "type": "PIT_I",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158\uC758 \uAC00\uB85C\uC911\uC2EC(\uC911\uC2EC Y \uC88C\uD45C)"
      },
      {
        "id": "GradationStep",
        "type": "PIT_I",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158 \uBC88\uC9D0 \uC815\uB3C4 (0..100)"
      },
      {
        "id": "GradationColorNum",
        "type": "PIT_I",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158\uC758 \uC0C9 \uC218"
      },
      {
        "id": "GradationColor",
        "type": "PIT_ARRAY",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158\uC758 \uC0C9\uAE54 (\uC2DC\uC791\uC0C9, \uC911\uAC04\uC0C91,..\uC911\uAC04\uC0C9 n-2, \uB05D\uC0C9) 2<= n <=10",
        "subType": "PIT_I"
      },
      {
        "id": "GradationIndexPos",
        "type": "PIT_ARRAY",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158 \uB2E4\uC74C \uC0C9\uAE54\uACFC\uC758 \uAC70\uB9AC(\uC5BC\uB9C8\uB098 \uBC88\uC9C0\uACE0 \uB098\uC11C \uB2E4\uC74C\uC0C9\uAE54\uB85C \uAC00 \uB294\uAC00)",
        "subType": "PIT_I"
      },
      {
        "id": "GradationStepCenter",
        "type": "PIT_UI1",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158 \uBC88\uC9D0 \uC815\uB3C4\uC758 \uC911\uC2EC (0..100)"
      },
      {
        "id": "GradationAlpha",
        "type": "PIT_UI1",
        "description": "\uADF8\uB7EC\uB370\uC774\uC158 \uD22C\uBA85\uB3C4"
      },
      {
        "id": "WinBrushFaceColor",
        "type": "PIT_UI",
        "description": "\uBA74 \uC0C9 (RGB 0x00BBGGRR)"
      },
      {
        "id": "WinBrushHatchColor",
        "type": "PIT_UI",
        "description": "\uBB34\uB2AC \uC0C9 (RGB 0x00BBGGRR) \uBB34\uB2AC \uC2A4\uD0C0\uC77C 0 = 4 ="
      },
      {
        "id": "WinBrushFaceStyle",
        "type": "PIT_I1",
        "description": "1 = 5 = 2 = 6 = 3 ="
      },
      {
        "id": "WinBrushAlpha",
        "type": "PIT_UI",
        "description": "\uBA74/\uBB34\uB2AC \uC0C9 \uD22C\uBA85\uB3C4"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uC758 \uBC30\uACBD\uC744 \uADF8\uB9BC\uC73C\uB85C \uC120\uD0DD\uD588\uC744 \uACBD\uC6B0. \uB610\uB294 \uADF8\uB9BC\uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC758 \uADF8\uB9BC\uD30C\uC77C \uACBD\uB85C",
        "subType": "ShapeObject"
      },
      {
        "id": "Embedded",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC774 \uBB38\uC11C\uC5D0 \uC9C1\uC811 \uC0BD\uC785(TRUE) / \uD30C\uC77C\uB85C \uC5F0\uACB0(FALSE) \uADF8\uB9BC \uD6A8\uACFC"
      },
      {
        "id": "PicEffect",
        "type": "PIT_UI1",
        "description": "0 = \uC2E4\uC81C \uC774\uBBF8\uC9C0 \uADF8\uB300\uB85C 1 = \uADF8\uB808\uC774\uC2A4\uCF00\uC77C 2 = \uD751\uBC31 \uD6A8\uACFC"
      },
      {
        "id": "Brightness",
        "type": "PIT_I1",
        "description": "\uBA85\uB3C4 (-100 ~ 100)"
      },
      {
        "id": "Contrast",
        "type": "PIT_I1",
        "description": "\uBC1D\uAE30 (-100 ~ 100)"
      },
      {
        "id": "Reverse",
        "type": "PIT_UI1",
        "description": "\uBC18\uC804 \uC720\uBB34 ShapeObject\uC758 \uBC30\uACBD\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uBC30\uACBD\uC744 \uCC44\uC6B0\uB294 \uBC29\uC2DD\uC744 \uACB0\uC815\uD55C\uB2E4. (\uADF8\uB9BC\uAC1C\uCCB4\uC5D0\uB294 \uD574\uB2F9\uC0AC\uD56D \uC5C6\uC74C) 0 = \uBC14\uB451\uD310\uC2DD\uC73C\uB85C 1 = \uAC00\uB85C/\uC704\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 2 = \uAC00\uB85C/\uC544\uB798\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 3 = \uC138\uB85C/\uC67C\uCABD\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 4 = \uC138\uB85C/\uC624\uB978\uCABD\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 5 = \uD06C\uAE30\uC5D0 \uB9DE\uCD94\uC5B4"
      },
      {
        "id": "DrawFillImageType",
        "type": "PIT_I",
        "description": "6 = \uAC00\uC6B4\uB370\uB85C 7 = \uAC00\uC6B4\uB370 \uC704\uB85C 8 = \uAC00\uC6B4\uB370 \uC544\uB798\uB85C 9 = \uC67C\uCABD \uAC00\uC6B4\uB370\uB85C 10 = \uC67C\uCABD \uC704\uB85C 11 = \uC67C\uCABD \uC544\uB798\uB85C 12 = \uC624\uB978\uCABD \uAC00\uC6B4\uB370\uB85C 13 = \uC624\uB978\uCABD \uC704\uB85C 14 = \uC624\uB978\uCABD \uC544\uB798\uB85C"
      },
      {
        "id": "SkipLeft",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC67C\uCABD \uC790\uB974\uAE30"
      },
      {
        "id": "SkipRight",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC624\uB978\uCABD \uC790\uB974\uAE30"
      },
      {
        "id": "SkipTop",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC704 \uC790\uB974\uAE30"
      },
      {
        "id": "SkipBottom",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC544\uB798 \uC790\uB974\uAE30"
      },
      {
        "id": "OriginalSizeX",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC6D0\uBCF8 \uD06C\uAE30 X size"
      },
      {
        "id": "OriginalSizeY",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC6D0\uBCF8 \uD06C\uAE30 Y size"
      },
      {
        "id": "InsideMarginLeft",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC67C\uCABD)"
      },
      {
        "id": "InsideMarginRight",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC624\uB978 \uCABD)"
      },
      {
        "id": "InsideMarginTop",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC704)"
      },
      {
        "id": "InsideMarginBottom",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC544\uB798)"
      },
      {
        "id": "WindowsBrush",
        "type": "PIT_UI1",
        "description": "\uD604\uC7AC \uC120\uD0DD\uB41C brush\uC758 type\uC774 \uBA74/\uBB34\uB2AC \uBE0C\uB7EC\uC2DC\uC778\uAC00\uB97C \uB098\uD0C0\uB0C4"
      },
      {
        "id": "GradationBrush",
        "type": "PIT_UI1",
        "description": "\uD604\uC7AC \uC120\uD0DD\uB41C brush\uC758 type\uC774 \uADF8\uB7EC\uB370\uC774\uC158 \uBE0C\uB7EC\uC2DC\uC778\uAC00\uB97C \uB098\uD0C0\uB0C4"
      },
      {
        "id": "ImageBrush",
        "type": "PIT_UI1",
        "description": "\uD604\uC7AC \uC120\uD0DD\uB41C brush\uC758 type\uC774 \uADF8\uB9BC \uBE0C\uB7EC\uC2DC\uC778\uAC00\uB97C \uB098\uD0C0\uB0C4"
      },
      {
        "id": "ImageCreateOnDrag",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4 \uC0DD\uC131 \uC2DC \uB9C8\uC6B0\uC2A4\uB85C \uB04C\uC5B4 \uC0DD\uC131\uD560\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "ImageAlpha",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4/\uBC30\uACBD \uD22C\uBA85\uB3C4"
      },
      {
        "id": "FileNameStr",
        "type": "PIT_BSTR",
        "description": "\uBE0C\uB7EC\uC26C \uC124\uC815\uC744 \uC704\uD55C itemid"
      }
    ]
  },
  {
    "id": "DrawImageAttr",
    "description": "\uADF8\uB9BC \uAC1C\uCCB4 \uC18D\uC131",
    "sourcePage": 41,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uC758 \uBC30\uACBD\uC744 \uADF8\uB9BC\uC73C\uB85C \uC120\uD0DD\uD588\uC744 \uACBD\uC6B0 \uB610\uB294 \uADF8\uB9BC\uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC758 \uADF8\uB9BC\uD30C\uC77C \uACBD\uB85C",
        "subType": "ShapeObject"
      },
      {
        "id": "Embedded",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC774 \uBB38\uC11C\uC5D0 \uC9C1\uC811 \uC0BD\uC785(TRUE) / \uD30C\uC77C\uB85C \uC5F0\uACB0(FALSE) \uADF8\uB9BC \uD6A8\uACFC"
      },
      {
        "id": "PicEffect",
        "type": "PIT_UI1",
        "description": "0 = \uC2E4\uC81C \uC774\uBBF8\uC9C0 \uADF8\uB300\uB85C 1 = \uADF8\uB808\uC774\uC2A4\uCF00\uC77C 2 = \uD751\uBC31 \uD6A8\uACFC"
      },
      {
        "id": "Brightness",
        "type": "PIT_I1",
        "description": "\uBA85\uB3C4 (-100 ~ 100)"
      },
      {
        "id": "Contrast",
        "type": "PIT_I1",
        "description": "\uBC1D\uAE30 (-100 ~ 100)"
      },
      {
        "id": "Reverse",
        "type": "PIT_UI1",
        "description": "\uBC18\uC804 \uC720\uBB34 ShapeObject\uC758 \uBC30\uACBD\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uBC30\uACBD\uC744 \uCC44\uC6B0\uB294 \uBC29\uC2DD\uC744 \uACB0\uC815\uD55C\uB2E4. (\uADF8\uB9BC\uAC1C\uCCB4\uC5D0\uB294 \uD574\uB2F9\uC0AC\uD56D \uC5C6\uC74C) 0 = \uBC14\uB451\uD310\uC2DD\uC73C\uB85C 1 = \uAC00\uB85C/\uC704\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 2 = \uAC00\uB85C/\uC544\uB798\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 3 = \uC138\uB85C/\uC67C\uCABD\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 4 = \uC138\uB85C/\uC624\uB978\uCABD\uB9CC \uBC14\uB451\uD310\uC2DD\uC73C\uB85C \uBC30\uC5F4 5 = \uD06C\uAE30\uC5D0 \uB9DE\uCD94\uC5B4"
      },
      {
        "id": "DrawFillImageType",
        "type": "PIT_I",
        "description": "6 = \uAC00\uC6B4\uB370\uB85C 7 = \uAC00\uC6B4\uB370 \uC704\uB85C 8 = \uAC00\uC6B4\uB370 \uC544\uB798\uB85C 9 = \uC67C\uCABD \uAC00\uC6B4\uB370\uB85C 10 = \uC67C\uCABD \uC704\uB85C 11 = \uC67C\uCABD \uC544\uB798\uB85C 12 = \uC624\uB978\uCABD \uAC00\uC6B4\uB370\uB85C 13 = \uC624\uB978\uCABD \uC704\uB85C 14 = \uC624\uB978\uCABD \uC544\uB798\uB85C"
      },
      {
        "id": "SkipLeft",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC67C\uCABD \uC790\uB974\uAE30"
      },
      {
        "id": "SkipRight",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC624\uB978\uCABD \uC790\uB974\uAE30"
      },
      {
        "id": "SkipTop",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC704 \uC790\uB974\uAE30"
      },
      {
        "id": "SkipBottom",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC544\uB798 \uC790\uB974\uAE30"
      },
      {
        "id": "OriginalSizeX",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC6D0\uBCF8 \uD06C\uAE30 X size"
      },
      {
        "id": "OriginalSizeY",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC6D0\uBCF8 \uD06C\uAE30 Y size"
      },
      {
        "id": "InsideMarginLeft",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC67C\uCABD)"
      },
      {
        "id": "InsideMarginRight",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC624\uB978 \uCABD)"
      },
      {
        "id": "InsideMarginTop",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC704)"
      },
      {
        "id": "InsideMarginBotto",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8 \uC788\uB294 \uC544\uC774\uD15C, \uC774\uBBF8\uC9C0 \uC548\uCABD \uC5EC\uBC31. (\uC544\uB798) m"
      },
      {
        "id": "WindowsBrush",
        "type": "PIT_UI1",
        "description": "\uD604\uC7AC \uC120\uD0DD\uB41C brush\uC758 type\uC774 \uBA74/\uBB34\uB2AC \uBE0C\uB7EC\uC2DC\uC778\uAC00\uB97C \uB098\uD0C0\uB0C4"
      },
      {
        "id": "GradationBrush",
        "type": "PIT_UI1",
        "description": "\uD604\uC7AC \uC120\uD0DD\uB41C brush\uC758 type\uC774 \uADF8\uB7EC\uB370\uC774\uC158 \uBE0C\uB7EC\uC2DC\uC778\uAC00\uB97C \uB098\uD0C0\uB0C4"
      },
      {
        "id": "ImageBrush",
        "type": "PIT_UI1",
        "description": "\uD604\uC7AC \uC120\uD0DD\uB41C brush\uC758 type\uC774 \uADF8\uB9BC \uBE0C\uB7EC\uC2DC\uC778\uAC00\uB97C \uB098\uD0C0\uB0C4"
      },
      {
        "id": "ImageCreateOnDrag",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4 \uC0DD\uC131 \uC2DC \uB9C8\uC6B0\uC2A4\uB85C \uB04C\uC5B4 \uC0DD\uC131\uD560\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "ImageCreateTreatA",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uB123\uC744\uB54C \uAE00\uC790\uCC98\uB7FC \uCDE8\uAE09 \uC5EC\uBD80 sChar"
      },
      {
        "id": "ImageAdjustPrevOb",
        "type": "PIT_UI1",
        "description": "\uC55E \uAC1C\uCCB4 \uC18D\uC131 \uC801\uC6A9 ject"
      },
      {
        "id": "ImageAdjustTableC",
        "type": "PIT_UI1",
        "description": "\uD14C\uC774\uBE14 \uC140 \uD06C\uAE30\uC5D0 \uB9DE\uCDB0 \uC774\uBBF8\uC9C0 \uC870\uC815 ell"
      },
      {
        "id": "ImageInsertFileNa",
        "type": "PIT_UI1",
        "description": "\uCEA1\uC158\uC5D0 \uD30C\uC77C\uC774\uB984 \uB123\uAE30 meInCaption"
      },
      {
        "id": "ImageAutoRotate",
        "type": "PIT_UI1",
        "description": "\uC774\uBBF8\uC9C0 \uC790\uB3D9 \uD68C\uC804"
      },
      {
        "id": "FileNameStr",
        "type": "PIT_BSTR",
        "description": "\uBE0C\uB7EC\uC26C \uC124\uC815\uC744 \uC704\uD55C itemid"
      },
      {
        "id": "ImageAlphaEffect",
        "type": "PIT_I1",
        "description": "\uC774\uBBF8\uC9C0 \uD22C\uBA85\uB3C4"
      },
      {
        "id": "ImageUseTextInPic",
        "type": "PIT_UI1",
        "description": "\uC774\uBBF8\uC9C0\uC5D0\uC11C \uD14D\uC2A4\uD2B8 \uCD94\uCD9C, (\uD55C/\uAE00 2024\uBD80\uD130 \uC9C0\uC6D0) ture"
      }
    ]
  },
  {
    "id": "DrawImageScissoring",
    "description": "\uADF8\uB9BC \uAC1C\uCCB4\uC758 \uC790\uB974\uAE30 \uC815\uBCF4",
    "sourcePage": 43,
    "items": [
      {
        "id": "Xoffset",
        "type": "PIT_I",
        "description": "\uC790\uB97C x\uCD95 \uC624\uD504\uC14B"
      },
      {
        "id": "Yoffset",
        "type": "PIT_I",
        "description": "\uC790\uB97C y\uCD95 \uC624\uD504\uC14B"
      },
      {
        "id": "HandleIndex",
        "type": "PIT_UI",
        "description": "",
        "subType": "Reserved"
      }
    ]
  },
  {
    "id": "DrawLayOut",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 Layout",
    "sourcePage": 44,
    "items": [
      {
        "id": "CreateNumPt",
        "type": "PIT_UI",
        "description": "\uC0DD\uC131\uD560 \uC810\uC758 \uC218"
      },
      {
        "id": "CreatePt",
        "type": "PIT_ARRAY",
        "description": "\uC0DD\uC131\uD560 \uC810\uC758 \uC704\uCE58\uC815\uBCF4 POINT(x,y)\uB85C \uACC4\uC0B0\uB418\uBBC0\uB85C CreateNumPt*2\uC758 \uAC1C\uC218\uB85C \uAD6C\uC131 \uB428.",
        "subType": "PIT_I"
      },
      {
        "id": "CurveSegmentInfo",
        "type": "PIT_ARRAY",
        "description": "\uACE1\uC120 \uC138\uADF8\uBA3C\uD2B8 \uC815\uBCF4",
        "subType": "PIT_UI1"
      }
    ]
  },
  {
    "id": "DrawLineAttr",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uC120 \uC18D\uC131",
    "sourcePage": 45,
    "items": [
      {
        "id": "Alpha",
        "type": "PIT_UI1",
        "description": "\uD22C\uBA85\uB3C4"
      }
    ]
  },
  {
    "id": "DrawRectType",
    "description": "\uC0AC\uAC01\uD615 \uBAA8\uC11C\uB9AC \uBAA8\uC591",
    "sourcePage": 46,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "\uBAA8\uC11C\uB9AC\uC758 \uACE1\uB960 \uC9C0\uC815 (0 ~ 50\uAE4C\uC9C0)"
      }
    ]
  },
  {
    "id": "DrawResize",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 Resizing \uC815\uBCF4",
    "sourcePage": 47,
    "items": [
      {
        "id": "Xoffset",
        "type": "PIT_I",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 X\uC88C\uD45C \uC704\uCE58"
      },
      {
        "id": "Yoffset",
        "type": "PIT_I",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 Y\uC88C\uD45C \uC704\uCE58"
      },
      {
        "id": "HandleIndex",
        "type": "PIT_UI",
        "description": "",
        "subType": "Reserved"
      },
      {
        "id": "Mode",
        "type": "PIT_UI",
        "description": "",
        "subType": "Reserved"
      }
    ]
  },
  {
    "id": "DrawRotate",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uD68C\uC804 \uC815\uBCF4",
    "sourcePage": 48,
    "items": [
      {
        "id": "Command",
        "type": "PIT_UI",
        "description": "1 = \uD68C\uC804 \uC601\uC5ED\uC758 \uC911\uC2EC\uC744 \uAE30\uC900\uC73C\uB85C \uD68C\uC804 2 = \uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uC911\uC2EC\uC744 \uAE30\uC900\uC73C\uB85C \uD68C\uC804 3 = \uD68C\uC804 \uC601\uC5ED\uC758 \uC911\uC2EC\uC744 \uAE30\uC900\uC73C\uB85C \uD68C\uC804 & \uC911\uC2EC\uC774 \uBCC0\uACBD\uB428"
      },
      {
        "id": "CenterX",
        "type": "PIT_I",
        "description": "\uD68C\uC804 \uC911\uC2EC\uC758 X \uC88C\uD45C"
      },
      {
        "id": "CenterY",
        "type": "PIT_I",
        "description": "\uD68C\uC804 \uC911\uC2EC\uC758 Y \uC88C\uD45C"
      },
      {
        "id": "ObjectCenterX",
        "type": "PIT_I",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uC911\uC2EC X \uC88C\uD45C"
      },
      {
        "id": "ObjectCenterY",
        "type": "PIT_I",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uC911\uC2EC Y \uC88C\uD45C"
      },
      {
        "id": "Angle",
        "type": "PIT_I",
        "description": "\uD68C\uC804 \uAC01 \uADF8\uB9BC \uD68C\uC804 \uC5EC\uBD80"
      },
      {
        "id": "RotateImage",
        "type": "PIT_UI1",
        "description": "0 = \uD68C\uC804 \uC548 \uD568 1 = \uD68C\uC804\uD568"
      }
    ]
  },
  {
    "id": "DrawScAction",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 90\uB3C4 \uD68C\uC804 \uBC0F \uC88C\uC6B0/\uC0C1\uD558 \uB4A4\uC9D1\uAE30",
    "sourcePage": 49,
    "items": [
      {
        "id": "RotateCenterX",
        "type": "PIT_I4",
        "description": "\uD68C\uC804 \uC911\uC2EC X \uC88C\uD45C"
      },
      {
        "id": "RotateCenterY",
        "type": "PIT_I4",
        "description": "\uD68C\uC804 \uC911\uC2EC Y \uC88C\uD45C"
      },
      {
        "id": "RotateAngel",
        "type": "PIT_I",
        "description": "\uD68C\uC804\uAC01"
      },
      {
        "id": "HorzFlip",
        "type": "PIT_UI",
        "description": "\uC218\uD3C9 flip (\uC88C\uC6B0 \uB4A4\uC9D1\uAE30)"
      },
      {
        "id": "VertFlip",
        "type": "PIT_UI",
        "description": "\uC218\uC9C1 flip (\uC0C1\uD558 \uB4A4\uC9D1\uAE30)"
      }
    ]
  },
  {
    "id": "DrawShadow",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uADF8\uB9BC\uC790 \uC815\uBCF4",
    "sourcePage": 50,
    "items": [
      {
        "id": "ShadowType",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC\uC790 \uC885\uB958. 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "\uADF8\uB9BC\uC790 \uC0C9 (COLORREF)"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC\uC790 X\uCD95 \uAC04\uACA9 (-48% ~ 48%)"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I4",
        "description": "\uADF8\uB9BC\uC790 Y\uCD95 \uAC04\uACA9 (-48% ~ 48%)"
      },
      {
        "id": "ShadowAlpha",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC790 \uD22C\uBA85\uB3C4"
      }
    ]
  },
  {
    "id": "DrawShear",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uAE30\uC6B8\uC774\uAE30 \uC815\uBCF4",
    "sourcePage": 51,
    "items": [
      {
        "id": "XFactor",
        "type": "PIT_I",
        "description": "\uCD95 \uAE30\uC6B8\uC774\uAE30 \uAC01\uB3C4",
        "subType": "X"
      },
      {
        "id": "YFactor",
        "type": "PIT_I",
        "description": "\uCD95 \uAE30\uC6B8\uC774\uAE30 \uAC01\uB3C4",
        "subType": "Y"
      }
    ]
  },
  {
    "id": "DrawTextart",
    "description": "\uAE00\uB9F5\uC2DC \uC18D\uC131",
    "sourcePage": 52,
    "items": [
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "\uAE00\uB9F5\uC2DC\uC5D0 \uB123\uC744 \uBB38\uC790\uC5F4 \uB0B4\uC6A9"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34"
      },
      {
        "id": "FontStyle",
        "type": "PIT_BSTR",
        "description": "\uC18D\uC131. \uAC12\uC740 \uD56D\uC0C1 0(Regular)\uC774\uB2E4."
      },
      {
        "id": "FontType",
        "type": "PIT_UI1",
        "description": "\uD3F0\uD2B8 \uC885\uB958 : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "LineSpacing",
        "type": "PIT_I4",
        "description": "\uC904 \uAC04\uACA9 (50 ~ 500)"
      },
      {
        "id": "CharSpacing",
        "type": "PIT_I4",
        "description": "\uAE00\uC790\uAC04\uACA9 (50 ~ 500)"
      },
      {
        "id": "AlignType",
        "type": "PIT_UI1",
        "description": "\uC815\uB82C \uBC29\uC2DD"
      },
      {
        "id": "Shape",
        "type": "PIT_UI1",
        "description": "\uD615\uD0DC (0 ~ 54)"
      },
      {
        "id": "ShadowType",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC790 \uC885\uB958. 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I1",
        "description": "\uADF8\uB9BC\uC790 X\uCD95 \uAC04\uACA9 (-48% ~ 48%)"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I1",
        "description": "\uADF8\uB9BC\uC790 Y\uCD95 \uAC04\uACA9 (-48% ~ 48%)"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "\uADF8\uB9BC\uC790 \uC0C9 RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "NumberOfLines",
        "type": "PIT_UI1",
        "description": "\uAE00\uB9F5\uC2DC\uC5D0 \uB123\uC744 \uBB38\uC790\uC5F4 \uB0B4\uC6A9\uC758 \uC904 \uC218"
      }
    ]
  },
  {
    "id": "DropCap",
    "description": "\uBB38\uB2E8 \uCCAB \uAE00\uC790 \uC7A5\uC2DD",
    "sourcePage": 53,
    "items": [
      {
        "id": "Style",
        "type": "PIT_UI",
        "description": "1=2\uC904\uCC28\uC9C0 2=3\uC904\uCC28\uC9C0 4=\uC5EC\uBC31"
      },
      {
        "id": "FaceName",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34"
      },
      {
        "id": "LineStyle",
        "type": "PIT_I",
        "description": "\uC120 \uC2A4\uD0C0\uC77C"
      },
      {
        "id": "LineWeight",
        "type": "PIT_UI",
        "description": "\uC120 \uAD75\uAE30"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "\uC120 \uC0C9 RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "FaceColor",
        "type": "PIT_UI4",
        "description": "\uAE00\uAF34 \uC0C9 RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "Spacing",
        "type": "PIT_I",
        "description": "\uBCF8\uBB38\uACFC\uC758 \uAC04\uACA9"
      }
    ]
  },
  {
    "id": "Dutmal",
    "description": "\uB367\uB9D0",
    "sourcePage": 54,
    "items": [
      {
        "id": "ResultText",
        "type": "PIT_BSTR",
        "description": "\uBCF8\uB9D0"
      },
      {
        "id": "SubText",
        "type": "PIT_BSTR",
        "description": "\uB367\uB9D0"
      },
      {
        "id": "PosType",
        "type": "PIT_UI1",
        "description": "\uB367\uB9D0 \uC704\uCE58. 0 = \uC704, 1 = \uC544\uB798."
      },
      {
        "id": "FsizeRatio",
        "type": "PIT_UI1",
        "description": "\uB367\uB9D0 \uD06C\uAE30 Percent. 0=\uC774\uBA74 \uAE30\uBCF8 50%."
      },
      {
        "id": "Option",
        "type": "PIT_UI1",
        "description": "\uC635\uC158"
      },
      {
        "id": "StyleNo",
        "type": "PIT_UI1",
        "description": "\uC2A4\uD0C0\uC77C\uBC88\uD638 (\uC635\uC158\uC774 \uCF1C\uC788\uC744 \uB54C) \uB367\uB9D0\uC758 \uC88C\uC6B0 Align. 0 = \uC591\uCABD \uC815\uB82C 1 = \uC67C\uCABD \uC815\uB82C"
      },
      {
        "id": "Align",
        "type": "PIT_UI1",
        "description": "2 = \uC624\uB978\uCABD \uC815\uB82C 3 = \uAC00\uC6B4\uB370 \uC815\uB82C 4 = \uBC30\uBD84 \uC815\uB82C 5 = \uB098\uB214 \uC815\uB82C \uAE30\uBCF8\uC740 \uAC00\uC6B4\uB370 \uC815\uB82C\uC774\uBA70 \uC635\uC158\uC774 \uCF1C\uC788\uC744 \uB54C\uB9CC \uC720\uD6A8"
      },
      {
        "id": "Delete",
        "type": "PIT_UI1",
        "description": "\uB367\uB9D0 \uC9C0\uC6C0"
      },
      {
        "id": "Modify",
        "type": "PIT_UI1",
        "description": "\uB367\uB9D0 \uD3B8\uC9D1 \uBAA8\uB4DC \uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "EngineProperties",
    "description": "\uD658\uACBD \uC124\uC815 \uC635\uC158",
    "sourcePage": 55,
    "items": [
      {
        "id": "DoAnyCursorEdit",
        "type": "PIT_UI1",
        "description": "\uB9C8\uC6B0\uC2A4\uB85C \uB450 \uBC88 \uB204\uB974\uAE30 \uD55C\uACF3\uC5D0 \uC785\uB825\uAC00\uB2A5"
      },
      {
        "id": "DoOutLineStyle",
        "type": "PIT_UI1",
        "description": "\uAC1C\uC694 \uBC88\uD638 \uC0BD\uC785 \uBB38\uB2E8\uC5D0 \uAC1C\uC694 \uC2A4\uD0C0\uC77C \uC790\uB3D9 \uC801\uC6A9"
      },
      {
        "id": "InsertLock",
        "type": "PIT_UI1",
        "description": "\uC0BD\uC785 \uC7A0\uAE08"
      },
      {
        "id": "TabMoveCell",
        "type": "PIT_UI1",
        "description": "\uD45C \uC548\uC5D0\uC11C <Tab>\uC73C\uB85C \uC140 \uC774\uB3D9"
      },
      {
        "id": "FaxDriver",
        "type": "PIT_BSTR",
        "description": "\uD329\uC2A4 \uB4DC\uB77C\uC774\uBC84"
      },
      {
        "id": "PDFDriver",
        "type": "PIT_BSTR",
        "description": "\uB4DC\uB77C\uC774\uBC84",
        "subType": "PDF"
      },
      {
        "id": "EnableAutoSpell",
        "type": "PIT_UI1",
        "description": "\uB9DE\uCDA4\uBC95 \uB3C4\uC6B0\uBBF8 \uC791\uB3D9"
      },
      {
        "id": "OpenNewWindow",
        "type": "PIT_UI1",
        "description": "\uC0C8\uCC3D\uC73C\uB85C \uBD88\uB7EC\uC624\uAE30"
      },
      {
        "id": "CtrlMaskAs2002",
        "type": "PIT_UI1",
        "description": "\uD55C\uAE00 2002 \uBC29\uC2DD\uC73C\uB85C \uC870\uD310 \uBD80\uD638 \uD45C\uC2DC\uD558\uAE30"
      },
      {
        "id": "ShowGuildLines",
        "type": "PIT_UI1",
        "description": "\uAC1C\uCCB4 \uD22C\uBA85\uC120 \uBCF4\uC774\uAE30"
      },
      {
        "id": "ImageAutoCheck",
        "type": "PIT_UI1",
        "description": "\uC774\uBBF8\uC9C0 \uD30C\uC77C\uC758 \uACBD\uB85C \uAC80\uC0AC \uB2E4\uC774\uC5BC\uB85C\uADF8 \uB744\uC6B0\uAE30 \uC720\uBB34."
      },
      {
        "id": "OptimizeWebHwpCop",
        "type": "PIT_UI1",
        "description": "\uC6F9\uD55C\uAE00\uB85C \uBCF5\uC0AC \uCD5C\uC801\uD654 \uB044\uACE0/\uCF1C\uAE30 y"
      }
    ]
  },
  {
    "id": "EqEdit",
    "description": "\uC218\uC2DD",
    "sourcePage": 56,
    "items": [
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "\uC218\uC2DD \uC2A4\uD06C\uB9BD\uD2B8."
      },
      {
        "id": "BaseUnit",
        "type": "PIT_I4",
        "description": "\uC218\uC2DD\uC774 \uC0BD\uC785\uB418\uB294 \uC55E\uC758 \uAE00\uC790\uC640 \uAC19\uC740 \uB192\uC774 (\uAE30\uBCF8 \uAC12\uC740 POINT 10 )"
      },
      {
        "id": "Color",
        "type": "PIT_I4",
        "description": "\uC218\uC2DD\uC774 \uC0BD\uC785\uB418\uB294 \uAE00\uC790 \uC0C9\uACFC \uAC19\uC740 \uC0C9 (\uAE30\uBCF8 \uAC12\uC740 WINDOWTEXT \uC0C9) RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)"
      },
      {
        "id": "LineMode",
        "type": "PIT_I4",
        "description": "\uC904 \uB2E8\uC704\uB97C \uC0AC\uC6A9\uD560\uC9C0\uC758 \uC5EC\uBD80"
      },
      {
        "id": "Version",
        "type": "PIT_BSTR",
        "description": "\uC218\uC2DD \uC2A4\uD06C\uB9BD\uD2B8 \uBC84\uC804 \uC815\uBCF4 \uC218\uC2DD \uC18D\uC131 \uC801\uC6A9 \uBC94\uC704"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI4",
        "description": "0 : \uC120\uD0DD\uB41C \uC218\uC2DD \uAC1C\uCCB4 1 : \uBB38\uC11C \uC804\uCCB4"
      },
      {
        "id": "VisualString",
        "type": "PIT_BSTR",
        "description": "\uC218\uC2DD \uBE44\uC8FC\uC5BC \uC2A4\uD06C\uB9BD\uD2B8"
      },
      {
        "id": "EqFontName",
        "type": "PIT_BSTR",
        "description": "\uD3F0\uD2B8\uBA85"
      }
    ]
  },
  {
    "id": "ExchangeFootnoteEndNote",
    "description": "\uAC01\uC8FC/\uBBF8\uC8FC \uBCC0\uD658",
    "sourcePage": 57,
    "items": [
      {
        "id": "Flag",
        "type": "PIT_UI1",
        "description": "0 : \uBAA8\uB4E0 \uAC01\uC8FC\uB97C \uBBF8\uC8FC\uB85C \uBC14\uAFB8\uAE30 1 : \uBAA8\uB4E0 \uBBF8\uC8FC\uB97C \uAC01\uC8FC\uB85C \uBC14\uAFB8\uAE30 2 : \uAC01\uC8FC\uC640 \uBBF8\uC8FC\uB97C \uC11C\uB85C \uBC14\uAFB8\uAE30"
      }
    ]
  },
  {
    "id": "FieldCtrl",
    "description": "\uD544\uB4DC \uCEE8\uD2B8\uB864\uC758 \uACF5\uD1B5 \uB370\uC774\uD130",
    "sourcePage": 58,
    "items": [
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC\uC758 \uBA85\uB839\uBB38"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "\uC77C\uBD80\uBD84 readonly mode\uC5D0\uC11C \uD3B8\uC9D1 \uAC00\uB2A5\uD55C \uD544\uB4DC\uC778\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "FieldDirty",
        "type": "PIT_UI1",
        "description": "\uD544\uB4DC\uAC00 \uCD08\uAE30\uD654 \uC0C1\uD0DC\uC778\uC9C0 \uC218\uC815\uB418\uC5B4 \uC788\uB294 \uC0C1\uD0DC\uC778\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "CtrlData",
        "type": "PIT_SET",
        "description": "\uD544\uB4DC \uC774\uB984 \uC800\uC7A5\uC744 \uC704\uD55C \uC601\uC5ED",
        "subType": "CtrlData"
      },
      {
        "id": "User",
        "type": "PIT_BSTR",
        "description": "\uCEE8\uD2B8\uB864 \uB370\uC774\uD130"
      },
      {
        "id": "MemoType",
        "type": "PIT_UI1",
        "description": "\uBA54\uBAA8 \uD0C0\uC785, (\uD55C/\uAE00 2022\uBD80\uD130 \uC9C0\uC6D0)"
      }
    ]
  },
  {
    "id": "FileConvert",
    "description": "\uC5EC\uB7EC \uD30C\uC77C\uC744 \uB3D9\uC2DC\uC5D0 \uD2B9\uC815 \uD3EC\uB9F7\uC73C\uB85C \uBCC0\uD658\uD558\uC5EC \uC800\uC7A5 (\uAD00\uB828 Action/API \uC874\uC7AC\uD558\uC9C0 \uC54A\uC74C)",
    "sourcePage": 59,
    "items": [
      {
        "id": "Format",
        "type": "PIT_BSTR",
        "description": "\uBCC0\uD658 \uD3EC\uB9F7"
      },
      {
        "id": "SrcFileList",
        "type": "PIT_ARRAY",
        "description": "Source \uD30C\uC77C \uB9AC\uC2A4\uD2B8",
        "subType": "PIT_BSTR"
      },
      {
        "id": "DestFileList",
        "type": "PIT_ARRAY",
        "description": "Destination \uD30C\uC77C \uB9AC\uC2A4\uD2B8",
        "subType": "PIT_BSTR"
      }
    ]
  },
  {
    "id": "FileInfo",
    "description": "\uD30C\uC77C \uC815\uBCF4",
    "sourcePage": 60,
    "items": [
      {
        "id": "Format",
        "type": "PIT_BSTR",
        "description": ": \uD55C\uAE00 \uD30C\uC77C UNKNOWN : \uC54C \uC218 \uC5C6\uC74C.",
        "subType": "HWP"
      },
      {
        "id": "VersionStr",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C\uC758 \uBC84\uC804 \uBB38\uC790\uC5F4 ex)5.0.0.3"
      },
      {
        "id": "VersionNum",
        "type": "PIT_UI4",
        "description": "\uD30C\uC77C\uC758 \uBC84\uC804 ex) 0x05000003 \uC554\uD638 \uC5EC\uBD80 (\uD604\uC7AC\uB294 \uD30C\uC77C \uBC84\uC804 3.0.0.0 \uC774\uD6C4 \uBB38\uC11C-\uD55C\uAE0097, \uD55C\uAE00 \uC6CC \uB514\uC548, \uD55C\uAE00 2002-\uC5D0 \uB300\uD574\uC11C\uB9CC \uD310\uB2E8\uD55C\uB2E4.)"
      },
      {
        "id": "Encrypted",
        "type": "PIT_I4",
        "description": "-1 : \uD310\uB2E8 \uD560 \uC218 \uC5C6\uC74C 0 : \uC554\uD638\uAC00 \uAC78\uB824 \uC788\uC9C0 \uC54A\uC74C \uC591\uC218: \uC554\uD638\uAC00 \uAC78\uB824 \uC788\uC74C."
      },
      {
        "id": "Compressed",
        "type": "PIT_I4",
        "description": "\uC555\uCD95 \uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "FileOpen",
    "description": "\uD30C\uC77C \uC624\uD508",
    "sourcePage": 61,
    "items": [
      {
        "id": "SaveFileName",
        "type": "PIT_BSTR",
        "description": "\uC720\uD55C\uB2E4. \uC989 OpenFileName\uACFC SaveFileName\uC740 \uC774\uB984\uB9CC \uB2E4\uB97C \uBFD0 \uB3D9 \uC77C\uD55C \uC544\uC774\uD15C\uC774\uB2E4)"
      },
      {
        "id": "OpenFormat",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uD615\uC2DD. (OpenFileName\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uB3D9\uC77C \uC544\uC774\uD15C \uC9C0\uCE6D) SaveFormat"
      },
      {
        "id": "OpenReadOnly",
        "type": "PIT_UI1",
        "description": "\uC77D\uAE30 \uC804\uC6A9 \uC635\uC158 0x00 = \uC0C8 \uCC3D\uC73C\uB85C \uC5F4\uAE30 0x01 = \uD604\uC7AC \uCC3D\uC758 \uC0C8 \uD0ED\uC5D0 \uC5F4\uAE30"
      },
      {
        "id": "OpenFlag",
        "type": "PIT_UI1",
        "description": "0x02 = \uD604\uC7AC \uCC3D\uC758 \uD604\uC7AC \uD0ED\uC5D0 \uC5F4\uAE30 0x03 = \uC704 \uC138 \uAC12\uC758 mask 0x04 =\uC774\uBBF8 \uC5F4\uB824\uC9C4 \uBB38\uC11C\uC77C \uB54C \uB2E4\uC2DC load\uD560\uC9C0 \uBB4D\uC744 \uAC83\uC778\uC9C0 0x08 = \uCD08\uAE30 \uBAA8\uB4DC\uB97C \uCD5C\uADFC \uC791\uC5C5 \uBB38\uC11C \uC0C1\uD0DC\uB85C 0x10 = \uBB38\uC11C \uB9C8\uB2F9"
      },
      {
        "id": "SaveOverWrite",
        "type": "PIT_UI1",
        "description": "\uB36E\uC5B4 \uC4F0\uAE30"
      },
      {
        "id": "ModifiedFlag",
        "type": "PIT_UI1",
        "description": "\uD50C\uB798\uADF8",
        "subType": "Modify"
      },
      {
        "id": "Argument",
        "type": "PIT_BSTR",
        "description": "",
        "subType": "Argument"
      },
      {
        "id": "SaveCMFDoc30",
        "type": "PIT_UI1",
        "description": "97 \uD638\uD658 \uC800\uC7A5"
      },
      {
        "id": "SaveHwp97",
        "type": "PIT_UI1",
        "description": "97 \uBB38\uC11C\uB85C \uC800\uC7A5"
      },
      {
        "id": "SaveDistribute",
        "type": "PIT_UI1",
        "description": "\uBC30\uD3EC\uC6A9 \uBB38\uC11C\uB85C \uC800\uC7A5"
      },
      {
        "id": "SaveDRMDoc",
        "type": "PIT_UI1",
        "description": "\uBCF4\uC548 \uBB38\uC11C\uB85C \uC800\uC7A5"
      }
    ]
  },
  {
    "id": "FileSaveAs",
    "description": "\uD30C\uC77C \uC800\uC7A5",
    "sourcePage": 62,
    "items": [
      {
        "id": "SaveFileName",
        "type": "PIT_BSTR",
        "description": "\uC720\uD55C\uB2E4. \uC989 OpenFileName\uACFC SaveFileName\uC740 \uC774\uB984\uB9CC \uB2E4\uB97C \uBFD0 \uB3D9 \uC77C\uD55C \uC544\uC774\uD15C\uC774\uB2E4)"
      },
      {
        "id": "OpenFormat",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uD615\uC2DD. (OpenFileName\uACFC \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uB3D9\uC77C \uC544\uC774\uD15C \uC9C0\uCE6D) SaveFormat"
      },
      {
        "id": "OpenReadOnly",
        "type": "PIT_UI1",
        "description": "\uC77D\uAE30 \uC804\uC6A9 \uC635\uC158 0x00 = \uC0C8 \uCC3D\uC73C\uB85C \uC5F4\uAE30 0x01 = \uD604\uC7AC \uCC3D\uC758 \uC0C8 \uD0ED\uC5D0 \uC5F4\uAE30"
      },
      {
        "id": "OpenFlag",
        "type": "PIT_UI1",
        "description": "0x02 = \uD604\uC7AC \uCC3D\uC758 \uD604\uC7AC \uD0ED\uC5D0 \uC5F4\uAE30 0x03 = \uC704 \uC138 \uAC12\uC758 mask 0x04 =\uC774\uBBF8 \uC5F4\uB824\uC9C4 \uBB38\uC11C\uC77C \uB54C \uB2E4\uC2DC load\uD560\uC9C0 \uBB4D\uC744 \uAC83\uC778\uC9C0 0x08 = \uCD08\uAE30 \uBAA8\uB4DC\uB97C \uCD5C\uADFC \uC791\uC5C5 \uBB38\uC11C \uC0C1\uD0DC\uB85C 0x10 = \uBB38\uC11C \uB9C8\uB2F9"
      },
      {
        "id": "SaveOverWrite",
        "type": "PIT_UI1",
        "description": "\uB36E\uC5B4 \uC4F0\uAE30"
      },
      {
        "id": "ModifiedFlag",
        "type": "PIT_UI1",
        "description": "\uD50C\uB798\uADF8",
        "subType": "Modify"
      },
      {
        "id": "Argument",
        "type": "PIT_BSTR",
        "description": "",
        "subType": "Argument"
      },
      {
        "id": "SaveCMFDoc30",
        "type": "PIT_UI1",
        "description": "97 \uD638\uD658 \uC800\uC7A5"
      },
      {
        "id": "SaveHwp97",
        "type": "PIT_UI1",
        "description": "97 \uBB38\uC11C\uB85C \uC800\uC7A5"
      },
      {
        "id": "SaveDistribute",
        "type": "PIT_UI1",
        "description": "\uBC30\uD3EC\uC6A9 \uBB38\uC11C\uB85C \uC800\uC7A5"
      },
      {
        "id": "SaveDRMDoc",
        "type": "PIT_UI1",
        "description": "\uBCF4\uC548 \uBB38\uC11C\uB85C \uC800\uC7A5"
      }
    ]
  },
  {
    "id": "FileSaveBlock",
    "description": "\uBE14\uB85D \uC9C0\uC815\uB41C \uBD80\uBD84\uC744 \uC800\uC7A5",
    "sourcePage": 63,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uC774\uB984"
      },
      {
        "id": "Format",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uD3EC\uB9F7"
      },
      {
        "id": "Argument",
        "type": "PIT_BSTR",
        "description": "",
        "subType": "argument"
      }
    ]
  },
  {
    "id": "FileSendMail",
    "description": "\uBA54\uC77C \uBCF4\uB0B4\uAE30",
    "sourcePage": 64,
    "items": [
      {
        "id": "To",
        "type": "PIT_BSTR",
        "description": "\uBC1B\uB294 \uC0AC\uB78C"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "\uBA54\uC77C \uBCF4\uB0B4\uAE30 \uC720\uD615: 0 = \uBCF8\uBB38, 1 = \uCCA8\uBD80\uD30C\uC77C"
      },
      {
        "id": "Subject",
        "type": "PIT_BSTR",
        "description": "\uC81C\uBAA9"
      },
      {
        "id": "Filepath",
        "type": "PIT_BSRT",
        "description": "\uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC785\uB825\uD55C \uD30C\uC77C (\uC774 \uC544\uC774\uD15C\uC740 Type \uC544\uC774\uD15C\uC774 1(\uCCA8\uBD80\uD30C \uC77C)\uB85C \uC124\uC815\uB418\uC5B4 \uC788\uC744 \uB54C\uB9CC \uC720\uD6A8\uD558\uB2E4)"
      }
    ]
  },
  {
    "id": "FileSetSecurity",
    "description": "\uBC30\uD3EC\uC6A9 \uBB38\uC11C",
    "sourcePage": 65,
    "items": [
      {
        "id": "Password",
        "type": "PIT_BSTR",
        "description": "\uBC30\uD3EC\uC6A9 \uBB38\uC11C \uC554\uD638(7\uC790\uB9AC \uC774\uC0C1 \uAC00\uB2A5) \uD504\uB9B0\uD2B8 \uAC00\uB2A5\uD55C \uBC30\uD3EC\uC6A9 \uBB38\uC11C\uB97C \uB9CC\uB4E4\uC9C0\uC758 \uC5EC\uBD80"
      },
      {
        "id": "NoPrint",
        "type": "PIT_UI1",
        "description": "0 : \uD504\uB9B0\uD2B8 \uAC00\uB2A5 1 : \uD504\uB9B0\uD2B8 \uAC00\uB2A5\uD558\uC9C0 \uC54A\uC74C \uBB38\uC11C \uB0B4\uC6A9 \uBCF5\uC0AC\uAC00 \uAC00\uB2A5\uD55C \uBC30\uD3EC\uC6A9 \uBB38\uC11C\uB97C \uB9CC\uB4E4\uC9C0\uC758 \uC5EC\uBD80"
      },
      {
        "id": "NoCopy",
        "type": "PIT_UI1",
        "description": "0 : \uBCF5\uC0AC \uAC00\uB2A5 1 : \uBCF5\uC0AC \uAC00\uB2A5\uD558\uC9C0 \uC54A\uC74C"
      }
    ]
  },
  {
    "id": "FindReplace",
    "description": "\uCC3E\uAE30/\uCC3E\uC544 \uBC14\uAFB8\uAE30",
    "sourcePage": 66,
    "items": [
      {
        "id": "FindString",
        "type": "PIT_BSTR",
        "description": "\uCC3E\uC744 \uBB38\uC790\uC5F4"
      },
      {
        "id": "ReplaceString",
        "type": "PIT_BSTR",
        "description": "\uBC14\uAFC0 \uBB38\uC790\uC5F4"
      },
      {
        "id": "Direction",
        "type": "PIT_UI1",
        "description": "\uCC3E\uC744 \uBC29\uD5A5 : 0 = \uC544\uB798\uCABD, 1 = \uC704\uCABD, 2 = \uBB38\uC11C \uC804\uCCB4"
      },
      {
        "id": "MatchCase",
        "type": "PIT_UI1",
        "description": "\uB300\uC18C\uBB38\uC790 \uAD6C\uBCC4 (on / off)"
      },
      {
        "id": "AllWordForms",
        "type": "PIT_UI1",
        "description": "\uBB38\uC790\uC5F4 \uACB0\uD569 (on / off)"
      },
      {
        "id": "SeveralWords",
        "type": "PIT_UI1",
        "description": "\uC5EC\uB7EC \uB2E8\uC5B4 \uCC3E\uAE30 (on / off)"
      },
      {
        "id": "UseWildCards",
        "type": "PIT_UI1",
        "description": "\uC544\uBB34\uAC1C \uBB38\uC790 (on / off)"
      },
      {
        "id": "WholeWordOnly",
        "type": "PIT_UI1",
        "description": "\uC628\uC804\uD55C \uB0B1\uB9D0 (on / off)"
      },
      {
        "id": "AutoSpell",
        "type": "PIT_UI1",
        "description": "\uD1A0\uC528 \uC790\uB3D9 \uAD50\uC815 (on / off)"
      },
      {
        "id": "ReplaceMode",
        "type": "PIT_UI1",
        "description": "\uCC3E\uC544 \uBC14\uAFB8\uAE30 \uBAA8\uB4DC (on / off)"
      },
      {
        "id": "IgnoreFindString",
        "type": "PIT_UI1",
        "description": "\uCC3E\uC744 \uBB38\uC790\uC5F4 \uBB34\uC2DC (on / off)"
      },
      {
        "id": "IgnoreReplaceStrin",
        "type": "PIT_UI1",
        "description": "\uBC14\uAFC0 \uBB38\uC790\uC5F4 \uBB34\uC2DC (on / off) g"
      },
      {
        "id": "FindCharShape",
        "type": "PIT_SET",
        "description": "\uCC3E\uC744 \uAE00\uC790 \uBAA8\uC591",
        "subType": "CharShape"
      },
      {
        "id": "FindParaShape",
        "type": "PIT_SET",
        "description": "\uCC3E\uC744 \uBB38\uB2E8 \uBAA8\uC591",
        "subType": "ParaShape"
      },
      {
        "id": "ReplaceCharShape",
        "type": "PIT_SET",
        "description": "\uBC14\uAFC0 \uAE00\uC790 \uBAA8\uC591",
        "subType": "CharShape"
      },
      {
        "id": "ReplaceParaShape",
        "type": "PIT_SET",
        "description": "\uBC14\uAFC0 \uBB38\uB2E8 \uBAA8\uC591",
        "subType": "ParaShape"
      },
      {
        "id": "FindStyle",
        "type": "PIT_BSTR",
        "description": "\uCC3E\uC744 \uC2A4\uD0C0\uC77C"
      },
      {
        "id": "ReplaceStyle",
        "type": "PIT_BSTR",
        "description": "\uBC14\uAFC0 \uC2A4\uD0C0\uC77C"
      },
      {
        "id": "IgnoreMessage",
        "type": "PIT_UI1",
        "description": "\uBA54\uC2DC\uC9C0\uBC15\uC2A4 \uD45C\uC2DC \uC548\uD568. (on / off)"
      },
      {
        "id": "HanjaFromHangul",
        "type": "PIT_UI1",
        "description": "\uD55C\uAE00\uC784\uC73C\uB85C \uD55C\uC790 \uCC28\uAE30"
      },
      {
        "id": "FindJaso",
        "type": "PIT_UI1",
        "description": "\uC790\uC18C\uB85C \uCC3E\uAE30 (on / off)"
      },
      {
        "id": "FindRegExp",
        "type": "PIT_UI1",
        "description": "\uC815\uADDC\uC2DD(\uC870\uAC74\uC2DD)\uC73C\uB85C \uCC3E\uAE30 (on / off) (ver:0x06050107)"
      },
      {
        "id": "FindType",
        "type": "PIT_UI1",
        "description": "\uB2E4\uC2DC \uCC3E\uAE30\uB97C \uD560 \uB54C \uB9C8\uC9C0\uB9C9\uC73C\uB85C \uC2E4\uD589\uD55C [\uCC3E\uAE30 TRUE]\uB97C \uD560 \uAC83\uC778\uAC00 [\uCC3E\uC544\uAC00\uAE30 FALSE]\uD560 \uAC83\uC778\uAC00\uC758 \uC5EC\uBD80 (ver:0x06050110)"
      }
    ]
  },
  {
    "id": "FlashProperties",
    "description": "\uD50C\uB798\uC2DC \uD30C\uC77C \uC0BD\uC785 \uC2DC \uD544\uC694\uD55C \uC635\uC158",
    "sourcePage": 67,
    "items": [
      {
        "id": "Base",
        "type": "PIT_BSTR",
        "description": "\uACBD\uB85C\uC758 Base"
      },
      {
        "id": "Qulaity",
        "type": "PIT_BSTR",
        "description": "\uC7AC\uC0DD \uD488\uC9C8"
      },
      {
        "id": "Scale",
        "type": "PIT_BSTR",
        "description": "\uC2A4\uCF00\uC77C"
      },
      {
        "id": "WMode",
        "type": "PIT_BSTR",
        "description": "\uC708\uB3C4\uC6B0 \uBAA8\uB4DC"
      },
      {
        "id": "AutoPlay",
        "type": "PIT_UI1",
        "description": "\uC790\uB3D9 \uC7AC\uC0DD \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "LoopPlay",
        "type": "PIT_UI1",
        "description": "\uBC18\uBCF5 \uC7AC\uC0DD \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "ShowMenu",
        "type": "PIT_UI1",
        "description": "\uBA54\uB274 \uBCF4\uC774\uAE30 : 0 = Hide, 1 = Show"
      },
      {
        "id": "BgColor",
        "type": "PIT_UI4",
        "description": "\uBC30\uACBD\uC0C9 (COLORREF)"
      },
      {
        "id": "NumberFormat",
        "type": "PIT_UI1",
        "description": "\uBC88\uD638\uBAA8\uC591"
      },
      {
        "id": "UserChar",
        "type": "PIT_UI2",
        "description": "\uC0AC\uC6A9\uC790 \uAE30\uD638 (WCHAR)"
      },
      {
        "id": "PrefixChar",
        "type": "PIT_UI2",
        "description": "\uC55E \uC7A5\uC2DD \uBB38\uC790 (WCHAR)"
      },
      {
        "id": "Suffix",
        "type": "PIT_UI2",
        "description": "\uB4A4 \uC7A5\uC2DD \uBB38\uC790 (WCHAR) \uC704\uCE58 - \uAC01\uC8FC\uC6A9 \uC635\uC158 (\uD55C \uD398\uC774\uC9C0 \uB0B4\uC5D0\uC11C \uAC01\uC8FC\uB97C \uB2E4\uB2E8\uC5D0 \uC5B4\uB5BB\uAC8C \uC704\uCE58\uC2DC\uD0AC \uC9C0) 0 = \uAC01 \uB2E8\uB9C8\uB2E4 \uB530\uB85C \uBC30\uC5F4"
      },
      {
        "id": "PlaceAt",
        "type": "PIT_UI1",
        "description": "1 = \uD1B5\uB2E8\uC73C\uB85C \uBC30\uC5F4 2 = \uAC00\uC7A5 \uC624\uB978\uCABD \uB2E8\uC5D0 \uBC30\uC5F4 - \uBBF8\uC8FC\uC6A9 \uC635\uC158 (\uBB38\uC11C \uB0B4\uC5D0\uC11C \uBBF8\uC8FC\uB97C \uC5B4\uB514\uC5D0 \uC704\uCE58\uC2DC\uD0AC\uC9C0) 0 = \uBB38\uC11C\uC758 \uB9C8\uC9C0\uB9C9 1 = \uAD6C\uC5ED\uC758 \uB9C8\uC9C0\uB9C9 \uBC88\uD638 \uB9E4\uAE30\uAE30"
      },
      {
        "id": "Restart",
        "type": "PIT_UI1",
        "description": "0 = \uC55E \uAD6C\uC5ED\uC5D0 \uC774\uC5B4\uC11C 1 = \uD604\uC7AC \uAD6C\uC5ED\uBD80\uD130 \uC0C8\uB85C \uC2DC\uC791 2 = \uCABD\uB9C8\uB2E4 \uC0C8\uB85C \uC2DC\uC791 (\uAC01\uC8FC \uC804\uC6A9)"
      },
      {
        "id": "NewNumber",
        "type": "PIT_UI2",
        "description": "\uC2DC\uC791 \uBC88\uD638 (1 .. n) \uBC88\uD638 \uB9E4\uAE30\uAE30 \uAC12\uC774 \u2018\uCABD\uB9C8\uB2E4 \uC0C8\uB85C \uC2DC\uC791\u2019 \uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB41C\uB2E4."
      },
      {
        "id": "LineLength",
        "type": "PIT_I4",
        "description": "\uAD6C\uBD84\uC120 \uAE38\uC774 (HWPUNIT)"
      },
      {
        "id": "LineType",
        "type": "PIT_UI1",
        "description": "\uC120 \uC885\uB958"
      },
      {
        "id": "LineWidth",
        "type": "PIT_UI1",
        "description": "\uC120 \uAD75\uAE30"
      },
      {
        "id": "SpaceAboveLine",
        "type": "PIT_I4",
        "description": "\uAD6C\uBD84\uC120 \uC704 \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "SpaceBelowLine",
        "type": "PIT_I4",
        "description": "\uAD6C\uBD84\uC120 \uC544\uB798 \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "SpaceBetweenNotes",
        "type": "PIT_I4",
        "description": "\uC8FC\uC11D \uC0AC\uC774 \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "SuperScript",
        "type": "PIT_UI1",
        "description": "\uAC01\uC8FC \uB0B4\uC6A9 \uC911 \uBC88\uD638 \uCF54\uB4DC\uC758 \uBAA8\uC591\uC744 \uC704\uCCA8\uC790 \uD615\uC2DD\uC73C\uB85C \uD560\uC9C0"
      },
      {
        "id": "BeneathText",
        "type": "PIT_UI1",
        "description": "\uD14D\uC2A4\uD2B8\uC5D0 \uC774\uC5B4 \uBC14\uB85C \uCD9C\uB825\uD560\uC9C0 \uC5EC\uBD80 (on / off)"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "\uC120 \uC0C9\uAE54 (COLORREF)"
      }
    ]
  },
  {
    "id": "FtpUpload",
    "description": "\uC6F9\uC11C\uBC84\uB85C \uC62C\uB9AC\uAE30",
    "sourcePage": 69,
    "items": [
      {
        "id": "Server",
        "type": "PIT_BSTR",
        "description": "\uC11C\uBC84 \uB0B4\uC784",
        "subType": "Ftp"
      },
      {
        "id": "UserName",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790 \uC774\uB984"
      },
      {
        "id": "Password",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790 \uD328\uC2A4\uC6CC\uB4DC"
      },
      {
        "id": "Directory",
        "type": "PIT_BSTR",
        "description": "\uB514\uB809\uD130\uB9AC"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uBA85"
      },
      {
        "id": "SiteName",
        "type": "PIT_ARRAY",
        "description": "\uC0AC\uC774\uD2B8 \uC774\uB984",
        "subType": "PIT_BSTR"
      },
      {
        "id": "SaveType",
        "type": "PIT_UI",
        "description": "\uC800\uC7A5\uD560 \uD3EC\uB9F7. 0 = HTML 1 = HWP"
      }
    ]
  },
  {
    "id": "FtpDownload",
    "description": "\uC6F9\uC11C\uBC84\uB85C \uC62C\uB9AC\uAE30",
    "sourcePage": 70,
    "items": [
      {
        "id": "Server",
        "type": "PIT_BSTR",
        "description": "\uC11C\uBC84 \uB0B4\uC784",
        "subType": "Ftp"
      },
      {
        "id": "UserName",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790 \uC774\uB984"
      },
      {
        "id": "Password",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790 \uD328\uC2A4\uC6CC\uB4DC"
      },
      {
        "id": "Directory",
        "type": "PIT_BSTR",
        "description": "\uB514\uB809\uD130\uB9AC"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uBA85"
      },
      {
        "id": "SaveType",
        "type": "PIT_UI",
        "description": "\uC800\uC7A5\uD560 \uD3EC\uB9F7. 0 = HTML 1 = HWP 2: OOXML"
      }
    ]
  },
  {
    "id": "GotoE",
    "description": "\uCC3E\uC544\uAC00\uAE30",
    "sourcePage": 71,
    "items": [
      {
        "id": "SetSelectionIndex",
        "type": "PIT_UI1",
        "description": "\uD604\uC7AC \uC120\uD0DD\uB418\uC5B4 \uC788\uB294 \uB77C\uB514\uC624 \uAC12"
      },
      {
        "id": "DialogResult",
        "type": "PIT_UI",
        "description": "\uB300\uD654\uC0C1\uC790\uC758 \uBC18\uD658\uAC12"
      }
    ]
  },
  {
    "id": "GridInfo",
    "description": "\uACA9\uC790 \uC815\uBCF4",
    "sourcePage": 72,
    "items": [
      {
        "id": "Method",
        "type": "PIT_UI1",
        "description": "0 = \uACA9\uC790\uC640 \uC0C1\uAD00\uC5C6\uC774 1 = \uACA9\uC790 \uC790\uC11D\uD6A8\uACFC 2 = \uACA9\uC790\uC5D0\uB9CC \uBD99\uC74C"
      },
      {
        "id": "Align",
        "type": "PIT_UI1",
        "description": "\uACA9\uC790 \uAE30\uC900(\uCABD = 0 / \uC885\uC774 = 1)"
      },
      {
        "id": "HorzAlign",
        "type": "PIT_I",
        "description": "\uACA9\uC790 \uAE30\uC900 \uAC00\uB85C offset (\uB2E8\uC704 HWPUNIT)"
      },
      {
        "id": "VertAlign",
        "type": "PIT_I",
        "description": "\uACA9\uC790 \uAE30\uC900 \uC138\uB85C offset (\uB2E8\uC704 HWPUNIT) \uACA9\uC790 \uBAA8\uC591"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = \uC810 \uACA9\uC790 1 = \uC120 \uACA9\uC790"
      },
      {
        "id": "HorzSpan",
        "type": "PIT_UI",
        "description": "\uAC00\uB85C \uAC04\uACA9 (\uB2E8\uC704 HWPUNIT)"
      },
      {
        "id": "VertSpan",
        "type": "PIT_UI",
        "description": "\uC138\uB85C \uAC04\uACA9 (\uB2E8\uC704 HWPUNIT)"
      },
      {
        "id": "HorzRange",
        "type": "PIT_U",
        "description": "\uAC00\uB85C \uC790\uC11D \uBC94\uC704 (\uB2E8\uC704 HWPUNIT)"
      },
      {
        "id": "VertRange",
        "type": "PIT_U",
        "description": "\uC138\uB85C \uC790\uC11D \uBC94\uC704 (\uB2E8\uC704 HWPUNIT)"
      },
      {
        "id": "Show",
        "type": "PIT_UI1",
        "description": "\uACA9\uC790 \uBCF4\uC774\uAE30 ( on / off )"
      },
      {
        "id": "ZOrder",
        "type": "PIT_UI1",
        "description": "\uACA9\uC790 \uC704\uCE58(\uAE00 \uC704/\uAE00 \uC544\uB798) (ZOrder) 0 = \uAE00 \uC544\uB798, 1 = \uAE00 \uC704 \uC120\uACA9\uC790 \uBCF4\uC774\uAE30 \uC885\uB958"
      },
      {
        "id": "ViewLine",
        "type": "PIT_UI1",
        "description": "0 = \uBAA8\uB450 1 = \uC218\uD3C9\uACA9\uC790\uB9CC 2 = \uC218\uC9C1\uACA9\uC790\uB9CC"
      }
    ]
  },
  {
    "id": "HeaderFooter",
    "description": "\uBA38\uB9AC\uB9D0/\uAF2C\uB9AC\uB9D0",
    "sourcePage": 73,
    "items": [
      {
        "id": "HeaderFooterCtrlType",
        "type": "PIT_UI",
        "description": "\uBA38\uB9AC\uB9D0/\uAF2C\uB9AC\uB9D0 \uC885\uB958 : 0 = \uBA38\uB9AC\uB9D0, 1 = \uAF2C\uB9AC\uB9D0"
      },
      {
        "id": "HeaderFooterStyle",
        "type": "PIT_UI",
        "description": "\uBA38\uB9AC\uB9D0/\uAF2C\uB9AC\uB9D0 \uB9C8\uB2F9 \uC2A4\uD0C0\uC77C"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "\uBA38\uB9AC\uB9D0/\uAF2C\uB9AC\uB9D0 \uC704\uCE58 : 0 = \uC591\uCABD, 1 = \uC9DD\uC218\uCABD, 2 = \uD640\uC218\uCABD"
      }
    ]
  },
  {
    "id": "HyperLink",
    "description": "\uD558\uC774\uD37C\uB9C1\uD06C \uC0BD\uC785 / \uACE0\uCE58\uAE30",
    "sourcePage": 74,
    "items": [
      {
        "id": "Text",
        "type": "PIT_BSTR",
        "description": "\uD558\uC774\uD37C\uB9C1\uD06C\uAC00 \uD45C\uC2DC\uB418\uB294 \uBB38\uC790\uC5F4"
      },
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "String \uCC38\uC870",
        "subType": "Command"
      },
      {
        "id": "NoLInk",
        "type": "PIT_I",
        "description": '"\uC5F0\uACB0 \uC548\uD568" \uC5EC\uBD80'
      },
      {
        "id": "ShapeObject",
        "type": "PIT_I",
        "description": "\uADF8\uB9BC \uBC0F \uADF8\uB9AC\uAE30\uAC1D\uCCB4\uAC00 Selection\uB418\uC5B4 \uC788\uB294\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "DirectInsert",
        "type": "PIT_I",
        "description": "\uD604\uC7AC \uCE90\uB7FF \uC704\uCE58\uC5D0 \uBB34\uC870\uAC74 \uD558\uC774\uD37C\uB9C1\uD06C \uC0BD\uC785 \uC5EC\uBD80 (\uBE14\uB85D\uC9C0\uC815 \uC0C1\uD0DC\uBA74 \uBE14\uB85D\uD574\uC81C \uD6C4 \uC0BD\uC785)"
      }
    ]
  },
  {
    "id": "HyperlinkJump",
    "description": "\uD558\uC774\uD37C\uB9C1\uD06C \uC774\uB3D9",
    "sourcePage": 75,
    "items": [
      {
        "id": "Source",
        "type": "PIT_BSTR",
        "description": "\uC5D0 \uB300\uD55C Object Path",
        "subType": "Source"
      },
      {
        "id": "Target",
        "type": "PIT_BSTR",
        "description": "\uC774\uB3D9\uD560 Target\uC5D0 \uB300\uD55C Object Path"
      }
    ]
  },
  {
    "id": "Idiom",
    "description": "\uC0C1\uC6A9\uAD6C",
    "sourcePage": 76,
    "items": [
      {
        "id": "InputText",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785\uB420 \uC2A4\uD2B8\uB9C1/\uB07C\uC6CC \uB123\uC744 \uD30C\uC77C"
      },
      {
        "id": "InputType",
        "type": "PIT_UI1",
        "description": "\uC785\uB825\uAE30 \uC0C1\uC6A9\uAD6C/\uD55C\uAE00 \uC0C1\uC6A9\uAD6C"
      }
    ]
  },
  {
    "id": "IndexMark",
    "description": "\uCC3E\uC544\uBCF4\uAE30 \uD45C\uC2DD",
    "sourcePage": 77,
    "items": [
      {
        "id": "First",
        "type": "PIT_BSTR",
        "description": "\uCCAB \uBC88\uC9F8 \uD0A4"
      },
      {
        "id": "Second",
        "type": "PIT_BSTR",
        "description": "\uB450 \uBC88\uC9F8 \uD0A4"
      }
    ]
  },
  {
    "id": "InputDateStyle",
    "description": "\uB0A0\uC9DC/\uC2DC\uAC04 \uD45C\uC2DC \uD615\uC2DD",
    "sourcePage": 78,
    "items": [
      {
        "id": "DateStyleType",
        "type": "PIT_UI1",
        "description": "\uBB38\uC790\uC5F4\uB85C \uB123\uAE30/\uCF54\uB4DC\uB85C \uB123\uAE30"
      },
      {
        "id": "DateStyleDataForm",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uCEE8\uD2B8\uB864\uC758 \uC548\uB0B4\uBB38/\uC9C0\uC2DC\uBB38"
      }
    ]
  },
  {
    "id": "InsertFieldTemplate",
    "description": "\uBB38\uC11C\uB9C8\uB2F9 \uC815\uBCF4",
    "sourcePage": 79,
    "items": [
      {
        "id": "ShowSingle",
        "type": "PIT_I",
        "description": "1 = \uAC1C\uC778 \uC815\uBCF4 \uD398\uC774\uC9C0\uB9CC \uBCF4\uC774\uAE30 2 = \uBB38\uC11C \uC694\uC57D \uD398\uC774\uC9C0\uB9CC \uBCF4\uC774\uAE30 3 = \uB9CC\uB4E0 \uB0A0\uC9DC \uD398\uC774\uC9C0\uB9CC \uBCF4\uC774\uAE30 4 = \uD30C\uC77C \uACBD\uB85C \uD398\uC774\uC9C0\uB9CC \uBCF4\uC774\uAE30"
      },
      {
        "id": "TemplateDirection",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uCEE8\uD2B8\uB864\uC758 \uC548\uB0B4\uBB38/\uC9C0\uC2DC\uBB38"
      },
      {
        "id": "TemplateHelp",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uCEE8\uD2B8\uB864\uC758 \uB3C4\uC6C0\uB9D0"
      },
      {
        "id": "TemplateName",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uC774\uB984 (name) \uD544\uB4DC\uC758 \uC885\uB958."
      },
      {
        "id": "TemplateType",
        "type": "PIT_UI1",
        "description": "/Help/Name\uC758 \uAC12\uC774 \uC2E4\uC81C\uB85C \uC801\uC6A9\uB418\uB294 \uC704\uCE58 : 0 = \uB204\uB984\uD2C0, 1 = \uAC1C\uC778 \uC815\uBCF4, 2 = \uBB38\uC11C \uC694\uC57D, 3 = \uB9CC\uB4E0 \uB0A0\uC9DC, 4 = \uD30C\uC77C \uACBD\uB85C \uD544\uB4DC\uC758 \uC591\uC2DD\uBAA8\uB4DC\uC5D0\uC11C \uD3B8\uC9D1\uC5EC\uBD80",
        "subType": "TemplateDirection"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "0 = \uD3B8\uC9D1 \uBD88\uAC00\uB2A5 1 = \uD3B8\uC9D1 \uAC00\uB2A5 \u203B \uD544\uB4DC(Field)\uB294 \uAEBD\uC1E0(\u300E\u300F)\uB85C \uB458\uB7EC\uC2F8\uC778 \uC815\uBCF4\uB97C \uB9D0\uD558\uBA70, \uBB38\uC11C\uB9C8\uB2F9\uC758 \uBAA8\uB4E0 \uC815\uBCF4\uB294 \uD544\uB4DC\uB85C \uAD6C\uC131\uB41C\uB2E4. \u203B ShowSingle \uC544\uC774\uD15C\uC740 OnPopupDialog() \uC218\uD589 \uC2DC, \uC6D0\uD558\uB294 \uD398\uC774\uC9C0\uB9CC \uB300\uD654\uC0C1\uC790\uC5D0 \uD45C\uC2DC\uD558\uACE0 \uC2F6\uC744 \uB54C \uC0AC\uC6A9\uD55C\uB2E4."
      }
    ]
  },
  {
    "id": "InsertFile",
    "description": "\uD30C\uC77C \uC0BD\uC785",
    "sourcePage": 80,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785\uD560 \uD30C\uC77C\uC758 \uC774\uB984"
      },
      {
        "id": "FileFormat",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785\uD560 \uD30C\uC77C\uC758 \uD655\uC7A5\uC790"
      },
      {
        "id": "FileArg",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785\uD560 \uD30C\uC77C\uC758 Argument"
      },
      {
        "id": "KeepSection",
        "type": "PIT_UI1",
        "description": "\uB07C\uC6CC \uB123\uC744 \uBB38\uC11C\uB97C \uAD6C\uC5ED\uC73C\uB85C \uB098\uB204\uC5B4 \uCABD \uBAA8\uC591\uC744 \uC720\uC9C0\uD560\uC9C0 \uC5EC\uBD80 on / off (ver:0x0605010E)"
      },
      {
        "id": "KeepCharshape",
        "type": "PIT_UI1",
        "description": "\uB07C\uC6CC \uB123\uC744 \uBB38\uC11C\uC758 \uAE00\uC790 \uBAA8\uC591\uC744 \uC720\uC9C0\uD560\uC9C0 \uC5EC\uBD80 on / off"
      },
      {
        "id": "KeepParashape",
        "type": "PIT_UI1",
        "description": "\uB07C\uC6CC \uB123\uC744 \uBB38\uC11C\uC758 \uBB38\uB2E8 \uBAA8\uC591\uC744 \uC720\uC9C0\uD560\uC9C0 \uC5EC\uBD80 on / onff"
      },
      {
        "id": "KeepStyle",
        "type": "PIT_UI1",
        "description": "\uB07C\uC6CC \uB123\uC744 \uBB38\uC11C\uC758 \uC2A4\uD0C0\uC77C\uC744 \uC720\uC9C0\uD560\uC9C0 \uC5EC\uBD80 on / onff"
      },
      {
        "id": "MoveNextPos",
        "type": "PIT_UI1",
        "description": "\uC0BD\uC785\uD558\uACE0 \uC0BD\uC785\uB41C \uD30C\uC77C \uB2E4\uC74C \uC704\uCE58\uB85C \uC774\uB3D9\uD560\uC9C0 \uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "InsertText",
    "description": "\uD14D\uC2A4\uD2B8 \uC0BD\uC785",
    "sourcePage": 81,
    "items": [
      {
        "id": "Text",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785\uD560 \uD14D\uC2A4\uD2B8"
      }
    ]
  },
  {
    "id": "KeyMacro",
    "description": "\uD0A4\uB9E4\uD06C\uB85C",
    "sourcePage": 82,
    "items": [
      {
        "id": "Index",
        "type": "PIT_I",
        "description": "\uC815\uC758(or \uC2E4\uD589)\uD560 \uB9E4\uD06C\uB85C\uC758 \uC778\uB371\uC2A4."
      },
      {
        "id": "RepeatCount",
        "type": "PIT_I",
        "description": "\uC2E4\uD589 \uBC18\uBCF5 \uD69F\uC218"
      },
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "\uB9E4\uD06C\uB85C \uC774\uB984"
      }
    ]
  },
  {
    "id": "Label",
    "description": "\uB77C\uBCA8",
    "sourcePage": 83,
    "items": [
      {
        "id": "TopMargin",
        "type": "PIT_I4",
        "description": "\uC6A9\uC9C0 \uC5EC\uBC31 : \uC704\uCABD"
      },
      {
        "id": "LeftMargin",
        "type": "PIT_I4",
        "description": "\uC6A9\uC9C0 \uC5EC\uBC31 : \uC67C\uCABD"
      },
      {
        "id": "BoxWidth",
        "type": "PIT_I4",
        "description": "\uC774\uB984\uD45C \uD06C\uAE30 : \uD3ED"
      },
      {
        "id": "BoxLength",
        "type": "PIT_I4",
        "description": "\uC774\uB984\uD45C \uD06C\uAE30 : \uAE38\uC774"
      },
      {
        "id": "MarginHor",
        "type": "PIT_I4",
        "description": "\uC774\uB984\uD45C \uD06C\uAE30 : \uC88C\uC6B0"
      },
      {
        "id": "BoxMarginVer",
        "type": "PIT_I4",
        "description": "\uC774\uB984\uD45C \uD06C\uAE30 : \uC0C1\uD558"
      },
      {
        "id": "LabelCols",
        "type": "PIT_I4",
        "description": "\uC774\uB984\uD45C \uAC1C\uC218 : \uC904 \uC218 (or \uC138\uB85C)"
      },
      {
        "id": "LabelRows",
        "type": "PIT_I4",
        "description": "\uC774\uB984\uD45C \uAC1C\uC218 : \uCE78 \uC218 (or \uAC00\uB85C)"
      },
      {
        "id": "LandScape",
        "type": "PIT_I4",
        "description": "\uC6A9\uC9C0 \uBC29\uD5A5"
      },
      {
        "id": "PageWidth",
        "type": "PIT_I4",
        "description": "\uBB38\uC11C\uC758 \uD3ED"
      },
      {
        "id": "PageLen",
        "type": "PIT_I4",
        "description": "\uBB38\uC11C\uC758 \uAE38\uC774"
      },
      {
        "id": "TextGap",
        "type": "PIT_I4",
        "description": ""
      },
      {
        "id": "PageCnt",
        "type": "PIT_I4",
        "description": ""
      }
    ]
  },
  {
    "id": "LinkDocument",
    "description": "\uBB38\uC11C \uC5F0\uACB0",
    "sourcePage": 84,
    "items": [
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "\uC5F0\uACB0 \uBB38\uC11C FILE NAME"
      },
      {
        "id": "PageInherit",
        "type": "PIT_UI1",
        "description": "= \uCABD \uBC88\uD638 \uC787\uAE30, FALSE = \uCABD \uBC88\uD638 \uC787\uC9C0 \uC54A\uAE30.",
        "subType": "TRUE"
      },
      {
        "id": "FootnoteInherit",
        "type": "PIT_UI1",
        "description": "= \uAC01\uC8FC \uBC88\uD638 \uC787\uAE30, FALSE = \uAC01\uC8FC \uBC88\uD638 \uC787\uC9C0 \uC54A\uAE30.",
        "subType": "TRUE"
      }
    ]
  },
  {
    "id": "ListParaPos",
    "description": "\uCEE4\uC11C\uC758 \uC704\uCE58",
    "sourcePage": 85,
    "items": [
      {
        "id": "List",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uB9AC\uC2A4\uD2B8"
      },
      {
        "id": "Para",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uBB38\uB2E8"
      },
      {
        "id": "Pos",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uC704\uCE58\uD55C \uAE00\uC790"
      }
    ]
  },
  {
    "id": "ListProperties",
    "description": "\uC11C\uBE0C \uB9AC\uC2A4\uD2B8\uC758 \uC18D\uC131",
    "sourcePage": 86,
    "items": [
      {
        "id": "TextDirection",
        "type": "PIT_UI1",
        "description": "\uAE00\uC790 \uBC29\uD5A5. (\uC138\uBD80 \uC2A4\uD399\uC740 \uBBF8\uC815) \uACBD\uACC4\uC5D0\uC11C \uC904 \uB098\uB214 \uBC29\uC2DD"
      },
      {
        "id": "LineWrap",
        "type": "PIT_UI1",
        "description": "0 = \uC77C\uBC18\uC801\uC778 \uC904 \uBC14\uAFC8 1 = \uC904\uC744 \uBC14\uAFB8\uC9C0 \uC54A\uC74C 2 = \uC790\uAC04\uC744 \uC870\uC815\uD558\uC5EC \uD55C \uC904\uC744 \uC720\uC9C0 \uC138\uB85C \uC815\uB82C"
      },
      {
        "id": "VertAlign",
        "type": "PIT_UI1",
        "description": "0 = \uC704\uB85C \uC815\uB82C 1 = \uAC00\uC6B4\uB370 \uC815\uB82C 2 = \uC544\uB798\uB85C \uC815\uB82C"
      },
      {
        "id": "MarginLeft",
        "type": "PIT_I4",
        "description": "\uAC01 \uBC29\uD5A5 \uC5EC\uBC31 : \uC67C\uCABD"
      },
      {
        "id": "MarginRight",
        "type": "PIT_I4",
        "description": "\uAC01 \uBC29\uD5A5 \uC5EC\uBC31 : \uC624\uB978\uCABD"
      },
      {
        "id": "MarginTop",
        "type": "PIT_I4",
        "description": "\uAC01 \uBC29\uD5A5 \uC5EC\uBC31 : \uC704"
      },
      {
        "id": "MarginBottom",
        "type": "PIT_I4",
        "description": "\uAC01 \uBC29\uD5A5 \uC5EC\uBC31 : \uC544\uB798"
      }
    ]
  },
  {
    "id": "MailMergeGenerate",
    "description": "\uBA54\uC77C \uBA38\uC9C0 \uB9CC\uB4E4\uAE30",
    "sourcePage": 87,
    "items": [
      {
        "id": "Input",
        "type": "PIT_UI1",
        "description": "1 = OAB 2 = HWP 3 = DBF"
      },
      {
        "id": "HwpPath",
        "type": "PIT_BSTR",
        "description": "\uBB38\uC11C \uACBD\uB85C.",
        "subType": "Hwp"
      },
      {
        "id": "HwpId",
        "type": "PIT_UI",
        "description": "\uBB38\uC11C ID",
        "subType": "Hwp"
      },
      {
        "id": "DbfPath",
        "type": "PIT_BSTR",
        "description": "file path dbf file codepage 0 = KS",
        "subType": "dbf"
      },
      {
        "id": "DbfCode",
        "type": "PIT_UI1",
        "description": "1 = KSSM 2 = GB 3 = BIG5 4 = SJIS \uCD9C\uB825 \uBC29\uD5A5 0 = PRINTER"
      },
      {
        "id": "Output",
        "type": "PIT_UI1",
        "description": "1 = PREVIEW 2 = FILE 3 = MAIL"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uC774\uB984"
      },
      {
        "id": "Continue",
        "type": "PIT_UI1",
        "description": "\uCABD\uBC88\uD638 \uC787\uAE30"
      },
      {
        "id": "PrintSet",
        "type": "PIT_SET",
        "description": "\uC778\uC1C4 \uC120\uD0DD \uC0AC\uD56D",
        "subType": "Print"
      },
      {
        "id": "Subject",
        "type": "PIT_BSTR",
        "description": "\uBA54\uC77C \uC81C\uBAA9 \uBA54\uC77C \uC885\uB958"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = \uBCF8\uBB38 1 = \uCCA8\uBD80\uD30C\uC77C"
      },
      {
        "id": "Field",
        "type": "PIT_BSTR",
        "description": "\uBA54\uC77C \uC8FC\uC18C \uD544\uB4DC"
      },
      {
        "id": "FieldUpdate",
        "type": "PIT_UI1",
        "description": "\uD544\uB4DC \uB2E8\uC704 \uC5C5\uB370\uC774\uD2B8"
      },
      {
        "id": "NxlPath",
        "type": "PIT_BSTR",
        "description": "\uB125\uC140 \uD30C\uC77C \uACBD\uB85C"
      }
    ]
  },
  {
    "id": "MakeContents",
    "description": "\uCC28\uB840 \uB9CC\uB4E4\uAE30",
    "sourcePage": 88,
    "items": [
      {
        "id": "Make",
        "type": "PIT_UI",
        "description": "0x08: \uC218\uC2DD \uCC28\uB840 \uC81C\uBAA9 \uCC28\uB840\uB97C \uC9C0\uC815\uD55C \uACBD\uC6B0\uC5D0\uB294 \uB2E4\uC74C\uC758 \uAC12\uC744 \uCD94\uAC00\uB85C \uC9C0\uC815\uD560 \uC218 \uC788\uB2E4. 0x10: \uAC1C\uC694 \uBB38\uB2E8\uC73C\uB85C \uBAA8\uC73C\uAE30 0x20: \uC2A4\uD0C0\uC77C\uB85C \uBAA8\uC73C\uAE30 0x40: \uCC28\uB840\uCF54\uB4DC\uB85C \uBAA8\uC73C\uAE30"
      },
      {
        "id": "Level",
        "type": "PIT_I",
        "description": "\uAC1C\uC694 \uC218\uC900"
      },
      {
        "id": "AutoTabRight",
        "type": "PIT_I1",
        "description": "\uBB38\uB2E8 \uC624\uB978\uCABD \uB05D \uC790\uB3D9 \uD0ED \uC5EC\uBD80 : 0 = \uC790\uB3D9 \uD0ED \uC0AC\uC6A9\uC548\uD568, 1 = \uC790\uB3D9 \uD0ED \uC0AC\uC6A9"
      },
      {
        "id": "Leader",
        "type": "PIT_UI",
        "description": "\uC624\uB978\uCABD \uB05D \uD0ED \uCC44\uC6B8 \uBAA8\uC591(\uC120 \uC885\uB958)"
      },
      {
        "id": "Styles",
        "type": "PIT_ARRAY",
        "description": "\uBAA8\uC744 \uC2A4\uD0C0\uC77C \uBAA9\uB85D",
        "subType": "PIT_UI"
      },
      {
        "id": "StyleName",
        "type": "PIT_BSTR",
        "description": "\uBAA8\uC744 \uC2A4\uD0C0\uC77C \uC774\uB984\uB4E4"
      },
      {
        "id": "OutFileName",
        "type": "PIT_BSTR",
        "description": "\uB9CC\uB4E4 \uD30C\uC77C \uC774\uB984. \u201C\u201D\uC774\uBA74 \uD604\uC7AC \uBB38\uC11C\uC5D0 \uC0DD\uC131 \uB9CC\uB4E4 \uC704\uCE58. \uBC18\uB4DC\uC2DC 0\uC774\uC5B4\uC57C \uD55C\uB2E4. (\uF53A\uAE00 \uCEE8\uD2B8\uB864\uC740 \uD0ED\uC774 \uC5C6\uC73C\uBBC0\uB85C)"
      },
      {
        "id": "Position",
        "type": "PIT_BSTR",
        "description": "0 = \uD604\uC7AC \uBB38\uC11C 1 = \uC0C8 \uD0ED\uC73C\uB85C \uB9CC\uB4E4 \uCC28\uB840 \uD615\uC2DD"
      },
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "0 : \uD544\uB4DC\uB85C \uB123\uAE30 1 : \uBB38\uC790\uC5F4\uB85C \uB123\uAE30"
      },
      {
        "id": "Hyperlink",
        "type": "PIT_UI",
        "description": "\uD558\uC774\uD37C\uB9C1\uD06C \uC5F0\uACB0"
      }
    ]
  },
  {
    "id": "MarkpenShape",
    "description": "\uD615\uAD11\uD39C \uBAA8\uC591",
    "sourcePage": 89,
    "items": [
      {
        "id": "Color",
        "type": "PIT_UI4",
        "description": "\uD615\uAD11\uD39C\uC0C9 (COLORREF)"
      }
    ]
  },
  {
    "id": "MasterPage",
    "description": "\uBC14\uD0D5\uCABD",
    "sourcePage": 90,
    "items": [
      {
        "id": "Type",
        "type": "PIT_I4",
        "description": "0 = \uC591\uCABD 1 = \uC9DD\uC218\uCABD 2 = \uD640\uC218\uCABD"
      },
      {
        "id": "Duplicate",
        "type": "PIT_UI1",
        "description": "\uAE30\uC874 \uBC14\uD0D5\uCABD\uACFC \uACB9\uCE68 (On/Off)"
      },
      {
        "id": "Front",
        "type": "PIT_UI1",
        "description": "\uBC14\uD0D5\uCABD\uACFC \uC55E\uC73C\uB85C \uBCF4\uB0B4\uAE30 (On/Off) \uC801\uC6A9\uB300\uC0C1"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "0 = \uD604\uC7AC\uAD6C\uC5ED 1 = \uBB38\uC11C \uC804\uCCB4"
      },
      {
        "id": "CopySectionNumber",
        "type": "PIT_UI4",
        "description": "\uBC14\uD0D5\uCABD \uAC00\uC838\uC624\uAE30\uC758 \uAD6C\uC5ED \uBC88\uD638 \uBC14\uD0D5\uCABD \uAC00\uC838\uC6B0\uAE30\uC758 \uBC14\uD0D5\uCABD \uC885\uB958\uB4E4 0 = \uC591 \uCABD"
      },
      {
        "id": "CopyMasterPageTypes",
        "type": "PIT_ARRAY",
        "description": "1 = \uC9DD\uC218 \uCABD 2 = \uD640\uC218 \uCABD 3 = \uAD6C\uC5ED \uB9C8\uC9C0\uB9C9\uCABD",
        "subType": "PIT_UI4"
      }
    ]
  },
  {
    "id": "MemoShape",
    "description": "\uBA54\uBAA8 \uBAA8\uC591",
    "sourcePage": 91,
    "items": [
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "\uB108\uBE44 (HWPUNIT)"
      },
      {
        "id": "LineType",
        "type": "PIT_UI1",
        "description": "\uC120 \uC885\uB958"
      },
      {
        "id": "LineWidth",
        "type": "PIT_UI1",
        "description": "\uC120 \uAD75\uAE30"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "\uC120 \uC0C9\uAE54 (COLORREF)"
      },
      {
        "id": "FillColor",
        "type": "PIT_UI4",
        "description": "\uCC44\uC6B0\uAE30 \uC0C9\uAE54 (COLORREF)"
      },
      {
        "id": "ActiveFillColor",
        "type": "PIT_UI4",
        "description": "\uD65C\uC131\uD654\uB41C \uCC44\uC6B0\uAE30 \uC0C9\uAE54 (COLORREF)"
      },
      {
        "id": "MemoType",
        "type": "PIT_UI4",
        "description": "\uBA54\uBAA8 \uC885\uB958 - \uD604\uC7AC \uC0AC\uC6A9\uC548 \uD568 1 = \uBA54\uBAA8 \uB123\uAE30, 2 = \uBA54\uBAA8 \uC9C0\uC6B0\uAE30, 3 = \uBA54\uBAA8 \uACE0\uCE58\uAE30"
      }
    ]
  },
  {
    "id": "MousePos",
    "description": "\uB9C8\uC6B0\uC2A4 \uC704\uCE58",
    "sourcePage": 92,
    "items": [
      {
        "id": "XRelTo",
        "type": "PIT_UI4",
        "description": "0 : \uC885\uC774 1 : \uCABD \uC138\uB85C \uC0C1\uB300\uC801 \uAE30\uC900"
      },
      {
        "id": "YRelTo",
        "type": "PIT_UI4",
        "description": "0 : \uC885\uC774 1 : \uCABD"
      },
      {
        "id": "Page",
        "type": "PIT_UI4",
        "description": "\uD398\uC774\uC9C0 \uBC88\uD638 ( 0 based)"
      },
      {
        "id": "X",
        "type": "PIT_I4",
        "description": "\uAC00\uB85C \uD074\uB9AD\uD55C \uC704\uCE58 (HWPUNIT)"
      },
      {
        "id": "Y",
        "type": "PIT_I4",
        "description": "\uC138\uB85C \uD074\uB9AD\uD55C \uC704\uCE58 (HWPUNIT)"
      }
    ]
  },
  {
    "id": "MovieProperties",
    "description": "\uB3D9\uC601\uC0C1 \uD30C\uC77C \uC0BD\uC785 \uC2DC \uD544\uC694\uD55C \uC635\uC158",
    "sourcePage": 93,
    "items": [
      {
        "id": "Base",
        "type": "PIT_BSTR",
        "description": "\uB3D9\uC601\uC0C1 \uD30C\uC77C\uC758 \uACBD\uB85C"
      },
      {
        "id": "Caption",
        "type": "PIT_BSTR",
        "description": "\uC790\uB9C9 \uD30C\uC77C\uC758 \uACBD\uB85C"
      },
      {
        "id": "AutoPlay",
        "type": "PIT_UI1",
        "description": "\uC790\uB3D9 \uC7AC\uC0DD \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "AutoRewind",
        "type": "PIT_UI1",
        "description": "\uB418\uAC10\uAE30 \uC5EC\uBD80 : 0 = off, 1 = on"
      },
      {
        "id": "ShowMenu",
        "type": "PIT_UI1",
        "description": "\uBA54\uB274 \uBCF4\uC774\uAE30 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowCtrlPanel",
        "type": "PIT_UI1",
        "description": "\uCEE8\uD2B8\uB864 \uD328\uB110 \uBCF4\uC774\uAE30 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowPosCtrl",
        "type": "PIT_UI1",
        "description": "\uC704\uCE58 \uCEE8\uD2B8\uB864 \uBCF4\uC774\uAE30 : 0 = Hide, 1 = Show"
      },
      {
        "id": "EnablePos",
        "type": "PIT_UI1",
        "description": "\uC704\uCE58 \uCEE8\uD2B8\uB864 \uC870\uC808 \uC5EC\uBD80 : 0 = Disable, 1 = Enable"
      },
      {
        "id": "ShowTrackBar",
        "type": "PIT_UI1",
        "description": "\uC74C\uB7C9 \uC870\uC808\uB9C9\uB300(Track Bar) \uBCF4\uC774\uAE30 : 0 = Hide, 1 = Show"
      },
      {
        "id": "EnableTrack",
        "type": "PIT_UI1",
        "description": "\uC74C\uB7C9 \uC870\uC808 \uC5EC\uBD80 : 0 = Disable, 1 = Enable"
      },
      {
        "id": "ShowChaption",
        "type": "PIT_UI1",
        "description": "\uC790\uB9C9 \uBCF4\uC774\uAE30 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowAudio",
        "type": "PIT_UI1",
        "description": "\uC624\uB514\uC624 \uC124\uC815 \uBCF4\uC774\uAE30 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowStatus",
        "type": "PIT_UI1",
        "description": "\uC0C1\uD0DC\uBC14 \uBCF4\uAE30 (\uC9C4\uD589\uC2DC\uAC04 \uB4F1\uC744 \uD45C\uC2DC) : 0 = Hide, 1 = Show"
      }
    ]
  },
  {
    "id": "OleCreation",
    "description": "OLE \uAC1C\uCCB4 \uC0DD\uC131",
    "sourcePage": 94,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = \uC0C8\uB85C \uAC1C\uCCB4 \uC0DD\uC131 1 = \uD30C\uC77C\uB85C\uBD80\uD130 \uAC1C\uCCB4 \uC0DD\uC131 2 = \uD30C\uC77C\uB85C \uB9C1\uD06C\uB41C \uAC1C\uCCB4 \uC0DD\uC131"
      },
      {
        "id": "Clsid",
        "type": "PIT_BSTR",
        "description": "\uD074\uB798\uC2A4 ID ('\uC0C8\uB85C \uAC1C\uCCB4 \uC0DD\uC131\u2018\uC77C \uB54C \uC0AC\uC6A9)"
      },
      {
        "id": "Path",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uACBD\uB85C (\u2018\uD30C\uC77C\uB85C \uB9C1\uD06C\uB41C \uAC1C\uCCB4 \uC0DD\uC131\u2019, \u2018\uD30C\uC77C\uB85C\uBD80\uD130 \uAC1C\uCCB4 \uC0DD\uC131\u2019\uC77C \uB54C \uC0AC\uC6A9)"
      },
      {
        "id": "Aspect",
        "type": "PIT_I",
        "description": "\uC0DD\uC131\uB41C OLE \uAC1C\uCCB4\uB97C \uC544\uC774\uCF58\uC73C\uB85C \uD45C\uC2DC\uD560\uC9C0 \uC5EC\uBD80 : 0 = \uB0B4\uC6A9\uC73C\uB85C \uD45C\uC2DC, 1 = \uC544\uC774\uCF58\uC73C\uB85C \uD45C\uC2DC"
      },
      {
        "id": "IconMetafile",
        "type": "PIT_BINDATA",
        "description": "\uAC00 \uC544\uC774\uCF58\uC77C \uB54C \uC801\uC6A9\uD560 \uC544\uC774\uCF58 \uB370\uC774\uD130 Aspect\uAC00 \uC544\uC774\uCF58\uC77C \uB54C \uC544\uC774\uCF58 \uB9E4\uD551\uBAA8\uB4DC 1 = MM_TEXT 2 = MM_LOMETRIC 3 = MM_HIMETRIC",
        "subType": "Aspect"
      },
      {
        "id": "IconMM",
        "type": "PIT_I",
        "description": "4 = MM_LOENGLISH 5 = MM_HIENGLISH 6 = MM_TWIPS 7 = MM_ISOTROPIC 8 = MM_ANISOTROPIC \u203B MFC\uC758 \uB9E4\uD551\uBAA8\uB4DC\uC640 \uAC12/\uC758\uBBF8\uAC00 \uB3D9\uC77C\uD558\uB2E4."
      },
      {
        "id": "IconXext",
        "type": "PIT_I",
        "description": "\uAC00 \uC544\uC774\uCF58\uC77C \uB54C X\uCD95 \uB9E4\uD551\uB2E8\uC704",
        "subType": "Aspect"
      },
      {
        "id": "IconYext",
        "type": "PIT_I",
        "description": "\uAC00 \uC544\uC774\uCF58\uC77C \uB54C Y\uCD95 \uB9E4\uD551\uB2E8\uC704",
        "subType": "Aspect"
      },
      {
        "id": "InnerOCX",
        "type": "PIT_I",
        "description": "\uF53A\uAE00 \uB0B4\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 OCX\uC778\uC9C0 \uC5EC\uBD80 (\uC608: \uF53A\uAE00\uC758 Chart OLE)"
      },
      {
        "id": "SoProperties",
        "type": "PIT_SET",
        "description": "\uCD08\uAE30 shape object \uC18D\uC131",
        "subType": "ShapeObject"
      },
      {
        "id": "FlashProperties",
        "type": "PIT_SET",
        "description": "\uD50C\uB798\uC2DC \uD30C\uC77C \uC0BD\uC785 \uC2DC \uD544\uC694\uD55C \uC635\uC158 \uC14B",
        "subType": "FlashProperties"
      },
      {
        "id": "MovieProperties",
        "type": "PIT_SET",
        "description": "\uB3D9\uC601\uC0C1 \uD30C\uC77C \uC0BD\uC785 \uC2DC \uD544\uC694\uD55C \uC635\uC158 \uC14B",
        "subType": "MovieProperties"
      }
    ]
  },
  {
    "id": "PageBorderFill",
    "description": "\uAD6C\uC5ED\uC758 \uCABD \uD14C\uB450\uB9AC/\uBC30\uACBD",
    "sourcePage": 95,
    "items": [
      {
        "id": "TextBorder",
        "type": "PIT_UI1",
        "description": "= \uBCF8\uBB38 \uAE30\uC900, FALSE = \uC885\uC774 \uAE30\uC900",
        "subType": "TRUE"
      },
      {
        "id": "HeaderInside",
        "type": "PIT_UI1",
        "description": "\uBA38\uB9AC\uB9D0 \uD3EC\uD568 (on / off)"
      },
      {
        "id": "FooterInside",
        "type": "PIT_UI1",
        "description": "\uAF2C\uB9AC\uB9D0 \uD3EC\uD568 (on / off) \uCC44\uC6B8 \uC601\uC5ED"
      },
      {
        "id": "FillArea",
        "type": "PIT_UI1",
        "description": "0 = \uC885\uC774 1 = \uCABD 2 = \uD14C\uB450\uB9AC"
      },
      {
        "id": "OffsetLeft",
        "type": "PIT_I",
        "description": "4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC67C\uCABD"
      },
      {
        "id": "OffsetRight",
        "type": "PIT_I",
        "description": "4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC624\uB978\uCABD"
      },
      {
        "id": "OffsetTop",
        "type": "PIT_I",
        "description": "4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC704"
      },
      {
        "id": "OffsetBottom",
        "type": "PIT_I",
        "description": "4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC544\uB798 \uC67C\uCABD \uB77C\uC778 \uC2A4\uD0C0\uC77C 0 \uC2E4\uC120 1 \uD30C\uC120 2 \uC810\uC120 3 \uC77C\uC810\uC1C4\uC120 4 \uC774\uC810\uC1C4\uC120 5 \uAE34 \uD30C\uC120 6 \uC6D0\uD615 \uC810\uC120 7 \uC774\uC911 \uC2E4\uC120"
      },
      {
        "id": "BorderTypeLeft",
        "type": "PIT_UI2",
        "description": "8 \uC587\uACE0 \uAD75\uC740 \uC774\uC911\uC120 9 \uAD75\uACE0 \uC587\uC740 \uC774\uC911\uC120 10 \uC587\uACE0 \uAD75\uACE0 \uC587\uC740 \uC0BC\uC911\uC120 11 \uBB3C\uACB0\uC120 12 \uC774\uC911 \uBB3C\uACB0\uC120 13 3D \uAD75\uC740\uC120 14 3D \uAD75\uC740\uC120 (\uAD11\uC6D0 \uBC18\uB300) 15 3D \uC2E4\uC120 16 3D \uC2E4\uC120 (\uAD11\uC6D0 \uBC18\uB300)"
      },
      {
        "id": "BorderTypeRight",
        "type": "PIT_UI2",
        "description": "\uC624\uB978\uCABD \uB77C\uC778 \uC2A4\uD0C0\uC77C"
      },
      {
        "id": "BorderTypeTop",
        "type": "PIT_UI2",
        "description": "\uC704\uCABD \uB77C\uC778 \uC2A4\uD0C0\uC77C"
      },
      {
        "id": "BorderTypeBottom",
        "type": "PIT_UI2",
        "description": "\uC544\uB798\uCABD \uB77C\uC778 \uC2A4\uD0C0\uC77C \uC67C\uCABD \uD14C\uB450\uB9AC \uB450\uAED8 0 0.1mm 1 0.12mm 2 0.15mm 3 0.2mm 4 0.25mm 5 0.3mm 6 0.4mm"
      },
      {
        "id": "BorderWidthLeft",
        "type": "PIT_UI1",
        "description": "7 0.5mm 8 0.6mm 9 0.7mm 10 1.0mm 11 1.5mm 12 2.0mm 13 3.00mm 14 4.00mm 15 5.00mm"
      },
      {
        "id": "BorderWidthRight",
        "type": "PIT_UI1",
        "description": "\uC624\uB978\uCABD \uD14C\uB450\uB9AC \uB450\uAED8"
      },
      {
        "id": "BorderWidthTop",
        "type": "PIT_UI1",
        "description": "\uC704\uCABD \uD14C\uB450\uB9AC \uB450\uAED8"
      },
      {
        "id": "BorderWidthBottom",
        "type": "PIT_UI1",
        "description": "\uC544\uB798\uCABD \uD14C\uB450\uB9AC \uB450\uAED8"
      },
      {
        "id": "BorderCorlorLeft",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54(COLORREF)"
      },
      {
        "id": "BorderColorRight",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54(COLORREF)"
      },
      {
        "id": "BorderColorTop",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54(COLORREF)"
      },
      {
        "id": "BorderColorBottom",
        "type": "PIT_UI4",
        "description": "4\uBC29\uD5A5 \uD14C\uB450\uB9AC \uC0C9\uAE54(COLORREF)"
      },
      {
        "id": "SlashFlag",
        "type": "PIT_UI2",
        "description": "\uC2AC\uB798\uC26C \uB300\uAC01\uC120 \uD50C\uB799 (bit 0-2\uAC00 \uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uAC01\uAC01\uC758 \uB300\uAC01\uC120 \uC720\uBB34 \uB97C \uB098\uD0C0\uB0C4"
      },
      {
        "id": "BackSlashFlag",
        "type": "PIT_UI2",
        "description": "\uBC31\uC2AC\uB798\uC26C \uB300\uAC01\uC120 \uD50C\uB799 (bit 0-2\uAC00 \uBC18\uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C \uAC01\uAC01\uC758 \uB300\uAC01\uC120 \uC720\uBB34\uB97C \uB098\uD0C0\uB0C4)"
      },
      {
        "id": "DiagonalType",
        "type": "PIT_UI2",
        "description": "\uB300\uAC01\uC120 \uC885\uB958 \uC120 \uC885\uB958 \uB300\uAC01\uC120 \uB450\uAED8 0 0.1mm 1 0.12mm 2 0.15mm 3 0.2mm 4 0.25mm 5 0.3mm 6 0.4mm"
      },
      {
        "id": "DiagonalWidth",
        "type": "PIT_UI1",
        "description": "7 0.5mm 8 0.6mm 9 0.7mm 10 1.0mm 11 1.5mm 12 2.0mm 13 3.00mm 14 4.00mm 15 5.00mm"
      },
      {
        "id": "DiagonalColor",
        "type": "PIT_UI4",
        "description": "\uB300\uAC01\uC120 \uC0C9\uAE54 (COLORREF)"
      },
      {
        "id": "BorderFill3D",
        "type": "PIT_UI1",
        "description": "3\uCC28\uC6D0 \uD6A8\uACFC on/off"
      },
      {
        "id": "Shadow",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC790 \uD6A8\uACFC on/off"
      },
      {
        "id": "FillAttr",
        "type": "PIT_SET",
        "description": "\uBC30\uACBD \uCC44\uC6B0\uAE30 \uC18D\uC131",
        "subType": "DrawFillAttr"
      },
      {
        "id": "CrookedSlashFlag",
        "type": "PIT_UI2",
        "description": "\uAEBD\uC5B4\uC9C4 \uB300\uAC01\uC120 \uD50C\uB799 (bit 0, 1\uC774 \uAC01\uAC01 slash, back slash\uC758 \uAC00 \uC6B4\uB370 \uB300\uAC01\uC120\uC774 \uAEBD\uC5B4\uC9C4 \uB300\uAC01\uC120\uC784\uC744 \uB098\uD0C0\uB0B8\uB2E4.)"
      },
      {
        "id": "BreakCellSeparate",
        "type": "PIT_UI1",
        "description": "\uC790\uB3D9\uC73C\uB85C \uB098\uB25C \uD45C\uC758 \uACBD\uACC4\uC120 \uC124\uC815 TRUE/FALSE Line \uC74C\uC601 \uBE44\uC728 \uC99D\uAC00/\uAC10\uC18C."
      },
      {
        "id": "ShadeFaceColorInc",
        "type": "PIT_UI1",
        "description": "\uC74C\uC601 \uBE44\uC728 \uC99D\uAC00/\uAC10\uC18C \uC5D1\uC158\uC5D0\uC11C \uC804\uB2EC \uB428. \uAD6C\uD604\uC6A9\uC73C\uB85C\uB9CC \uC4F0\uC784. Dec \uC774 \uC544\uC774\uD15C\uC774 \uC5C6\uC73C\uBA74(\uC74C\uC601 \uBE44\uC728 \uC99D\uAC00/\uAC10\uC18C\uB294 \uC5C6\uB294 \uAC83\uC774\uACE0 \uC788\uB2E4\uBA74 \uAC12 \uC774 TRUE\uC774\uBA74 \uC99D\uAC00, FALSE\uC774\uBA74 \uAC10\uC18C\uC774\uB2E4.)"
      },
      {
        "id": "CounterSlashFlag",
        "type": "PIT_UI1",
        "description": "\uC2AC\uB798\uC26C \uB300\uAC01\uC120\uC758 \uC5ED\uBC29\uD5A5 \uD50C\uB799(\uC6B0\uC0C1\uD5A5 \uB300\uAC01\uC120)"
      },
      {
        "id": "CounterBackSlashF",
        "type": "PIT_UI1",
        "description": "\uC5ED\uC2AC\uB798\uC26C \uB300\uAC01\uC120\uC758 \uC5ED\uBC29\uD5A5 \uD50C\uB799(\uC88C\uC0C1\uD5A5 \uB300\uAC01\uC120) lag"
      },
      {
        "id": "CenterLineFlag",
        "type": "PIT_UI1",
        "description": "\uC911\uC2EC\uC120"
      },
      {
        "id": "CrookedSlashFlag1",
        "type": "PIT_UI1",
        "description": "\uC0C1\uD5A5 \uAEBE\uC5B4\uC9C4 \uB300\uAC01\uC120"
      },
      {
        "id": "CrookedSlashFlag2",
        "type": "PIT_UI1",
        "description": "\uD558\uD5A5 \uAEBD\uC5B4\uC9C4 \uB300\uAC01\uC120"
      }
    ]
  },
  {
    "id": "PageDef",
    "description": "\uAD6C\uC5ED \uB0B4\uC758 \uC6A9\uC9C0 \uC124\uC815 \uC18D\uC131",
    "sourcePage": 99,
    "items": [
      {
        "id": "PaperWidth",
        "type": "PIT_I4",
        "description": "\uC6A9\uC9C0 \uAC00\uB85C \uD06C\uAE30 (HWPUNIT)"
      },
      {
        "id": "PaperHeight",
        "type": "PIT_I4",
        "description": "\uC6A9\uC9C0 \uC138\uB85C \uD06C\uAE30 (HWPUNIT)"
      },
      {
        "id": "Landscape",
        "type": "PIT_I4",
        "description": "\uC6A9\uC9C0 \uBC29\uD5A5. 0 = \uC881\uAC8C, 1 = \uB113\uAC8C"
      },
      {
        "id": "LeftMargin",
        "type": "PIT_I4",
        "description": "\uC67C\uCABD \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "RightMargin",
        "type": "PIT_I4",
        "description": "\uC624\uB978\uCABD \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "TopMargin",
        "type": "PIT_I4",
        "description": "\uC704 \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "BottomMargin",
        "type": "PIT_I4",
        "description": "\uC544\uB798 \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "HeaderLen",
        "type": "PIT_I4",
        "description": "\uBA38\uB9AC\uB9D0 \uAE38\uC774 (HWPUNIT)"
      },
      {
        "id": "FooterLen",
        "type": "PIT_I4",
        "description": "\uAF2C\uB9AC\uB9D0 \uAE38\uC774 (HWPUNIT)"
      },
      {
        "id": "GutterLen",
        "type": "PIT_I4",
        "description": "\uC81C\uBCF8 \uC5EC\uBC31 (HWPUNIT)"
      },
      {
        "id": "GutterType",
        "type": "PIT_UI1",
        "description": "\uD3B8\uC9D1 \uBC29\uBC95. 0 = \uD55C\uCABD \uD3B8\uC9D1, 1 = \uB9DE\uCABD \uD3B8\uC9D1, 2 = \uC704\uB85C \uB118\uAE30\uAE30 \uC801\uC6A9\uBC94\uC704 0 = \uC120\uD0DD\uB41C \uAD6C\uC5ED"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "1 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4 2 = \uD604\uC7AC \uAD6C\uC5ED 3 = \uBB38\uC11C\uC804\uCCB4 4 = \uC0C8 \uAD6C\uC5ED : \uD604\uC7AC \uC704\uCE58\uBD80\uD130 \uC0C8\uB85C \uC801\uC6A9\uBC94\uC704\uC758 \uBD84\uB958 (\uB300\uD654\uC0C1\uC790\uB97C \uD638\uCD9C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9) 0x01 = \uC120\uD0DD\uB41C \uAD6C\uC5ED"
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": '0x02 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4 0x04 = \uD604\uC7AC \uAD6C\uC5ED 0x08 = \uBB38\uC11C\uC804\uCCB4 0x10 = \uC0C8 \uAD6C\uC5ED : \uD604\uC7AC \uC704\uCE58\uBD80\uD130 \uC0C8\uB85C Example : \uD3B8\uC9D1\uC6A9\uC9C0 \uC124\uC815 \uC608\uC81C C++ { DHwpAction dact = m_cHwpCtrl.CreateAction("PageSetup"); DHwpParameterSet dset = dact.CreateSet(); dact.GetDefault(dset); dset.SetItem ("ApplyTo", (COleVariant)(long)3); DHwpParameterSet _dset = dset.CreateItemSet ("PageDef", "PageDef"); // 1mm = 283.465 HWPUNITs _dset.SetItem ("TopMargin", (COleVariant)(long)5668); _dset.SetItem ("BottomMargin", (COleVariant)(long)5668); _dset.SetItem ("LeftMargin", (COleVariant)(long)2834); _dset.SetItem ("RightMargin", (COleVariant)(long)2834); _dset.SetItem ("HeaderLen", (COleVariant)(long)1417); _dset.SetItem ("FooterLen", (COleVariant)(long)1417); _dset.SetItem ("GutterLen", (COleVariant)(long)0); dact.Execute(dset); }'
      }
    ]
  },
  {
    "id": "PageHiding",
    "description": "\uAC10\uCD94\uAE30",
    "sourcePage": 101,
    "items": [
      {
        "id": "Fields",
        "type": "PIT_UI",
        "description": "0x04 = \uBC14\uD0D5\uCABD 0x08 = \uD14C\uB450\uB9AC 0x10 = \uBC30\uACBD 0x20 = \uCABD\uBC88\uD638 \uC704\uCE58"
      }
    ]
  },
  {
    "id": "PageNumCtrl",
    "description": "\uD398\uC774\uC9C0\uBC88\uD638 (97\uC758 \uD640\uC218 \uCABD\uC5D0\uC11C \uC2DC\uC791)",
    "sourcePage": 102,
    "items": [
      {
        "id": "PageStartsOn",
        "type": "PIT_UI1",
        "description": "0 = \uC591\uCABD 1 = \uC9DD\uC218\uCABD 2 = \uD640\uC218\uCABD"
      }
    ]
  },
  {
    "id": "PageNumPos",
    "description": "\uCABD \uBC88\uD638 \uC704\uCE58",
    "sourcePage": 103,
    "items": [
      {
        "id": "NumberFormat",
        "type": "PIT_UI1",
        "description": "4 = A, B, C 8 = \uAC00, \uB098, \uB2E4 13 = \u4E00, \u4E8C, \u4E09 15 = \uAC11, \uC744, \uBCD1 16 = \u7532, \u4E59, \u4E19 \u203B \uC911\uAC04\uC5D0 \uBE48 \uBC88\uD638\uC5D0\uB3C4 \uBB38\uC790\uD3EC\uB9F7\uC774 \uC874\uC7AC\uD558\uB098 \uC774\uACF3\uC5D0\uC11C \uC0AC\uC6A9\uD558\uC9C0 \uC54A \uC544 \uC0DD\uB7B5\uD568"
      },
      {
        "id": "UserChar",
        "type": "PIT_UI2",
        "description": "\uC0AC\uC6A9\uC790 \uAE30\uD638(WCHAR). \uF53A\uAE002007\uC5D0\uC120 \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4."
      },
      {
        "id": "PrefixChar",
        "type": "PIT_UI2",
        "description": "\uC55E \uC7A5\uC2DD \uBB38\uC790(WCHAR). \uF53A\uAE002007\uC5D0\uC120 \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4."
      },
      {
        "id": "SuffixChar",
        "type": "PIT_UI2",
        "description": "\uB4A4 \uC7A5\uC2DD \uBB38\uC790(WCHAR). \uF53A\uAE002007\uC5D0\uC120 \uB354 \uC774\uC0C1 \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uB294\uB2E4."
      },
      {
        "id": "SideChar",
        "type": "PIT_UI2",
        "description": "\uC591\uCABD \uC606 \uC7A5\uC2DD \uBB38\uC790(WCHAR). L'-'\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4. \uBC88\uD638 \uC704\uCE58 0 = \uCABD \uBC88\uD638 \uC5C6\uC74C 1 = \uC67C\uCABD \uC704, 2 = \uAC00\uC6B4\uB370 \uC704, 3 = \uC624\uB978\uCABD \uC704,"
      },
      {
        "id": "DrawPos",
        "type": "PIT_UI1",
        "description": "4 = \uC67C\uCABD \uC544\uB798, 5 = \uAC00\uC6B4\uB370 \uC544\uB798, 6 = \uC624\uB978\uCABD \uC544\uB798, 7 = \uBC14\uAE65\uCABD \uC704, 8 = \uBC14\uAE65\uCABD \uC544\uB798, 9 = \uC548\uCABD \uC704, 10 = \uC548\uCABD \uC544\uB798"
      },
      {
        "id": "NewNumber",
        "type": "PIT_UI2",
        "description": "\uC0C8 \uC2DC\uC791 \uBC88\uD638 (1 .. n)"
      }
    ]
  },
  {
    "id": "ParaShape",
    "description": "\uBB38\uB2E8 \uBAA8\uC591",
    "sourcePage": 104,
    "items": [
      {
        "id": "LeftMargin",
        "type": "PIT_I4",
        "description": "\uC67C\uCABD \uC5EC\uBC31 (URC)"
      },
      {
        "id": "RightMargin",
        "type": "PIT_I4",
        "description": "\uC624\uB978\uCABD \uC5EC\uBC31 (URC)"
      },
      {
        "id": "Indentation",
        "type": "PIT_I4",
        "description": "\uB4E4\uC5EC\uC4F0\uAE30/\uB0B4\uC5B4 \uC4F0\uAE30 (URC)"
      },
      {
        "id": "PrevSpacing",
        "type": "PIT_I4",
        "description": "\uBB38\uB2E8 \uAC04\uACA9 \uC704 (URC)"
      },
      {
        "id": "NextSpacing",
        "type": "PIT_I4",
        "description": "\uBB38\uB2E8 \uAC04\uACA9 \uC544\uB798 (URC) \uC904 \uAC04\uACA9 \uC885\uB958 (HWPUNIT)"
      },
      {
        "id": "LineSpacingType",
        "type": "PIT_UI1",
        "description": "0 = \uAE00\uC790\uC5D0 \uB530\uB77C 1 = \uACE0\uC815 \uAC12 2 = \uC5EC\uBC31\uB9CC \uC9C0\uC815 \uC904 \uAC04\uACA9 \uAC12. \uC904 \uAC04\uACA9 \uC885\uB958(LineSpacingType)\uC5D0 \uB530\uB77C :"
      },
      {
        "id": "LineSpacing",
        "type": "PIT_I4",
        "description": '- "\uAE00\uC790\uC5D0 \uB530\uB77C"\uC77C \uACBD\uC6B0(0 - 500%) - \u201C\uACE0\uC815 \uAC12\u201D\uC77C \uACBD\uC6B0(URC) - \u201C\uC5EC\uBC31\uB9CC \uC9C0\uC815\u201D\uC77C \uACBD\uC6B0(URC) \uC815\uB82C \uBC29\uC2DD 0 = \uC591\uCABD \uC815\uB82C 1 = \uC67C\uCABD \uC815\uB82C'
      },
      {
        "id": "AlignType",
        "type": "PIT_UI1",
        "description": "2 = \uC624\uB978\uCABD \uC815\uB82C 3 = \uAC00\uC6B4\uB370 \uC815\uB82C 4 = \uBC30\uBD84 \uC815\uB82C 5 = \uB098\uB214 \uC815\uB82C (\uACF5\uBC31\uC5D0\uB9CC \uBC30\uBD84) \uC904 \uB098\uB214 \uB2E8\uC704 (\uB77C\uD2F4 \uBB38\uC790)"
      },
      {
        "id": "BreakLatinWord",
        "type": "PIT_UI1",
        "description": "0 = \uB2E8\uC5B4 1 = \uD558\uC774\uD508 2 = \uAE00\uC790"
      },
      {
        "id": "BreakNonLatinWord",
        "type": "PIT_UI1",
        "description": "\uB2E8\uC704 (\uBE44 \uB77C\uD2F4 \uBB38\uC790) TRUE = \uAE00\uC790, FALSE = \uC5B4\uC808"
      },
      {
        "id": "SnapToGrid",
        "type": "PIT_UI1",
        "description": "\uD3B8\uC9D1 \uC6A9\uC9C0\uC758 \uC904 \uACA9\uC790 \uC0AC\uC6A9 (on / off)"
      },
      {
        "id": "Condense",
        "type": "PIT_UI1",
        "description": "\uACF5\uBC31 \uCD5C\uC18C\uAC12 (0 - 75%)"
      },
      {
        "id": "WidowOrphan",
        "type": "PIT_UI1",
        "description": "\uC678\uD1A8\uC774\uC904 \uBCF4\uD638 (on / off)"
      },
      {
        "id": "KeepWithNext",
        "type": "PIT_UI1",
        "description": "\uB2E4\uC74C \uBB38\uB2E8\uACFC \uD568\uAED8 (on / off)"
      },
      {
        "id": "KeepLinesTogether",
        "type": "PIT_UI1",
        "description": "\uBB38\uB2E8 \uBCF4\uD638 (on / off)"
      },
      {
        "id": "PagebreakBefore",
        "type": "PIT_UI1",
        "description": "\uBB38\uB2E8 \uC55E\uC5D0\uC11C \uD56D\uC0C1 \uCABD \uB098\uB214 (on / off) \uC138\uB85C \uC815\uB82C 0 = \uAE00\uAF34\uAE30\uC900"
      },
      {
        "id": "TextAlignment",
        "type": "PIT_UI1",
        "description": "1 = \uC704 2 = \uAC00\uC6B4\uB370 3 = \uC544\uB798"
      },
      {
        "id": "FontLineHeight",
        "type": "PIT_UI1",
        "description": "\uAE00\uAF34\uC5D0 \uC5B4\uC6B8\uB9AC\uB294 \uC904 \uB192\uC774 (on / off) \uBB38\uB2E8 \uBA38\uB9AC \uBAA8\uC591 0 = \uC5C6\uC74C"
      },
      {
        "id": "HeadingType",
        "type": "PIT_UI1",
        "description": "1 = \uAC1C\uC694 2 = \uBC88\uD638 3 = \uBD88\uB9BF"
      },
      {
        "id": "Level",
        "type": "PIT_UI1",
        "description": "\uB2E8\uACC4 (0 - 6)"
      },
      {
        "id": "BorderConnect",
        "type": "PIT_UI1",
        "description": "\uBB38\uB2E8 \uD14C\uB450\uB9AC/\uBC30\uACBD - \uD14C\uB450\uB9AC \uC5F0\uACB0 (on / off)"
      },
      {
        "id": "BorderText",
        "type": "PIT_UI1",
        "description": "\uBB38\uB2E8 \uD14C\uB450\uB9AC/\uBC30\uACBD - \uC5EC\uBC31 \uBB34\uC2DC (0 = \uB2E8, 1 = \uD14D\uC2A4\uD2B8)"
      },
      {
        "id": "BorderOffsetLeft",
        "type": "PIT_I",
        "description": "\uBB38\uB2E8 \uD14C\uB450\uB9AC/\uBC30\uACBD - 4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC67C\uCABD"
      },
      {
        "id": "BorderOffsetRight",
        "type": "PIT_I",
        "description": "\uBB38\uB2E8 \uD14C\uB450\uB9AC/\uBC30\uACBD - 4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC624\uB978\uCABD"
      },
      {
        "id": "BorderOffsetTop",
        "type": "PIT_I",
        "description": "\uBB38\uB2E8 \uD14C\uB450\uB9AC/\uBC30\uACBD - 4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC704"
      },
      {
        "id": "BorderOffsetBottom",
        "type": "PIT_I",
        "description": "\uBB38\uB2E8 \uD14C\uB450\uB9AC/\uBC30\uACBD - 4\uBC29\uD5A5 \uAC04\uACA9 (HWPUNIT) : \uC544\uB798"
      },
      {
        "id": "TailType",
        "type": "PIT_UI1",
        "description": "\uBB38\uB2E8 \uAF2C\uB9AC \uBAA8\uC591 (\uB9C8\uC9C0\uB9C9 \uAF2C\uB9AC \uC904 \uC801\uC6A9) on/off"
      },
      {
        "id": "LineWrap",
        "type": "PIT_UI1",
        "description": "\uAE00\uAF34\uC5D0 \uC5B4\uC6B8\uB9AC\uB294 \uC904 \uB192\uC774 (on/off)"
      },
      {
        "id": "TabDef",
        "type": "PIT_SET",
        "description": "\uD0ED \uC815\uC758",
        "subType": "TabDef"
      },
      {
        "id": "Numbering",
        "type": "PIT_SET",
        "description": "\uBB38\uB2E8 \uBC88\uD638 \uBB38\uB2E8 \uBA38\uB9AC \uBAA8\uC591(HeadingType)\uC774 \u2018\uAC1C\uC694\u2019, \u2018\uBC88\uD638\u2019 \uC77C \uB54C \uC0AC\uC6A9",
        "subType": "NumberingShape"
      },
      {
        "id": "Bullet",
        "type": "PIT_SET",
        "description": "\uBD88\uB9BF \uBAA8\uC591 \uBB38\uB2E8 \uBA38\uB9AC \uBAA8\uC591(HeadingType)\uC774 \u2018\uBD88\uB9BF\u2019(\uAE00\uBA38\uB9AC\uD45C) \uC77C \uB54C \uC0AC\uC6A9",
        "subType": "BulletShape"
      },
      {
        "id": "BorderFill",
        "type": "PIT_SET",
        "description": "\uD14C\uB450\uB9AC/\uBC30\uACBD",
        "subType": "BorderFill"
      },
      {
        "id": "AutoSpaceEAsianEng",
        "type": "PIT_UI1",
        "description": "\uD55C\uAE00\uACFC \uC601\uC5B4 \uAC04\uACA9\uC744 \uC790\uB3D9 \uC870\uC808 (on/off)"
      },
      {
        "id": "AutoSpaceEAsianNum",
        "type": "PIT_UI1",
        "description": "\uD55C\uAE00\uACFC \uC22B\uC790 \uAC04\uACA9\uC744 \uC790\uB3D9 \uC870\uC808 (on/off)"
      },
      {
        "id": "SuppressLineNum",
        "type": "PIT_UI1",
        "description": "\uC904 \uBC88\uD638 \uD45C\uC2DC \uC5EC\uBD80"
      },
      {
        "id": "Checked",
        "type": "PIT_UI1",
        "description": "\uCCB4\uD06C \uAE00\uBA38\uB9AC\uD45C \uC0AC\uC6A9\uC2DC \uCCB4\uD06C \uC5EC\uBD80 (on/off) \uD14D\uC2A4\uD2B8 \uBC29\uD5A5"
      },
      {
        "id": "TextDir",
        "type": "PIT_UI1",
        "description": "0 = \uC790\uB3D9 1 = \uC624\uB978\uD3B8\uC5D0\uC11C \uC67C\uD3B8 2 = \uC67C\uD3B8\uC5D0\uC11C \uC624\uB978\uD3B8 (\uD55C/\uAE00 2022\uBD80\uD130 \uC9C0\uC6D0)"
      }
    ]
  },
  {
    "id": "Password",
    "description": "\uBB38\uC11C \uC554\uD638",
    "sourcePage": 107,
    "items": [
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "\uC554\uD638 \uBB38\uC790\uC5F4"
      },
      {
        "id": "FullRange",
        "type": "PIT_UI1",
        "description": "= \uC720\uB2C8\uCF54\uB4DC \uBAA8\uB4E0 \uBB38\uC790\uB97C \uC0AC\uC6A9, FALSE = \uC601\uBB38\uC790\uB9CC \uC0AC\uC6A9",
        "subType": "TRUE"
      },
      {
        "id": "Ask",
        "type": "PIT_UI1",
        "description": "= \uBB38\uC11C \uC554\uD638\uB97C \uD655\uC778, FALSE = \uBB38\uC11C \uC554\uD638\uB97C \uC124\uC815",
        "subType": "TRUE"
      },
      {
        "id": "Level",
        "type": "PIT_UI1",
        "description": "0 = \uBCF4\uC548 \uC218\uC900 \uB0AE\uC74C, 1 = \uBCF4\uC548 \uC218\uC900 \uB192\uC74C"
      },
      {
        "id": "RWAsk",
        "type": "PIT_UI1",
        "description": "\uC77D\uAE30/\uC4F0\uAE30 \uC554\uD638 \uC124\uC815\uC744 \uC704\uD574 \uC0C8\uB85C \uCD94\uAC00"
      },
      {
        "id": "ReadString",
        "type": "PIT_BSTR",
        "description": "\uC5F4\uAE30 \uC554\uD638 \uBB38\uC790\uC5F4"
      },
      {
        "id": "WriteString",
        "type": "PIT_BSTR",
        "description": "\uC4F0\uAE30 \uC554\uD638 \uBB38\uC790\uC5F4"
      },
      {
        "id": "ReadOnly",
        "type": "PIT_UI1",
        "description": "0 = \uC77D\uAE30 \uC804\uC6A9 \uC544\uB2D8, 1 = \uC77D\uAE30 \uC804\uC6A9 \uC5F4\uAE30"
      }
    ]
  },
  {
    "id": "Preference",
    "description": "\uD658\uACBD \uC124\uC815",
    "sourcePage": 108,
    "items": [
      {
        "id": "ShowSinglePage",
        "type": "PIT_I",
        "description": "\uD658\uACBD \uC124\uC815 PropertySheet\uC5D0 \uD45C\uC2DC\uD560 PropertyPage \uBC88\uD638 (\uD558\uB098\uB9CC \uC120\uD0DD)"
      },
      {
        "id": "ApplyLinkAttr",
        "type": "PIT_UI1",
        "description": "\uD558\uC774\uD37C\uB9C1\uD06C \uAE00\uC790 \uC18D\uC131 \uBB38\uC11C \uC804\uCCB4\uC5D0 \uC801\uC6A9\uD558\uAE30 \uC5EC\uBD80 (on/off)"
      },
      {
        "id": "ApplyForbidden",
        "type": "PIT_BSTR",
        "description": "(\uAE08\uCE59 \uCC98\uB9AC) \uC0C8 \uBB38\uC11C\uC5D0 \uAE30\uBCF8 \uAC12\uC73C\uB85C \uC124\uC815 (on/off)"
      },
      {
        "id": "StartForbiddenStr",
        "type": "PIT_BSTR",
        "description": "(\uAE08\uCE59 \uCC98\uB9AC) \uC0C8 \uBB38\uC11C\uC5D0 \uC801\uC6A9\uD560 \uC904 \uC55E \uAE08\uCE59 \uBB38\uC790\uC5F4"
      },
      {
        "id": "EndForbiddenStr",
        "type": "PIT_BSTR",
        "description": "(\uAE08\uCE59 \uCC98\uB9AC) \uC0C8 \uBB38\uC11C\uC5D0 \uC801\uC6A9\uD560 \uC904 \uB4A4 \uAE08\uCE59 \uBB38\uC790\uC5F4"
      },
      {
        "id": "UsePageLayout",
        "type": "PIT_UI1",
        "description": "\uC0C8 \uBB38\uC11C \uC18D\uC131\uC744 \uBCC0\uACBD\uD558\uBA74 \uC720\uD6A8\uD654\uB41C \uAC12\uC73C\uB85C \uD310\uB2E8\uD558\uACE0 \uC0AC\uC6A9\uD568"
      },
      {
        "id": "PasteObjectAsPict",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC(\uBA54\uD0C0\uD30C\uC77C) \uD615\uC2DD\uC73C\uB85C \uAC1C\uCCB4 \uBD99\uC774\uAE30 \uC5EC\uBD80 ure"
      },
      {
        "id": "HwpxFormatDefault",
        "type": "PIT_UI1",
        "description": "\uAE30\uBCF8 \uD3EC\uB9F7 \uC124\uC815 \uC5EC\uBD80 s",
        "subType": "hwpx"
      }
    ]
  },
  {
    "id": "Presentation",
    "description": "\uD504\uB808\uC820\uD14C\uC774\uC158",
    "sourcePage": 109,
    "items": [
      {
        "id": "Effect",
        "type": "PIT_UI",
        "description": "\uD654\uBA74 \uC804\uD658 \uD6A8\uACFC"
      },
      {
        "id": "Sound",
        "type": "PIT_BINDATA",
        "description": "\uD6A8\uACFC\uC74C"
      },
      {
        "id": "InvertText",
        "type": "PIT_I",
        "description": "\uAC80\uC740\uC0C9 \uAE00\uC790\uB97C \uD770\uC0C9\uC73C\uB85C"
      },
      {
        "id": "ShowMode",
        "type": "PIT_I",
        "description": "\uC790\uB3D9 \uC804\uD658 \uBAA8\uB4DC"
      },
      {
        "id": "ShowPage",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uCABD"
      },
      {
        "id": "ShowTime",
        "type": "PIT_UI",
        "description": "\uC804\uD658 \uC2DC\uAC04 (\uCD08)"
      }
    ]
  },
  {
    "id": "Print",
    "description": "\uC778\uC1C4",
    "sourcePage": 110,
    "items": [
      {
        "id": "Range",
        "type": "PIT_UI1",
        "description": "3 = \uD604\uC7AC\uAE4C\uC9C0 4 = \uC77C\uBD80\uBD84 5 = \uC120\uD0DD\uD55C \uCABD\uB9CC 6 = \uD604\uC7AC \uBB38\uC11C (\uC5F0\uACB0\uB41C \uBB38\uC11C \uBBF8\uD3EC\uD568) 7 = \uD604\uC7AC \uAD6C\uC5ED"
      },
      {
        "id": "RangeCustom",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC785\uB825\uD55C \uC778\uC1C4 \uBC94\uC704"
      },
      {
        "id": "RangeIncludeLinkedDoc",
        "type": "PIT_UI1",
        "description": "\uC5F0\uACB0\uB41C \uBB38\uC11C \uD3EC\uD568"
      },
      {
        "id": "NumCopy",
        "type": "PIT_UI2",
        "description": "\uC778\uC1C4 \uB9E4\uC218"
      },
      {
        "id": "Collate",
        "type": "PIT_UI1",
        "description": "\uD55C \uBD80\uC529 \uCC0D\uAE30 \uC778\uC1C4 \uBC29\uBC95 0 = \uC790\uB3D9 \uC778\uC1C4 1 = \uACF5\uAE09 \uC6A9\uC9C0\uC5D0 \uB9DE\uCD94\uC5B4 2 = \uB098\uB220 \uCC0D\uAE30 3 = \uC790\uB3D9\uC73C\uB85C \uBAA8\uC544 \uCC0D\uAE30"
      },
      {
        "id": "PrintMethod",
        "type": "PIT_UI1",
        "description": "4 = 2\uCABD\uC529 \uBAA8\uC544 \uCC0D\uAE30 5 = 3\uCABD\uC529 \uBAA8\uC544 \uCC0D\uAE30 6 = 4\uCABD\uC529 \uBAA8\uC544 \uCC0D\uAE30 7 = 6\uCABD\uC529 \uBAA8\uC544 \uCC0D\uAE30 8 = 8\uCABD\uC529 \uBAA8\uC544 \uCC0D\uAE30 9 = 9\uCABD\uC529 \uBAA8\uC544 \uCC0D\uAE30 10 = 16\uCABD\uC529 \uBAA8\uC544 \uCC0D\uAE30"
      },
      {
        "id": "PrinterPaperSize",
        "type": "PIT_I",
        "description": "\uACF5\uAE09\uC6A9\uC9C0 \uC885\uB958(DEVMODE.dmPaperSize)"
      },
      {
        "id": "PrinterPaperWidth",
        "type": "PIT_I",
        "description": "\uACF5\uAE09\uC6A9\uC9C0 \uC885\uB958(DEVMODE.dmPaperWidth)"
      },
      {
        "id": "PrinterPaperLength",
        "type": "PIT_I",
        "description": "\uACF5\uAE09\uC6A9\uC9C0 \uC885\uB958(DEVMODE.dmPaperLength)"
      },
      {
        "id": "PrintAutoHeadNote",
        "type": "PIT_UI1",
        "description": "\uBA38\uB9AC\uB9D0 \uC790\uB3D9 \uC778\uC1C4"
      },
      {
        "id": "PrintAutoFootNote",
        "type": "PIT_UI1",
        "description": "\uAF2C\uB9AC\uB9D0 \uC790\uB3D9 \uC778\uC1C4"
      },
      {
        "id": "PrintAutoHeadnoteLtext",
        "type": "PIT_BSTR",
        "description": "\uC790\uB3D9 \uBA38\uB9AC\uB9D0\uC758 \uC67C\uCABD String"
      },
      {
        "id": "PrintAutoHeadnoteCtext",
        "type": "PIT_BSTR",
        "description": "\uC790\uB3D9 \uBA38\uB9AC\uB9D0\uC758 \uAC00\uC6B4\uB370 String"
      },
      {
        "id": "PrintAutoHeadnoteRtext",
        "type": "PIT_BSTR",
        "description": "\uC790\uB3D9 \uBA38\uB9AC\uB9D0\uC758 \uC624\uB978\uCABD String"
      },
      {
        "id": "PrintAutoFootnoteLtext",
        "type": "PIT_BSTR",
        "description": "\uC790\uB3D9 \uAF2C\uB9AC\uB9D0\uC758 \uC67C\uCABD String"
      },
      {
        "id": "PrintAutoFootnoteCtext",
        "type": "PIT_BSTR",
        "description": "\uC790\uB3D9 \uAF2C\uB9AC\uB9D0\uC758 \uAC00\uC6B4\uB370 String"
      },
      {
        "id": "PrintAutoFootnoteRtext",
        "type": "PIT_BSTR",
        "description": "\uC790\uB3D9 \uAF2C\uB9AC\uB9D0\uC758 \uC624\uB978\uCABD String"
      },
      {
        "id": "PrinterName",
        "type": "PIT_BSTR",
        "description": "\uD504\uB9B0\uD130"
      },
      {
        "id": "PrintToFile",
        "type": "PIT_UI1",
        "description": "\uC778\uC1C4 \uACB0\uACFC\uB97C \uD30C\uC77C\uB85C \uC800\uC7A5"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uC778\uC1C4 \uACB0\uACFC\uB97C \uC800\uC7A5\uD560 \uD30C\uC77C \uC774\uB984"
      },
      {
        "id": "ReverseOrder",
        "type": "PIT_UI1",
        "description": "\uC5ED\uC21C \uC778\uC1C4"
      },
      {
        "id": "Pause",
        "type": "PIT_UI2",
        "description": "\uB04A\uC5B4 \uCC0D\uAE30 \uB9E4\uC218"
      },
      {
        "id": "PrintImage",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4"
      },
      {
        "id": "PrintDrawObj",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4"
      },
      {
        "id": "PrintClickHere",
        "type": "PIT_UI1",
        "description": "\uB204\uB984\uD2C0"
      },
      {
        "id": "PrintCropMark",
        "type": "PIT_UI1",
        "description": "\uD3B8\uC9D1 \uC6A9\uC9C0 \uD45C\uC2DC"
      },
      {
        "id": "IdcPrintWallPaper",
        "type": "PIT_UI1",
        "description": "\uBC30\uACBD \uADF8\uB9BC"
      },
      {
        "id": "LastBlankPage",
        "type": "PIT_UI1",
        "description": "\uBE48 \uB9C8\uC9C0\uB9C9 \uCABD"
      },
      {
        "id": "BinderHoleType",
        "type": "PIT_UI1",
        "description": "\uBC14\uC778\uB354 \uAD6C\uBA4D"
      },
      {
        "id": "EvenOddPageType",
        "type": "PIT_UI1",
        "description": "\uD640\uC9DD \uC778\uC1C4"
      },
      {
        "id": "ZoomX",
        "type": "PIT_UI2",
        "description": "\uAC00\uB85C \uD655\uB300"
      },
      {
        "id": "ZoomY",
        "type": "PIT_UI2",
        "description": "\uC138\uB85C \uD655\uB300"
      },
      {
        "id": "Flags",
        "type": "PIT_UI",
        "description": "\uBB38\uC81C \uD574\uACB0\uC744 \uC704\uD55C \uACE0\uAE09 \uC120\uD0DD \uC0AC\uD56D \uC778\uC1C4 \uBC29\uD5A5(\uC7A5\uCE58) 0 : \uD504\uB9B0\uD130"
      },
      {
        "id": "Device",
        "type": "PIT_UI1",
        "description": "1: \uD329\uC2A4 2: \uADF8\uB9BC\uC73C\uB85C \uC800\uC7A5 3: PDF \uD30C\uC77C\uB85C \uC800\uC7A5 4: \uBBF8\uB9AC\uBCF4\uAE30"
      },
      {
        "id": "PrintFormObj",
        "type": "PIT_UI1",
        "description": "\uC591\uC2DD \uAC1C\uCCB4 \uCD9C\uB825\uC5EC\uBD80"
      },
      {
        "id": "PrintMarkPen",
        "type": "PIT_UI1",
        "description": "\uD615\uAD11\uD39C \uCD9C\uB825\uC5EC\uBD80"
      },
      {
        "id": "PrintMemo",
        "type": "PIT_UI1",
        "description": "\uBA54\uBAA8 \uCD9C\uB825\uC5EC\uBD80"
      },
      {
        "id": "PrintMemoContents",
        "type": "PIT_UI1",
        "description": "\uBA54\uBAA8 \uB0B4\uC6A9 \uCD9C\uB825\uC5EC\uBD80"
      },
      {
        "id": "PrintRevision",
        "type": "PIT_UI1",
        "description": "\uAD50\uC815\uBD80\uD638 \uCD9C\uB825\uC5EC\uBD80"
      },
      {
        "id": "PrintWatermark",
        "type": "PIT_SET",
        "description": "\uC778\uC1C4\uC6CC\uD130\uB9C8\uD06C",
        "subType": "PrintWatermark"
      },
      {
        "id": "UserOrder",
        "type": "PIT_UI1",
        "description": "\uC0AC\uC6A9\uC790\uAC00 \uC785\uB825\uD55C \uC21C\uC11C\uB300\uB85C \uC778\uC1C4"
      },
      {
        "id": "OverlapSize",
        "type": "PIT_UI2",
        "description": "\uB098\uB220\uCC0D\uAE30\uC2DC \uB0B4\uC6A9\uC774 \uACB9\uCE58\uB294 \uD06C\uAE30"
      },
      {
        "id": "UsingPagenum",
        "type": "PIT_UI1",
        "description": "\uBB38\uC11C\uC758 \uCABD \uBC88\uD638\uB85C \uC785\uB825"
      },
      {
        "id": "PrintBarcode",
        "type": "PIT_UI1",
        "description": "\uBC14\uCF54\uB4DC"
      },
      {
        "id": "PrintPronounce",
        "type": "PIT_UI1",
        "description": "\uD55C\uC790/\uC77C\uC5B4 \uBC1C\uC74C \uD45C\uC2DC"
      },
      {
        "id": "PrintColorSet",
        "type": "PIT_UI",
        "description": "\uC0C9 \uBCC0\uACBD \uC778\uC1C4, 0 = normal, 1 = gary, 2 = light gray"
      },
      {
        "id": "PrintWithoutBlank",
        "type": "PIT_I",
        "description": "\uBE48 \uCABD \uC5C6\uC774 \uC774\uC5B4\uC11C \uC778\uC1C4"
      }
    ]
  },
  {
    "id": "PrintToImage",
    "description": "\uADF8\uB9BC\uC73C\uB85C \uC800\uC7A5",
    "sourcePage": 113,
    "items": [
      {
        "id": "Format",
        "type": "PIT_UI1",
        "description": "2 : GIF 3 : PNG 4 : JPG 5 : WMF"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uADF8\uB9BC \uACBD\uB85C"
      },
      {
        "id": "ColorDepth",
        "type": "PIT_UI1",
        "description": "\uC0C9\uC0C1\uC218 (bits: 8, 16...)"
      },
      {
        "id": "Resolution",
        "type": "PIT_UI2",
        "description": "\uD574\uC0C1\uB3C4 \uC778\uC1C4 \uBC94\uC704 0 : \uBB38\uC11C \uC804\uCCB4 (\uC5F0\uACB0\uB41C \uBB38\uC11C \uD3EC\uD568) 1 : \uD604\uC7AC \uD398\uC774\uC9C0\uB9CC 2 : \uD604\uC7AC \uD398\uC774\uC9C0\uBD80\uD130"
      },
      {
        "id": "Range",
        "type": "PIT_UI1",
        "description": "3 : \uD604\uC7AC \uD398\uC774\uC9C0\uAE4C\uC9C0 4 : \uC0AC\uC6A9\uC790 \uC815\uC758 5 : \uC120\uD0DD\uD55C \uCABD\uB9CC 6 : \uD604\uC7AC \uBB38\uC11C (\uC5F0\uACB0\uB41C \uBB38\uC11C \uBBF8\uD3EC\uD568) 7 : \uD604\uC7AC \uAD6C\uC5ED"
      },
      {
        "id": "Width",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uB108\uBE44(pixel), (\uD55C/\uAE00 2022\uBD80\uD130 \uC9C0\uC6D0)"
      },
      {
        "id": "Height",
        "type": "PIT_UI",
        "description": "\uADF8\uB9BC \uB192\uC774(pixel), (\uD55C/\uAE00 2022\uBD80\uD130 \uC9C0\uC6D0)"
      }
    ]
  },
  {
    "id": "PrintWatermark",
    "description": "\uC6CC\uD130\uB9C8\uD06C \uC18D\uC131",
    "sourcePage": 114,
    "items": [
      {
        "id": "WatermarkType",
        "type": "PIT_UI",
        "description": "0 = \uC6CC\uD130\uB9C8\uD06C \uC5C6\uC74C 1 = \uADF8\uB9BC \uC6CC\uD130\uB9C8\uD06C 2 = \uAE00\uC790 \uC6CC\uD130\uB9C8\uD06C"
      },
      {
        "id": "PosPage",
        "type": "PIT_UI1",
        "description": "\uC6CC\uD130\uB9C8\uD06C\uC758 \uC704\uCE58 \uAE30\uC900 : 0 = \uC885\uC774 \uAE30\uC900, 1 = \uCABD \uAE30\uC900"
      },
      {
        "id": "TextWrap",
        "type": "PIT_UI1",
        "description": "\uC6CC\uD130\uB9C8\uD06C\uC758 \uBC30\uCE58 : 0 = \uAE00 \uB4A4\uB85C, 1 = \uAE00 \uC55E\uC73C\uB85C"
      },
      {
        "id": "AlphaText",
        "type": "PIT_UI1",
        "description": "\uAE00\uC790 \uD22C\uBA85\uB3C4 (0 ~ 255)"
      },
      {
        "id": "AlphaImage",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uD22C\uBA85\uB3C4 (0 ~ 255)"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uADF8\uB9BC \uD30C\uC77C\uC758 \uACBD\uB85C or \uADF8\uB9BC\uD30C\uC77C \uC0BD\uC785\uC77C \uACBD\uC6B0\uC5D0\uB294 binary data"
      },
      {
        "id": "PicEffect",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uD6A8\uACFC : 0 = \uC2E4\uC81C \uC774\uBBF8\uC9C0 \uADF8\uB300\uB85C, 1 = \uADF8\uB808\uC774\uC2A4\uCF00\uC77C, 2 = \uD751\uBC31\uD6A8\uACFC"
      },
      {
        "id": "Brightness",
        "type": "PIT_I1",
        "description": "\uBA85\uB3C4 (-100 ~ 100)"
      },
      {
        "id": "Contrast",
        "type": "PIT_I1",
        "description": "\uBC1D\uAE30 (-100 ~ 100) \uCC44\uC6B0\uAE30 \uC720\uD615 0 = \uBC14\uB451\uD310\uC2DD\uC73C\uB85C - \uBAA8\uB450 8 = \uAC00\uC6B4\uB370 \uC544\uB798\uB85C 1 = \uBC14\uB451\uD310\uC2DD\uC73C\uB85C - \uAC00\uB85C/\uC704 9 = \uC67C\uCABD \uAC00\uC6B4\uB370\uB85C 2 = \uBC14\uB451\uD310\uC2DD\uC73C\uB85C - \uAC00\uB85C/\uC544\uB798 10 = \uC67C\uCABD \uC704\uB85C"
      },
      {
        "id": "DrawFillImageType",
        "type": "PIT_I",
        "description": "3 = \uBC14\uB451\uD310\uC2DD\uC73C\uB85C - \uC138\uB85C/\uC67C\uCABD 11 = \uC67C\uCABD \uC544\uB798\uB85C 4 = \uBC14\uB451\uD310\uC2DD\uC73C\uB85C - \uC138\uB85C/\uC624\uB978 12 = \uC624\uB978\uCABD \uAC00\uC6B4\uB370\uB85C \uCABD 13 = \uC624\uB978\uCABD \uC704\uB85C 5 = \uD06C\uAE30\uC5D0 \uB9DE\uCD94\uC5B4 14 = \uC624\uB978\uCABD \uC544\uB798\uB85C 6 = \uAC00\uC6B4\uB370\uB85C 15 = \uC6D0\uB798\uD06C\uAE30\uC5D0 \uBE44\uB840\uD558\uC5EC 7 = \uAC00\uC6B4\uB370 \uC704\uB85C"
      },
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "\uAE00\uB9F5\uC2DC\uC5D0 \uB123\uC744 \uBB38\uC790\uC5F4 \uB0B4\uC6A9 : \uB0B4\uC6A9"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34"
      },
      {
        "id": "FontType",
        "type": "PIT_UI1",
        "description": "\uAE00\uAF34 \uC18D\uC131 : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontSize",
        "type": "PIT_I",
        "description": "\uAE00\uAF34 \uD06C\uAE30 (HWPUNIT : 2500(25pt) ~ 25400(254pt)"
      },
      {
        "id": "ShadowType",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC\uC790 \uC885\uB958 : 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I1",
        "description": "\uCD95 \uADF8\uB9BC\uC790 \uAC04\uACA9 (-48% ~ 48% )",
        "subType": "X"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I1",
        "description": "\uCD95 \uADF8\uB9BC\uC790 \uAC04\uACA9 (-48% ~ 48% )",
        "subType": "Y"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "\uADF8\uB9BC\uC790 \uC0C9 (COLORREF)"
      },
      {
        "id": "FontColor",
        "type": "PIT_UI4",
        "description": "\uAE00\uC790\uC0C9 (COLORREF)"
      },
      {
        "id": "RotateAngle",
        "type": "PIT_I",
        "description": "\uD68C\uC804\uAC01\uB3C4 (-360 ~ 360)"
      },
      {
        "id": "WaterMarkEff",
        "type": "PIT_UI1",
        "description": "\uC6CC\uD130\uB9C8\uD06C \uD6A8\uACFC : 0 = off, 1 = on"
      }
    ]
  },
  {
    "id": "QCorrect",
    "description": "\uBE60\uB978 \uAD50\uC815",
    "sourcePage": 116,
    "items": [
      {
        "id": "LauncherKey",
        "type": "PIT_UI1",
        "description": "\uBE60\uB978 \uAD50\uC815\uC744 \uC2E4\uD589\uD55C \uD0A4 \uC815\uBCF4"
      },
      {
        "id": "HyperLinkRunKey",
        "type": "PIT_UI1",
        "description": "\uB610\uB294 email \uD558\uC774\uD37C\uB9C1\uD06C \uC791\uC131 \uD0A4 \uC815\uBCF4",
        "subType": "URL"
      }
    ]
  },
  {
    "id": "RevisionDef",
    "description": "\uAD50\uC815\uBD80\uD638 \uB370\uC774\uD130",
    "sourcePage": 117,
    "items": [
      {
        "id": "SignType",
        "type": "PIT_UI",
        "description": "5 = \uC9C0\uC6C0\uD45C 18 = \uC624\uB978\uC790\uB9AC \uC62E\uAE40\uD45C 6 = \uBD99\uC784\uD45C 19 = \uC790\uB8CC\uC5F0\uACB0 7 = \uBE8C\uD45C 20 = \uC67C\uC790\uB9AC \uC62E\uAE40\uD45C 8 = \uC904 \uC774\uC74C\uD45C 21 = \uBD80\uBD84\uC790\uB9AC \uC62E\uAE40\uD45C 9 = \uC904 \uBD99\uC784\uD45C 22 = \uC904 \uC11C\uB85C \uBC14\uAFC8\uD45C 10 = \uD1B1\uB2C8\uD45C 23 = \uC790\uB9AC\uBC14\uAFC8 \uB098\uB214\uD45C(\uB0B4\uBD80\uC6A9) 11 = \uC0DD\uAC01\uD45C 24 = \uC904 \uC11C\uB85C \uBC14\uAFC8 \uB098\uB214\uD45C(\uB0B4\uBD80\uC6A9) 12 = \uCE6D\uCC2C\uD45C"
      },
      {
        "id": "SubText",
        "type": "PIT_BSTR",
        "description": "\uAD50\uC815 \uBB38\uC790\uC5F4 \uAD50\uC815 \uBB38\uC790\uC5F4\uC744 \uAC00\uC9C8 \uC218 \uC788\uB294 \uAD50\uC815\uBD80\uD638\uB9CC \uC801\uC6A9. \uB098\uBA38\uC9C0\uB294 \uBB34\uC2DC"
      },
      {
        "id": "Margin",
        "type": "PIT_I4",
        "description": "\uC5EC\uBC31(HWPUNIT). \uC624\uB978\uC790\uB9AC \uC62E\uAE40\uD45C\uC640 \uC67C\uC790\uB9AC \uC62E\uAE40\uD45C\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC801\uC6A9."
      },
      {
        "id": "BeginPos",
        "type": "PIT_I4",
        "description": "\uC2DC\uC791\uC704\uCE58(HWPUNIT). \uC624\uB978\uC790\uB9AC \uC62E\uAE40\uD45C\uC640 \uC67C\uC790\uB9AC \uC62E\uAE40\uD45C\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC801\uC6A9."
      }
    ]
  },
  {
    "id": "SaveFootnote",
    "description": "\uC8FC\uC11D \uC800\uC7A5",
    "sourcePage": 118,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uC774\uB984 \uC635\uC158"
      },
      {
        "id": "Flag",
        "type": "PIT_UI1",
        "description": "1 : \uAC01\uC8FC \uC800\uC7A5 2 : \uBBF8\uC8FC \uC800\uC7A5 3 : \uAC01\uC8FC/\uBBF8\uC8FC \uC800\uC7A5"
      }
    ]
  },
  {
    "id": "ScriptMacro",
    "description": "\uC2A4\uD06C\uB9BD\uD2B8 \uB9E4\uD06C\uB85C",
    "sourcePage": 119,
    "items": [
      {
        "id": "Index",
        "type": "PIT_I",
        "description": "\uC815\uC758(or \uC2E4\uD589)\uD560 \uB9E4\uD06C\uB85C\uC758 \uC778\uB371\uC2A4"
      },
      {
        "id": "RepeatCount",
        "type": "PIT_I",
        "description": "\uC2E4\uD589 \uBC18\uBCF5 \uD69F\uC218"
      },
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "\uB9E4\uD06C\uB85C \uC774\uB984"
      },
      {
        "id": "Detail",
        "type": "PIT_BSTR",
        "description": "\uB9E4\uD06C\uB85C \uC124\uBA85"
      }
    ]
  },
  {
    "id": "SecDef",
    "description": "\uAD6C\uC5ED\uC758 \uC18D\uC131",
    "sourcePage": 120,
    "items": [
      {
        "id": "TextDirection",
        "type": "PIT_UI1",
        "description": "\uAE00\uC790 \uBC29\uD5A5"
      },
      {
        "id": "StartsOn",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED \uB098\uB214\uC73C\uB85C \uC0C8 \uD398\uC774\uC9C0\uAC00 \uC0DD\uAE38 \uB54C\uC758 \uD398\uC774\uC9C0 \uBC88\uD638 \uC801\uC6A9 \uC635\uC158 0 = \uC774\uC5B4\uC11C, 1 = \uD640\uC218, 2 = \uC9DD\uC218, 3 = \uC784\uC758 \uAC12"
      },
      {
        "id": "LineGrid",
        "type": "PIT_I4",
        "description": "\uC138\uB85C\uB85C \uC904\uB9DE\uCDA4\uC744 \uD560\uC9C0 \uC5EC\uBD80. 0 = off, 1 - n = \uAC04\uACA9\uC744 HWPUNIT \uB2E8\uC704\uB85C \uC9C0\uC815"
      },
      {
        "id": "CharGrid",
        "type": "PIT_I4",
        "description": "\uAC00\uB85C\uB85C \uC904\uB9DE\uCDA4\uC744 \uD560\uC9C0 \uC5EC\uBD80. 0 = off, 1 - n = \uAC04\uACA9\uC744 HWPUNIT \uB2E8\uC704\uB85C \uC9C0\uC815"
      },
      {
        "id": "PageDef",
        "type": "PIT_SET",
        "description": "\uC6A9\uC9C0 \uC124\uC815 \uC815\uBCF4",
        "subType": "PageDef"
      },
      {
        "id": "HideEmptyLine",
        "type": "PIT_UI1",
        "description": "\uBE48 \uC904 \uAC10\uCDA4 on / off"
      },
      {
        "id": "SpaceBetweenColumns",
        "type": "PIT_I4",
        "description": "\uB3D9\uC77C\uD55C \uD398\uC774\uC9C0\uC5D0\uC11C \uC11C\uB85C \uB2E4\uB978 \uB2E8 \uC0AC\uC774\uC758 \uAC04\uACA9"
      },
      {
        "id": "TabStop",
        "type": "PIT_I4",
        "description": "\uAE30\uBCF8 \uD0ED \uAC04\uACA9"
      },
      {
        "id": "FootnoteShape",
        "type": "PIT_SET",
        "description": "\uAC01\uC8FC \uBAA8\uC591",
        "subType": "FootnoteShape"
      },
      {
        "id": "EndnoteShape",
        "type": "PIT_SET",
        "description": "\uBBF8\uC8FC \uBAA8\uC591",
        "subType": "FootnoteShape"
      },
      {
        "id": "HideHeader",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uBA38\uB9AC\uB9D0 \uAC10\uCD94\uAE30 \uC635\uC158 on / off"
      },
      {
        "id": "HideFooter",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uAF2C\uB9AC\uB9D0 \uAC10\uCD94\uAE30 \uC635\uC158 on / off"
      },
      {
        "id": "HideMasterPage",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uBC14\uD0D5\uCABD \uAC10\uCD94\uAE30 \uC635\uC158 on / off"
      },
      {
        "id": "HideBorder",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uD14C\uB450\uB9AC \uAC10\uCD94\uAE30 \uC635\uC158 on / off"
      },
      {
        "id": "HideFill",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uBC30\uACBD \uAC10\uCD94\uAE30 \uC635\uC158 on / off"
      },
      {
        "id": "HidePageNumPos",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uCABD\uBC88\uD638 \uAC10\uCD94\uAE30 \uC635\uC158 on / off"
      },
      {
        "id": "FirstBorder",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uD14C\uB450\uB9AC \uD45C\uC2DC \uC635\uC158 on / off"
      },
      {
        "id": "FirstFill",
        "type": "PIT_UI1",
        "description": "\uAD6C\uC5ED\uC758 \uCCAB \uCABD\uC5D0\uB9CC \uBC30\uACBD \uD45C\uC2DC \uC635\uC158 on / off"
      },
      {
        "id": "OutlineShape",
        "type": "PIT_SET",
        "description": "\uAC1C\uC694 \uBC88\uD638",
        "subType": "NumberingShape"
      },
      {
        "id": "PageBorderFillBoth",
        "type": "PIT_SET",
        "description": "\uCABD \uD14C\uB450\uB9AC/\uBC30\uACBD (\uC591\uCABD)",
        "subType": "PageBorderFill"
      },
      {
        "id": "PageBorderFillEven",
        "type": "PIT_SET",
        "description": "\uCABD \uD14C\uB450\uB9AC/\uBC30\uACBD (\uC9DD\uC218)",
        "subType": "PageBorderFill"
      },
      {
        "id": "PageBorderFillOdd",
        "type": "PIT_SET",
        "description": "\uCABD \uD14C\uB450\uB9AC/\uBC30\uACBD (\uD640\uC218)",
        "subType": "PageBorderFill"
      },
      {
        "id": "PageNumber",
        "type": "PIT_UI2",
        "description": "\uCABD \uC2DC\uC791 \uBC88\uD638 0 = \uC55E \uAD6C\uC5ED\uC5D0 \uC774\uC5B4, n = \uC0C8 \uBC88\uD638\uB85C \uC2DC\uC791"
      },
      {
        "id": "FigureNumber",
        "type": "PIT_UI2",
        "description": "\uADF8\uB9BC \uC2DC\uC791 \uBC88\uD638 0 = \uC55E \uAD6C\uC5ED\uC5D0 \uC774\uC5B4, n = \uC0C8 \uBC88\uD638\uB85C \uC2DC\uC791"
      },
      {
        "id": "TableNumber",
        "type": "PIT_UI2",
        "description": "\uD45C \uC2DC\uC791 \uBC88\uD638 0 = \uC55E \uAD6C\uC5ED\uC5D0 \uC774\uC5B4, n = \uC0C8 \uBC88\uD638\uB85C \uC2DC\uC791"
      },
      {
        "id": "EquationNumber",
        "type": "PIT_UI2",
        "description": "\uC218\uC2DD \uC2DC\uC791 \uBC88\uD638 0 = \uC55E \uAD6C\uC5ED\uC5D0 \uC774\uC5B4, n = \uC0C8 \uBC88\uD638\uB85C \uC2DC\uC791"
      },
      {
        "id": "WongojiFormat",
        "type": "PIT_UI1",
        "description": "\uC6D0\uACE0\uC9C0 \uBC29\uC2DD\uC758 \uD3EC\uB9F7\uD305. CHAR_GRID\uAC00 \uC9C0\uC815\uB418\uC5B4\uC57C \uD568."
      },
      {
        "id": "MemoShape",
        "type": "PIT_SET",
        "description": "\uBA54\uBAA8 \uBAA8\uC591",
        "subType": "MemoShape"
      },
      {
        "id": "TextVerticalWidthHead",
        "type": "PIT_I",
        "description": "\uBA38\uB9AC\uB9D0/\uAF2C\uB9AC\uB9D0 \uC138\uB85C\uC4F0\uAE30 \uC5EC\uBD80 \uC801\uC6A9\uBC94\uC704 0 = \uC120\uD0DD\uB41C \uAD6C\uC5ED"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "1 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4 2 = \uD604\uC7AC \uAD6C\uC5ED 3 = \uBB38\uC11C\uC804\uCCB4 4 = \uC0C8 \uAD6C\uC5ED : \uD604\uC7AC \uC704\uCE58\uBD80\uD130 \uC0C8\uB85C \uC801\uC6A9\uBC94\uC704\uC758 \uBD84\uB958 (\uB300\uD654\uC0C1\uC790\uB97C \uD638\uCD9C\uD560 \uACBD\uC6B0 \uC0AC\uC6A9) 0x01 = \uC120\uD0DD\uB41C \uAD6C\uC5ED"
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": "0x02 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4 0x04 = \uD604\uC7AC \uAD6C\uC5ED 0x08 = \uBB38\uC11C\uC804\uCCB4 0x10 = \uC0C8 \uAD6C\uC5ED : \uD604\uC7AC \uC704\uCE58\uBD80\uD130 \uC0C8\uB85C"
      },
      {
        "id": "ApplyToPageBorderFill",
        "type": "PIT_UI1",
        "description": "\uCC44\uC6B8 \uC601\uC5ED \uBD84\uB958 (PageBorder \uC561\uC158\uC5D0\uC11C \uC0AC\uC6A9) 0 = \uC885\uC774, 1 = \uCABD, 2 = \uD14C\uB450\uB9AC"
      },
      {
        "id": "LineNumberRestart",
        "type": "PIT_UI1",
        "description": "\uC904 \uBC88\uD638 \uD615\uC2DD 0 = \uAE30\uBCF8, 1 = \uCABD\uB9C8\uB2E4, 2 = \uAD6C\uC5ED\uB9C8\uB2E4, 3 = \uC774\uC5B4\uC11C"
      },
      {
        "id": "LineNumberCountBy",
        "type": "PIT_UI2",
        "description": "\uC904 \uBC88\uD638 \uD45C\uC2DC \uAC04\uACA9"
      },
      {
        "id": "LineNumberDistance",
        "type": "PIT_UI",
        "description": "\uBCF8\uBB38\uACFC\uC758 \uC904 \uBC88\uD638 \uAC04\uACA9 (HWPUNIT)"
      },
      {
        "id": "LineNumberStart",
        "type": "PIT_UI2",
        "description": "\uC904 \uBC88\uD638 \uC2DC\uC791 \uBC88\uD638"
      },
      {
        "id": "ShowLineNumbers",
        "type": "PIT_UI1",
        "description": "\uC904 \uBC88\uD638 \uD45C\uC2DC \uC5EC\uBD80 (On/Off)"
      },
      {
        "id": "SectionApplyString",
        "type": "PIT_SET",
        "description": "\uC801\uC6A9 \uBC94\uC704 \uC11C\uBE0C\uC14B, (\uD55C/\uAE00 2022\uBD80\uD130 \uC9C0\uC6D0)",
        "subType": "PageBorderFill"
      }
    ]
  },
  {
    "id": "SectionApply",
    "description": "\uC801\uC6A9\uD560 \uAD6C\uC5ED \uC124\uC815",
    "sourcePage": 122,
    "items": [
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "\uC801\uC6A9\uBC94\uC704 \uBD84\uB958(ApplyClass)\uC5D0\uC11C \uD558\uB098\uC758 \uAC12"
      },
      {
        "id": "String",
        "type": "PIT_ARRAY",
        "description": "ApplyTo\uB97C \uBB38\uC790\uC5F4\uB85C \uBCC0\uD658\uD55C \uAC12\uC758 \uBC30\uC5F4",
        "subType": "PIT_BSTR"
      },
      {
        "id": "Index",
        "type": "PIT_I",
        "description": "\uB97C \uBCC0\uD658\uD55C ComboBox\uC758 Index",
        "subType": "ApplyTo"
      },
      {
        "id": "ConvAplly2Index",
        "type": "PIT_I",
        "description": "\uAC12\uC744 ComboBox\uC758 Index\uB85C \uBCC0\uD658\uD560\uC9C0 \uC5EC\uBD80 FALSE\uC774\uBA74 IndexToApply\uB85C \uBCC0\uD658\uC774 \uC774\uB8E8\uC5B4\uC9C4\uB2E4. (\uBC18\uB300\uBCC0\uD658) \uC801\uC6A9\uBC94\uC704 \uBD84\uB958(ApplyClass)\uB97C \uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC124\uC815\uD560 \uB54C \uC0AC\uC6A9.",
        "subType": "ApplyTo"
      },
      {
        "id": "Category",
        "type": "PIT_I",
        "description": '\uC544\uC774\uD15C\uC774 \uC5C6\uC73C\uBA74 \uF53A\uAE00\uC774 \uD604\uC7AC \uC0C1\uD0DC\uC5D0 \uB9DE\uCDB0 \uC801\uC6A9\uBC94\uC704 \uBD84\uB958 (ApplyClass)\uB97C \uC124\uC815\uD55C\uB2E4. (\uC77C\uBC18\uC801\uC73C\uB85C \uC124\uC815\uD558\uC9C0 \uC54A\uACE0 \uC0AC\uC6A9) \uC0C1\uAE30 \uD30C\uB77C\uBA54\uD130\uC14B\uC740 \uC2E4\uC81C\uB85C \uF53A\uAE00\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uD30C\uB77C\uBA54\uD130\uC14B\uC774 \uC544\uB2CC \uC77C\uC885\uC758 \uB3C4\uAD6C\uC6A9 \uD30C\uB77C\uBA54\uD130\uC14B\uC774\uB2E4. \uC989, \uF53A\uAE00\uC758 \uAE30\uB2A5\uC744 \uC704\uD574 \uC874\uC7AC\uD558\uC9C0 \uC54A\uB294 \uB2E4. \uC704 \uD30C\uB77C\uBA54\uD130\uC14B\uC740 GetSectionApplyString\uACFC GetSectionApplyTo \uC561\uC158\uC5D0\uC11C\uB9CC \uC0AC\uC6A9\uB41C\uB2E4. \uC774 \uB450 \uC561\uC158\uC740 \uF53A\uAE00\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uBC14\uB00C\uB294 ApplyClass\uC640 ApplyTo\uC758 \uAC12\uC744 \uC27D\uAC8C \uC5BB\uAE30 \uC704\uD574 \uACE0\uC548\uB418\uC5C8\uB2E4. GetSectionApplyString \uC561\uC158\uC740 \uD604\uC7AC \uF53A\uAE00\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uAD6C\uC5ED\uC758 \uC801\uC6A9\uBC94\uC704\uB97C \uC5BB\uAE30 \uC704\uD574 \uACE0\uC548\uB41C \uC720\uD2F8\uB9AC\uD2F0 \uC561\uC158\uC774\uB2E4. \uC0AC\uC6A9\uBC29\uBC95\uC740 \uB2E4\uC74C\uACFC \uAC19\uB2E4. \uC561\uC158\uC744 \uC0DD\uC131\uD55C \uD6C4 ApplyTo\uC5D0 \uC801\uC6A9\uD560 \uBC94\uC704 flag\uB97C \uB123\uC5B4\uC900\uB2E4. \uB9CC\uC57D \uC801\uB2F9\uD55C ApplyTo flag\uAC12\uC774 \uB4E4\uC5B4\uC654\uB2E4\uBA74, \u201C\uCABD/\uD14C\uB450\uB9AC \uBC30\uACBD\u201D \uB300\uD654\uC0C1\uC790\uC5D0\uC11C \uBCFC \uC218 \uC788\uB294 \u201C\uC801\uC6A9\uBC94\uC704\u201D ComboBox\uC758 \uC120\uD0DD\uB41C \uAC12\uC744 Index \uC544\uC774\uD15C\uC744 \uD1B5\uD574\uC11C \uC5BB\uC744 \uC218 \uC788\uB2E4. \uADF8\uB9BC. \uC801\uC6A9\uBC94\uC704 ComboBox\uC758 \uBAA8\uC2B5. \uC704 \uADF8\uB9BC\uC5D0\uC11C ApplyTo\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC83\uC740 "\uD604\uC7AC \uAD6C\uC5ED\u201C, \u201D\uBB38\uC11C \uC804\uCCB4\u201C, \u201D\uC0C8 \uAD6C\uC5ED\uC73C\uB85C\u201C \uAC01\uAC01\uC758 flag\uAC12\uC774\uBA70, \uC774 ApplyTo\uAC12\uC774 \uBAA8\uB450 \uC870\uD569\uB41C \uAC12\uC774 ApplyClass\uAC00 \uB41C\uB2E4. ApplyClass\uC5D0 \uD574\uB2F9\uB418\uB294 \uAC12\uC740 \uBB38\uC790\uC5F4\uB85C\uB3C4 \uC5BB\uC5B4\uC62C \uC218 \uC788\uC73C\uBA70, \uC5BB\uC5B4\uC624\uB294 \uC7A5\uC18C\uAC00 \uBC14\uB85C String \uC544\uC774\uD15C\uC774\uB2E4. \uC704 \uADF8\uB9BC\uC758 \uC608\uB97C \uB4E4\uC5B4 \uAC01 \uC544\uC774\uD15C\uC5D0 \uD560\uB2F9\uB418\uB294 \uAC12\uC744 \uB098\uD0C0\uB0B4\uBA74 \uB2E4\uC74C\uACFC \uAC19\uB2E4. ApplyTo : 0x08 ApplyTo : 0x1C (0x04|0x08|0x10) Index : 3 String : "\uD604\uC7AC \uAD6C\uC5ED\u201C \u201D\uBB38\uC11C \uC804\uCCB4\u201C \u201D\uC0C8 \uAD6C\uC5ED\uC73C\uB85C\u201C \u203B \uC704 \uAC12 \uC911 Index\uC758 \uAC12\uC774 1\uC774 \uC544\uB2CC 3\uC778 \uC774\uC720\uB294 Index\uC758 \uAC12\uC73C\uB85C \uB118\uC5B4\uC624\uB294 \uAC12\uC740 \uCF64\uBCF4\uBC15\uC2A4\uB97C \uAE30\uC900\uC73C\uB85C \uD558\uC9C0 \uC54A\uACE0 \uBAA8\uB4E0 ApplyTo\uAC12\uC758 \uC21C\uC11C\uC5D0 \uB530\uB978 Index\uAC12\uC744 \uAE30\uC900\uC73C\uB85C \uD558\uAE30 \uB54C\uBB38\uC774\uB2E4. Example : GetSectionApplyString \uC561\uC158 \uC0AC\uC6A9\uD558\uAE30 C++ CDHwpAction myAction = m_HwpCtrl.CreateAction("GetSectionApplyString"); CDHwpParameterSet mySet = myAction.CreateSet(); // myAction.GetDefault(); // \uD574\uB2F9 Action\uC740 GetDefault();\uB97C \uC0DD\uB7B5\uD574\uB3C4 \uC0C1\uAD00\uC5C6\uB2E4. mySet.SetItem("ApplyTo", CComVariant(0x08)); myAction.Execute(mySet); int nIdx = (int)mySet.Item("Index"); // \uC5BB\uC5B4\uC628 Index\uAC12\uC744 \uC800\uC7A5. \uC774\uD6C4 String\uAC12\uB3C4 \uC800\uC7A5\uD55C\uB2E4. ... GetSectionApplyTo \uC561\uC158\uC740 ApplyTo\uC640 Index \uC544\uC774\uD15C \uAC12\uC758 \uC0C1\uD638\uBCC0\uD658\uC744 \uC704\uD55C Action\uC774\uB2E4. ConvAplly2Index\uB97C TRUE\uB85C \uC124\uC815\uD558\uBA74 ApplyTo -> Index \uBCC0\uD658\uC774, ConvAplly2Index\uB97C FALSE\uB85C \uC124\uC815\uD558\uBA74 Index->ApplyTo \uBCC0\uD658 \uC774 \uC774\uB8E8\uC5B4\uC9C4\uB2E4. Example : GetSectionApplyTo \uC561\uC158 \uC0AC\uC6A9\uD558\uAE30 C++ CDHwpAction myAction = m_HwpCtrl.CreateAction("GetSectionApplyTo"); CDHwpParameterSet mySet = myAction.CreateSet(); // myAction.GetDefault(); // \uD574\uB2F9 Action\uC740 GetDefault();\uB97C \uC0DD\uB7B5\uD574\uB3C4 \uC0C1\uAD00\uC5C6\uB2E4. mySet.SetItem("ApplyTo", 0x08); mySet.SetItem("ConvAplly2Index", CComVariant(TRUE)); myAction.Execute(mySet); int nIdx = (int)mySet.Item("Index"); // \uC5BB\uC5B4\uC628 Index\uAC12\uC744 \uC800\uC7A5 ... \u203B \uD604\uC7AC \uC704 \uC561\uC158\uC740 SecDef \uD30C\uB77C\uBA54\uD130\uC14B(\uAD6C\uC5ED\uC815\uBCF4)\uC5D0 \uB300\uD55C ApplyTo, ApplyClass\uB9CC\uC744 \uAD6C\uD574\uC628\uB2E4. \uB2E4\uB978 \uC815\uBCF4\uC601\uC5ED\uC758 ApplyTo, ApplyClass\uC758 \uAC12\uC744 \uC5BB\uC5B4\uC624\uB294 \uC720\uD2F8\uB9AC\uD2F0 \uC561\uC158\uC758 \uAD6C\uD604\uC5D0 \uB300\uD574\uC11C\uB294 \uC544\uC9C1 \uC815\uD574\uC9C4 \uBC14\uAC00 \uC5C6\uB2E4.'
      }
    ]
  },
  {
    "id": "ShapeCopyPaste",
    "description": "\uBAA8\uC591 \uBCF5\uC0AC",
    "sourcePage": 125,
    "items": [
      {
        "id": "Type",
        "type": "PIT_I",
        "description": "1 = \uBB38\uB2E8 \uBAA8\uC591 \uBCF5\uC0AC 2 = \uAE00\uC790\uC640 \uBB38\uB2E8 \uBAA8\uC591 \uB450\uAC1C \uBCF5\uC0AC 3 = \uAE00\uC790 \uC2A4\uD0C0\uC77C \uBCF5\uC0AC 4 = \uBB38\uB2E8 \uC2A4\uD0C0\uC77C \uBCF5\uC0AC"
      },
      {
        "id": "CellAttr",
        "type": "PIT_UI1",
        "description": "\uC140 \uBAA8\uC591 \uBCF5\uC0AC"
      },
      {
        "id": "CellBorder",
        "type": "PIT_UI1",
        "description": "\uC120 \uBAA8\uC591 \uBCF5\uC0AC"
      },
      {
        "id": "CellFill",
        "type": "PIT_UI1",
        "description": "\uC140 \uBC30\uACBD \uBCF5\uC0AC"
      },
      {
        "id": "TypeBodyAndCellOnly",
        "type": "PIT_I",
        "description": "\uBCF8\uBB38\uACFC \uC140 \uBAA8\uC591 \uB458 \uB2E4 \uBCF5\uC0AC or \uC140 \uBAA8\uC591\uB9CC \uBCF5\uC0AC"
      }
    ]
  },
  {
    "id": "ShapeObject",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uACF5\uD1B5 \uC18D\uC131 (\uB3C4\uD615, \uAE00\uC0C1\uC790, \uD45C, \uADF8\uB9BC \uB4F1)",
    "sourcePage": 126,
    "items": [
      {
        "id": "TreatAsChar",
        "type": "PIT_UI1",
        "description": "\uAE00\uC790\uCC98\uB7FC \uCDE8\uAE09 on / off"
      },
      {
        "id": "AffectsLine",
        "type": "PIT_UI1",
        "description": "\uC904 \uAC04\uACA9\uC5D0 \uC601\uD5A5\uC744 \uC904\uC9C0 \uC5EC\uBD80 on / off (TreatAsChar\uAC00 TRUE\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uB41C\uB2E4) \uC138\uB85C \uC704\uCE58\uC758 \uAE30\uC900. 0 = \uC885\uC774 \uC601\uC5ED(Paper)"
      },
      {
        "id": "VertRelTo",
        "type": "PIT_UI1",
        "description": "1 = \uCABD \uC601\uC5ED(Page) 2 = \uBB38\uB2E8 \uC601\uC5ED(Paragraph) (TreatAsChar\uAC00 FALSE\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uB41C\uB2E4) VertRelTo\uAC12\uC5D0 \uB530\uB978 \uC0C1\uB300\uC801\uC778 \uC815\uB82C \uAE30\uC900. VertRelTo\uAC12\uC774 2(\uBB38\uB2E8\uC601\uC5ED)\uC77C \uACBD\uC6B0 0 \uAC12\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4."
      },
      {
        "id": "VertAlign",
        "type": "PIT_UI1",
        "description": "0 = \uC704(Top) 1 = \uAC00\uC6B4\uB370(Center) 2 = \uC544\uB798(Bottom)"
      },
      {
        "id": "VertOffset",
        "type": "PIT_I4",
        "description": "\uC640 VertAlign\uC744 \uAE30\uC900\uC73C\uB85C \uD55C Y\uCD95 \uC704\uCE58 \uC624\uD504\uC14B \uAC12. HWPUNIT \uB2E8\uC704. \uAC00\uB85C \uC704\uCE58\uC758 \uAE30\uC900. 0 = \uC885\uC774 \uC601\uC5ED(Paper)",
        "subType": "VertRelTo"
      },
      {
        "id": "HorzRelTo",
        "type": "PIT_UI1",
        "description": "1 = \uCABD \uC601\uC5ED(Page) 2 = \uB2E4\uB2E8 \uC601\uC5ED(Column) 3 = \uBB38\uB2E8 \uC601\uC5ED(Paragraph) (TreatAsChar\uAC00 FALSE\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uB41C\uB2E4) HorzRelTo\uAC12\uC5D0 \uB530\uB978 \uC0C1\uB300\uC801\uC778 \uC815\uB82C \uAE30\uC900."
      },
      {
        "id": "HorzAlign",
        "type": "PIT_UI1",
        "description": "\uAC12\uC774 3(\uBB38\uB2E8\uC601\uC5ED)\uC77C \uACBD\uC6B0 0~2 \uC0AC\uC774\uC758 \uAC12\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4. 0 = \uC67C\uCABD(Left) 1 = \uAC00\uC6B4\uB370(Center) 2 = \uC624\uB978\uCABD(Right) 3 = \uC548\uCABD(Inside) 4 = \uBC14\uAE65\uCABD(Outside)",
        "subType": "HorzRelTo"
      },
      {
        "id": "HorzOffset",
        "type": "PIT_I4",
        "description": "\uC640 HorzAlign\uC744 \uAE30\uC900\uC73C\uB85C \uD55C X\uCD95 \uC704\uCE58 \uC624\uD504\uC14B \uAC12. HWPUNIT \uB2E8\uC704. \uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uC138\uB85C \uC704\uCE58\uB97C \uCABD \uC601\uC5ED \uC548\uCABD\uC73C\uB85C \uC81C\uD55C\uD560\uC9C0 \uC5EC\uBD80 on /",
        "subType": "HorzRelTo"
      },
      {
        "id": "FlowWithText",
        "type": "PIT_UI1",
        "description": "VertRelTo\uAC12\uC774 2(\uBB38\uB2E8\uC601\uC5ED)\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC758\uBBF8\uAC00 \uC788\uB2E4. \uB2E4\uB978 \uAC1C\uCCB4\uC640 \uACB9\uCE58\uB294 \uAC83\uC744 \uD5C8\uC6A9\uD560\uC9C0 \uC5EC\uBD80 on / off",
        "subType": "off"
      },
      {
        "id": "AllowOverlap",
        "type": "PIT_UI1",
        "description": "\uAC00 FALSE\uC77C \uB54C\uB9CC \uC758\uBBF8\uAC00 \uC788\uC73C\uBA70, FlowWithText\uAC00 TRUE\uC774\uBA74 AllowOverlap\uC740 \uD56D\uC0C1 FALSE\uB85C \uAC04\uC8FC\uD55C\uB2E4. \uAC1C\uCCB4 \uB108\uBE44 \uAE30\uC900. 0 = \uC885\uC774(Paper)",
        "subType": "TreatAsChar"
      },
      {
        "id": "WidthRelTo",
        "type": "PIT_UI1",
        "description": "1 = \uCABD(Page) 2 = \uB2E4\uB2E8(Column) 3 = \uBB38\uB2E8(Paragraph) 4 = \uACE0\uC815 \uAC12(Absolute) \uAC1C\uCCB4 \uB108\uBE44 \uAC12. WidthRelTo\uC5D0 \uB530\uB77C \uAC12\uC758 \uC758\uBBF8 \uBC0F \uB2E8\uC704\uAC00 \uB2EC\uB77C\uC9C4\uB2E4. WidthRelTo \uC758\uBBF8 \uBC0F \uB2E8\uC704"
      },
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "0 \uC885\uC774 \uB108\uBE44\uC758 \uBA87 % 1 \uCABD \uB108\uBE44\uC758 \uBA87 % 2 \uB2E8 \uB108\uBE44\uC758 \uBA87 % 3 \uBB38\uB2E8 \uB108\uBE44\uC758 \uBA87 % 4 \uACE0\uC815 \uAC12(\uB2E8\uC704 HWPUNIT) \uAC1C\uCCB4 \uB192\uC774 \uAE30\uC900."
      },
      {
        "id": "HeightRelTo",
        "type": "PIT_UI1",
        "description": "0 = \uC885\uC774(Paper) 1 = \uCABD(Page) 2 = \uACE0\uC815 \uAC12(Absolute) \uAC1C\uCCB4 \uB192\uC774 \uAC12. HeightRelTo\uC5D0 \uB2E4\uB77C \uAC12\uC758 \uC758\uBBF8 \uBC0F \uB2E8\uC704\uAC00 \uB2EC\uB77C\uC9C4\uB2E4."
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "HeightRelTo \uC758\uBBF8 \uBC0F \uB2E8\uC704 0 \uC885\uC774 \uB192\uC774\uC758 \uBA87 % 1 \uCABD \uB192\uC774\uC758 \uBA87 % 2 \uACE0\uC815 \uAC12(\uB2E8\uC704 HWPUNIT)"
      },
      {
        "id": "ProtectSize",
        "type": "PIT_UI1",
        "description": "\uD06C\uAE30 \uBCF4\uD638 on / off \uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC640 \uBCF8\uBB38 \uC0AC\uC774\uC758 \uBC30\uCE58 \uBC29\uBC95. 0 = \uC5B4\uC6B8\uB9BC(Square) 1 = \uC790\uB9AC \uCC28\uC9C0(Top & Bottom)"
      },
      {
        "id": "TextWrap",
        "type": "PIT_UI1",
        "description": "2 = \uAE00 \uB4A4\uB85C(Behind Text) 3 = \uAE00 \uC55E\uC73C\uB85C(In front of Text) 4 = \uACBD\uACC4\uB97C \uBA85\uD655\uD788 \uC9C0\uD0B4(Tight) - \uD604\uC7AC \uC0AC\uC6A9\uC548\uD568 5 = \uACBD\uACC4\uB97C \uD1B5\uACFC\uD568(Through) - \uD604\uC7AC \uC0AC\uC6A9\uC548\uD568 (TreatAsChar\uAC00 FALSE\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC0AC\uC6A9\uB41C\uB2E4) \uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 \uC88C/\uC6B0 \uC5B4\uB290 \uCABD\uC5D0 \uAE00\uC744 \uBC30\uCE58\uD560\uC9C0 \uC9C0\uC815\uD558\uB294 \uC635\uC158. TextWrap\uC758 \uAC12\uC774 0\uC77C \uB54C\uB9CC \uC720\uD6A8\uD558\uB2E4."
      },
      {
        "id": "TextFlow",
        "type": "PIT_UI1",
        "description": "0 = \uC591\uCABD \uBAA8\uB450(Both) 1 = \uC67C\uCABD\uB9CC(Left Only) 2 = \uC624\uB978\uCABD\uB9CC(Right Only) 3 = \uC67C\uCABD\uACFC \uC624\uB978\uCABD \uC911 \uB113\uC740 \uCABD(Largest Only)"
      },
      {
        "id": "OutsideMarginLeft",
        "type": "PIT_I4",
        "description": "\uAC1C\uCCB4\uC758 \uBC14\uAE65 \uC5EC\uBC31. (\uC67C\uCABD) HWPUNIT \uB2E8\uC704"
      },
      {
        "id": "OutsideMarginRight",
        "type": "PIT_I4",
        "description": "\uAC1C\uCCB4\uC758 \uBC14\uAE65 \uC5EC\uBC31. (\uC624\uB978\uCABD) HWPUNIT \uB2E8\uC704"
      },
      {
        "id": "OutsideMarginTop",
        "type": "PIT_I4",
        "description": "\uAC1C\uCCB4\uC758 \uBC14\uAE65 \uC5EC\uBC31. (\uC704) HWPUNIT \uB2E8\uC704"
      },
      {
        "id": "OutsideMarginBottom",
        "type": "PIT_I4",
        "description": "\uAC1C\uCCB4\uC758 \uBC14\uAE65 \uC5EC\uBC31. (\uC544\uB798) HWPUNIT \uB2E8\uC704"
      },
      {
        "id": "NumberingType",
        "type": "PIT_UI1",
        "description": "\uC774 \uAC1C\uCCB4\uAC00 \uC18D\uD558\uB294 \uBC88\uD638 \uBC94\uC8FC. 0 = \uC5C6\uC74C, 1 = \uADF8\uB9BC, 2 = \uD45C, 3 = \uC218\uC2DD"
      },
      {
        "id": "LayoutWidth",
        "type": "PIT_I4",
        "description": "\uAC1C\uCCB4\uAC00 \uD398\uC774\uC9C0\uC5D0 \uBC30\uC5F4\uB420 \uB54C \uACC4\uC0B0\uB418\uB294 \uD3ED\uC758 \uAC12"
      },
      {
        "id": "LayoutHeight",
        "type": "PIT_I4",
        "description": "\uAC1C\uCCB4\uAC00 \uD398\uC774\uC9C0\uC5D0 \uBC30\uC5F4\uB420 \uB54C \uACC4\uC0B0\uB418\uB294 \uB192\uC774 \uAC12"
      },
      {
        "id": "Lock",
        "type": "PIT_UI1",
        "description": "\uAC1C\uCCB4 \uBCF4\uD638\uD558\uAE30 on / off"
      },
      {
        "id": "HoldAnchorObj",
        "type": "PIT_UI1",
        "description": "\uCABD \uB098\uB214 \uBC29\uC9C0 on / off"
      },
      {
        "id": "PageNumber",
        "type": "PIT_UI",
        "description": "\uAC1C\uCCB4\uAC00 \uC874\uC7AC \uD558\uB294 \uD398\uC774\uC9C0"
      },
      {
        "id": "AdjustSelection",
        "type": "PIT_UI1",
        "description": "\uAC1C\uCCB4 Selection \uC0C1\uD0DC TRUE/FASLE"
      },
      {
        "id": "AdjustTextBox",
        "type": "PIT_UI1",
        "description": "\uAE00\uC0C1\uC790\uB85C TRUE/FASLE"
      },
      {
        "id": "AdjustPrevObjAttr",
        "type": "PIT_UI1",
        "description": "\uC55E\uAC1C\uCCB4 \uC18D\uC131 \uB530\uB77C\uAC00\uAE30 TRUE/FASLE ShapeObject\uB294 \uC704\uC758 \uACF5\uD1B5 ITEM \uC678\uC5D0\uB3C4 \uB2E4\uC74C\uC758 ITEM\uC744 \uC120\uD0DD\uC801\uC73C\uB85C \uAC00\uC9C8 \uC218 \uC788\uB2E4."
      },
      {
        "id": "ShapeDrawLayOut",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 Layout",
        "subType": "DrawLayOut"
      },
      {
        "id": "ShapeDrawLineAttr",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 Line \uC18D\uC131",
        "subType": "DrawLineAttr"
      },
      {
        "id": "ShapeDrawFillAttr",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4\uC758 Fill \uC18D\uC131",
        "subType": "DrawFillAttr"
      },
      {
        "id": "ShapeDrawImageAttr",
        "type": "PIT_SET",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4 \uC18D\uC131",
        "subType": "DrawImageAttr"
      },
      {
        "id": "ShapeDrawRectType",
        "type": "PIT_SET",
        "description": "\uC0AC\uAC01\uD615 \uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uC720\uD615",
        "subType": "DrawRectType"
      },
      {
        "id": "ShapeDrawArcType",
        "type": "PIT_SET",
        "description": "\uD638 \uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uC720\uD615",
        "subType": "DrawArcType"
      },
      {
        "id": "ShapeDrawResize",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uB9AC\uC0AC\uC774\uC9D5",
        "subType": "DrawResize"
      },
      {
        "id": "ShapeDrawRotate",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uD68C\uC804",
        "subType": "DrawRotate"
      },
      {
        "id": "ShapeDrawEditDetail",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 EditDetail",
        "subType": "DrawEditDetail"
      },
      {
        "id": "ShapeDrawImageScissoring",
        "type": "PIT_SET",
        "description": "\uADF8\uB9BC \uAC1C\uCCB4 \uC790\uB974\uAE30",
        "subType": "DrawImageScissoring"
      },
      {
        "id": "ShapeDrawScAction",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uD68C\uC804",
        "subType": "DrawScAction"
      },
      {
        "id": "ShapeDrawCtrlHyperlink",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uD558\uC774\uD37C\uB9C1\uD06C",
        "subType": "DrawCtrlHyperlink"
      },
      {
        "id": "ShapeDrawCoordInfo",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uC88C\uD45C\uC815\uBCF4",
        "subType": "DrawCoordInfo"
      },
      {
        "id": "ShapeDrawShear",
        "type": "PIT_SET",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uAE30\uC6B8\uC774\uAE30",
        "subType": "DrawShear"
      },
      {
        "id": "ShapeDrawTextart",
        "type": "PIT_SET",
        "description": "\uAE00\uB9F5\uC2DC",
        "subType": "DrawTextart"
      },
      {
        "id": "ShapeDrawShadow",
        "type": "PIT_SET",
        "description": "\uADF8\uB9BC\uC790",
        "subType": "DrawShadow"
      },
      {
        "id": "ShapeTableCell",
        "type": "PIT_SET",
        "description": "\uC140 \uC815\uBCF4",
        "subType": "Cell"
      },
      {
        "id": "ShapeListProperties",
        "type": "PIT_SET",
        "description": "\uC11C\uBE0C list \uC18D\uC131",
        "subType": "ListProperties"
      },
      {
        "id": "ShapeCaption",
        "type": "PIT_SET",
        "description": "\uCEA1\uC158",
        "subType": "Caption"
      },
      {
        "id": "ShapeFormGeneral",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uC77C\uBC18",
        "subType": "FormGeneral"
      },
      {
        "id": "ShapeFormCommonAttr",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uACF5\uD1B5\uC18D\uC131",
        "subType": "FormCommonAttr"
      },
      {
        "id": "ShapeFormCharshapeattr",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uAE00\uC790\uBAA8\uC591 \uC18D\uC131",
        "subType": "FormCharshapeattr"
      },
      {
        "id": "ShapeFormButtonAttr",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uBC84\uD2BC \uC18D\uC131",
        "subType": "FormButtonAttr"
      },
      {
        "id": "ShapeFormComboboxAttr",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uCF64\uBCF4\uBC15\uC2A4 \uC18D\uC131",
        "subType": "FormComboboxAttr"
      },
      {
        "id": "ShapeFormEditAttr",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uC5D0\uB514\uD2B8\uBC15\uC2A4 \uC18D\uC131",
        "subType": "FormEditAttr"
      },
      {
        "id": "ShapeFormScrollbarAttr",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uC2A4\uD06C\uB864\uBC14 \uC18D\uC131",
        "subType": "FormScrollbarAttr"
      },
      {
        "id": "ShapeFormListBoxAttr",
        "type": "PIT_SET",
        "description": "\uC591\uC2DD\uAC1C\uCCB4 \uB9AC\uC2A4\uD2B8\uBC15\uC2A4 \uC18D\uC131",
        "subType": "FormListBoxAttr"
      },
      {
        "id": "ShapeType",
        "type": "PIT_UI1",
        "description": "\uC758 \uC885\uB958",
        "subType": "TablePropertyDialog"
      },
      {
        "id": "ShapeCellSize",
        "type": "PIT_UI1",
        "description": "\uC140 \uD06C\uAE30 \uC801\uC6A9 \uC5EC\uBD80 ( on / off )"
      },
      {
        "id": "ShapeCreationType",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uD615\uD0DC (DrawObjCreatorObject\uC5D0\uC11C \uC0AC\uC6A9)"
      },
      {
        "id": "ShapeCreationMode",
        "type": "PIT_UI1",
        "description": "\uB9C8\uC6B0\uC2A4\uB85C \uADF8\uB9AC\uAE30 \uC5EC\uBD80 ( on / off ) (DrawObjCreatorObject\uC5D0\uC11C \uC0AC\uC6A9)"
      },
      {
        "id": "ShapeComment",
        "type": "PIT_SET",
        "description": "\uAC1C\uCCB4 \uC124\uBA85\uBB38",
        "subType": "ShapeObjComment"
      }
    ]
  },
  {
    "id": "ShapeObjComment",
    "description": "\uAC1C\uCCB4 \uC124\uBA85\uBB38\uAC1C\uCCB4 \uC124\uBA85\uBB38",
    "sourcePage": 131,
    "items": [
      {
        "id": "EditShapeObjCommentS",
        "type": "PIT_BSTR",
        "description": "\uAC1C\uCCB4 \uC124\uBA85 \uBB38\uC790\uC5F4"
      },
      {
        "id": "EditShapeObjCommentF",
        "type": "PIT_UI",
        "description": "\uAC1C\uCCB4 \uC124\uBA85\uBB38 \uB370\uC774\uD130 \uC791\uC131\uC744 \uC704\uD55C \uCD94\uAC00 \uB370\uC774\uD130 \uC804\uB2EC. 0 = \uC0AC\uC6A9\uC548\uD568,"
      }
    ]
  },
  {
    "id": "ShapeObjectCopyPaste",
    "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uBAA8\uC591 \uBCF5\uC0AC/\uBD99\uC5EC \uB123\uAE30",
    "sourcePage": 132,
    "items": [
      {
        "id": "Type",
        "type": "PIT_I",
        "description": "\uADF8\uB9AC\uAE30 \uBAA8\uC591 \uBCF5\uC0AC/\uBD99\uC5EC \uB123\uAE30 \uC885\uB958 (\uC608\uC57D.. \uD604\uC7AC \uC0AC\uC6A9\uD558\uC9C0 \uC54A\uC74C)"
      },
      {
        "id": "ShapeObjectLine",
        "type": "PIT_UI",
        "description": "\uADF8\uB9AC\uAE30 \uC120 \uBAA8\uC591 \uBCF5\uC0AC"
      },
      {
        "id": "ShapeObjectFill",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9AC\uAE30 \uCC44\uC6B0\uAE30 \uBCF5\uC0AC"
      },
      {
        "id": "ShapeObjectSize",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uD06C\uAE30 \uBCF5\uC0AC"
      },
      {
        "id": "ShapeObjectShadow",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9AC\uAE30 \uAC1C\uCCB4 \uADF8\uB9BC\uC790 \uBCF5\uC0AC"
      },
      {
        "id": "ShapeObjectPicEffect",
        "type": "PIT_UI1",
        "description": "\uADF8\uB9BC \uD6A8\uACFC \uBCF5\uC0AC"
      }
    ]
  },
  {
    "id": "Sort",
    "description": "\uC18C\uD2B8",
    "sourcePage": 133,
    "items": [
      {
        "id": "KeyOption",
        "type": "PIT_ARRAY",
        "description": "\uD0A4 \uCF64\uBCF4\uC5D0\uC11C \uC120\uD0DD\uB41C \uD0A4\uB97C \uC800\uC7A5\uD568.",
        "subType": "PIT_I4"
      },
      {
        "id": "CheckJasoReverse",
        "type": "PIT_UI1",
        "description": "\uC790\uC18C \uB2E8\uC704 \uBE44\uAD50 Flag - \uC885, \uC911, \uCD08"
      },
      {
        "id": "DelimiterType",
        "type": "PIT_UI1",
        "description": "\uD544\uB4DC \uAD6C\uBD84 \uAE30\uD638 \uD615\uC2DD : 0 = \uD0ED(Tab), 1 = \uCF64\uB9C8(,), 2 = \uBE48\uCE78(Space), 3 = \uC0AC\uC6A9\uC790 \uC815\uC758"
      },
      {
        "id": "DelimiterChars",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uAD6C\uBD84 \uAE30\uD638\uB4E4. DelimiterType\uC774 3(\uC0AC\uC6A9\uC790 \uC815\uC758)\uC77C \uACBD\uC6B0\uC5D0\uB9CC \uC720\uD6A8"
      },
      {
        "id": "IgnoreMultiDelimiter",
        "type": "PIT_UI1",
        "description": "\uC5F0\uC18D\uB418\uB294 \uAD6C\uBD84\uAE30\uD638 \uBB34\uC2DC Flag"
      },
      {
        "id": "CheckFromRear",
        "type": "PIT_UI1",
        "description": "\uB2E8\uC5B4 \uB4A4\uC5D0\uC11C \uBD80\uD130 \uBE44\uAD50 Flag"
      },
      {
        "id": "CheckExtendYear",
        "type": "PIT_UI1",
        "description": "\uB450 \uC790\uB9AC \uB144\uB3C4 \uD655\uC7A5 check Flag"
      },
      {
        "id": "YearBase",
        "type": "PIT_UI",
        "description": "\uB450 \uC790\uB9AC \uB144\uB3C4 \uC2DC\uC791 \uB144\uB3C4"
      },
      {
        "id": "LangOrderType",
        "type": "PIT_UI1",
        "description": "\uC0AC\uC804\uC5B8\uC5B4\uC21C\uC11C \uAC12"
      },
      {
        "id": "CheckJaso",
        "type": "PIT_UI1",
        "description": "\uC790\uC18C \uB2E8\uC704 \uBE44\uAD50 Flag - \uCD08, \uC911, \uC885"
      },
      {
        "id": "EachPara",
        "type": "PIT_UI1",
        "description": "\uC815\uB82C\uC2DC \uAC01 \uBB38\uB2E8\uBCC4 \uC815\uB82C \uC5EC\uBD80 Flag \u2013 \uD0A4 \uC635\uC158\uC774 \u201C\uB2E8\uC5B4\u201D \uC778 \uACBD\uC6B0\uB9CC \uC0AC\uC6A9\uB428"
      }
    ]
  },
  {
    "id": "Style",
    "description": "\uC2A4\uD0C0\uC77C",
    "sourcePage": 134,
    "items": [
      {
        "id": "Apply",
        "type": "PIT_I",
        "description": "\uC801\uC6A9\uD560 \uC2A4\uD0C0\uC77C \uC778\uB371\uC2A4"
      }
    ]
  },
  {
    "id": "StyleDelete",
    "description": "\uC2A4\uD0C0\uC77C \uC9C0\uC6B0\uAE30",
    "sourcePage": 135,
    "items": [
      {
        "id": "Target",
        "type": "PIT_I",
        "description": "\uC9C0\uC6CC\uC57C\uD560 \uC2A4\uD0C0\uC77C \uC778\uB371\uC2A4"
      },
      {
        "id": "Alternation",
        "type": "PIT_I",
        "description": "\uB300\uCCB4\uD560 \uC2A4\uD0C0\uC77C \uC778\uB371\uC2A4"
      }
    ]
  },
  {
    "id": "StyleTemplate",
    "description": "\uC2A4\uD0C0\uC77C \uB9C8\uB2F9",
    "sourcePage": 136,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C \uC774\uB984"
      }
    ]
  },
  {
    "id": "Sum",
    "description": "\uBE14\uB85D \uACC4\uC0B0 (\uD569\uACC4/\uD3C9\uADE0/\uC904 \uC218)",
    "sourcePage": 137,
    "items": [
      {
        "id": "Sum",
        "type": "PIT_BSTR",
        "description": "\uD569"
      },
      {
        "id": "Average",
        "type": "PIT_BSTR",
        "description": "\uD3C9\uADE0"
      },
      {
        "id": "LineCount",
        "type": "PIT_BSTR",
        "description": "\uC904 \uC218"
      },
      {
        "id": "Comma",
        "type": "PIT_UI1",
        "description": "\uC138 \uC790\uB9AC\uB9C8\uB2E4 \uC27C\uD45C\uB85C \uC790\uB9AC \uAD6C\uBD84 (on / off)"
      },
      {
        "id": "Option",
        "type": "PIT_I4",
        "description": "\uD615\uC2DD \uC635\uC158"
      },
      {
        "id": "Method",
        "type": "PIT_I4",
        "description": "\uB3D9\uC791 \uC635\uC158 (0:copy, 1: paste)"
      }
    ]
  },
  {
    "id": "SummaryInfo",
    "description": "\uBB38\uC11C \uC815\uBCF4",
    "sourcePage": 138,
    "items": [
      {
        "id": "Title",
        "type": "PIT_BSTR",
        "description": "\uC81C\uBAA9"
      },
      {
        "id": "Subject",
        "type": "PIT_BSTR",
        "description": "\uC8FC\uC81C"
      },
      {
        "id": "Author",
        "type": "PIT_BSTR",
        "description": "\uC9C0\uC740\uC774"
      },
      {
        "id": "Date",
        "type": "PIT_BSTR",
        "description": "\uB0A0\uC9DC"
      },
      {
        "id": "KeyWords",
        "type": "PIT_BSTR",
        "description": "\uD0A4\uC6CC\uB4DC"
      },
      {
        "id": "Comments",
        "type": "PIT_BSTR",
        "description": "\uAE30\uD0C0"
      },
      {
        "id": "CreationTimeLow",
        "type": "PIT_UI4",
        "description": "\uC791\uC131\uD55C \uB0A0\uC9DC (low)"
      },
      {
        "id": "CreationTimeHigh",
        "type": "PIT_UI4",
        "description": "\uC791\uC131\uD55C \uB0A0\uC9DC (high)"
      },
      {
        "id": "ModifiedTimeLow",
        "type": "PIT_UI4",
        "description": "\uB9C8\uC9C0\uB9C9 \uC218\uC815\uD55C \uB0A0\uC9DC (low)"
      },
      {
        "id": "ModifiedTimeHigh",
        "type": "PIT_UI4",
        "description": "\uB9C8\uC9C0\uB9C9 \uC218\uC815\uD55C \uB0A0\uC9DC (high)"
      },
      {
        "id": "PrintedTimeLow",
        "type": "PIT_UI",
        "description": "\uB9C8\uC9C0\uB9C9 \uC778\uC1C4\uD55C \uB0A0\uC9DC (low)"
      },
      {
        "id": "PrintedTimeHigh",
        "type": "PIT_UI4",
        "description": "\uB9C8\uC9C0\uB9C9 \uC778\uC1C4\uD55C \uB0A0\uC9DC (high)"
      },
      {
        "id": "LastSavedBy",
        "type": "PIT_BSTR",
        "description": "\uB9C8\uC9C0\uB9C9 \uC800\uC7A5\uD55C \uC0AC\uB78C Characters PMT_INT \uBB38\uC11C\uBD84\uB7C9 (\uAE00\uC790) Words PMT_INT \uBB38\uC11C\uBD84\uB7C9 (\uB0B1\uB9D0) Lines PMT_INT \uBB38\uC11C\uBD84\uB7C9 (\uC904) Paragraphs PMT_INT \uBB38\uC11C\uBD84\uB7C9 (\uBB38\uB2E8) Pages PMT_INT \uBB38\uC11C\uBD84\uB7C9 (\uCABD) CopyPapers PMT_INT \uBB38\uC11C\uBD84\uB7C9 (\uC6D0\uACE0\uC9C0) Etcetera PMT_INT \uBB38\uC11C\uBD84\uB7C9 (\uD45C, \uADF8\uB9BC \uB4F1)"
      },
      {
        "id": "DocVersion",
        "type": "PIT_BSTR",
        "description": "\uBB38\uC11C \uD30C\uC77C \uBC84\uC804"
      },
      {
        "id": "HwpVersion",
        "type": "PIT_BSTR",
        "description": "\uBB38\uC11C\uB97C \uC0DD\uC131\uD55C \uF53A\uAE00 \uC6CC\uB4DC\uD504\uB85C\uADF8\uB7A8\uC758 \uBC84\uC804"
      },
      {
        "id": "HanjaChar",
        "type": "PIT_I1",
        "description": "\uBB38\uC11C\uBD84\uB7C9 (\uD55C\uC790 \uC218)"
      },
      {
        "id": "CharactersExceptS",
        "type": "PIT_I",
        "description": "\uBB38\uC11C\uBD84\uB7C9 (\uAE00\uC790-\uACF5\uBC31 \uC81C\uC678) pace"
      },
      {
        "id": "ExtractImagePath",
        "type": "PIT_BSTR",
        "description": "\uADF8\uB9BC \uD30C\uC77C \uC5F0\uACB0 \uACBD\uB85C - \uD55C/\uAE00 \uC678\uBD80\uC5D0\uC11C \uC0AC\uC6A9\uD568"
      },
      {
        "id": "ExtractImageBaseF",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785 \uADF8\uB9BC\uC744 \uC5F0\uACB0 \uADF8\uB9BC\uC73C\uB85C \uBCC0\uACBD\uD560 \uB54C, \uD30C\uC77C\uC758 \uAE30\uBCF8 \uC774\uB984 ileName"
      },
      {
        "id": "ExtractImageExtNa",
        "type": "PIT_BSTR",
        "description": "\uC5F0\uACB0 \uADF8\uB9BC\uC73C\uB85C \uBCC0\uACBD\uD560 \uC0BD\uC785 \uADF8\uB9BC \uD30C\uC77C\uC758 \uD655\uC7A5\uC790 me"
      },
      {
        "id": "ChangeImageExtFro",
        "type": "PIT_BSTR",
        "description": "\uBCC0\uACBD\uD560 \uADF8\uB9BC \uD30C\uC77C\uC758 \uD655\uC7A5\uC790(FROM) m"
      },
      {
        "id": "ChangeImageExtTo",
        "type": "PIT_BSTR",
        "description": "\uBCC0\uACBD\uD560 \uADF8\uB9BC \uD30C\uC77C\uC758 \uD655\uC7A5\uC790(TO)"
      },
      {
        "id": "EmbedImagePath",
        "type": "PIT_BSTR",
        "description": "\uC0BD\uC785\uD560 \uC5F0\uACB0 \uADF8\uB9BC \uD30C\uC77C\uC758 \uACBD\uB85C"
      },
      {
        "id": "SelectedSummaryIn",
        "type": "PIT_SET",
        "description": "\uC120\uD0DD\uB41C \uC601\uC5ED\uC758 \uC815\uBCF4 fo",
        "subType": "SummaryInfo"
      },
      {
        "id": "LicenseInfo",
        "type": "PIT_SET",
        "description": "\uC800\uC791\uAD8C CCL, \uACF5\uACF5\uB204\uB9AC \uC815\uBCF4",
        "subType": "SummaryInfo"
      },
      {
        "id": "LicenseFlag",
        "type": "PIT_UI4",
        "description": "\uACF5\uACF5\uB204\uB9AC, CCL \uD50C\uB798\uADF8",
        "subType": "SummaryInfo"
      },
      {
        "id": "UserPropertyName",
        "type": "PIT_ARRAY",
        "description": "\uC0AC\uC6A9\uC790 \uC18D\uC131 \u2013 \uC774\uB984, (\uD55C/\uAE00 2024\uBD80\uD130 \uC9C0\uC6D0)",
        "subType": "PIT_BSTR"
      },
      {
        "id": "UserPropertyForma",
        "type": "PIT_ARRAY",
        "description": "\uC0AC\uC6A9\uC790 \uC18D\uC131 - \uD615\uC2DD, (\uD55C/\uAE00 2024\uBD80\uD130 \uC9C0\uC6D0) t",
        "subType": "PIT_BSTR"
      },
      {
        "id": "UserPropertyValue",
        "type": "PIT_ARRAY",
        "description": "\uC0AC\uC6A9\uC790 \uC18D\uC131 - \uAC12, (\uD55C/\uAE00 2024\uBD80\uD130 \uC9C0\uC6D0)",
        "subType": "PIT_BSTR"
      }
    ]
  },
  {
    "id": "TabDef",
    "description": "\uD0ED \uC815\uC758",
    "sourcePage": 140,
    "items": [
      {
        "id": "AutoTabLeft",
        "type": "PIT_UI1",
        "description": "\uBB38\uB2E8 \uC67C\uCABD \uB05D \uD0ED (on / off)"
      },
      {
        "id": "AutoTabRight",
        "type": "PIT_UI1",
        "description": "\uBB38\uB2E8 \uC624\uB978\uCABD \uB05D \uD0ED (on / off) \uAC01\uAC01\uC758 \uD0ED \uC815\uC758. \uD558\uB098\uC758 \uD0ED \uC544\uC774\uD15C\uC740 \uC138 \uAC1C\uC758 \uC778\uC218\uB85C \uD45C\uD604\uB418\uC5B4 \uC788\uC74C. (n * 3 + 0) - PIT_I : \uD0ED \uC704\uCE58 (URC) (n * 3 + 1) - PIT_I : \uCC44\uC6B8 \uBAA8\uC591 (\uC544\uB798\uCC38\uC870) (n * 3 + 2) - PIT_I : \uD0ED \uC885\uB958 (\uC544\uB798\uCC38\uC870.)"
      },
      {
        "id": "TabItem",
        "type": "PIT_ARRAY",
        "description": "\uCC44\uC6B8 \uBAA8\uC591 : \uC120 \uC885\uB958 \uD0ED \uC885\uB958 : 0 = \uC67C\uCABD 1 = \uC624\uB978\uCABD 2 = \uAC00\uC6B4\uB370 3 = \uC18C\uC218\uC810",
        "subType": "PIT_I"
      },
      {
        "id": "DeleteTab",
        "type": "PIT_ARRAY",
        "description": "\uC9C0\uC6B4 \uD0ED \uC704\uCE58 (URC) \uCCAB \uBC88\uC9F8 \uAC12\uC774 -1 \uC774\uBA74 \uBAA8\uB450 \uC9C0\uC6E0\uC74C\uC744 \uC758\uBBF8\uD55C\uB2E4.",
        "subType": "PIT_I"
      }
    ]
  },
  {
    "id": "Table",
    "description": "\uD45C",
    "sourcePage": 141,
    "items": [
      {
        "id": "PageBreak",
        "type": "PIT_UI1",
        "description": "0 = \uB098\uB204\uC9C0 \uC54A\uB294\uB2E4. 1 = \uD14C\uC774\uBE14\uC740 \uB098\uB204\uC9C0\uB9CC \uC140\uC740 \uB098\uB204\uC9C0 \uC54A\uB294\uB2E4. 2 = \uC140 \uB0B4\uC758 \uD14D\uC2A4\uD2B8\uB3C4 \uB098\uB208\uB2E4."
      },
      {
        "id": "RepeatHeader",
        "type": "PIT_UI1",
        "description": "\uC81C\uBAA9 \uD589\uC744 \uBC18\uBCF5\uD560\uC9C0 \uC5EC\uBD80. (on / off)"
      },
      {
        "id": "CellSpacing",
        "type": "PIT_UI4",
        "description": "\uC140 \uAC04\uACA9(HTML\uC758 \uC140 \uAC04\uACA9\uACFC \uB3D9\uC77C \uC758\uBBF8. HWPUNIT)"
      },
      {
        "id": "CellMarginLeft",
        "type": "PIT_I4",
        "description": "\uAE30\uBCF8 \uC140 \uC548\uCABD \uC5EC\uBC31(\uC67C\uCABD)"
      },
      {
        "id": "CellMarginRight",
        "type": "PIT_I4",
        "description": "\uAE30\uBCF8 \uC140 \uC548\uCABD \uC5EC\uBC31(\uC624\uB978\uCABD)"
      },
      {
        "id": "CellMarginTop",
        "type": "PIT_I4",
        "description": "\uAE30\uBCF8 \uC140 \uC548\uCABD \uC5EC\uBC31(\uC704\uCABD)"
      },
      {
        "id": "CellMarginBottom",
        "type": "PIT_I4",
        "description": "\uAE30\uBCF8 \uC140 \uC548\uCABD \uC5EC\uBC31(\uC544\uB798\uCABD)"
      },
      {
        "id": "BorderFill",
        "type": "PIT_SET",
        "description": "\uD45C\uC5D0 \uC801\uC6A9\uB418\uB294 \uD14C\uB450\uB9AC/\uBC30\uACBD",
        "subType": "BorderFill"
      },
      {
        "id": "TableCharInfo",
        "type": "PIT_SET",
        "description": "\uD45C\uC640 \uC5F0\uACB0\uB41C \uCC28\uD2B8 \uC815\uBCF4 - \uCC28\uD2B8 \uBBF8\uC644\uC131",
        "subType": "TableChartInfo"
      },
      {
        "id": "TableBorderFill",
        "type": "PIT_SET",
        "description": "\uD45C\uC5D0 \uC801\uC6A9\uB418\uB294 \uD14C\uB450\uB9AC/\uBC30\uACBD",
        "subType": "BorderFill"
      },
      {
        "id": "Cell",
        "type": "PIT_SET",
        "description": "\uC140 \uC18D\uC131",
        "subType": "Cell"
      },
      {
        "id": "TreatAsChar",
        "type": "PIT_UI1",
        "description": "\uAE00\uC790\uCC98\uB7FC \uCDE8\uAE09 on / off"
      },
      {
        "id": "AffectsLine",
        "type": "PIT_UI1",
        "description": "\uC904 \uAC04\uACA9\uC5D0 \uC601\uD5A5\uC744 \uC904\uC9C0 \uC5EC\uBD80 on / off TREAT_AS_CHAR = TRUE\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428 \uC138\uB85C \uC704\uCE58\uC758 \uAE30\uC900. TREAT_AS_CHAR = FALSE\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428"
      },
      {
        "id": "VertRelTo",
        "type": "PIT_UI1",
        "description": "0 = \uC885\uC774 1 = \uBCF8\uBB38 \uC601\uC5ED 2 = \uBB38\uB2E8 VERT_REL_TO\uC5D0 \uB300\uD55C \uC0C1\uB300\uC801\uC778 \uBC30\uC5F4 \uBC29\uC2DD. VERT_REL_TO\uC758 \uAC12\uC5D0 \uB530\uB77C \uAC00\uB2A5\uD55C \uBC94\uC704\uAC00 \uC81C\uD55C\uB41C\uB2E4. 0 = \uC704"
      },
      {
        "id": "VertAlign",
        "type": "PIT_UI1",
        "description": "1 = \uAC00\uC6B4\uB370 2 = \uC544\uB798 3 = \uC548\uCABD 4 = \uBC14\uAE65\uCABD"
      },
      {
        "id": "VertOffset",
        "type": "PIT_UI4",
        "description": "\uC640 VERT_ALIGN\uC744 \uAE30\uC900\uC810\uC73C\uB85C \uD55C \uC0C1\uB300\uC801\uC778 \uC624\uD504\uC14B \uAC12. HWPUNIT \uB2E8\uC704. \uAC00\uB85C \uC704\uCE58\uC758 \uAE30\uC900. TREAT_AS_CHAR = FALSE\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428",
        "subType": "VERT_REL_TO"
      },
      {
        "id": "HorzRelTo",
        "type": "PIT_UI1",
        "description": "0 = \uC885\uC774 1 = \uBCF8\uBB38 \uC601\uC5ED 2 = \uB2E8 3 = \uBB38\uB2E8 HORZ_REL_TO\uC5D0 \uB300\uD55C \uC0C1\uB300\uC801\uC778 \uBC30\uC5F4 \uBC29\uC2DD. 0 = \uC67C\uCABD"
      },
      {
        "id": "HorzAlign",
        "type": "PIT_UI1",
        "description": "1 = \uAC00\uC6B4\uB370 2 = \uC624\uB978\uCABD 3 = \uC548\uCABD 4 = \uBC14\uAE65\uCABD"
      },
      {
        "id": "HorzOffset",
        "type": "PIT_I4",
        "description": "\uC640 HORZ_ALIGN\uC744 \uAE30\uC900\uC810\uC73C\uB85C \uD55C \uC0C1\uB300\uC801\uC778 \uC624\uD504\uC14B \uAC12. HWPUNIT \uB2E8\uC704.",
        "subType": "HORZ_REL_TO"
      },
      {
        "id": "FlowWithText",
        "type": "PIT_UI1",
        "description": "\uC624\uBE0C\uC81D\uD2B8\uC758 \uC138\uB85C \uC704\uCE58\uB97C \uBCF8\uBB38 \uC601\uC5ED\uC73C\uB85C \uC81C\uD55C\uD560\uC9C0 \uC5EC\uBD80 on / off VERT_REL_TO = PARA\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428 \uB2E4\uB978 \uC624\uBE0C\uC81D\uD2B8\uC640 \uACB9\uCE58\uB294 \uAC83\uC744 \uD5C8\uC6A9\uD560\uC9C0 \uC5EC\uBD80 on / off"
      },
      {
        "id": "AllowOverlap",
        "type": "PIT_UI1",
        "description": "= FALSE\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428 FLOW_WITH_TEXT = TRUE\uC774\uBA74 \uC5B8\uC81C\uB098 FALSE\uB85C \uAC04\uC8FC\uD55C\uB2E4. \uC624\uBE0C\uC81D\uD2B8 \uD3ED\uC758 \uAE30\uC900 0 = \uC885\uC774",
        "subType": "TREAT_AS_CHAR"
      },
      {
        "id": "WidthRelTo",
        "type": "PIT_UI1",
        "description": "1 = \uBCF8\uBB38 \uC601\uC5ED 2 = \uB2E8 3 = \uBB38\uB2E8(VertRelTo = \uBB38\uB2E8\uC77C \uB54C\uB9CC \uAC00\uB2A5) 4 = \uC808\uB300\uAC12 \uC624\uBE0C\uC81D\uD2B8 \uD3ED\uC758 \uAC12 WIDTH_REL_TO\uC758 \uAC12\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC740 \uB2E4\uB978 \uB2E8\uC704\uB97C \uB73B\uD55C\uB2E4. 0 = \uC885\uC774\uC758 \uBA87 %"
      },
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "1 = \uBCF8\uBB38 \uC601\uC5ED\uC758 \uBA87 % 2 = \uB2E8\uC758 \uBA87 % 3 = \uBB38\uB2E8\uC758 \uBA87 % 4 = \uC808\uB300\uAC12 HWPUNIT \uC624\uBE0C\uC81D\uD2B8 \uB192\uC774\uC758 \uAE30\uC900"
      },
      {
        "id": "HeightRelTo",
        "type": "PIT_UI1",
        "description": "0 = \uC885\uC774 1 = \uBCF8\uBB38 \uC601\uC5ED 2 = \uC808\uB300\uAC12 \uC624\uBE0C\uC81D\uD2B8\uC758 \uB192\uC774 \uAC12 HEIGHT_REL_TO\uC758 \uAC12\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC740 \uB2E4\uB978 \uB2E8\uC704\uB97C \uB73B\uD55C\uB2E4."
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "0 = \uC885\uC774\uC758 \uBA87 % 1 = \uBCF8\uBB38 \uC601\uC5ED\uC758 \uBA87 % 2 = \uC808\uB300\uAC12 HWPUNIT"
      },
      {
        "id": "ProtectSize",
        "type": "PIT_UI1",
        "description": "\uD06C\uAE30 \uBCF4\uD638 on / off \uC624\uBE0C\uC81D\uD2B8 \uC8FC\uC704\uB97C \uD14D\uC2A4\uD2B8\uAC00 \uC5B4\uB5BB\uAC8C \uD758\uB7EC\uAC08\uC9C0 \uC9C0\uC815\uD558\uB294 \uC635\uC158. TREAT_AS_CHAR = FALSE\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB428 0 = bound rect\uB97C \uB530\uB77C"
      },
      {
        "id": "TextWrap",
        "type": "PIT_UI1",
        "description": "1 = \uC88C, \uC6B0\uC5D0\uB294 \uD14D\uC2A4\uD2B8\uB97C \uBC30\uCE58\uD558\uC9C0 \uC54A\uC74C 2 = \uAE00\uACFC \uACB9\uCE58\uAC8C \uD558\uC5EC \uAE00 \uB4A4\uB85C 3 = \uAE00\uACFC \uACB9\uCE58\uAC8C \uD558\uC5EC \uAE00 \uC55E\uC73C\uB85C 4 = \uC624\uBE0C\uC81D\uD2B8\uC758 outline\uC744 \uB530\uB77C 5 = \uC624\uBE0C\uC81D\uD2B8 \uB0B4\uBD80\uC758 \uBE48 \uACF5\uAC04\uAE4C\uC9C0 \uC624\uBE0C\uC81D\uD2B8\uC758 \uC88C/\uC6B0 \uC5B4\uB290\uCABD\uC5D0 \uAE00\uC744 \uBC30\uCE58\uD560\uC9C0 \uC9C0\uC815\uD558\uB294 \uC635\uC158. TEXT_WRAP\uAC00 SQUARE, TIGHT, THROUGH\uC77C \uB54C\uB9CC \uC0AC\uC6A9\uB41C\uB2E4."
      },
      {
        "id": "TextFlow",
        "type": "PIT_UI1",
        "description": "0 = \uC591\uCABD 1 = \uC67C\uCABD 2 = \uC624\uB978\uCABD 3 = \uD070\uCABD"
      },
      {
        "id": "OutsideMarginLeft",
        "type": "PIT_I4",
        "description": "\uC624\uBE0C\uC81D\uD2B8\uC758 \uBC14\uAE65 \uC5EC\uBC31. HWPUNIT \uB2E8\uC704"
      },
      {
        "id": "OutsideMarginRigh",
        "type": "PIT_I4",
        "description": "\uC624\uBE0C\uC81D\uD2B8\uC758 \uBC14\uAE65 \uC5EC\uBC31. HWPUNIT \uB2E8\uC704 t"
      },
      {
        "id": "OutsideMarginTop",
        "type": "PIT_I4",
        "description": "\uC624\uBE0C\uC81D\uD2B8\uC758 \uBC14\uAE65 \uC5EC\uBC31. HWPUNIT \uB2E8\uC704"
      },
      {
        "id": "OutsideMarginBott",
        "type": "PIT_I4",
        "description": "\uC624\uBE0C\uC81D\uD2B8\uC758 \uBC14\uAE65 \uC5EC\uBC31. HWPUNIT \uB2E8\uC704 om \uC774 \uAC1C\uCCB4\uAC00 \uC18D\uD558\uB294 \uBC88\uD638 \uBC94\uC8FC"
      },
      {
        "id": "NumberingType",
        "type": "PIT_UI1",
        "description": "1 = \uADF8\uB9BC 2 = \uD45C 3 = \uC218\uC2DD \uC624\uBE0C\uC81D\uD2B8\uAC00 \uD398\uC774\uC9C0\uC5D0 \uBC30\uC5F4\uB420 \uB54C \uACC4\uC0B0\uB418\uB294 \uD3ED\uC758 \uAC12"
      },
      {
        "id": "LayoutWidth",
        "type": "PIT_I4",
        "description": "\uAE00\uC0C1\uC790\uB4F1\uC774 \uB298\uC5B4\uB098\uBA74 \uB298\uC5B4\uB09C \uAC12\uC744 \uACC4\uC0B0\uD574\uC11C \uAC00\uC9C4\uB2E4. \uB2E8\uC704\uB294 HWPITID_SO_WIDTH\uC640 \uAC19\uB2E4."
      },
      {
        "id": "LayoutHeight",
        "type": "PIT_I4",
        "description": "\uC624\uBE0C\uC81D\uD2B8\uAC00 \uD398\uC774\uC9C0\uC5D0 \uBC30\uC5F4\uB420 \uB54C \uACC4\uC0B0\uB418\uB294 \uB192\uC774 \uAC12 \uAE00\uC0C1\uC790\uB4F1\uC774 \uB298\uC5B4\uB098\uBA74 \uB298\uC5B4\uB09C \uAC12\uC744 \uACC4\uC0B0\uD574\uC11C \uAC00\uC9C4\uB2E4. \uB2E8\uC704\uB294 HWPITID_SO_HEIGHT\uC640 \uAC19\uB2E4."
      },
      {
        "id": "Lock",
        "type": "PIT_UI1",
        "description": "\uC624\uBE0C\uC81D\uD2B8 \uC120\uD0DD \uAC00\uB2A5 on / off"
      },
      {
        "id": "HoldAnchorObj",
        "type": "PIT_UI1",
        "description": "\uCABD \uB098\uB214\uBC29\uC9C0 on/off"
      },
      {
        "id": "PageNumber",
        "type": "PIT_UI",
        "description": "\uAC1C\uCCB4\uAC00 \uC874\uC7AC \uD558\uB294 \uD398\uC774\uC9C0"
      },
      {
        "id": "AdjustSelection",
        "type": "PIT_UI1",
        "description": "\uAC1C\uCCB4 Selection \uC0C1\uD0DC TRUE/FASLE"
      },
      {
        "id": "AdjustTextbox",
        "type": "PIT_UI1",
        "description": "\uAE00\uC0C1\uC790\uB85C TRUE/FASLE"
      },
      {
        "id": "AdjustPrevObjAttr",
        "type": "PIT_UI1",
        "description": '\uC55E\uAC1C\uCCB4 \uC18D\uC131 \uB530\uB77C\uAC00\uAE30 TRUE/FASLE Example : Table ParameterSet \uC124\uC815\uD558\uAE30 Visual Basic Dim TableSet As HwpParameterSet Set TableSet = HwpCtrl.CreateSet("Table") TableSet.SetItem "PageBreak", 1 \u2190 Table\uC758 \uC544\uC774\uD15C TableSet.SetItem "TreatAsChar", True \u2190 ShapeObject\uC758 \uC544\uC774\uD15C'
      }
    ]
  },
  {
    "id": "TableCreation",
    "description": "\uD45C \uC0DD\uC131",
    "sourcePage": 145,
    "items": [
      {
        "id": "Rows",
        "type": "PIT_UI2",
        "description": "\uD589 \uC218 (\uC0DD\uB7B5\uD558\uBA74 5)"
      },
      {
        "id": "Cols",
        "type": "PIT_UI2",
        "description": "\uCE7C\uB7FC \uC218 (\uC0DD\uB7B5\uD558\uBA74 5)"
      },
      {
        "id": "RowHeight",
        "type": "PIT_ARRAY",
        "description": "\uD589\uC758 \uB514\uD3F4\uD2B8 \uB192\uC774 (PIT_I4)",
        "subType": "PIT_I4"
      },
      {
        "id": "ColWidth",
        "type": "PIT_ARRAY",
        "description": "\uCE7C\uB7FC\uC758 \uB514\uD3F4\uD2B8 \uD3ED (PIT_I4)",
        "subType": "PIT_I4"
      },
      {
        "id": "CellInfo",
        "type": "PIT_ARRAY",
        "description": "\uC815\uBCF4\uAC00 \uC5C6\uB294 \uC140\uC740 \uB514\uD3F4\uD2B8\uAC12\uC744 \uB530\uB77C\uAC00\uBBC0\uB85C \uBAA8\uB4E0 \uC140\uC5D0 \uB300\uD574 \uC815\uBCF4\uB97C \uC904 \uD544\uC694\uB294 \uC5C6\uB2E4.",
        "subType": "PIT_I4"
      },
      {
        "id": "WidthType",
        "type": "PIT_UI1",
        "description": "\uB108\uBE44"
      },
      {
        "id": "HeightType",
        "type": "PIT_UI1",
        "description": "\uB192\uC774"
      },
      {
        "id": "WidthValue",
        "type": "PIT_I",
        "description": "\uB108\uBE44 \uAC12"
      },
      {
        "id": "HeightValue",
        "type": "PIT_I",
        "description": "\uB192\uC774 \uAC12"
      },
      {
        "id": "TableTemplateValue",
        "type": "PIT_UI1",
        "description": "\uD45C \uB9C8\uB2F9 \uC801\uC6A9 \uC5EC\uBD80"
      },
      {
        "id": "TableProperties",
        "type": "PIT_SET",
        "description": "\uCD08\uAE30 \uD45C \uC18D\uC131",
        "subType": "Table"
      },
      {
        "id": "TableTemplate",
        "type": "PIT_SET",
        "description": "\uD45C\uB9C8\uB2F9 \uC801\uC6A9 \uC18D\uC131",
        "subType": "TableTemplate"
      },
      {
        "id": "TableDrawProperties",
        "type": "PIT_SET",
        "description": "\uB9C8\uC6B0\uC2A4\uB85C \uC120\uC744 \uADF8\uB9B4 \uB54C \uC18D\uC131",
        "subType": "TableDrawPen"
      },
      {
        "id": "TextSelect",
        "type": "PIT_I",
        "description": "\uD14D\uC2A4\uD2B8 \uC120\uD0DD \uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "TableDeleteLine",
    "description": "\uD45C\uC758 \uC904/\uCE78 \uC0AD\uC81C",
    "sourcePage": 146,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = \uC904, 1 = \uCE78"
      }
    ]
  },
  {
    "id": "TableDrawPen",
    "description": "\uB9C8\uC6B0\uC2A4\uB85C \uD14C\uC774\uBE14\uC744 \uADF8\uB9B4 \uB54C \uC4F0\uC774\uB294 \uD39C",
    "sourcePage": 147,
    "items": [
      {
        "id": "Style",
        "type": "PIT_UI2",
        "description": "\uC744 \uADF8\uB9AC\uB294 \uC5F0\uD544(\uD39C)\uC758 \uC120 \uBAA8\uC591",
        "subType": "Table"
      },
      {
        "id": "Width",
        "type": "PIT_UI1",
        "description": "\uC744 \uADF8\uB9AC\uB294 \uC5F0\uD544(\uD39C)\uC758 \uC120 \uAD75\uAE30",
        "subType": "Table"
      },
      {
        "id": "Color",
        "type": "PIT_UI4",
        "description": "\uC744 \uADF8\uB9AC\uB294 \uC5F0\uD544(\uD39C)\uC758 \uC120 \uC0C9\uAE54 RGB color\uB97C \uB098\uD0C0\uB0B4\uAE30 \uC704\uD55C 32\uBE44\uD2B8 \uAC12 (0x00BBGGRR)",
        "subType": "Table"
      }
    ]
  },
  {
    "id": "TableInsertLine",
    "description": "\uD45C\uC758 \uC904/\uCE78 \uC0BD\uC785",
    "sourcePage": 148,
    "items": [
      {
        "id": "Side",
        "type": "PIT_UI1",
        "description": "\uBC29\uD5A5"
      },
      {
        "id": "Count",
        "type": "PIT_UI1",
        "description": "\uAC1C\uC218"
      }
    ]
  },
  {
    "id": "TableSplitCell",
    "description": "\uC140 \uB098\uB204\uAE30",
    "sourcePage": 149,
    "items": [
      {
        "id": "Cols",
        "type": "PIT_UI2",
        "description": "\uCE78 \uC218"
      },
      {
        "id": "Rows",
        "type": "PIT_UI2",
        "description": "\uC904 \uC218"
      },
      {
        "id": "DistributeHeight",
        "type": "PIT_UI1",
        "description": "\uC904 \uB192\uC774\uB97C \uAC19\uAC8C"
      },
      {
        "id": "Merge",
        "type": "PIT_UI1",
        "description": "\uB098\uB204\uAE30 \uC804\uC5D0 \uD569\uCE58\uAE30"
      },
      {
        "id": "Mode2",
        "type": "PIT_UI1",
        "description": "\uC140 \uB098\uB204\uAE30 \uBAA8\uB4DC 2, \uC140 \uB098\uB204\uAE30\uB97C \uD560 \uB54C, adjust\uB97C \uC0DD\uB7B5\uD558\uACE0 \uC140\uC774 \uC5B4 \uAE0B\uB098\uB294 \uAC83\uC744 \uBC29\uC9C0\uD55C\uB2E4."
      }
    ]
  },
  {
    "id": "TableStrToTbl",
    "description": "\uBB38\uC790\uC5F4\uC744 \uD45C\uB85C",
    "sourcePage": 150,
    "items": [
      {
        "id": "DelimiterType",
        "type": "PIT_UI1",
        "description": "\uBD84\uB9AC \uBB38\uC790(\uD0ED, \uC27C\uD45C, \uACF5\uBC31)"
      },
      {
        "id": "UserDefine",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790 \uC815\uC758 \uD544\uB4DC \uAD6C\uBD84 \uAE30\uD638"
      },
      {
        "id": "AutoOrDefine",
        "type": "PIT_UI1",
        "description": "\uC790\uB3D9\uC73C\uB85C \uD560 \uAC83\uC778\uC9C0 \uBD84\uB9AC \uBB38\uC790\uB97C \uC9C0\uC815 \uD560 \uAC83\uC778\uC9C0\uB97C \uACB0\uC815"
      },
      {
        "id": "KeepSeperator",
        "type": "PIT_UI1",
        "description": "\uC120\uD0DD \uC0AC\uD56D (\uAD6C\uBD84\uC790 \uC720\uC9C0)"
      },
      {
        "id": "DelimiterEtc",
        "type": "PIT_BSTR",
        "description": "\uAE30\uD0C0 \uBB38\uC790 \uD544\uB4DC \uAD6C\uBD84 \uAE30\uD638"
      },
      {
        "id": "TableCreation",
        "type": "PIT_SET",
        "description": "\uB9CC\uB4E4 \uD45C \uC18D\uC131",
        "subType": "TableCreation"
      }
    ]
  },
  {
    "id": "TableSwap",
    "description": "\uD45C \uB4A4\uC9D1\uAE30",
    "sourcePage": 151,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "2 = X\uC640 Y\uB97C \uBC14\uAFC8 3 = \uBC18\uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C 90\uB3C4 \uD68C\uC804 4 = 180\uB3C4 \uD68C\uC804 5 = \uC2DC\uACC4 \uBC29\uD5A5\uC73C\uB85C 90\uB3C4 \uD68C\uC804"
      },
      {
        "id": "SwapMargin",
        "type": "PIT_UI1",
        "description": "\uC5EC\uBC31 \uB4A4\uC9D1\uAE30 \uC9C0\uC6D0\uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "TableTblToStr",
    "description": "\uD45C\uB97C \uBB38\uC790\uC5F4\uB85C",
    "sourcePage": 152,
    "items": [
      {
        "id": "DelimiterType",
        "type": "PIT_UI1",
        "description": "\uBD84\uB9AC \uBB38\uC790(\uD0ED, \uC27C\uD45C, \uACF5\uBC31)"
      },
      {
        "id": "UserDefine",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790 \uC815\uC758 \uD544\uB4DC \uAD6C\uBD84 \uAE30\uD638"
      }
    ]
  },
  {
    "id": "TableTemplate",
    "description": "\uD45C \uB9C8\uB2F9 \uC815\uBCF4",
    "sourcePage": 153,
    "items": [
      {
        "id": "Format",
        "type": "PIT_UI",
        "description": "0x0002 = \uAE00\uC790 \uBAA8\uC591\uACFC \uBB38\uB2E8 \uBAA8\uC591 0x0004 = \uC140 \uBC30\uACBD 0x0008 = \uADF8\uB808\uC774 \uC2A4\uCF00\uC77C \uC801\uC6A9 \uB300\uC0C1. \uB2E4\uC74C \uAC12\uC758 \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uB41C\uB2E4. 0x0001 = \uC81C\uBAA9 \uC904"
      },
      {
        "id": "ApplyTarger",
        "type": "PIT_UI",
        "description": "0x0002 = \uB9C8\uC9C0\uB9C9 \uC904 0x0004 = \uCCAB\uC9F8 \uCE78 0x0008 = \uB9C8\uC9C0\uB9C9 \uCE78"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD45C \uB9C8\uB2F9 \uD30C\uC77C \uC774\uB984"
      },
      {
        "id": "CreateMode",
        "type": "PIT_UI1",
        "description": "\uD45C \uB9CC\uB4E4\uAE30 \uBAA8\uB4DC (\uD45C \uB9CC\uB4E4\uAE30\uC5D0\uC11C \uC81C\uBAA9\uC904\uC5D0 \uC81C\uBAA9 \uC18D\uC131 \uB123\uAE30 \uC704\uD574)"
      },
      {
        "id": "ThemeColor",
        "type": "PIT_UI",
        "description": "\uD14C\uB9C8\uC0C9 \uC124\uC815."
      }
    ]
  },
  {
    "id": "TextCtrl",
    "description": "TEXT \uCEE8\uD2B8\uB864\uC758 \uACF5\uD1B5 \uB370\uC774\uD130",
    "sourcePage": 154,
    "items": [
      {
        "id": "CtrlData",
        "type": "PIT_SET",
        "description": "\uCEE8\uD2B8\uB864 \uC774\uB984 \uC800\uC7A5\uC744 \uC704\uD55C \uC601\uC5ED",
        "subType": "CtrlData"
      }
    ]
  },
  {
    "id": "TextVertical",
    "description": "\uC138\uB85C\uC4F0\uAE30",
    "sourcePage": 155,
    "items": [
      {
        "id": "Landscope",
        "type": "PIT_UI1",
        "description": "\uC6A9\uC9C0 \uBC29\uD5A5. 0 = \uC881\uAC8C, 1 = \uB113\uAC8C \uAE00\uC790 \uBC29\uD5A5."
      },
      {
        "id": "TextDirection",
        "type": "PIT_UI2",
        "description": "0 = \uBCF4\uD1B5 (\uC67C\uCABD\uC5D0\uC11C \uC624\uB978\uCABD) 1 = \uC138\uB85C\uC4F0\uAE30 (\uB77C\uD2F4 \uBB38\uC790 \uD68C\uC804) 2 = \uC138\uB85C\uC4F0\uAE30 (\uB77C\uD2F4 \uBB38\uC790 \uD3EC\uD568)"
      },
      {
        "id": "TextVerticalWidthHead",
        "type": "PIT_I",
        "description": "\uBA38\uB9AC\uB9D0/\uAF2C\uB9AC\uB9D0 \uC138\uB85C\uC4F0\uAE30 \uC5EC\uBD80 \uC801\uC6A9 \uB300\uC0C1 0 = \uC120\uD0DD\uB41C \uAD6C\uC5ED 1 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "2 = \uD604\uC7AC \uAD6C\uC5ED 3 = \uBB38\uC11C\uC804\uCCB4 4 = \uC0C8 \uAD6C\uC5ED : \uD604\uC7AC \uC704\uCE58\uBD80\uD130 \uC0C8\uB85C 5 = no items (\uC801\uC6A9\uB300\uC0C1 \uC5C6\uC74C) \uC801\uC6A9 \uB300\uC0C1 \uBD84\uB958. \uC801\uC6A9 \uB300\uC0C1 \uBD84\uB958\uB294 \uD604\uC7AC \uCE90\uB7FF\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C ApplyTo\uC5D0 \uC801\uC6A9 \uAC00\uB2A5\uD55C \uB300\uC0C1\uC744 \uD55C\uC815\uC9D3\uB294 \uC5ED\uD560\uC744 \uD55C\uB2E4. \uB0B4\uBD80\uC801\uC73C\uB85C \uAC12\uC774 \uACC4\uC0B0\uB418\uBBC0\uB85C, \uAC12\uC744 \uCC38\uC870\uD558\uB294 \uC6A9\uB3C4\uB85C\uB9CC \uC0AC\uC6A9\uD558\uB3C4\uB85D \uD55C\uB2E4. \uB2E4\uC74C\uC758 \uAC12\uC758 \uC870\uD569\uC73C\uB85C \uAD6C\uC131\uB41C"
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": "\uB2E4. 0x0001 = \uC120\uD0DD\uB41C \uAD6C\uC5ED 0x0002 = \uC120\uD0DD\uB41C \uBB38\uC790\uC5F4 0x0004 = \uD604\uC7AC \uAD6C\uC5ED 0x0008 = \uBB38\uC11C \uC804\uCCB4 0x0010 = \uC0C8 \uAD6C\uC5ED : \uD604\uC7AC \uC704\uCE58\uBD80\uD130 \uC0C8\uB85C"
      }
    ]
  },
  {
    "id": "UserQCommandFile",
    "description": "\uC0AC\uC6A9\uC790 \uC790\uB3D9 \uBA85\uB839 \uD30C\uC77C \uC800\uC7A5/\uB85C\uB4DC",
    "sourcePage": 156,
    "items": [
      {
        "id": "Save",
        "type": "PIT_I4",
        "description": "\uC800\uC7A5 (TRUE = Save, FALSE = Open)"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "\uD30C\uC77C\uBA85"
      },
      {
        "id": "LoadType",
        "type": "PIT_I4",
        "description": "\uB85C\uB4DC \uBC29\uBC95 (TRUE = Overwrite, FALSE = Merge)"
      }
    ]
  },
  {
    "id": "VersionInfo",
    "description": "\uBC84\uC804 \uC815\uBCF4",
    "sourcePage": 157,
    "items": [
      {
        "id": "SourcePath",
        "type": "PIT_BSTR",
        "description": "\uBC84\uC804 \uBE44\uAD50\uC6A9 \uC18C\uC2A4 \uD328\uC2A4"
      },
      {
        "id": "TargetPath",
        "type": "PIT_BSTR",
        "description": "\uBC84\uC804 \uBE44\uAD50\uC6A9 \uD0C0\uAC9F \uD328\uC2A4"
      },
      {
        "id": "ItemStartIndex",
        "type": "PIT_UI1",
        "description": "\uBC84\uC804 \uBE44\uAD50\uB97C \uBCF4\uC5EC\uC904 \uC2DC\uC791 \uD788\uC2A4\uD1A0\uB9AC \uC778\uB371\uC2A4"
      },
      {
        "id": "ItemEndIndex",
        "type": "PIT_UI1",
        "description": "\uBC84\uC804 \uBE44\uAD50\uB97C \uBCF4\uC5EC\uC904 \uB9C8\uC9C0\uB9C9 \uD788\uC2A4\uD1A0\uB9AC \uC778\uB371\uC2A4"
      },
      {
        "id": "ItemOverWrite",
        "type": "PIT_UI1",
        "description": "\uD788\uC2A4\uD1A0\uB9AC \uC815\uBCF4\uB97C \uC800\uC7A5\uD560 \uB54C \uB9C8\uC9C0\uB9C9 \uBC84\uC804\uC73C\uB85C \uB36E\uC5B4\uC4F0\uB294 \uD50C\uB799 (on/off)"
      },
      {
        "id": "ItemSaveDescriptio",
        "type": "PIT_UI1",
        "description": "\uD788\uC2A4\uD1A0\uB9AC \uC815\uBCF4\uB97C \uC800\uC7A5\uD560 \uB54C \uC124\uBA85\uC744 \uC785\uB825\uD558\uB294 \uB300\uD654\uC0C1\uC790\uB97C \uB744\uC6B0\uB294 \uD50C n \uB799 (on/off)"
      },
      {
        "id": "TempFilePath",
        "type": "PIT_ARRAY",
        "description": "\uBC84\uC804 \uBE44\uAD50\uC6A9 \uC784\uC2DC\uD30C\uC77C \uACBD\uB85C",
        "subType": "PIT_BSTR"
      },
      {
        "id": "ItemInfoIndex",
        "type": "PIT_UI4",
        "description": "\uBC84\uC804 \uC815\uBCF4 \uC5BB\uC5B4\uC624\uAE30 \uBC0F \uC0AD\uC81C \uC2DC \uC0AC\uC6A9\uB420 \uC778\uB371\uC2A4"
      },
      {
        "id": "SaveFilePath",
        "type": "PIT_BSTR",
        "description": "\uBC84\uC804 \uC800\uC7A5 \uD30C\uC77C \uACBD\uB85C(OCX \uCEE8\uD2B8\uB864\uC6A9)"
      },
      {
        "id": "ItemInfoWriter",
        "type": "PIT_BSTR",
        "description": "\uC791\uC131\uC790 \uC815\uBCF4"
      },
      {
        "id": "ItemInfoDescriptio",
        "type": "PIT_BSTR",
        "description": "\uD574\uB2F9 \uBC84\uC804\uC5D0 \uB300\uD55C \uC124\uBA85 n"
      },
      {
        "id": "ItemInfoTimeHi",
        "type": "PIT_UI4",
        "description": "\uB0A0\uC9DC \uC815\uBCF4, FILETIME\uC758 HIWORD"
      },
      {
        "id": "ItemInfoTimeLo",
        "type": "PIT_UI4",
        "description": "\uB0A0\uC9DC \uC815\uBCF4, FILETIME\uC758 LOWORD"
      },
      {
        "id": "ItemInfoLock",
        "type": "PIT_UI1",
        "description": "\uD788\uC2A4\uD1A0\uB9AC \uC815\uBCF4 \uC218\uC815 \uD50C\uB799"
      },
      {
        "id": "VersionAutoSave",
        "type": "PIT_UI1",
        "description": "\uC0C8 \uBC84\uC804\uC73C\uB85C \uC790\uB3D9 \uC800\uC7A5 on/off"
      },
      {
        "id": "VersionDiffSplitVi",
        "type": "PIT_UI1",
        "description": "\uBC84\uC804 \uBE44\uAD50 \uBC29\uC2DD (\uD55C \uD654\uBA74\uC5D0\uC11C \uBE44\uAD50 : 0, \uB450 \uD654\uBA74\uC5D0\uC11C \uBE44\uAD50 : 1) ew"
      },
      {
        "id": "UsedStanTime",
        "type": "PIT_UI1",
        "description": "\uD45C\uC900\uC2DC \uC0AC\uC6A9 \uD50C\uB799"
      },
      {
        "id": "UsedCert",
        "type": "PIT_UI1",
        "description": "\uACF5\uC778\uC778\uC99D\uC11C \uC778\uC99D \uC0AC\uC6A9 \uD50C\uB799"
      },
      {
        "id": "FileDiff",
        "type": "PIT_UI1",
        "description": "\uBB38\uC11C \uBE44\uAD50 \uC561\uC158 \uD50C\uB799"
      },
      {
        "id": "ResultSourcePath",
        "type": "PIT_BSTR",
        "description": "\uBB38\uC11C \uBE44\uAD50 SRC \uACB0\uACFC \uD30C\uC77C \uACBD\uB85C (OCX \uCEE8\uD2B8\uB864\uC6A9)"
      },
      {
        "id": "ResultTargetPath",
        "type": "PIT_BSTR",
        "description": "\uBB38\uC11C \uBE44\uAD50 TGT \uACB0\uACFC \uD30C\uC77C \uACBD\uB85C (OCX \uCEE8\uD2B8\uB864\uC6A9)"
      },
      {
        "id": "ResultMergedPath",
        "type": "PIT_BSTR",
        "description": "\uBB38\uC11C \uBE44\uAD50 Merged \uACB0\uACFC \uD30C\uC77C \uACBD\uB85C (OCX \uCEE8\uD2B8\uB864\uC6A9)"
      },
      {
        "id": "ResultOption",
        "type": "PIT_UI1",
        "description": "\uBB38\uC11C \uBE44\uAD50 \uACB0\uACFC \uC635\uC158 (0:\uBA54\uBAA8, 1:\uAD50\uC815\uBD80\uD638) (OCX \uCEE8\uD2B8\uB864\uC6A9)"
      },
      {
        "id": "ResultShowMemo",
        "type": "PIT_UI1",
        "description": "\uBB38\uC11C \uBE44\uAD50 \uACB0\uACFC \uBA54\uBAA8\uB97C \uD654\uBA74\uC5D0 \uBCF4\uC774\uAC8C \uD560 \uC9C0 \uC5EC\uBD80(\uBB38\uC11C \uBE44\uAD50 \uACB0\uACFC \uC635\uC158\uC774 \uBA54\uBAA8\uC77C \uACBD\uC6B0\uC5D0 \uB3D9\uC791) (OCX \uCEE8\uD2B8\uB864\uC6A9)"
      }
    ]
  },
  {
    "id": "ViewProperties",
    "description": "\uBDF0\uC758 \uC18D\uC131",
    "sourcePage": 158,
    "items": [
      {
        "id": "OptionFlag",
        "type": "PIT_UI",
        "description": "0x0004 = \uBB38\uB2E8 \uB9C8\uD06C \uAE30\uD638\uB85C 0x0008 = \uC548\uB0B4\uC120 0x0010 = \uADF8\uB9AC\uAE30 \uACA9\uC790 0x0020 = \uADF8\uB9BC \uAC10\uCDA4 \uD654\uBA74 \uD655\uB300 \uC885\uB958. 0 = \uC0AC\uC6A9\uC790 \uC815\uC758"
      },
      {
        "id": "ZoomType",
        "type": "PIT_UI1",
        "description": "1 = \uCABD \uB9DE\uCDA4 2 = \uD3ED \uB9DE\uCDA4 3 = \uC5EC\uB7EC \uCABD"
      },
      {
        "id": "ZoomRatio",
        "type": "PIT_UI2",
        "description": "\uD654\uBA74 \uD655\uB300 \uC885\uB958\uAC00 \u201C\uC0AC\uC6A9\uC790 \uC815\uC758\u201D\uC778 \uACBD\uC6B0 \uD654\uBA74 \uD655\uB300 \uBE44\uC728. 10% ~ 500%"
      },
      {
        "id": "ZoomCntX",
        "type": "PIT_UI1",
        "description": "\uD654\uBA74 \uD655\uB300 \uC885\uB958\uAC00 \u201C\uC5EC\uB7EC \uCABD\u201D\uC778 \uACBD\uC6B0 \uAC00\uB85C \uD398\uC774\uC9C0 \uC218. 1 ~ 8"
      },
      {
        "id": "ZoomCntY",
        "type": "PIT_UI1",
        "description": "\uD654\uBA74 \uD655\uB300 \uC885\uB958\uAC00 \u201C\uC5EC\uB7EC \uCABD\u201D\uC778 \uACBD\uC6B0 \uC138\uB85C \uD398\uC774\uC9C0 \uC218. 1 ~ 8"
      },
      {
        "id": "ZoomMirror",
        "type": "PIT_UI1",
        "description": "\uB9DE\uCABD \uBCF4\uAE30. \uD398\uC774\uC9C0 \uC218\uAC00 2\uC758 \uBC30\uC218\uC77C \uB54C\uB9CC \uB3D9\uC791"
      },
      {
        "id": "PageDir",
        "type": "PIT_UI1",
        "description": "\uCABD \uBC29\uD5A5(HWPPAGE_DIR_VERT : 0, HWPPAGE_DIR_HORZ : 1)"
      },
      {
        "id": "MouseWheelDir",
        "type": "PIT_UI1",
        "description": "\uB9C8\uC6B0\uC2A4 \uD720 \uBC29\uD5A5(HWPWHEEL_DIR_VERT : 0, HWPWHEEL_DIR_HORZ : 1)"
      },
      {
        "id": "DragDrop",
        "type": "PIT_UI1",
        "description": "\uB4DC\uB798\uADF8 \uC564 \uB4DC\uB86D \uC9C0\uC6D0"
      }
    ]
  },
  {
    "id": "ViewStatus",
    "description": "\uBDF0 \uC0C1\uD0DC \uC815\uBCF4 ver:0x06000101",
    "sourcePage": 159,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "0 (\uD604\uC7AC View\uC758 \uC808\uB300 Pos\uAC12\uB9CC \uC9C0\uC6D0\uD568)"
      },
      {
        "id": "ViewPosX",
        "type": "PIT_I4",
        "description": "\uD604\uC7AC \uBDF0\uC758 X\uAC12"
      },
      {
        "id": "ViewPosY",
        "type": "PIT_I4",
        "description": "\uD604\uC7AC \uBDF0\uC758 Y\uAC12"
      }
    ]
  },
  {
    "id": "CompatibleDocument",
    "description": "\uD638\uD658 \uBB38\uC11C",
    "sourcePage": 160,
    "items": [
      {
        "id": "TargetProgram",
        "type": "PIT_UI",
        "description": "\uB300\uC0C1 \uD504\uB85C\uADF8\uB7A8"
      },
      {
        "id": "Default",
        "type": "PIT_UI",
        "description": "\uB300\uD654\uC0C1\uC790 \uAE30\uBCF8 \uC81C\uACF5 \uC5EC\uBD80"
      },
      {
        "id": "CurrentVersion",
        "type": "PIT_UI",
        "description": "\uD604\uC7AC \uBC84\uC804 \uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "PronounceInfo",
    "description": "\uD55C\uC790/\uC77C\uC5B4 \uBC1C\uC74C \uD45C\uC2DC",
    "sourcePage": 161,
    "items": [
      {
        "id": "Show",
        "type": "PIT_UI1",
        "description": "\uD55C\uC790/\uC77C\uC5B4 \uBC1C\uC74C \uD45C\uC2DC \uBCF4\uC774\uAE30"
      },
      {
        "id": "Position",
        "type": "PIT_UI1",
        "description": "\uD45C\uC2DC \uC704\uCE58"
      },
      {
        "id": "Hanja",
        "type": "PIT_UI1",
        "description": "\uD55C\uC790 \uD45C\uC2DC"
      },
      {
        "id": "Japanese",
        "type": "PIT_UI1",
        "description": "\uC77C\uC5B4 \uD45C\uC2DC"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "\uAE00\uAF34"
      },
      {
        "id": "TextSize",
        "type": "PIT_UI1",
        "description": "\uAE00\uC790 \uD06C\uAE30"
      },
      {
        "id": "TextColor",
        "type": "PIT_UI4",
        "description": "\uAE00\uC790 \uC0C9"
      },
      {
        "id": "Heterography",
        "type": "PIT_UI1",
        "description": "\uB3D9\uC790\uC774\uC74C \uBB38\uC790 \uD45C\uC2DC \uC5EC\uBD80"
      }
    ]
  },
  {
    "id": "StyleItem",
    "description": "\uC2A4\uD0C0\uC77C - \uBC14\uB85C \uD3B8\uC9D1\uD558\uAE30 \uB300\uD654\uC0C1\uC790",
    "sourcePage": 162,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "\uC2A4\uD0C0\uC77C \uC885\uB958"
      },
      {
        "id": "NameLocal",
        "type": "PIT_BSTR",
        "description": "\uC2A4\uD0C0\uC77C \uC774\uB984(\uB85C\uCEEC)"
      },
      {
        "id": "NameEng",
        "type": "PIT_BSTR",
        "description": "\uC2A4\uD0C0\uC77C \uC774\uB984(\uC601\uBB38)"
      },
      {
        "id": "Next",
        "type": "PIT_I",
        "description": "\uB2E4\uC74C \uC2A4\uD0C0\uC77C \uC778\uB371\uC2A4"
      },
      {
        "id": "LockForm",
        "type": "PIT_UI1",
        "description": "\uC591\uC2DD\uC2A4\uD0C0\uC77C \uBCF4\uD638"
      },
      {
        "id": "CharShape",
        "type": "PIT_SET",
        "description": "\uAE00\uC790 \uBAA8\uC591",
        "subType": "CharShape"
      },
      {
        "id": "ParaShape",
        "type": "PIT_SET",
        "description": "\uBB38\uB2E8 \uBAA8\uC591",
        "subType": "ParaShape"
      }
    ]
  },
  {
    "id": "InsertFieldTemplate",
    "description": "\uC0C1\uD638 \uCC38\uC870 \uB123\uAE30",
    "sourcePage": 163,
    "items": [
      {
        "id": "ShowSingle",
        "type": "PIT_UI",
        "description": "\uBB38\uC11C \uB9C8\uB2F9 \uC815\uBCF4 PropertySheet \uB300\uD654\uC0C1\uC790\uC5D0\uC11C \uC6D0\uD558\uB294 \uD398\uC774\uC9C0(\uD0ED) \uB9CC \uBCF4\uC774\uAE30"
      },
      {
        "id": "TemplateDirection",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uCEE8\uD2B8\uB864\uC758 \uC548\uB0B4\uBB38/\uC9C0\uC2DC\uBB38"
      },
      {
        "id": "TemplateHelp",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uCEE8\uD2B8\uB864\uC758 \uB3C4\uC6C0\uB9D0"
      },
      {
        "id": "TemplateName",
        "type": "PIT_BSTR",
        "description": "\uD544\uB4DC \uC774\uB984 (name) \uD544\uB4DC\uC758 \uC885\uB958 0 = \uB204\uB984\uD2C0"
      },
      {
        "id": "TemplateType",
        "type": "PIT_UI1",
        "description": "1 = \uAC1C\uC778 \uC815\uBCF4 2 = \uBB38\uC11C \uC694\uC57D 3 = \uB9CC\uB4E0 \uB0A0\uC9DC 4 = \uD30C\uC77C \uC774\uB984/\uACBD\uB85C"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "\uBD80\uBD84\uD3B8\uC9D1 \uBAA8\uB4DC\uC5D0\uC11C \uD3B8\uC9D1\uC18D\uC131"
      }
    ]
  },
  {
    "id": "SaveAsImage",
    "description": "\uBC14\uC774\uB108\uB9AC \uADF8\uB9BC\uC744 \uB2E4\uB978 \uD615\uD0DC\uB85C \uC800\uC7A5\uD558\uB294 \uC635\uC158\uC744 \uC124\uC815",
    "sourcePage": 164,
    "items": [
      {
        "id": "ResizeImage",
        "type": "PIT_UI1",
        "description": "\uBB38\uC11C\uC5D0 \uC0BD\uC785\uB41C \uADF8\uB9BC \uC624\uBE0C\uC81D\uD2B8\uC758 \uD06C\uAE30\uB97C \uACE0\uB824\uD558\uC5EC \uCD5C\uC18C \uD06C\uAE30\uB85C \uC800\uC7A5 \uC5EC\uBD80."
      },
      {
        "id": "DelCutting",
        "type": "PIT_UI1",
        "description": "\uC798\uB77C\uB0B4\uAE30 \uC774\uBBF8\uC9C0 \uBD88\uD544\uC694\uD55C \uBD80\uBD84 \uC0AD\uC81C \uC5EC\uBD80"
      },
      {
        "id": "SaveAsFormat",
        "type": "PIT_I",
        "description": "\uB2E4\uB978\uC774\uB984\uC73C\uB85C \uC800\uC7A5\uD55C \uD3EC\uB9F7"
      },
      {
        "id": "SaveDpiX",
        "type": "PIT_UI",
        "description": "\uBCC0\uACBD\uB420 \uC774\uBBF8\uC9C0 X\uCD95 DPI"
      },
      {
        "id": "SaveDpiY",
        "type": "PIT_UI",
        "description": "\uBCC0\uACBD\uB420 \uC774\uBBF8\uC9C0 Y\uCD95 DPI"
      },
      {
        "id": "SaveType",
        "type": "PIT_UI1",
        "description": "\uC800\uC7A5 \uC561\uC158 \uD0C0\uC785(None = 0x00, insert = 0x01, SaveTime = 0x03)"
      },
      {
        "id": "MinWidth",
        "type": "PIT_UI",
        "description": "\uCD5C\uC18C \uB108\uBE44"
      },
      {
        "id": "MinHeight",
        "type": "PIT_UI",
        "description": "\uCD5C\uC18C \uB192\uC774"
      },
      {
        "id": "ExtendFormat",
        "type": "PIT_UI1",
        "description": "\uC9C0\uC6D0 \uD3EC\uB9F7 \uD655\uC7A5, (\uD55C/\uAE00 2024\uBD80\uD130 \uC9C0\uC6D0)"
      },
      {
        "id": "Resolution",
        "type": "PIT_UI",
        "description": "\uC81C\uD55C \uD574\uC0C1\uB3C4 \uC124\uC815(\uC608 : 3840 * 2160), (\uD55C/\uAE00 2024\uBD80\uD130 \uC9C0\uC6D0)"
      },
      {
        "id": "AllFormat",
        "type": "PIT_UI1",
        "description": "\uBAA8\uB4E0 \uC774\uBBF8\uC9C0 \uD3EC\uB9F7 \uBCC0\uD658, (\uD55C/\uAE00 2024\uBD80\uD130 \uC9C0\uC6D0)"
      }
    ]
  },
  {
    "id": "BrailleConvert",
    "description": "\uC810\uC790 \uBCC0\uD658",
    "sourcePage": 165,
    "items": [
      {
        "id": "ResultType",
        "type": "PIT_UI1",
        "description": "\uACB0\uACFC \uBB38\uC790\uCF54\uB4DC \uD615\uC2DD"
      },
      {
        "id": "CharHeight",
        "type": "PIT_I4",
        "description": "\uAE00\uC790 \uBAA8\uC591-\uD06C\uAE30"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "\uAE00\uC790 \uBAA8\uC591-\uAE00\uAF34"
      },
      {
        "id": "FontType",
        "type": "PIT_UI1",
        "description": "\uAE00\uC790 \uBAA8\uC591-\uAE00\uAF34\uD0C0\uC785"
      },
      {
        "id": "LineCharApply",
        "type": "PIT_UI1",
        "description": "\uC904/\uAE00\uC790 \uC218 - \uC801\uC6A9 \uC5EC\uBD80"
      },
      {
        "id": "LineCharType",
        "type": "PIT_UI1",
        "description": "\uC904/\uAE00\uC790 \uC218 - \uC885\uB958"
      },
      {
        "id": "LineSpacing",
        "type": "PIT_I4",
        "description": "\uC904/\uAE00\uC790 \uC218 - \uC904 \uAC04\uACA9"
      },
      {
        "id": "CharSpacing",
        "type": "PIT_I4",
        "description": "\uC904/\uAE00\uC790 \uC218 - \uAE00\uC790 \uAC04\uACA9"
      },
      {
        "id": "PaperApply",
        "type": "PIT_UI1",
        "description": "\uC6A9\uC9C0 - \uC801\uC6A9 \uC5EC\uBD80"
      },
      {
        "id": "PaperType",
        "type": "PIT_I4",
        "description": "\uC6A9\uC9C0 - \uC124\uC815 \uC6A9\uC9C0 \uD0C0\uC785"
      },
      {
        "id": "TargetView",
        "type": "PIT_UI1",
        "description": "\uACB0\uACFC \uC0C8\uCC3D/\uC0C8\uD0ED 0:\uC0C8\uCC3D\uC73C\uB85C, 1:\uC0C8\uD0ED\uC73C\uB85C"
      }
    ]
  },
  {
    "id": "PictureChange",
    "description": "\uADF8\uB9BC \uBC14\uAFB8\uAE30",
    "sourcePage": 166,
    "items": [
      {
        "id": "PicturePath",
        "type": "PIT_BSTR",
        "description": "\uADF8\uB9BC \uACBD\uB85C"
      },
      {
        "id": "PictureEmbed",
        "type": "PIT_UI1",
        "description": "\uC5EC\uBD80",
        "subType": "Embed"
      }
    ]
  },
  {
    "id": "PresentationRange",
    "description": "\uBB38\uC11C \uC804\uCCB4 \uD504\uB808\uC820\uD14C\uC774\uC158 \uC124\uC815",
    "sourcePage": 167,
    "items": [
      {
        "id": "PresentationDefau",
        "type": "PIT_SET",
        "description": "\uAE30\uBCF8 \uC124\uC815\uAC12 lt",
        "subType": "Presentation"
      },
      {
        "id": "ExistPresentation",
        "type": "PIT_UI1",
        "description": "\uC5D0 \uD504\uB808\uC820\uD14C\uC774\uC158 \uC124\uC815 \uC720\uBB34. 1 = \uC124\uC815, 0 = \uBE44\uC124\uC815.",
        "subType": "section"
      }
    ]
  },
  {
    "id": "DeletePage",
    "description": "\uCABD \uC9C0\uC6B0\uAE30 \uF53A\uAE002007",
    "sourcePage": 168,
    "items": [
      {
        "id": "Range",
        "type": "PIT_UI1",
        "description": "\uBC94\uC704"
      },
      {
        "id": "RangeCustom",
        "type": "PIT_BSTR",
        "description": "\uC0AC\uC6A9\uC790\uAC00 \uC9C1\uC811 \uC785\uB825\uD55C \uBC94\uC704"
      },
      {
        "id": "UsingPagenum",
        "type": "PIT_UI1",
        "description": "\uBB38\uC11C\uC758 \uCABD \uBC88\uD638\uB85C \uC785\uB825"
      }
    ]
  },
  {
    "id": "TrackChange",
    "description": "\uBCC0\uACBD \uCD94\uC801",
    "sourcePage": 169,
    "items": [
      {
        "id": "InsertShape",
        "type": "PIT_UI1",
        "description": "\uC0BD\uC785 \uBAA8\uC591"
      },
      {
        "id": "InsertColor",
        "type": "PIT_UI1",
        "description": "\uC0BD\uC785 \uC0C9"
      },
      {
        "id": "DeleteShape",
        "type": "PIT_UI1",
        "description": "\uC0AD\uC81C \uBAA8\uC591"
      },
      {
        "id": "DeleteColor",
        "type": "PIT_UI1",
        "description": "\uC0AD\uC81C \uC0C9"
      },
      {
        "id": "ChangeShape",
        "type": "PIT_UI1",
        "description": "\uBCC0\uACBD \uBAA8\uC591"
      },
      {
        "id": "ChangeColor",
        "type": "PIT_UI1",
        "description": "\uBCC0\uACBD \uC0C9"
      },
      {
        "id": "Format",
        "type": "PIT_UI1",
        "description": "\uC11C\uC2DD \uCD94\uC801 \uC5EC\uBD80"
      },
      {
        "id": "FormatShape",
        "type": "PIT_UI1",
        "description": "\uC11C\uC2DD \uCD94\uC801 \uBAA8\uC591"
      },
      {
        "id": "FormatColor",
        "type": "PIT_UI1",
        "description": "\uC11C\uC2DD \uCD94\uC801 \uC0C9"
      },
      {
        "id": "MemoWidth",
        "type": "PIT_I4",
        "description": "\uBA54\uBAA8 \uB108\uBE44"
      },
      {
        "id": "MemoLine",
        "type": "PIT_UI1",
        "description": "\uBA54\uBAA8 \uC120 \uD45C\uC2DC"
      },
      {
        "id": "MemoColor",
        "type": "PIT_UI1",
        "description": "\uBA54\uBAA8 \uC0C9"
      },
      {
        "id": "Tooltip",
        "type": "PIT_UI1",
        "description": "\uD234\uD301 \uD45C\uC2DC"
      }
    ]
  },
  {
    "id": "PrivateInfoSecurity",
    "description": "\uAC1C\uC778 \uC815\uBCF4 \uBCF4\uC548",
    "sourcePage": 170,
    "items": [
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "string",
        "subType": "command"
      },
      {
        "id": "Password",
        "type": "PIT_BSTR",
        "description": "\uAC1C\uC778 \uC815\uBCF4 \uC554\uD638"
      },
      {
        "id": "ChangePassword",
        "type": "PIT_BSTR",
        "description": "\uBC14\uAFC0 \uAC1C\uC778 \uC815\uBCF4 \uC554\uD638"
      },
      {
        "id": "Pattern",
        "type": "PIT_BSTR",
        "description": "\uAC1C\uC778 \uC815\uBCF4 \uD328\uD134"
      },
      {
        "id": "Telephone",
        "type": "PIT_UI1",
        "description": "\uC804\uD654\uBC88\uD638 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Resident",
        "type": "PIT_UI1",
        "description": "\uC8FC\uBBFC\uB4F1\uB85D\uBC88\uD638 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Email",
        "type": "PIT_UI1",
        "description": "\uC804\uC790\uC6B0\uD3B8 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Account",
        "type": "PIT_UI1",
        "description": "\uACC4\uC88C \uBC88\uD638 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Credit",
        "type": "PIT_UI1",
        "description": "\uC2E0\uC6A9\uCE74\uB4DC \uBC88\uD638 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Address",
        "type": "PIT_UI1",
        "description": "\uC8FC\uC18C (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Birthday",
        "type": "PIT_UI1",
        "description": "\uC0DD\uB144\uC6D4\uC77C (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "IPAddress",
        "type": "PIT_UI1",
        "description": "\uC778\uD130\uB137\uC8FC\uC18C (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "ForeignerNo",
        "type": "PIT_UI1",
        "description": "\uC678\uAD6D\uC778\uB4F1\uB85D\uBC88\uD638 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "UserDef",
        "type": "PIT_UI1",
        "description": "\uC0AC\uC6A9\uC790 \uC815\uC758 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Etc",
        "type": "PIT_UI1",
        "description": "\uAE30\uD0C0 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "NoMessageBox",
        "type": "PIT_UI1",
        "description": "\uBA54\uC138\uC9C0 \uBC15\uC2A4\uB97C \uB744\uC6B0\uC9C0 \uC54A\uC744\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "DelHyperlink",
        "type": "PIT_UI1",
        "description": "\uD558\uC774\uD37C\uB9C1\uD06C(\uC774\uBA54\uC77C \uC5F0\uACB0)\uB97C \uC9C0\uC6B8\uC9C0 \uC5EC\uBD80"
      },
      {
        "id": "MarkChar",
        "type": "PIT_UI",
        "description": "\uAC1C\uC778 \uC815\uBCF4 \uD45C\uC2DC \uBB38\uC790"
      },
      {
        "id": "MarkCharType",
        "type": "PIT_UI",
        "description": "\uD45C\uC2DC \uBB38\uC790 \uC120\uD0DD \uC0AC\uD56D"
      },
      {
        "id": "PasswordOnOff",
        "type": "PIT_UI1",
        "description": "\uAC1C\uC778 \uC815\uBCF4 \uBCF4\uC548 \uC554\uD638 \uC124\uC815/\uCDE8\uC18C \uAC1C\uC778 \uC815\uBCF4 Type(0:\uC815\uADDC\uD45C\uD604\uC2DD-\uC77C\uBC18, 1:\uC77C\uBC18\uBB38\uC790\uC5F4, 2:\uC815\uADDC\uD45C\uD604\uC2DD"
      },
      {
        "id": "InfoType",
        "type": "PIT_UI",
        "description": "-\uC8FC\uBBFC\uBC88\uD638, 3:\uC8FC\uC18C\uAC80\uC0C9, 4:\uC678\uAD6D\uC778\uBC88\uD638, 5\uC774\uC0C1: \uB098\uBA38\uC9C0 \uAC1C\uC778\uC815\uBCF4\uC758 \uC815\uADDC\uD45C\uD604\uC2DD)"
      },
      {
        "id": "License",
        "type": "PIT_UI1",
        "description": "\uC6B4\uC804\uBA74\uD5C8 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Passport",
        "type": "PIT_UI1",
        "description": "\uC5EC\uAD8C\uBC88\uD638 (\uCC3E\uC744 \uAC1C\uC778 \uC815\uBCF4 on/off)"
      },
      {
        "id": "Encrypted",
        "type": "PIT_UI1",
        "description": "\uBB38\uC11C\uC5D0 \uC554\uD638\uD654\uB41C \uAC1C\uC778 \uC815\uBCF4 \uD544\uB4DC\uAC00 \uC788\uC744 \uB54C \uC5EC\uBD80"
      },
      {
        "id": "UnregistPattern",
        "type": "PIT_UI1",
        "description": '\uAC12 Description 0 \uC5C6\uC74C. (NULL) 1 \uC2E4\uC120. (SOLID) 2 \uAE34 \uC810\uC120. (DASH) 3 \uC810\uC120. (DOT) 4 -.-.-.-. 5 -..-..-.. 6 HNCDR_LS_DASH\uBCF4\uB2E4 \uAE34 \uC120\uBD84\uC758 \uBC18\uBCF5. (LONGDASH) 7 HNCDR_LS_DOT\uBCF4\uB2E4 \uD070 \uB3D9\uADF8\uB77C\uBBF8\uC758 \uBC18\uBCF5. (CIRCLE) 8 2\uC911\uC120. (DOUBLESLIM) 9 \uAC00\uB294 \uC120 + \uAD75\uC740 \uC120 2\uC911\uC120. (SLIMTHICK) 10 \uAD75\uC740 \uC120 + \uAC00\uB294 \uC120 2\uC911\uC120. (THICKSLIM) 11 \uAC00\uB294 \uC120 + \uAD75\uC740 \uC120 + \uAC00\uB294 \uC120 3\uC911\uC120. (SLIMTHICKSLIM) 12 \uBB3C\uACB0. (WAVE) 13 \uBB3C\uACB0 2\uC911\uC120. (DOUBLEWAVE) 14 \uB450\uAEBC\uC6B4 3D. (THICK3D) 15 \uB450\uAEBC\uC6B4 3D. \uAD11\uC6D0 \uBC18\uB300. (THICKREV3D) 16 3D \uB2E8\uC120. (3D) 17 3D \uB2E8\uC120. \uAD11\uC6D0 \uBC18\uB300. (REV3D) \uAC12 Description -1 \uCD5C\uC18C\uAC12 (=0.1 mm) 0 0.1 mm 1 0.12 mm 2 0.15 mm 3 0.2 mm 4 0.25 mm 5 0.3 mm 6 0.4 mm 7 0.5 mm 8 0.6 mm 9 0.7 mm 10 1.0 mm 11 1.5 mm 12 2.0 mm 13 3.0 mm 14 4.0 mm 15 5.0 mm 16 \uCD5C\uB300\uAC12 (=5.0 mm) \uAC12 Description 0 1, 2, 3 1 \uB3D9\uADF8\uB77C\uBBF8 \uCCD0\uC9C4 1, 2, 3 2 I, II, III 3 i, ii, iii 4 A, B, C 5 a, b, c 6 \uB3D9\uADF8\uB77C\uBBF8 \uCCD0\uC9C4 A, B, C 7 \uB3D9\uADF8\uB77C\uBBF8 \uCCD0\uC9C4 a, b, c 8 \uAC00, \uB098, \uB2E4 9 \uB3D9\uADF8\uB77C\uBBF8 \uCCD0\uC9C4 \uAC00, \uB098, \uB2E4 10 \u3131, \u3134, \u3137 11 \uB3D9\uADF8\uB77C\uBBF8 \uCCD0\uC9C4 \u3131, \u3134, \u3137 12 \uC77C, \uC774, \uC0BC 13 \u4E00, \u4E8C, \u4E09 14 \uB3D9\uADF8\uB77C\uBBF8 \uCCD0\uC9C4 \u4E00, \u4E8C, \u4E09 \uAC01\uC8FC/\uBBF8\uC8FC \uC804\uC6A9 (0x80\uBD80\uD130 4\uAC00\uC9C0 \uBB38\uC790\uAC00 \uCC28\uB840\uB85C \uBC18\uBCF5 \uC2DC\uC791) 0x81 \uC0AC\uC6A9\uC790 \uC9C0\uC815 \uBB38\uC790 \uBC18\uBCF5 \uB9CE\uC740 \uC815\uBCF4\uB97C \uD55C \uC904\uC758 \uBB38\uC790\uC5F4\uC5D0 \uD3EC\uD568\uD558\uACE0 \uC788\uC73C\uBBC0\uB85C \uC0C1\uB2F9\uD788 \uBCF5\uC7A1\uD55C \uAD6C\uC870\uB97C \uAC00\uC9C0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uAC00\uC7A5 \uBE60\uB974\uAC8C \uC775\uD790 \uC218 \uC788\uB294 \uBC29\uBC95\uC740 \uC6D0\uD558\uB294 \uD615\uC2DD\uC758 \uD558\uC774\uD37C\uB9C1\uD06C\uB97C \uC9C1\uC811 \uB9CC\uB4E4\uACE0 \uD574\uB2F9 \uBB38\uC11C\uB97C HWPML(*.hml)\uD615\uC2DD\uC73C\uB85C \uC800\uC7A5\uD55C \uD6C4 XML\uBB38\uC11C\uB97C \uBCFC \uC218 \uC788\uB294 \uD504\uB85C\uADF8\uB7A8(\uC608:Microsoft Internet Explorer)\uC5D0\uC11C \uC5F4\uC5B4\uBCF4\uBA74 \uC790\uC138\uD55C \uB0B4\uC6A9\uC744 \uC54C \uC218 \uC788\uC2B5\uB2C8\uB2E4. (IE\uC5D0\uC11C\uB294 hml\uD655\uC7A5\uC790\uB97C xml \uB85C \uBCC0\uACBD\uD558\uC2E0 \uD6C4 \uBD10\uC57C\uD569\uB2C8\uB2E4.) \uC608) HyperLink\uC815\uBCF4\uAC00 hml\uBB38\uC11C\uC5D0 \uC800\uC7A5\uB418\uC5B4 \uC788\uB294 \uBAA8\uC2B5 <FIELDBEGIN Type="Hyperlink" InstId="2118971508" Editable="false" Dirty="false" Property="0" Command="http://www.haansoft.com;1;0;0" /> \uD558\uC774\uD37C\uB9C1\uD06C\uC758 \uBB38\uC790\uC5F4\uC740 \u201C;\u201D\uC744 \uAD6C\uBD84\uC790\uB85C \uD558\uB294 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC870\uB97C \uAC00\uC9D1\uB2C8\uB2E4. [TARGET];[LINK_TYPE];[OBJ_TYPE];[OPTION] TARGET\uC740 \uD558\uC774\uD37C\uB9C1\uD06C\uC758 \uB300\uC0C1\uC744 \uB73B\uD558\uBA70, \uC5F0\uACB0 \uC720\uD615\uC5D0 \uB530\uB77C \uB2E4\uC74C\uACFC \uAC19\uC740 \uD615\uD0DC\uB97C \uAC00\uC9D1\uB2C8\uB2E4. Link Type Syntax Example \uF53A\uAE00\uAC1C\uCCB4 \uF53A\uAE00\uBB38\uC11C?\uAC1C\uCCB4ID ParameterSet.hwp?#2043988344 \uC6F9 \uC8FC\uC18C URL http://www.haansoft.com \uC774\uBA54\uC77C \uC8FC\uC18C mailto:\uBA54\uC77C\uC8FC\uC18C mailto:swlab@haansoft.com \uC678\uBD80 \uD504\uB85C\uADF8\uB7A8 file path c:\\hnc\\hnctt\\hnctt.exe \u203B \uC5F0\uACB0 \uC720\uD615\uC774 \uF53A\uAE00\uAC1C\uCCB4\uC774\uACE0, \uB3D9\uC77C\uBB38\uC11C\uC0C1\uC758 \uAC1C\uCCB4\uC77C \uACBD\uC6B0\uC5D0\uB294 \uAD6C\uBB38(Syntax)\uC758 \uF53A\uAE00\uBB38\uC11C\uB97C \uC81C\uC678\uD560 \uC218 \uC788\uC2B5\uB2C8\uB2E4. (\uC608: ?#2043988344) TARGET\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAC1C\uCCB4ID\uB294 hml\uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC5EC \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC1C\uCCB4 Element\uC548\uC758 "InstId"\uC18D\uC131\uC774 \uADF8 \uAC1C\uCCB4\uC758 ID\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. TARGET\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uB54C\uC5D0\uB294 \uC55E\uC5D0 #\uC744 \uBD99\uC5EC \uAC1C\uCCB4ID\uC784\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. TARGET \uB2E4\uC74C\uC73C\uB85C \uD45C\uD604\uB418\uB294 \uB370\uC774\uD130\uB4E4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uC758\uBBF8\uB97C \uAC00\uC9D1\uB2C8\uB2E4. Item Decription LINK_TYPE \uC5F0\uACB0 \uC720\uD615 : 0 = \uF53A\uAE00\uAC1C\uCCB4, 1 = \uC6F9 \uC8FC\uC18C, 2 = \uC774\uBA54\uC77C, 3 = \uC678\uBD80 \uD504\uB85C\uADF8\uB7A8 OBJ_TYPE \uC5F0\uACB0\uD560 \uF53A\uAE00\uAC1C\uCCB4\uC758 \uC720\uD615. LINK_TYPE\uC774 \uF53A\uAE00\uAC1C\uCCB4\uAC00 \uC544\uB2C8\uBA74 \uC774 \uAC12\uC740 \uBB34\uC2DC\uB41C\uB2E4. 0 = \uCC45\uAC08\uD53C, 1 = \uAC1C\uC694, 2 = \uD45C, 3 = \uADF8\uB9BC, 4 = \uC218\uC2DD \uD558\uC774\uD37C\uB9C1\uD06C \uC774\uB3D9\uC2DC \uC635\uC158. \uC678\uBD80\uC758 \uF53A\uAE00\uBB38\uC11C\uC640 \uC5F0\uACB0\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uC801\uC6A9\uB41C\uB2E4. OPTION 0 = \uD604\uC7AC\uCC3D\uC5D0 \uC678\uBD80\uBB38\uC11C\uB97C \uC5F0\uB2E4. (\uD604\uC7AC\uBB38\uC11C\uB294 \uB2EB\uD798) 1 = \uD604\uC7AC\uCC3D\uC5D0 \uC0C8 \uD0ED\uC744 \uB744\uC6CC \uC678\uBD80\uBB38\uC11C\uB97C \uC5F0\uB2E4. 2 = \uC0C8 \uCC3D\uC744 \uB744\uC6CC \uC678\uBD80\uBB38\uC11C\uB97C \uC5F0\uB2E4. \uB2E4\uC74C\uC740 \uC704 \uB0B4\uC6A9\uC744 \uC885\uD569\uD558\uC5EC \uC791\uC131\uD55C \uD558\uC774\uD37C\uB9C1\uD06C Command \uBB38\uC790\uC5F4\uC758 \uC608\uC81C\uC785\uB2C8\uB2E4. \uC678\uBD80\uBB38\uC11C\u201CParameterSet.hwp"\uC758 \uCC45\uAC08\uD53C\uC640 \uC5F0\uACB0. \uD604\uC7AC\uBB38\uC11C\uC5D0 \uC5F0 ParameterSet.hwp?#2043988344;0;0;0 \uB2E4. C:\\Hnc\\Hwp70\\Readme.Hwp?#204399566;0;0;0 \uC678\uBD80\uBB38\uC11C\u201CReadme.hwp"\uC758 \uCC45\uAC08\uD53C\uC640 \uC5F0\uACB0(\uC808\uB300\uACBD\uB85C). \uD604\uC7AC\uBB38\uC11C\uC5D0 ?#2043988345;0;1;1 \uC5F0\uB2E4. ?#2043988347;0;3;2 \uD604\uC7AC\uBB38\uC11C\uC758 \u201C\uAC1C\uC694\u201D\uC640 \uC5F0\uACB0. \uC0C8 \uD0ED\uC5D0 \uC5F0\uB2E4. http://www.haansoft.com;1;0;0 \uD604\uC7AC\uBB38\uC11C\uC758 \u201C\uADF8\uB9BC\u201D\uACFC \uC5F0\uACB0. \uC0C8 \uCC3D\uC5D0 \uC5F0\uB2E4. mailto:swlab@haansoft.com;2;0;0 \uD574\uB2F9 \uC6F9 \uC8FC\uC18C\uB85C \uC5F0\uACB0\uD55C\uB2E4. c:\\hnc\\hnctt\\hnctt.exe;3;0;0 \uD574\uB2F9 \uBA54\uC77C\uC8FC\uC18C\uB85C \uC5F0\uACB0\uD55C\uB2E4. (\uC5F0\uACB0\uB41C \uD504\uB85C\uADF8\uB7A8 \uC790\uB3D9\uB85C\uB529) \uD55C\uAE00\uC758 \uD0C0\uC790\uC5F0\uC2B5\uD504\uB85C\uADF8\uB7A8\uC744 \uB85C\uB529\uC2DC\uD0A8\uB2E4. \uC0C1\uD638\uCC38\uC870\uB294 \uD558\uC774\uD37C\uB9C1\uD06C\uC758 \uD655\uC7A5\uB41C \uD615\uD0DC\uB85C \uD558\uC774\uD37C\uB9C1\uD06C\uC640 \uBE44\uC2B7\uD55C \uD615\uD0DC\uC758 Command \uBB38\uC790\uC5F4\uC744 \uAC00\uC9D1\uB2C8\uB2E4. \uC0C1\uD638\uCC38\uC870\uC758 \uBB38\uC790\uC5F4\uC740 \uB2E4\uC74C\uACFC \uAC19\uC740 \uAD6C\uC870\uB97C \uAC00\uC9D1\uB2C8\uB2E4. [TARGET];[OBJ_TYPE];[REF_STRING];[HYPERLINK];[OPTION] \uAC01 \uD56D\uBAA9\uC740 \uB2E4\uC74C\uACFC \uAC19\uC2B5\uB2C8\uB2E4. Item Decription TARGET HyperLink\uC640 \uB3D9\uC77C OBJ_TYPE \uCC38\uC870 \uB300\uC0C1\uC758 \uC720\uD615. 0 = \uD45C, 1 = \uADF8\uB9BC, 2 = \uC218\uC2DD, 3 = \uAC01\uC8FC, 4 = \uBBF8\uC8FC, 5 = \uAC1C\uC694, 6 = \uCC45\uAC08\uD53C \uCC38\uC870 \uB0B4\uC6A9. REF_STRING 0 = \uAC1C\uCCB4\uAC00 \uC704\uCE58\uD55C \uCABD, 1 = \uAC1C\uCCB4\uBC88\uD638, 2 = \uAC1C\uCCB4\uB0B4\uC6A9, 3 = \uC704/\uC544\uB798 \uC874\uC7AC\uC5EC\uBD80 (\uC77C\uBC18) 0 = \uAC1C\uCCB4\uAC00 \uC704\uCE58\uD55C \uCABD, 1 = \uCC45\uAC08\uD53C\uC774\uB984, 2 = \uCC45\uAC08\uD53C\uB0B4\uC6A9, 3 = \uC704/\uC544\uB798 \uC874\uC7AC\uC5EC\uBD80 (\uCC45\uAC08\uD53C) 0 = \uAC1C\uCCB4\uAC00 \uC704\uCE58\uD55C \uCABD, 1 = \uAC1C\uCCB4\uBC88\uD638, 3 = \uC704/\uC544\uB798 \uC874\uC7AC\uC5EC\uBD80 (\uAC01\uC8FC/\uBBF8\uC8FC) HYPERLINK \uD558\uC774\uD37C\uB9C1\uD06C \uC5EC\uBD80 : 0 = \uC5F0\uACB0 \uC548 \uD568, 1 = \uC5F0\uACB0\uD568 \uD558\uC774\uD37C\uB9C1\uD06C \uC774\uB3D9\uC2DC \uC635\uC158. \uC678\uBD80\uC758 \uF53A\uAE00\uBB38\uC11C\uC640 \uC5F0\uACB0\uB41C \uACBD\uC6B0\uC5D0\uB9CC \uC801\uC6A9\uB41C\uB2E4. OPTION 0 = \uD604\uC7AC\uCC3D\uC5D0 \uC678\uBD80\uBB38\uC11C\uB97C \uC5F0\uB2E4. (\uD604\uC7AC\uBB38\uC11C\uB294 \uB2EB\uD798) 1 = \uD604\uC7AC\uCC3D\uC5D0 \uC0C8 \uD0ED\uC744 \uB744\uC6CC \uC678\uBD80\uBB38\uC11C\uB97C \uC5F0\uB2E4. 2 = \uC0C8 \uCC3D\uC744 \uB744\uC6CC \uC678\uBD80\uBB38\uC11C\uB97C \uC5F0\uB2E4. TARGET\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uAC1C\uCCB4ID\uB294 \uD558\uC774\uD37C\uB9C1\uD06C\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C hml\uBB38\uC11C\uB97C \uCC38\uC870\uD558\uC5EC \uC5BB\uC744 \uC218 \uC788\uC2B5\uB2C8\uB2E4. \uAC1C\uCCB4 Element\uC548\uC758 "InstId"\uC18D\uC131\uC774 \uADF8 \uAC1C\uCCB4\uC758 ID\uB97C \uB098\uD0C0\uB0C5\uB2C8\uB2E4. TARGET\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uB54C\uC5D0\uB294 \uC55E\uC5D0 #\uC744 \uBD99\uC5EC \uAC1C\uCCB4ID\uC784\uC744 \uB098\uD0C0\uB0C5\uB2C8\uB2E4. \u201C\uAC01\uC8FC\u201D,\u201C\uBBF8\uC8FC\u201D\uAC1C\uCCB4\uB294 \u201CInstId\u201D\uC18D\uC131\uC774 \uC874\uC7AC\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC774\uB7F0 \uACBD\uC6B0\uC5D0\uB294 \uAC1C\uCCB4\uAC00 \uC874\uC7AC\uD558\uB294 \uC21C\uC11C(INDEX)\uB85C \uAC1C\uCCB4\uB97C \uAD6C\uBD84\uD569\uB2C8\uB2E4. TARGET\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uB54C\uB294 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uC55E\uC5D0 #\uC744 \uBD99\uC785\uB2C8\uB2E4. \u201C\uCC45\uAC08\uD53C\u201D \uAC1C\uCCB4\uC758 \uACBD\uC6B0\uC5D0\uB294 "InstId"\uC18D\uC131 \uB300\uC2E0 "Name"\uC18D\uC131\uC744 \uC0AC\uC6A9\uD569\uB2C8\uB2E4. \uC774 \uACBD\uC6B0\uC5D0\uB294 #\uC744 \uBD99\uC774\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uB2E4\uC74C\uC740 \uC704 \uB0B4\uC6A9\uC744 \uC885\uD569\uD558\uC5EC \uC791\uC131\uD55C \uC0C1\uD638\uCC38\uC870 Command \uBB38\uC790\uC5F4 \uC608\uC81C\uC785\uB2C8\uB2E4. ?#2043988345;0;0;0;0 \uD45C\uB97C \uC0C1\uD638\uCC38\uC870\uD558\uC5EC \uD654\uBA74\uC5D0 \uD45C\uC758 Page\uB97C \uD45C\uC2DC\uD55C\uB2E4. ?#1;3;1;0;0 \uAC01\uC8FC\uB97C \uC0C1\uD638\uCC38\uC870\uD558\uC5EC \uD654\uBA74\uC5D0 \uAC01\uC8FC\uBC88\uD638\uB97C \uD45C\uC2DC\uD55C\uB2E4. C:\\Hnc\\Hwp70\\Readme.Hwp?#204399566;1;2;1;2 \uC678\uBD80\uBB38\uC11C"ReadMe.hwp"\uC758 \uADF8\uB9BC\uC744 \uC0C1\uD638\uCC38\uC870\uD55C\uB2E4. \uD074\uB9AD\uC2DC \uC0C8 \uCC3D\uC5D0 ?\uCC45\uAC08\uD53C;6;2;0;0 \uB744\uC6C0 \uCC45\uAC08\uD53C\uB97C \uC0C1\uD638\uCC38\uC870\uD558\uC5EC \uD654\uBA74\uC5D0 \uCC45\uAC08\uD53C \uB0B4\uC6A9\uC744 \uD45C\uC2DC\uD55C\uB2E4. \u203B \uC0C1\uD638\uCC38\uC870\uB294 \uD558\uC774\uD37C\uB9C1\uD06C\uC640 \uB2E4\uB974\uAC8C \uC808\uB300\uACBD\uB85C\uB9CC\uC73C\uB85C \uC678\uBD80\uBB38\uC11C\uB97C \uCC38\uC870\uD560 \uC218 \uC788\uB2E4. \uC801\uC6A9\uBC94\uC704\uB780 \uD604\uC7AC \uC2E4\uD589\uD55C \uC561\uC158\uC774 \uC801\uC6A9\uB420 \uBC94\uC704\uB97C \uB9D0\uD558\uB294 \uAC83\uC774\uB2E4. \uC608\uB97C \uB4E4\uBA74 \uD45C\uC758 \uD14C\uB450\uB9AC\uB97C \uBCC0\uACBD\uD558\uB294 \uC561\uC158\uC744 \uC218\uD589\uD560 \uB54C \uC774\uAC83\uC744 \uC804\uCCB4 \uC140\uC5D0 \uD560 \uAC83\uC778\uC9C0, \uC120\uD0DD\uB41C \uC140\uC5D0\uB9CC \uC801\uC6A9\uD560 \uAC83\uC778\uC9C0\uB97C \uAC00\uB2A0\uD558\uB294 \uC6A9\uB3C4\uB85C \uC4F0\uC778 \uB2E4. ApplyTo\uB294 \uC704\uC5D0\uC11C \uB9D0\uD55C \uC801\uC6A9\uBC94\uC704\uB97C \uB098\uD0C0\uB0B8 \uC544\uC774\uD15C\uC73C\uB85C \uC801\uC6A9\uBC94\uC704\uAC00 \uD544\uC694\uD55C \uBAA8\uB4E0 \uC561\uC158\uC5D0 \uB4E4\uC5B4\uAC00 \uC788\uB2E4. ApplyTo\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uAC12\uC740 \uAC01\uAC01\uC758 \uC561\uC158\uC5D0 \uB530\uB77C \uB2E4\uB974\uBA70 \uB4E4\uC5B4\uAC08 \uC218 \uC788\uB294 \uAC12\uC740 \uC561\uC158\uC774 \uC9C1\uC811 \uC815\uC758\uD558\uC5EC \uC0AC\uC6A9\uD55C\uB2E4. (\uC77C\uBC18\uC801\uC73C\uB85C \uB3D9\uC77C\uD55C \uD30C\uB77C\uBA54 \uD130\uC14B\uC744 \uC0AC\uC6A9\uD558\uB294 \uC561\uC158\uC740 \uB3D9\uC77C\uD55C ApplyTo \uAC12\uC744 \uAC00\uC9C4\uB2E4.) \uCE90\uB7FF\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C ApplyTo\uC5D0 \uB4E4\uC5B4\uAC08 \uC218 \uC788\uB294 \uAC12\uC774 \uC81C\uD55C\uC801\uC77C \uC218 \uC788\uB2E4. \uC774\uB7F0 \uACBD\uC6B0 \uB300\uD654\uC0C1\uC790\uC5D0\uC11C \uC120\uD0DD\uB420 \uC218 \uC788\uB294 \uC801\uC6A9\uBC94\uC704\uB97C \uC81C\uD55C\uD574 \uC8FC\uB294 \uAC83\uC774 \uC88B\uC740\uB370 \uC774\uAC83\uC744 \uC815\uC758\uD55C \uC544\uC774\uD15C\uC774 \uBC14\uB85C ApplyClass\uC774\uB2E4. \uB9C8\uCC2C\uAC00\uC9C0 \uB85C \uC801\uC6A9\uBC94\uC704\uC758 \uC81C\uD55C\uC774 \uD544\uC694\uD55C \uBAA8\uB4E0 \uC561\uC158\uC5D0 \uB4E4\uC5B4\uAC00 \uC788\uB2E4. (\uC801\uC6A9\uBC94\uC704\uB97C \uAC00\uC9C0\uB098 \uCE90\uB7FF\uC758 \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uC801\uC6A9\uBC94\uC704\uB97C \uC81C\uD55C\uD560 \uD544\uC694\uAC00 \uC5C6\uC73C\uBA74 ApplyClass\uAC00 \uD544\uC694 \uC5C6\uB2E4.) ApplyClass\uB294 ApplyTo\uC640 \uB9C8\uCC2C\uAC00\uC9C0\uB85C \uAC01\uAC01\uC758 \uC561\uC158\uC774 \uB4E4\uC5B4\uAC00\uB294 \uAC12\uC744 \uC815\uC758\uD558\uBA70, ApplyTo\uC640 \uB2E4\uB974\uAC8C \uC815\uC758\uD55C \uAC12\uC744 \uC870\uD569\uD558\uC5EC \uC0AC\uC6A9\uD55C\uB2E4. (\uC77C\uC885\uC758 Mask\uC2DC\uC2A4\uD15C\uC73C\uB85C \uC9C0\uC815\uB41C bit flag\uAC00 \uC874\uC7AC\uD558\uBA74 ApplyTo\uB85C \uC801\uC6A9 \uAC00\uB2A5\uD55C \uAC12\uC774\uB2E4.) HNC Type C++(MFC) Type HNC Type C++(MFC) Type PIT_NULL NULL PMT_INT8 char PIT_BSTR BSTR (OLE Automation string) PMT_INT16 short PIT_I1 char (1byte signed integer) PMT_INT32 long PIT_I2 short (2byte signed integer) PMT_INT int PIT_I4 long (4byte signed integer) PMT_BYTE BYTE (unsigned char) PIT_I int (machine dependent PMT_UINT16 unsigned short integer) PIT_UI1 unsigned char PMT_UINT32 unsigned long PIT_UI2 unsigned short PMT_UINT unsigned int PIT_UI4 unsigned long PMT_CHAR char PIT_UI unsigned int PMT_UCHAR BYTE (unsigned char) HwpParameterSet PMT_WCHAR unsigned short PMT_SHORT short PIT_SET \uB0B4\uBD80\uC5D0\uC11C \uD574\uB2F9 ParameterSet\uC744 \uC0DD\uC131 PMT_LONG long \uD55C \uB4A4 \uADF8 \uAC1D\uCCB4\uC758 Dispatch ID\uB97C \uB3CC \uB824\uC900\uB2E4. PMT_ULONG unsigned long HwpParameterArray PMT_WORD unsigned short PMT_DWORD unsigned long PIT_ARRAY \uB0B4\uBD80\uC5D0\uC11C \uD574\uB2F9 ParameterArray\uB97C PMT_BOOL int \uC0DD\uC131\uD55C \uB4A4 \uADF8 \uAC1D\uCCB4\uC758 Dispatch ID\uB97C \uB3CC\uB824\uC900\uB2E4. PMT_ASTR char * PIT_BINDATA any (\uB530\uB85C \uD0C0\uC785\uC744 \uCCB4\uD06C\uD558\uC9C0 \uC54A\uC74C) PMT_WSTR wchar_t * PIT_UI64 \uB9AC\uB205\uC2A4\uC6A9 64bit UINT PMT_BSTR BSTR \u203B PIT_* or PMT_* Type\uC740 \uAC01 \uC2DC\uC2A4\uD15C\uC758 \uD638\uD658\uC131\uC744 \uC704\uD574 \uB0B4\uBD80\uC801\uC73C\uB85C \uC9C0\uC815\uD55C \uAE30\uD638\uC0C1\uC218\uC774\uB2E4. \uAC01 \uC2DC\uC2A4\uD15C\uC5D0\uC11C \uC774 \uAE30\uD638\uC0C1\uC218\uB97C \uD574\uC11D\uD574\uC11C \uC2DC\uC2A4\uD15C\uC5D0 \uC798 \uD638\uD658\uB418\uB294 \uB0B4\uBD80 Data Type\uC73C\uB85C \uBCC0\uD658\uD558\uC5EC \uC0AC\uC6A9\uD55C\uB2E4. \uADF8\uB7EC\uBBC0\uB85C, \uD574\uB2F9 \uD0C0\uC785\uC774 \uAF2D C++(MFC) Type\uACFC 100% \uD638\uD658\uB418\uB294 \uAC83\uC740 \uC544\uB2C8\uBA70, \uB610\uD55C \uC561\uC158\uC5D0 \uB530\uB77C \uB0B4\uBD80\uC801\uC73C\uB85C \uD574\uC11D\uD558\uB294 \uBC29\uBC95\uC774 \uB2E4\uB978 \uC218\uB3C4 \uC788\uB2E4. \uD574\uB2F9 \uD0C0\uC785\uC744 \uC0AC\uC6A9\uD560 \uB54C\uC5D0\uB294 \uC758\uBBF8\uB860\uC801\uC778 Data Type\uC73C\uB85C \uC778\uC9C0\uD558\uC5EC \uC0AC\uC6A9\uD55C\uB2E4. \uF53A\uAE00\uC774 \uC0AC\uC6A9\uD558\uB294 \uAE30\uBCF8 \uB2E8\uC704. 1mm\uB294 283.465HWPUNIT \uC774\uBA70, 1inch\uB294 7200HWPUNIT \uC774\uB2E4. 32bit \uC815\uC218\uAC12. HWPUNIT \uB610\uB294 Relative Character Position\uC744 \uB098\uD0C0\uB0B8\uB2E4. Bit0 = 0\uC778 \uACBD\uC6B0, HWPUNIT\uC744 \uB098\uD0C0\uB0B4\uBA70, Bit1~31\uC5D0 HWPUNIT\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC12\uC774 \uC800\uC7A5\uB41C\uB2E4. BIT0 = 1\uC778 \uACBD\uC6B0, Relative Character\uC774\uBA70 Bit1~31\uC5D0\uB294 n*100\uC758 \uAC12\uC744 \uAC00\uC9C4\uB2E4. #define HWPURC_MAKE(type, value) (((value) << 1) | ((type) & 1)) #define HWPURC_TYPE(data) ((data) & 1) #define HWPURC_VALUE(data) ((data) >> 1)'
      }
    ]
  }
];

// src/spec/payload.ts
function isParameterSetPayload(value) {
  if (!value || typeof value !== "object") {
    return false;
  }
  const candidate = value;
  return typeof candidate.parameterSetId === "string" && !!candidate.values && typeof candidate.values === "object";
}

// src/bridges/com-object.ts
var ComObjectBridge = class {
  kind = "com-object";
  raw;
  constructor(raw) {
    this.raw = raw;
  }
  async setVisible(visible) {
    const window = this.raw.XHwpWindows?.Item(0);
    if (window) {
      window.Visible = visible;
    }
  }
  async getPID() {
    const processId = this.raw.ProcessID;
    if (typeof processId === "number") {
      return processId;
    }
    throw new Error("HWP process ID is not available from this COM object.");
  }
  async registerSecurityModule() {
    const ok = this.raw.RegisterModule?.("FilePathCheckDLL", "FilePathCheckerModuleExample");
    if (ok === false) {
      throw new Error("RegisterModule returned false");
    }
  }
  async open(path, options = {}) {
    const ok = this.raw.Open?.(path, options.format ?? "", options.arg ?? "");
    if (ok === false) {
      throw new Error("Open returned false");
    }
  }
  async save() {
    const ok = this.raw.Save?.();
    if (ok === false) {
      throw new Error("Save returned false");
    }
  }
  async saveAs(path, format = "HWP", arg = "") {
    const ok = this.raw.SaveAs?.(path, format, arg);
    if (ok === false) {
      throw new Error("SaveAs returned false");
    }
  }
  async close() {
    await this.run("FileClose");
  }
  async quit() {
    this.raw.Quit?.();
  }
  async insertText(text) {
    const parameterSet = this.raw.HParameterSet?.HInsertText;
    if (!parameterSet) {
      throw new Error("HInsertText parameter set is not available.");
    }
    parameterSet.Text = text;
    await this.execute("InsertText", parameterSet.HSet);
  }
  async run(actionName) {
    const ok = this.raw.HAction?.Run(actionName);
    if (ok === false) {
      throw new Error(`HAction.Run returned false for ${actionName}`);
    }
  }
  async execute(actionName, parameterSet) {
    const resolvedParameterSet = this.resolveParameterSet(parameterSet);
    const ok = this.raw.HAction?.Execute(actionName, resolvedParameterSet);
    if (ok === false) {
      throw new Error(`HAction.Execute returned false for ${actionName}`);
    }
    return ok ?? true;
  }
  async movePos(moveId, para, pos) {
    if (!this.raw.MovePos) {
      throw new Error("MovePos is not available.");
    }
    const ok = para !== void 0 && pos !== void 0 ? this.raw.MovePos(moveId, para, pos) : this.raw.MovePos(moveId);
    if (ok === false) {
      throw new Error(`MovePos returned false for ${moveId}`);
    }
    return ok ?? true;
  }
  async getPosBySet() {
    const positionSet = this.raw.GetPosBySet?.();
    if (!isComItemSet(positionSet)) {
      throw new Error("GetPosBySet is not available.");
    }
    return {
      list: Number(positionSet.Item("List")),
      para: Number(positionSet.Item("Para")),
      pos: Number(positionSet.Item("Pos"))
    };
  }
  async setPos(position) {
    if (!this.raw.SetPos) {
      throw new Error("SetPos is not available.");
    }
    this.raw.SetPos(position.list, position.para, position.pos);
  }
  async setPosBySet(position) {
    if (!this.raw.SetPosBySet) {
      throw new Error("SetPosBySet is not available.");
    }
    const rawParameterSet = this.raw.HParameterSet?.ListParaPos;
    if (!rawParameterSet) {
      throw new Error("HParameterSet.ListParaPos is not available.");
    }
    rawParameterSet.List = position.list;
    rawParameterSet.Para = position.para;
    rawParameterSet.Pos = position.pos;
    const ok = this.raw.SetPosBySet(rawParameterSet.HSet);
    if (ok === false) {
      throw new Error("SetPosBySet returned false.");
    }
    return ok ?? true;
  }
  async selectText(range) {
    if (!this.raw.SelectText) {
      throw new Error("SelectText is not available.");
    }
    const ok = this.raw.SelectText(range.start.para, range.start.pos, range.end.para, range.end.pos);
    if (ok === false) {
      throw new Error("SelectText returned false.");
    }
    return ok ?? true;
  }
  resolveParameterSet(parameterSet) {
    if (!isParameterSetPayload(parameterSet)) {
      return parameterSet;
    }
    const rawParameterSet = this.raw.HParameterSet?.[parameterSet.parameterSetId];
    if (!rawParameterSet) {
      throw new Error(`HParameterSet.${parameterSet.parameterSetId} is not available.`);
    }
    this.applyParameterSetValues(rawParameterSet, parameterSet.values);
    return rawParameterSet.HSet;
  }
  applyParameterSetValues(target, values) {
    for (const [key, value] of Object.entries(values)) {
      if (isNestedParameterSetValue(value)) {
        const nestedSet = this.createNestedParameterSet(target, key);
        this.applyParameterSetValues(nestedSet, value);
        continue;
      }
      target[key] = value;
    }
  }
  createNestedParameterSet(target, itemId) {
    const createItemSet = target.CreateItemSet;
    if (typeof createItemSet !== "function") {
      throw new Error(`Nested HWP parameter set is not available for ${itemId}.`);
    }
    return createItemSet.call(target, itemId, itemId);
  }
};
function isNestedParameterSetValue(value) {
  return !!value && typeof value === "object" && !Array.isArray(value);
}
function isComItemSet(value) {
  return !!value && typeof value === "object" && typeof value.Item === "function";
}

// src/bridges/powershell.ts
import { spawn as defaultSpawn } from "child_process";
import { mkdtempSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { createInterface } from "readline";

// src/bridges/powershell-script.ts
var POWERSHELL_BRIDGE_SCRIPT = String.raw`
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

// src/bridges/powershell.ts
var PowerShellBridge = class {
  kind = "powershell";
  raw = this;
  executable;
  spawn;
  process;
  pending = /* @__PURE__ */ new Map();
  nextId = 1;
  stderr = "";
  initialized = false;
  initPromise;
  constructor(options = {}) {
    this.executable = options.executable ?? "powershell.exe";
    this.spawn = options.spawn ?? defaultSpawn;
  }
  async init() {
    if (this.initialized) {
      return;
    }
    this.initPromise ??= this.request("init").then(() => {
      this.initialized = true;
    }).catch((error) => {
      this.initPromise = void 0;
      throw error;
    });
    await this.initPromise;
  }
  async setVisible(visible) {
    await this.init();
    await this.request("setVisible", { visible });
  }
  async getPID() {
    await this.init();
    return await this.request("getPID");
  }
  async registerSecurityModule() {
    await this.init();
    await this.request("registerSecurityModule");
  }
  async open(path, options = {}) {
    await this.init();
    await this.request("open", { path, format: options.format ?? "", arg: options.arg ?? "" });
  }
  async save() {
    await this.init();
    await this.request("save");
  }
  async saveAs(path, format = "HWP", arg = "") {
    await this.init();
    await this.request("saveAs", { path, format, arg });
  }
  async close() {
    await this.init();
    await this.request("close");
  }
  async quit() {
    if (!this.process) {
      return;
    }
    const child = this.process;
    await this.request("quit");
    child.kill();
    if (this.process === child) {
      this.process = void 0;
    }
    this.initialized = false;
    this.initPromise = void 0;
  }
  async insertText(text) {
    await this.init();
    await this.request("insertText", { text });
  }
  async run(actionName) {
    await this.init();
    await this.request("run", { actionName });
  }
  async execute(actionName, parameterSet) {
    if (parameterSet !== void 0 && !isParameterSetPayload(parameterSet)) {
      throw new HwpAutomationError(
        "ACTION_FAILED",
        "PowerShell bridge only accepts internal structured ParameterSetPayload objects."
      );
    }
    await this.init();
    return await this.request("execute", { actionName, parameterSet });
  }
  async movePos(moveId, para, pos) {
    await this.init();
    return await this.request("movePos", { moveId, para, pos });
  }
  async getPosBySet() {
    await this.init();
    return await this.request("getPosBySet");
  }
  async setPos(position) {
    await this.init();
    await this.request("setPos", { position });
  }
  async setPosBySet(position) {
    await this.init();
    return await this.request("setPosBySet", { position });
  }
  async selectText(range) {
    await this.init();
    return await this.request("selectText", { range });
  }
  ensureProcess() {
    if (this.process) {
      return;
    }
    const scriptPath = writeBridgeScript();
    const child = this.spawn(this.executable, ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", scriptPath], {
      windowsHide: true
    });
    this.process = child;
    createInterface({ input: child.stdout }).on("line", (line) => {
      this.handleResponse(line);
    });
    child.stderr.on("data", (chunk) => {
      this.stderr += chunk.toString();
    });
    child.on("exit", (code) => {
      const error = new HwpAutomationError(
        "COM_BRIDGE_NOT_FOUND",
        `PowerShell bridge process exited with code ${code}. ${this.stderr}`.trim()
      );
      for (const pending of this.pending.values()) {
        pending.reject(error);
      }
      this.pending.clear();
      this.process = void 0;
      this.initialized = false;
      this.initPromise = void 0;
    });
  }
  request(method, params) {
    this.ensureProcess();
    const id = this.nextId++;
    const payload = JSON.stringify({ id, method, params }) + "\n";
    return new Promise((resolve, reject) => {
      this.pending.set(id, { resolve, reject });
      this.process?.stdin.write(payload);
    });
  }
  handleResponse(line) {
    let response;
    try {
      response = JSON.parse(line);
    } catch {
      return;
    }
    const pending = this.pending.get(response.id);
    if (!pending) {
      return;
    }
    this.pending.delete(response.id);
    if (response.ok) {
      pending.resolve(response.result);
      return;
    }
    pending.reject(new HwpAutomationError("ACTION_FAILED", response.error ?? "PowerShell bridge request failed."));
  }
};
function writeBridgeScript() {
  const dir = mkdtempSync(join(tmpdir(), "tshwpx-"));
  const scriptPath = join(dir, "bridge.ps1");
  writeFileSync(scriptPath, POWERSHELL_BRIDGE_SCRIPT, "utf8");
  return scriptPath;
}

// src/internal/parameter-sets.ts
var PARAMETER_SET_MAP = new Map(parameterSetDefinitions.map((parameterSet) => [parameterSet.id, parameterSet]));
var PARAMETER_SET_ITEM_IDS = new Map(
  parameterSetDefinitions.map((parameterSet) => [
    parameterSet.id,
    new Set(parameterSet.items.map((item) => item.id))
  ])
);
function getParameterSetDefinition(parameterSetId) {
  return PARAMETER_SET_MAP.get(parameterSetId);
}
function createParameterSetPayload(parameterSetId, values = {}) {
  requireParameterSet(parameterSetId);
  const itemIds = PARAMETER_SET_ITEM_IDS.get(parameterSetId);
  for (const itemId of Object.keys(values)) {
    if (!itemIds?.has(itemId)) {
      throw new HwpAutomationError("ACTION_FAILED", `Unknown item for ${parameterSetId}: ${itemId}`);
    }
  }
  return {
    parameterSetId,
    values: { ...values }
  };
}
function requireParameterSet(parameterSetId) {
  const parameterSet = getParameterSetDefinition(parameterSetId);
  if (!parameterSet) {
    throw new HwpAutomationError("ACTION_FAILED", `Unknown HWP parameter set: ${parameterSetId}`);
  }
  return parameterSet;
}

// src/internal/parameter-values.ts
function toHwpBoolean(value) {
  return value ? 1 : 0;
}
function setValue(values, key, value) {
  if (value !== void 0) {
    values[key] = value;
  }
}
function setBooleanValue(values, key, value) {
  if (value !== void 0) {
    values[key] = toHwpBoolean(value);
  }
}
function setArrayValue(values, key, value) {
  if (value !== void 0) {
    values[key] = [...value];
  }
}

// src/document/char-shape-values.ts
var FACE_NAME_ITEM_IDS = [
  "FaceNameHangul",
  "FaceNameLatin",
  "FaceNameHanja",
  "FaceNameJapanese",
  "FaceNameOther",
  "FaceNameSymbol",
  "FaceNameUser"
];
var TEXT_COLOR_ACTIONS = {
  black: "CharShapeTextColorBlack",
  blue: "CharShapeTextColorBlue",
  bluish: "CharShapeTextColorBluish",
  green: "CharShapeTextColorGreen",
  red: "CharShapeTextColorRed",
  violet: "CharShapeTextColorViolet",
  white: "CharShapeTextColorWhite",
  yellow: "CharShapeTextColorYellow"
};
function createCharShapeValues(options) {
  const values = {};
  setValue(values, "Height", options.height);
  setBooleanValue(values, "Bold", options.bold);
  setBooleanValue(values, "Italic", options.italic);
  if (options.faceName !== void 0) {
    for (const itemId of FACE_NAME_ITEM_IDS) {
      values[itemId] = options.faceName;
    }
  }
  setValue(values, "TextColor", options.textColor);
  return values;
}

// src/document/char-shape-actions.ts
var CharacterShapeToggleApi = class {
  constructor(bridge, actionId) {
    this.bridge = bridge;
    this.actionId = actionId;
  }
  bridge;
  actionId;
  async toggle() {
    await this.bridge.run(this.actionId);
  }
};
var CharacterShapeApplyApi = class {
  constructor(bridge, actionId) {
    this.bridge = bridge;
    this.actionId = actionId;
  }
  bridge;
  actionId;
  async apply() {
    await this.bridge.run(this.actionId);
  }
};
var CharacterShapeFocusApi = class {
  constructor(bridge, actionId) {
    this.bridge = bridge;
    this.actionId = actionId;
  }
  bridge;
  actionId;
  async focus() {
    await this.bridge.run(this.actionId);
  }
};
var CharacterShapeAdjustApi = class {
  constructor(bridge, focusActionId, increaseActionId, decreaseActionId) {
    this.bridge = bridge;
    this.focusActionId = focusActionId;
    this.increaseActionId = increaseActionId;
    this.decreaseActionId = decreaseActionId;
  }
  bridge;
  focusActionId;
  increaseActionId;
  decreaseActionId;
  async focus() {
    await this.bridge.run(this.focusActionId);
  }
  async increase() {
    await this.bridge.run(this.increaseActionId);
  }
  async decrease() {
    await this.bridge.run(this.decreaseActionId);
  }
};
var CharacterShapeFaceNameApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async next() {
    await this.bridge.run("CharShapeNextFaceName");
  }
  async previous() {
    await this.bridge.run("CharShapePrevFaceName");
  }
};
var CharacterShapeTextColorApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async set(color) {
    await this.bridge.run(TEXT_COLOR_ACTIONS[color]);
  }
};
var CharacterShapeUnderlineApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async toggle() {
    await this.bridge.run("CharShapeUnderline");
  }
};
var CharacterShapeWidthApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async focus() {
    await this.bridge.run("CharShapeWidth");
  }
  async increase() {
    await this.bridge.run("CharShapeWidthIncrease");
  }
  async decrease() {
    await this.bridge.run("CharShapeWidthDecrease");
  }
};
var CharacterShapeScriptApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async subscript() {
    await this.bridge.run("CharShapeSubscript");
  }
  async superscript() {
    await this.bridge.run("CharShapeSuperscript");
  }
  async cycleSuperSubscript() {
    await this.bridge.run("CharShapeSuperSubscript");
  }
};

// src/document/char-shape-dialog.ts
var CharacterShapeDialogApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async open(options = {}) {
    await this.bridge.execute("CharShapeDialog", createParameterSetPayload("CharShape", createCharShapeValues(options)));
  }
  async openWithoutBorder(options = {}) {
    await this.bridge.execute(
      "CharShapeDialogWithoutBord",
      createParameterSetPayload("CharShape", createCharShapeValues(options))
    );
  }
};

// src/document/char-shape-api.ts
var CharacterShapeApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.bold = new CharacterShapeToggleApi(bridge, "CharShapeBold");
    this.centerline = new CharacterShapeToggleApi(bridge, "CharShapeCenterline");
    this.dialog = new CharacterShapeDialogApi(bridge);
    this.emboss = new CharacterShapeToggleApi(bridge, "CharShapeEmboss");
    this.engrave = new CharacterShapeToggleApi(bridge, "CharShapeEngrave");
    this.height = new CharacterShapeAdjustApi(bridge, "CharShapeHeight", "CharShapeHeightIncrease", "CharShapeHeightDecrease");
    this.italic = new CharacterShapeToggleApi(bridge, "CharShapeItalic");
    this.language = new CharacterShapeFocusApi(bridge, "CharShapeLang");
    this.faceName = new CharacterShapeFaceNameApi(bridge);
    this.normal = new CharacterShapeApplyApi(bridge, "CharShapeNormal");
    this.outline = new CharacterShapeToggleApi(bridge, "CharShapeOutline");
    this.shadow = new CharacterShapeToggleApi(bridge, "CharShapeShadow");
    this.spacing = new CharacterShapeAdjustApi(
      bridge,
      "CharShapeSpacing",
      "CharShapeSpacingIncrease",
      "CharShapeSpacingDecrease"
    );
    this.typeFace = new CharacterShapeFocusApi(bridge, "CharShapeTypeFace");
    this.textColor = new CharacterShapeTextColorApi(bridge);
    this.underline = new CharacterShapeUnderlineApi(bridge);
    this.width = new CharacterShapeWidthApi(bridge);
    this.script = new CharacterShapeScriptApi(bridge);
  }
  bridge;
  bold;
  centerline;
  dialog;
  emboss;
  engrave;
  height;
  italic;
  language;
  faceName;
  normal;
  outline;
  shadow;
  spacing;
  typeFace;
  textColor;
  underline;
  width;
  script;
  async set(options) {
    await this.bridge.execute("CharShape", createParameterSetPayload("CharShape", createCharShapeValues(options)));
  }
};

// src/document/bridge-methods.ts
function requireBridgeMethod(method, name) {
  if (!method) {
    throw new Error(`The active HWP bridge does not support ${name}.`);
  }
  return method;
}

// src/document/cursor-common.ts
var DocumentCursorBoundaryApi = class {
  constructor(bridge, beginActionId, endActionId) {
    this.bridge = bridge;
    this.beginActionId = beginActionId;
    this.endActionId = endActionId;
  }
  bridge;
  beginActionId;
  endActionId;
  async begin() {
    await this.bridge.run(this.beginActionId);
  }
  async end() {
    await this.bridge.run(this.endActionId);
  }
};
var CURSOR_MOVE_TARGET_IDS = {
  main: 0,
  currentList: 1,
  documentStart: 2,
  documentEnd: 3,
  listStart: 4,
  listEnd: 5,
  paragraphStart: 6,
  paragraphEnd: 7,
  wordStart: 8,
  wordEnd: 9,
  nextParagraph: 10,
  previousParagraph: 11,
  nextPosition: 12,
  previousPosition: 13,
  nextPositionEx: 14,
  previousPositionEx: 15,
  nextChar: 16,
  previousChar: 17,
  nextWord: 18,
  previousWord: 19,
  nextLine: 20,
  previousLine: 21,
  lineStart: 22,
  lineEnd: 23,
  parentList: 24,
  topLevelList: 25,
  rootList: 26,
  cellLeft: 100,
  cellRight: 101,
  cellUp: 102,
  cellDown: 103,
  cellStart: 104,
  cellEnd: 105,
  cellTop: 106,
  cellBottom: 107,
  screen: 200,
  scan: 201
};

// src/document/cursor-move.ts
var DocumentCursorMoveApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.document = new DocumentCursorBoundaryApi(bridge, "MoveDocBegin", "MoveDocEnd");
    this.list = new DocumentCursorBoundaryApi(bridge, "MoveListBegin", "MoveListEnd");
    this.line = new DocumentCursorLineApi(bridge);
    this.paragraph = new DocumentCursorParagraphApi(bridge);
    this.word = new DocumentCursorWordApi(bridge);
    this.position = new DocumentCursorPositionMoveApi(bridge);
    this.char = new DocumentCursorCharApi(bridge);
    this.direction = new DocumentCursorDirectionApi(bridge);
    this.page = new DocumentCursorPageApi(bridge);
    this.view = new DocumentCursorViewApi(bridge);
    this.scroll = new DocumentCursorScrollApi(bridge);
    this.section = new DocumentCursorSectionApi(bridge);
    this.column = new DocumentCursorColumnApi(bridge);
    this.cell = new DocumentCursorCellApi(bridge);
  }
  bridge;
  document;
  list;
  line;
  paragraph;
  word;
  position;
  char;
  direction;
  page;
  view;
  scroll;
  section;
  column;
  cell;
  async to(target, options = {}) {
    return await this.byId(CURSOR_MOVE_TARGET_IDS[target], options);
  }
  async byId(moveId, options = {}) {
    return await requireBridgeMethod(this.bridge.movePos, "MovePos")(moveId, options.para, options.pos);
  }
};
var DocumentCursorLineApi = class extends DocumentCursorBoundaryApi {
  constructor(lineBridge) {
    super(lineBridge, "MoveLineBegin", "MoveLineEnd");
    this.lineBridge = lineBridge;
  }
  lineBridge;
  async up() {
    await this.lineBridge.run("MoveLineUp");
  }
  async down() {
    await this.lineBridge.run("MoveLineDown");
  }
};
var DocumentCursorParagraphApi = class extends DocumentCursorBoundaryApi {
  constructor(paragraphBridge) {
    super(paragraphBridge, "MoveParaBegin", "MoveParaEnd");
    this.paragraphBridge = paragraphBridge;
  }
  paragraphBridge;
  async nextBegin() {
    await this.paragraphBridge.run("MoveNextParaBegin");
  }
  async previousBegin() {
    await this.paragraphBridge.run("MovePrevParaBegin");
  }
  async previousEnd() {
    await this.paragraphBridge.run("MovePrevParaEnd");
  }
};
var DocumentCursorWordApi = class extends DocumentCursorBoundaryApi {
  constructor(wordBridge) {
    super(wordBridge, "MoveWordBegin", "MoveWordEnd");
    this.wordBridge = wordBridge;
  }
  wordBridge;
  async next() {
    await this.wordBridge.run("MoveNextWord");
  }
  async previous() {
    await this.wordBridge.run("MovePrevWord");
  }
};
var DocumentCursorPositionMoveApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async next() {
    await this.bridge.run("MoveNextPos");
  }
  async previous() {
    await this.bridge.run("MovePrevPos");
  }
  async nextIncludingSubList() {
    await this.bridge.run("MoveNextPosEx");
  }
  async previousIncludingSubList() {
    await this.bridge.run("MovePrevPosEx");
  }
};
var DocumentCursorCharApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async next() {
    await this.bridge.run("MoveNextChar");
  }
  async previous() {
    await this.bridge.run("MovePrevChar");
  }
};
var DocumentCursorDirectionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async left() {
    await this.bridge.run("MoveLeft");
  }
  async right() {
    await this.bridge.run("MoveRight");
  }
  async up() {
    await this.bridge.run("MoveUp");
  }
  async down() {
    await this.bridge.run("MoveDown");
  }
};
var DocumentCursorPageApi = class extends DocumentCursorBoundaryApi {
  constructor(pageBridge) {
    super(pageBridge, "MovePageBegin", "MovePageEnd");
    this.pageBridge = pageBridge;
  }
  pageBridge;
  async up() {
    await this.pageBridge.run("MovePageUp");
  }
  async down() {
    await this.pageBridge.run("MovePageDown");
  }
};
var DocumentCursorViewApi = class extends DocumentCursorBoundaryApi {
  constructor(viewBridge) {
    super(viewBridge, "MoveViewBegin", "MoveViewEnd");
    this.viewBridge = viewBridge;
  }
  viewBridge;
  async up() {
    await this.viewBridge.run("MoveViewUp");
  }
  async down() {
    await this.viewBridge.run("MoveViewDown");
  }
};
var DocumentCursorScrollApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async up() {
    await this.bridge.run("MoveScrollUp");
  }
  async down() {
    await this.bridge.run("MoveScrollDown");
  }
  async next() {
    await this.bridge.run("MoveScrollNext");
  }
  async previous() {
    await this.bridge.run("MoveScrollPrev");
  }
};
var DocumentCursorSectionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async next() {
    await this.bridge.run("MoveSectionDown");
  }
  async previous() {
    await this.bridge.run("MoveSectionUp");
  }
};
var DocumentCursorColumnApi = class extends DocumentCursorBoundaryApi {
  constructor(columnBridge) {
    super(columnBridge, "MoveColumnBegin", "MoveColumnEnd");
    this.columnBridge = columnBridge;
  }
  columnBridge;
  async next() {
    await this.columnBridge.run("MoveNextColumn");
  }
  async previous() {
    await this.columnBridge.run("MovePrevColumn");
  }
};
var DocumentCursorCellApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async left() {
    return await this.move("cellLeft");
  }
  async right() {
    return await this.move("cellRight");
  }
  async up() {
    return await this.move("cellUp");
  }
  async down() {
    return await this.move("cellDown");
  }
  async rowStart() {
    return await this.move("cellStart");
  }
  async rowEnd() {
    return await this.move("cellEnd");
  }
  async columnStart() {
    return await this.move("cellTop");
  }
  async columnEnd() {
    return await this.move("cellBottom");
  }
  async move(target) {
    return await requireBridgeMethod(this.bridge.movePos, "MovePos")(CURSOR_MOVE_TARGET_IDS[target]);
  }
};

// src/document/cursor-position.ts
var DocumentCursorPositionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async get() {
    return await requireBridgeMethod(this.bridge.getPosBySet, "GetPosBySet")();
  }
  async set(position) {
    return await requireBridgeMethod(this.bridge.setPosBySet, "SetPosBySet")(position);
  }
};

// src/document/cursor-selection.ts
var DocumentCursorSelectionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.extend = new DocumentCursorSelectionExtendApi(bridge);
  }
  bridge;
  extend;
  async start() {
    await this.bridge.run("Select");
  }
  async all() {
    await this.bridge.run("SelectAll");
  }
  async column() {
    await this.bridge.run("SelectColumn");
  }
  async objectNext() {
    await this.bridge.run("SelectCtrlFront");
  }
  async objectPrevious() {
    await this.bridge.run("SelectCtrlReverse");
  }
  async cancel() {
    await this.bridge.run("Cancel");
  }
  async range(range) {
    return await requireBridgeMethod(this.bridge.selectText, "SelectText")(range);
  }
};
var DocumentCursorSelectionExtendApi = class {
  document;
  list;
  line;
  paragraph;
  word;
  position;
  direction;
  page;
  view;
  constructor(bridge) {
    this.document = new DocumentCursorBoundaryApi(bridge, "MoveSelDocBegin", "MoveSelDocEnd");
    this.list = new DocumentCursorBoundaryApi(bridge, "MoveSelListBegin", "MoveSelListEnd");
    this.line = new DocumentCursorLineSelectionApi(bridge);
    this.paragraph = new DocumentCursorParagraphSelectionApi(bridge);
    this.word = new DocumentCursorWordSelectionApi(bridge);
    this.position = new DocumentCursorPositionSelectionApi(bridge);
    this.direction = new DocumentCursorDirectionSelectionApi(bridge);
    this.page = new DocumentCursorPageSelectionApi(bridge);
    this.view = new DocumentCursorViewSelectionApi(bridge);
  }
  async nextWord() {
    await this.word.next();
  }
  async previousWord() {
    await this.word.previous();
  }
  async documentEnd() {
    await this.document.end();
  }
  async lineBegin() {
    await this.line.begin();
  }
};
var DocumentCursorLineSelectionApi = class extends DocumentCursorBoundaryApi {
  constructor(lineBridge) {
    super(lineBridge, "MoveSelLineBegin", "MoveSelLineEnd");
    this.lineBridge = lineBridge;
  }
  lineBridge;
  async up() {
    await this.lineBridge.run("MoveSelLineUp");
  }
  async down() {
    await this.lineBridge.run("MoveSelLineDown");
  }
};
var DocumentCursorParagraphSelectionApi = class extends DocumentCursorBoundaryApi {
  constructor(paragraphBridge) {
    super(paragraphBridge, "MoveSelParaBegin", "MoveSelParaEnd");
    this.paragraphBridge = paragraphBridge;
  }
  paragraphBridge;
  async nextBegin() {
    await this.paragraphBridge.run("MoveSelNextParaBegin");
  }
  async previousBegin() {
    await this.paragraphBridge.run("MoveSelPrevParaBegin");
  }
  async previousEnd() {
    await this.paragraphBridge.run("MoveSelPrevParaEnd");
  }
};
var DocumentCursorWordSelectionApi = class extends DocumentCursorBoundaryApi {
  constructor(wordBridge) {
    super(wordBridge, "MoveSelWordBegin", "MoveSelWordEnd");
    this.wordBridge = wordBridge;
  }
  wordBridge;
  async next() {
    await this.wordBridge.run("MoveSelNextWord");
  }
  async previous() {
    await this.wordBridge.run("MoveSelPrevWord");
  }
};
var DocumentCursorPositionSelectionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async next() {
    await this.bridge.run("MoveSelNextPos");
  }
  async previous() {
    await this.bridge.run("MoveSelPrevPos");
  }
  async nextChar() {
    await this.bridge.run("MoveSelNextChar");
  }
  async previousChar() {
    await this.bridge.run("MoveSelPrevChar");
  }
};
var DocumentCursorDirectionSelectionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async left() {
    await this.bridge.run("MoveSelLeft");
  }
  async right() {
    await this.bridge.run("MoveSelRight");
  }
  async up() {
    await this.bridge.run("MoveSelUp");
  }
  async down() {
    await this.bridge.run("MoveSelDown");
  }
};
var DocumentCursorPageSelectionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async up() {
    await this.bridge.run("MoveSelPageUp");
  }
  async down() {
    await this.bridge.run("MoveSelPageDown");
  }
};
var DocumentCursorViewSelectionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async up() {
    await this.bridge.run("MoveSelViewUp");
  }
  async down() {
    await this.bridge.run("MoveSelViewDown");
  }
};

// src/document/cursor-api.ts
var DocumentCursorApi = class {
  move;
  position;
  selection;
  constructor(bridge) {
    this.move = new DocumentCursorMoveApi(bridge);
    this.position = new DocumentCursorPositionApi(bridge);
    this.selection = new DocumentCursorSelectionApi(bridge);
  }
};

// src/document/values.ts
function createParagraphShapeValues(options) {
  const values = {};
  setValue(values, "LeftMargin", options.leftMargin);
  setValue(values, "RightMargin", options.rightMargin);
  setValue(values, "Indentation", options.indentation);
  setValue(values, "PrevSpacing", options.prevSpacing);
  setValue(values, "NextSpacing", options.nextSpacing);
  setValue(values, "LineSpacingType", options.lineSpacingType);
  setValue(values, "LineSpacing", options.lineSpacing);
  setValue(values, "AlignType", options.alignType);
  setValue(values, "BreakLatinWord", options.breakLatinWord);
  setBooleanValue(values, "BreakNonLatinWord", options.breakNonLatinWord);
  setBooleanValue(values, "SnapToGrid", options.snapToGrid);
  setValue(values, "Condense", options.condense);
  setBooleanValue(values, "WidowOrphan", options.widowOrphan);
  setBooleanValue(values, "KeepWithNext", options.keepWithNext);
  setBooleanValue(values, "KeepLinesTogether", options.keepLinesTogether);
  setBooleanValue(values, "PagebreakBefore", options.pageBreakBefore);
  setValue(values, "TextAlignment", options.textAlignment);
  setBooleanValue(values, "FontLineHeight", options.fontLineHeight);
  setValue(values, "HeadingType", options.headingType);
  setValue(values, "Level", options.level);
  setBooleanValue(values, "BorderConnect", options.borderConnect);
  setBooleanValue(values, "BorderText", options.borderText);
  setValue(values, "BorderOffsetLeft", options.borderOffsetLeft);
  setValue(values, "BorderOffsetRight", options.borderOffsetRight);
  setValue(values, "BorderOffsetTop", options.borderOffsetTop);
  setValue(values, "BorderOffsetBottom", options.borderOffsetBottom);
  setBooleanValue(values, "TailType", options.tailType);
  setValue(values, "LineWrap", options.lineWrap);
  return values;
}
function createParagraphNumberingValues(options) {
  const values = createParagraphShapeValues(options);
  if (options.type !== void 0) {
    values.HeadingType = PARAGRAPH_NUMBERING_HEADING_TYPES[options.type];
  }
  return values;
}
function createStyleItemValues(options) {
  const values = {};
  setValue(values, "Type", options.type);
  setValue(values, "NameLocal", options.localName);
  setValue(values, "NameEng", options.englishName);
  setValue(values, "Next", options.next);
  setBooleanValue(values, "LockForm", options.lockForm);
  setValue(values, "CharShape", options.charShape);
  setValue(values, "ParaShape", options.paraShape);
  return values;
}
function createPageDeleteValues(options) {
  const values = {};
  setValue(values, "Range", options.range);
  setValue(values, "RangeCustom", options.rangeCustom);
  setBooleanValue(values, "UsingPagenum", options.usingPageNumber);
  return values;
}
function createPageNumberingPositionValues(options) {
  const values = {};
  setValue(values, "NumberFormat", options.numberFormat);
  setValue(values, "UserChar", options.userChar);
  setValue(values, "PrefixChar", options.prefixChar);
  setValue(values, "SuffixChar", options.suffixChar);
  setValue(values, "SideChar", options.sideChar);
  setValue(values, "DrawPos", options.drawPos);
  setValue(values, "NewNumber", options.newNumber);
  return values;
}
function createPageSetupValues(options) {
  const values = {};
  const pageDef = {};
  setValue(pageDef, "PaperWidth", options.paperWidth);
  setValue(pageDef, "PaperHeight", options.paperHeight);
  setBooleanValue(pageDef, "Landscape", options.landscape);
  setValue(pageDef, "LeftMargin", options.margins?.left);
  setValue(pageDef, "RightMargin", options.margins?.right);
  setValue(pageDef, "TopMargin", options.margins?.top);
  setValue(pageDef, "BottomMargin", options.margins?.bottom);
  setValue(pageDef, "HeaderLen", options.headerLength);
  setValue(pageDef, "FooterLen", options.footerLength);
  setValue(pageDef, "GutterLen", options.gutterLength);
  setValue(pageDef, "GutterType", options.gutterType);
  if (Object.keys(pageDef).length > 0) {
    values.PageDef = pageDef;
  }
  setValue(values, "ApplyTo", options.applyTo);
  setValue(values, "ApplyClass", options.applyClass);
  return values;
}
var PARAGRAPH_NUMBERING_HEADING_TYPES = {
  none: 0,
  outline: 1,
  paragraph: 2,
  bullet: 3
};

// src/document/pages.ts
var DocumentPagesApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.move = new DocumentPageMoveApi(bridge);
    this.numbering = new DocumentPageNumberingApi(bridge);
    this.orientation = new DocumentPageOrientationApi(bridge);
    this.sections = new DocumentPageSectionsApi(bridge);
  }
  bridge;
  move;
  numbering;
  orientation;
  sections;
  async break() {
    await this.bridge.run("BreakPage");
  }
  async copy() {
    await this.bridge.run("CopyPage");
  }
  async paste() {
    await this.bridge.run("PastePage");
  }
  async delete(options = {}) {
    await this.bridge.execute("DeletePage", createParameterSetPayload("DeletePage", createPageDeleteValues(options)));
  }
  async setup(options = {}) {
    await this.bridge.execute("PageSetup", createParameterSetPayload("SecDef", createPageSetupValues(options)));
  }
};
var DocumentPageSectionsApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async break() {
    await this.bridge.run("BreakSection");
  }
};
var DocumentPageMoveApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async begin() {
    await this.bridge.run("MovePageBegin");
  }
  async end() {
    await this.bridge.run("MovePageEnd");
  }
  async previous() {
    await this.bridge.run("MovePageUp");
  }
  async next() {
    await this.bridge.run("MovePageDown");
  }
};
var DocumentPageNumberingApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.position = new DocumentPageNumberingPositionApi(bridge);
  }
  bridge;
  position;
  async insert() {
    await this.bridge.run("InsertPageNum");
  }
  async recalculate() {
    await this.bridge.run("RecalcPageCount");
  }
};
var DocumentPageNumberingPositionApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async set(options) {
    await this.bridge.execute("PageNumPos", createParameterSetPayload("PageNumPos", createPageNumberingPositionValues(options)));
  }
};
var DocumentPageOrientationApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async landscape() {
    await this.bridge.execute("PageLandscape", createParameterSetPayload("SecDef"));
  }
  async portrait() {
    await this.bridge.execute("PagePortrait", createParameterSetPayload("SecDef"));
  }
};

// src/document/paragraph-format.ts
var DocumentParagraphShapeApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async set(options) {
    await this.bridge.execute("ParagraphShape", createParameterSetPayload("ParaShape", createParagraphShapeValues(options)));
  }
};
var DocumentParagraphAlignApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async left() {
    await this.bridge.run("ParagraphShapeAlignLeft");
  }
  async center() {
    await this.bridge.run("ParagraphShapeAlignCenter");
  }
  async right() {
    await this.bridge.run("ParagraphShapeAlignRight");
  }
  async justify() {
    await this.bridge.run("ParagraphShapeAlignJustify");
  }
  async distribute() {
    await this.bridge.run("ParagraphShapeAlignDistrib");
  }
  async division() {
    await this.bridge.run("ParagraphShapeAlignDivisio");
  }
};
var DocumentParagraphMarginApi = class {
  both;
  left;
  right;
  constructor(bridge) {
    this.both = new DocumentParagraphAdjustApi(bridge, "ParagraphShapeIncreaseMarg", "ParagraphShapeDecreaseMarg");
    this.left = new DocumentParagraphAdjustApi(bridge, "ParagraphShapeIncreaseLeft", "ParagraphShapeDecreaseLeft");
    this.right = new DocumentParagraphAdjustApi(bridge, "ParagraphShapeDecreaseRigh", "ParagraphShapeIncreaseRigh");
  }
};
var DocumentParagraphLineSpacingApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async increase() {
    await this.bridge.run("ParagraphShapeIncreaseLine");
  }
  async decrease() {
    await this.bridge.run("ParagraphShapeDecreaseLine");
  }
};
var DocumentParagraphIndentationApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async positive() {
    await this.bridge.run("ParagraphShapeIndentPositi");
  }
  async negative() {
    await this.bridge.run("ParagraphShapeIndentNegati");
  }
  async atCaret() {
    await this.bridge.run("ParagraphShapeIndentAtCare");
  }
};
var DocumentParagraphAdjustApi = class {
  constructor(bridge, increaseActionId, decreaseActionId) {
    this.bridge = bridge;
    this.increaseActionId = increaseActionId;
    this.decreaseActionId = decreaseActionId;
  }
  bridge;
  increaseActionId;
  decreaseActionId;
  async increase() {
    await this.bridge.run(this.increaseActionId);
  }
  async decrease() {
    await this.bridge.run(this.decreaseActionId);
  }
};
var DocumentParagraphToggleApi = class {
  constructor(bridge, actionId) {
    this.bridge = bridge;
    this.actionId = actionId;
  }
  bridge;
  actionId;
  async toggle() {
    await this.bridge.run(this.actionId);
  }
};

// src/document/paragraph-numbering.ts
var DocumentParagraphNumberingApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.defaults = new DocumentParagraphNumberingDefaultsApi(bridge);
    this.dialog = new DocumentParagraphNumberingDialogApi(bridge);
  }
  bridge;
  defaults;
  dialog;
  async set(options) {
    await this.bridge.execute(
      "ParagraphShape",
      createParameterSetPayload("ParaShape", createParagraphNumberingValues(options))
    );
  }
  async clear() {
    await this.set({ type: "none" });
  }
  async bullet(options = {}) {
    await this.execute("PutBullet", options);
  }
  async paragraph(options = {}) {
    await this.execute("PutParaNumber", options);
  }
  async outline(options = {}) {
    await this.execute("PutOutlineNumber", options);
  }
  async startNew(options = {}) {
    await this.execute("PutNewParaNumber", options);
  }
  async levelUp() {
    await this.execute("ParaNumberBulletLevelUp", {});
  }
  async levelDown() {
    await this.execute("ParaNumberBulletLevelDown", {});
  }
  async promote() {
    await this.levelUp();
  }
  async demote() {
    await this.levelDown();
  }
  async execute(actionId, options) {
    await this.bridge.execute(actionId, createParameterSetPayload("ParaShape", createParagraphShapeValues(options)));
  }
};
var DocumentParagraphNumberingDefaultsApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async bullet() {
    await this.bridge.execute("GetDefaultBullet", createParameterSetPayload("ParaShape"));
  }
  async paragraph() {
    await this.bridge.execute("GetDefaultParaNumber", createParameterSetPayload("ParaShape"));
  }
};
var DocumentParagraphNumberingDialogApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async bullet(options = {}) {
    await this.execute("BulletDlg", options);
  }
  async paragraph(options = {}) {
    await this.execute("ParaNumberDlg", options);
  }
  async pictureBullet(options = {}) {
    await this.execute("PictureBulletDlg", options);
  }
  async execute(actionId, options) {
    await this.bridge.execute(actionId, createParameterSetPayload("ParaShape", createParagraphShapeValues(options)));
  }
};

// src/document/paragraph-api.ts
var DocumentParagraphApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.align = new DocumentParagraphAlignApi(bridge);
    this.indentation = new DocumentParagraphIndentationApi(bridge);
    this.lineSpacing = new DocumentParagraphLineSpacingApi(bridge);
    this.margin = new DocumentParagraphMarginApi(bridge);
    this.numbering = new DocumentParagraphNumberingApi(bridge);
    this.protect = new DocumentParagraphToggleApi(bridge, "ParagraphShapeProtect");
    this.shape = new DocumentParagraphShapeApi(bridge);
    this.singleRow = new DocumentParagraphToggleApi(bridge, "ParagraphShapeSingleRow");
    this.withNext = new DocumentParagraphToggleApi(bridge, "ParagraphShapeWithNext");
  }
  bridge;
  align;
  indentation;
  lineSpacing;
  margin;
  numbering;
  protect;
  shape;
  singleRow;
  withNext;
};

// src/document/styles.ts
var DocumentStylesApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.numbering = new DocumentStyleNumberingApi(bridge);
    this.template = new DocumentStyleTemplateApi(bridge);
  }
  bridge;
  numbering;
  template;
  async apply(input) {
    const options = normalizeStyleApplyInput(input);
    const actionId = options.version === "legacy" ? "Style" : "StyleEx";
    await this.executeStyle(actionId, options.index);
  }
  async add(index) {
    await this.executeStyle("StyleAdd", index);
  }
  async edit(index) {
    await this.executeStyle("StyleEdit", index);
  }
  async delete(input, alternation) {
    const options = normalizeStyleDeleteInput(input, alternation);
    const values = { Target: options.target };
    if (options.alternation !== void 0) {
      values.Alternation = options.alternation;
    }
    await this.bridge.execute("StyleDelete", createParameterSetPayload("StyleDelete", values));
  }
  async changeToCurrentShape(options) {
    await this.bridge.execute("StyleChangeToCurrentShape", createParameterSetPayload("StyleItem", createStyleItemValues(options)));
  }
  async clearCharStyle() {
    await this.bridge.run("StyleClearCharStyle");
  }
  async shortcut(index) {
    if (!Number.isInteger(index) || index < 1 || index > 10) {
      throw new RangeError("Style shortcut index must be an integer from 1 to 10.");
    }
    await this.bridge.run(`StyleShortcut${index}`);
  }
  async executeStyle(actionId, index) {
    const values = index === void 0 ? {} : { Apply: index };
    await this.bridge.execute(actionId, createParameterSetPayload("Style", values));
  }
};
var DocumentStyleNumberingApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async set(options) {
    await this.bridge.execute(
      "StyleParaNumberBullet",
      createParameterSetPayload("ParaShape", createParagraphNumberingValues(options))
    );
  }
};
var DocumentStyleTemplateApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async open(fileName) {
    await this.bridge.execute("StyleTemplate", createParameterSetPayload("StyleTemplate", { FileName: fileName }));
  }
};
function normalizeStyleApplyInput(input) {
  if (typeof input === "number") {
    return { index: input };
  }
  return input;
}
function normalizeStyleDeleteInput(input, alternation) {
  if (typeof input === "number") {
    return { target: input, alternation };
  }
  return input;
}

// src/document/tables.ts
var DocumentTablesApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.rows = new DocumentTableRowsApi(bridge);
    this.columns = new DocumentTableColumnsApi(bridge);
    this.cells = new DocumentTableCellsApi(bridge);
  }
  bridge;
  rows;
  columns;
  cells;
  async insert(options = {}) {
    const values = {};
    setValue(values, "Rows", options.rows);
    setValue(values, "Cols", options.cols);
    setArrayValue(values, "RowHeight", options.rowHeight);
    setArrayValue(values, "ColWidth", options.colWidth);
    setArrayValue(values, "CellInfo", options.cellInfo);
    setValue(values, "WidthType", options.widthType);
    setValue(values, "HeightType", options.heightType);
    setValue(values, "WidthValue", options.widthValue);
    setValue(values, "HeightValue", options.heightValue);
    setValue(values, "TableTemplateValue", options.tableTemplateValue);
    setBooleanValue(values, "TextSelect", options.textSelect);
    await this.bridge.execute("TableCreate", createParameterSetPayload("TableCreation", values));
  }
};
var DocumentTableRowsApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async insertAbove(count = 1) {
    await this.bridge.execute("TableInsertUpperRow", createParameterSetPayload("TableInsertLine", { Count: count }));
  }
  async insertBelow(count = 1) {
    await this.bridge.execute("TableInsertLowerRow", createParameterSetPayload("TableInsertLine", { Count: count }));
  }
  async append() {
    await this.bridge.run("TableAppendRow");
  }
  async delete() {
    await this.bridge.execute("TableDeleteRow", createParameterSetPayload("TableDeleteLine", { Type: 0 }));
  }
};
var DocumentTableColumnsApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async insertLeft(count = 1) {
    await this.bridge.execute("TableInsertLeftColumn", createParameterSetPayload("TableInsertLine", { Count: count }));
  }
  async insertRight(count = 1) {
    await this.bridge.execute("TableInsertRightColumn", createParameterSetPayload("TableInsertLine", { Count: count }));
  }
  async delete() {
    await this.bridge.execute("TableDeleteColumn", createParameterSetPayload("TableDeleteLine", { Type: 1 }));
  }
};
var DocumentTableCellsApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async merge() {
    await this.bridge.run("TableMergeCell");
  }
  async split(options = {}) {
    const values = {};
    setValue(values, "Rows", options.rows);
    setValue(values, "Cols", options.cols);
    setBooleanValue(values, "DistributeHeight", options.distributeHeight);
    setBooleanValue(values, "Merge", options.mergeBeforeSplit);
    setBooleanValue(values, "Mode2", options.keepAdjust);
    await this.bridge.execute("TableSplitCell", createParameterSetPayload("TableSplitCell", values));
  }
  async delete() {
    await this.bridge.run("TableDeleteCell");
  }
  async distributeHeight() {
    await this.bridge.run("TableDistributeCellHeight");
  }
  async distributeWidth() {
    await this.bridge.run("TableDistributeCellWidth");
  }
};

// src/document/text.ts
var DocumentTextApi = class {
  constructor(bridge) {
    this.bridge = bridge;
  }
  bridge;
  async insert(text) {
    await this.bridge.insertText(text);
  }
};

// src/document/api.ts
var DocumentApi = class {
  constructor(bridge) {
    this.bridge = bridge;
    this.charShape = new CharacterShapeApi(bridge);
    this.cursor = new DocumentCursorApi(bridge);
    this.pages = new DocumentPagesApi(bridge);
    this.paragraph = new DocumentParagraphApi(bridge);
    this.styles = new DocumentStylesApi(bridge);
    this.tables = new DocumentTablesApi(bridge);
    this.text = new DocumentTextApi(bridge);
  }
  bridge;
  charShape;
  cursor;
  pages;
  paragraph;
  styles;
  tables;
  text;
  async save() {
    await requireBridgeMethod(this.bridge.save, "Save").call(this.bridge);
  }
  async saveAs(path, format = "HWP", arg = "") {
    await requireBridgeMethod(this.bridge.saveAs, "SaveAs").call(this.bridge, path, format, arg);
  }
  async close() {
    await requireBridgeMethod(this.bridge.close, "Close").call(this.bridge);
  }
};

// src/file/values.ts
function createFileOpenValues(options) {
  const values = {};
  setValue(values, "SaveFileName", options.saveFileName);
  setValue(values, "OpenFormat", options.openFormat);
  setBooleanValue(values, "OpenReadOnly", options.openReadOnly);
  setValue(values, "OpenFlag", options.openFlag);
  setBooleanValue(values, "SaveOverWrite", options.saveOverwrite);
  setBooleanValue(values, "ModifiedFlag", options.modifiedFlag);
  setValue(values, "Argument", options.argument);
  setBooleanValue(values, "SaveCMFDoc30", options.saveCMFDoc30);
  setBooleanValue(values, "SaveHwp97", options.saveHwp97);
  setBooleanValue(values, "SaveDistribute", options.saveDistribute);
  setBooleanValue(values, "SaveDRMDoc", options.saveDRMDoc);
  return values;
}
function createPasswordValues(options) {
  const values = {};
  setValue(values, "String", options.password);
  setBooleanValue(values, "FullRange", options.fullRange);
  setBooleanValue(values, "Ask", options.ask);
  setValue(values, "Level", options.level);
  setBooleanValue(values, "RWAsk", options.readAsk);
  setValue(values, "ReadString", options.readPassword);
  setValue(values, "WriteString", options.writePassword);
  setBooleanValue(values, "ReadOnly", options.readOnly);
  return values;
}
function createFileSecurityValues(options) {
  const values = {};
  setValue(values, "Password", options.password);
  setBooleanValue(values, "NoPrint", options.noPrint);
  setBooleanValue(values, "NoCopy", options.noCopy);
  return values;
}
function createFileImageValues(options) {
  const values = {};
  setValue(values, "FileName", options.fileName);
  setValue(values, "Range", options.range);
  setValue(values, "RangeCustom", options.rangeCustom);
  setBooleanValue(values, "PrintToFile", options.printToFile);
  setValue(values, "PrinterName", options.printerName);
  setValue(values, "NumCopy", options.numCopy);
  return values;
}

// src/file/helpers.ts
async function runFileAction(bridge, ensureReady, actionId) {
  await ensureReady();
  await bridge.run(actionId);
}
async function executeFileAction(bridge, ensureReady, actionId, parameterSet) {
  await ensureReady();
  await bridge.execute(actionId, parameterSet);
}
async function executePasswordAction(bridge, ensureReady, actionId, options) {
  await executeFileAction(bridge, ensureReady, actionId, createParameterSetPayload("Password", createPasswordValues(options)));
}

// src/file/dialog.ts
var FileDialogApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
  }
  bridge;
  ensureReady;
  async open() {
    await runFileAction(this.bridge, this.ensureReady, "FileOpen");
  }
  async recent() {
    await runFileAction(this.bridge, this.ensureReady, "FileOpenMRU");
  }
  async saveAs() {
    await runFileAction(this.bridge, this.ensureReady, "FileSaveAs");
  }
  async saveOptions() {
    await runFileAction(this.bridge, this.ensureReady, "FileSaveOptionDlg");
  }
};

// src/file/image.ts
var FileImageApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
  }
  bridge;
  ensureReady;
  async save(options = {}) {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSaveAsImage",
      createParameterSetPayload("Print", createFileImageValues(options))
    );
  }
  async options(options = {}) {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSaveAsImageOption",
      createParameterSetPayload("Print", createFileImageValues(options))
    );
  }
};

// src/file/password.ts
var FilePasswordApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
    this.readWrite = new FileReadWritePasswordApi(bridge, ensureReady);
  }
  bridge;
  ensureReady;
  readWrite;
  async set(options) {
    await executePasswordAction(this.bridge, this.ensureReady, "FilePassword", options);
  }
  async change(options) {
    await executePasswordAction(this.bridge, this.ensureReady, "FilePasswordChange", options);
  }
};
var FileReadWritePasswordApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
  }
  bridge;
  ensureReady;
  async set(options) {
    await executePasswordAction(this.bridge, this.ensureReady, "FileRWPasswordNew", options);
  }
  async change(options) {
    await executePasswordAction(this.bridge, this.ensureReady, "FileRWPasswordChange", options);
  }
};

// src/file/preview.ts
var FilePreviewApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
  }
  bridge;
  ensureReady;
  async open() {
    await runFileAction(this.bridge, this.ensureReady, "FilePreview");
  }
};

// src/file/security.ts
var FileSecurityApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
  }
  bridge;
  ensureReady;
  async set(options) {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileSetSecurity",
      createParameterSetPayload("FileSetSecurity", createFileSecurityValues(options))
    );
  }
};

// src/file/template.ts
var FileTemplateApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
  }
  bridge;
  ensureReady;
  async open(options = {}) {
    await executeFileAction(
      this.bridge,
      this.ensureReady,
      "FileTemplate",
      createParameterSetPayload("FileOpen", createFileOpenValues(options))
    );
  }
};

// src/file/api.ts
var FileApi = class {
  constructor(bridge, ensureReady) {
    this.bridge = bridge;
    this.ensureReady = ensureReady;
    this.dialog = new FileDialogApi(bridge, ensureReady);
    this.image = new FileImageApi(bridge, ensureReady);
    this.password = new FilePasswordApi(bridge, ensureReady);
    this.preview = new FilePreviewApi(bridge, ensureReady);
    this.security = new FileSecurityApi(bridge, ensureReady);
    this.template = new FileTemplateApi(bridge, ensureReady);
  }
  bridge;
  ensureReady;
  dialog;
  image;
  password;
  preview;
  security;
  template;
  async open(path, options = {}) {
    await this.fileOperation("open", () => this.bridge.open(path, options));
  }
  async new() {
    await runFileAction(this.bridge, this.ensureReady, "FileNew");
  }
  async fileOperation(name, operation) {
    try {
      await this.ensureReady();
      await operation();
    } catch (error) {
      throw new HwpAutomationError("FILE_OPERATION_FAILED", `HWP file operation failed: ${name}`, error);
    }
  }
};

// src/app.ts
var App = class {
  bridge;
  raw;
  doc;
  file;
  ready;
  constructor(options = {}) {
    this.bridge = options.bridge ?? (options.createObject ? new ComObjectBridge(options.createObject()) : new PowerShellBridge());
    this.raw = this.bridge.raw ?? this.bridge;
    this.doc = new DocumentApi(this.bridge);
    this.file = new FileApi(this.bridge, () => this.ensureReady());
    this.ready = this.initialize(options);
  }
  async setVisible(visible) {
    await this.ensureReady();
    await this.bridge.setVisible(visible);
  }
  async close() {
    await this.ready;
    await this.bridge.quit();
  }
  async getPID() {
    await this.ensureReady();
    return await this.bridge.getPID();
  }
  async initialize(options) {
    if (options.visible === void 0 && !options.registerSecurityModule) {
      return;
    }
    await this.bridge.init?.();
    if (options.visible !== void 0) {
      await this.bridge.setVisible(options.visible);
    }
    if (options.registerSecurityModule) {
      await this.registerSecurityModule();
    }
  }
  async ensureReady() {
    await this.ready;
    await this.bridge.init?.();
  }
  async registerSecurityModule() {
    try {
      await this.bridge.registerSecurityModule?.();
    } catch (error) {
      throw new HwpAutomationError(
        "SECURITY_MODULE_FAILED",
        "Failed to register the Hancom HWP automation security module.",
        error
      );
    }
  }
};

// src/test.ts
var sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function withTimeout(label, promise, ms = 15e3) {
  let timeout;
  try {
    return await Promise.race([
      promise,
      new Promise((_resolve, reject) => {
        timeout = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
      })
    ]);
  } finally {
    if (timeout) {
      clearTimeout(timeout);
    }
  }
}
async function step(label, action) {
  console.log(label);
  await withTimeout(label, action());
  await sleep(450);
}
async function runDemo() {
  console.log("\uD55C\uAE00 \uC790\uB3D9\uD654 \uB370\uBAA8 \uC2DC\uC791");
  const app = new App({ visible: true });
  const outputPath = join2(tmpdir2(), `tshwpx-visible-demo-${Date.now()}.hwp`);
  try {
    await withTimeout("\uD55C\uAE00 \uCD08\uAE30\uD654", app.ready, 3e4);
    await step("1. \uC0C8 \uBB38\uC11C \uC0DD\uC131", () => app.file.new());
    await step("2. \uC81C\uBAA9 \uC785\uB825", () => app.doc.text.insert("tshwpx \uC2E4\uC81C \uD55C\uAE00 \uC790\uB3D9\uD654 \uB370\uBAA8\n"));
    await step("3. \uC81C\uBAA9 \uAD75\uAC8C \uC801\uC6A9", () => app.doc.charShape.bold.toggle());
    await step("4. \uC81C\uBAA9 \uD06C\uAE30 \uD0A4\uC6B0\uAE30", async () => {
      await app.doc.charShape.height.increase();
      await app.doc.charShape.height.increase();
      await app.doc.charShape.height.increase();
    });
    await step(
      "5. \uBCF8\uBB38 \uC785\uB825",
      () => app.doc.text.insert("\uC774 \uC2A4\uD06C\uB9BD\uD2B8\uB294 mock \uD14C\uC2A4\uD2B8\uAC00 \uC544\uB2C8\uB77C \uC2E4\uD589 \uC911\uC778 \uD55C\uAE00 \uCC3D\uC5D0 \uC9C1\uC811 \uBA85\uB839\uC744 \uBCF4\uB0C5\uB2C8\uB2E4.\n")
    );
    await step("6. \uBB38\uB2E8 \uAC00\uC6B4\uB370 \uC815\uB82C", () => app.doc.paragraph.align.center());
    await step("7. \uAE00\uC790\uC0C9 \uBE68\uAC15\uC73C\uB85C \uBCC0\uACBD", () => app.doc.charShape.textColor.set("red"));
    await step("8. \uCD94\uAC00 \uBB38\uC7A5 \uC785\uB825", () => app.doc.text.insert("\uAE00\uC790 \uBAA8\uC591, \uBB38\uB2E8, \uCEE4\uC11C, \uCABD \uB3D9\uC791\uC774 \uC21C\uC11C\uB300\uB85C \uC801\uC6A9\uB429\uB2C8\uB2E4.\n"));
    await step("9. \uC624\uB978\uCABD \uC815\uB82C", () => app.doc.paragraph.align.right());
    await step("10. \uC624\uB978\uCABD \uC815\uB82C \uBB38\uC7A5 \uC785\uB825", () => app.doc.text.insert("\uC624\uB978\uCABD \uC815\uB82C \uD655\uC778\n"));
    await step("11. \uC591\uCABD \uC815\uB82C", () => app.doc.paragraph.align.justify());
    await step("12. \uBC11\uC904 \uC801\uC6A9", () => app.doc.charShape.underline.toggle());
    await step("13. \uBC11\uC904 \uBB38\uC7A5 \uC785\uB825", () => app.doc.text.insert("\uBC11\uC904\uACFC \uAE00\uC790\uC0C9\uC774 \uC801\uC6A9\uB41C \uBB38\uC7A5\n"));
    await step("14. \uBB38\uC11C \uCC98\uC74C\uC73C\uB85C \uC774\uB3D9", () => app.doc.cursor.move.document.begin());
    await step("15. \uBB38\uC11C \uB05D\uC73C\uB85C \uC774\uB3D9", () => app.doc.cursor.move.document.end());
    await step("16. \uCABD \uBC88\uD638 \uC0BD\uC785", () => app.doc.pages.numbering.insert());
    await step("17. \uCABD \uB098\uB204\uAE30", () => app.doc.pages.break());
    await step("18. \uB9C8\uC9C0\uB9C9 \uBB38\uC7A5 \uC785\uB825", () => app.doc.text.insert("\uB450 \uBC88\uC9F8 \uCABD\uAE4C\uC9C0 \uC790\uB3D9\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC84C\uC2B5\uB2C8\uB2E4.\n"));
    await step("19. \uD30C\uC77C \uC800\uC7A5", () => app.doc.saveAs(outputPath, "HWP"));
    console.log(`\uC644\uB8CC: ${outputPath}`);
    console.log("\uD55C\uAE00 \uCC3D\uC740 10\uCD08 \uB4A4 \uB2EB\uD799\uB2C8\uB2E4.");
    await sleep(1e4);
    await withTimeout("\uD55C\uAE00 \uC885\uB8CC", app.close(), 1e4);
  } catch (error) {
    await withTimeout("\uC2E4\uD328 \uD6C4 \uD55C\uAE00 \uC885\uB8CC", app.close(), 3e3).catch(() => void 0);
    throw error;
  }
}
async function main() {
  try {
    await runDemo();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
void main().catch((error) => {
  console.error(error);
  process.exit(1);
});
