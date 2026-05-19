import type { ActionDefinition, HwpEventDefinition, ParameterSetDefinition } from "./types";

// Generated from docs/api/v1/*.html, which were converted from Hancom's official 2504 HwpAutomation PDFs.
// Do not edit entries by hand; regenerate from the local API reference documents.
export const actionDefinitions: readonly ActionDefinition[] = [
  {
    "id": "AddHanjaWord",
    "description": "한자단어 등록",
    "sourcePage": 2,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "AllReplace",
    "description": "모두 바꾸기 입력 자동 명령 파일 저장/로드",
    "sourcePage": 2,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "AQcommandMerge",
    "description": "(글메뉴의 [도구-빠른 교정-빠른 교정내용]에서 [입력 자동 명령 사용자 사전] 대화상자) ParameterSet을 직접 조작하여 사용함.",
    "sourcePage": 2,
    "parameterSetId": "UserQCommandFile",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "AutoChangeHangul",
    "description": "낱자모 우선",
    "sourcePage": 2
  },
  {
    "id": "AutoChangeRun",
    "description": "동작",
    "sourcePage": 2
  },
  {
    "id": "AutoSpell Run",
    "description": "맞춤법 ― 메뉴에서 맞춤법 도우미 동작 On/Off",
    "sourcePage": 2
  },
  {
    "id": "AutoSpellSelect1 ~ 16",
    "description": "맞춤법 도우미를 통해 선택된 어휘로 변경 (어휘는 1에서 최대 16까지)",
    "sourcePage": 2
  },
  {
    "id": "Average",
    "description": "블록 평균",
    "sourcePage": 2,
    "parameterSetId": "Sum"
  },
  {
    "id": "BackwardFind",
    "description": "뒤로 찾기",
    "sourcePage": 2,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "Bookmark",
    "description": "책갈피",
    "sourcePage": 2,
    "parameterSetId": "BookMark"
  },
  {
    "id": "BookmarkEditDialog",
    "description": "북마크 편집 대화상자 호출 액션 - 책갈피 작업창 에서 편집 대화상자를 호출하기 위한 액션",
    "sourcePage": 2
  },
  {
    "id": "BreakColDef",
    "description": "단 정의 삽입",
    "sourcePage": 2
  },
  {
    "id": "BreakColumn",
    "description": "단 나누기",
    "sourcePage": 2
  },
  {
    "id": "BreakLine",
    "description": "line break",
    "sourcePage": 2
  },
  {
    "id": "BreakPage",
    "description": "쪽 나누기",
    "sourcePage": 2
  },
  {
    "id": "BreakPara",
    "description": "문단 나누기",
    "sourcePage": 2
  },
  {
    "id": "BreakSection",
    "description": "구역 나누기",
    "sourcePage": 2
  },
  {
    "id": "BulletDlg",
    "description": "글머리표 대화상자",
    "sourcePage": 2,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "Cancel",
    "description": "ESC",
    "sourcePage": 2
  },
  {
    "id": "CaptionPosBottom",
    "description": "캡션 위치-아래",
    "sourcePage": 2,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptionPosLeftBottom",
    "description": "캡션 위치-왼쪽 아래",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptionPosLeftCenter",
    "description": "캡션 위치–왼쪽 가운데",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptionPosLeftTop",
    "description": "캡션 위치–왼쪽 위",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptionPosRightBottom",
    "description": "캡션 위치–오른쪽 아래",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptionPosRightCenter",
    "description": "캡션 위치–오른쪽 가운데",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptionPosRightTop",
    "description": "캡션 위치–오른쪽 위",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptionPosTop",
    "description": "캡션 위치-위",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "CaptureDialog",
    "description": "갈무리 끝",
    "sourcePage": 3
  },
  {
    "id": "CaptureHandler",
    "description": "갈무리 시작",
    "sourcePage": 3
  },
  {
    "id": "CellBorder",
    "description": "셀 테두리",
    "sourcePage": 3,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "CellBorderFill",
    "description": "셀 테두리",
    "sourcePage": 3,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "CellFill",
    "description": "셀 배경",
    "sourcePage": 3,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "CellZoneBorder",
    "description": "셀 테두리(여러 셀에 걸쳐 적용) 셀이 선택된 상태에서만 동작",
    "sourcePage": 3,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "CellZoneBorderFill",
    "description": "셀 테두리(여러 셀에 걸쳐 적용) 셀이 선택된 상태에서만 동작",
    "sourcePage": 3,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "CellZoneFill",
    "description": "셀 배경(여러 셀에 걸쳐 적용) 셀이 선택된 상태에서만 동작",
    "sourcePage": 3,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "ChangeImageFileExtension",
    "description": "연결 그림 확장자 바꾸기",
    "sourcePage": 3,
    "parameterSetId": "SummaryInfo"
  },
  {
    "id": "ChangeObject",
    "description": "개체 변경하기",
    "sourcePage": 3,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ChangeRome String",
    "description": "로마자변환 - 입력받은 스트링 변환",
    "sourcePage": 3,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ChangeRome User String",
    "description": "로마자 사용자 데이터 추가",
    "sourcePage": 3,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ChangeRome User",
    "description": "로마자 사용자 데이터",
    "sourcePage": 3,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ChangeRome",
    "description": "로마자변환",
    "sourcePage": 3,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "CharShape",
    "description": "글자 모양",
    "sourcePage": 4,
    "parameterSetId": "CharShape"
  },
  {
    "id": "CharShapeBold",
    "description": "단축키: Alt+L(글자 진하게)",
    "sourcePage": 4
  },
  {
    "id": "CharShapeCenterline",
    "description": "취소선(CenterLine)",
    "sourcePage": 4
  },
  {
    "id": "CharShapeDialog",
    "description": "글자 모양 대화상자(내부 구현용)",
    "sourcePage": 4,
    "parameterSetId": "CharShape"
  },
  {
    "id": "CharShapeDialogWithoutBord",
    "description": "글자 모양 대화상자(내부 구현용, [글자 테두리]",
    "sourcePage": 4,
    "parameterSetId": "CharShape"
  },
  {
    "id": "er",
    "description": "탭 제외)",
    "sourcePage": 4
  },
  {
    "id": "CharShapeEmboss",
    "description": "양각",
    "sourcePage": 4
  },
  {
    "id": "CharShapeEngrave",
    "description": "음각",
    "sourcePage": 4
  },
  {
    "id": "CharShapeHeight",
    "description": "글자 크기(글자 모양 대화상자에서 Focus이동용 으로 사용)",
    "sourcePage": 4
  },
  {
    "id": "CharShapeHeightDecrease",
    "description": "크기 작게 ALT+SHIFT+R",
    "sourcePage": 4
  },
  {
    "id": "CharShapeHeightIncrease",
    "description": "크기 크게 ALT+SHIFT+E",
    "sourcePage": 4
  },
  {
    "id": "CharShapeItalic",
    "description": "이탤릭 ALT + SHIFT + I",
    "sourcePage": 4
  },
  {
    "id": "CharShapeLang",
    "description": "글꼴 언어(글자 모양 대화상자에서 Focus이동용 으로 사용)",
    "sourcePage": 4
  },
  {
    "id": "CharShapeNextFaceName",
    "description": "다음 글꼴 ALT+SHIFT+F",
    "sourcePage": 4
  },
  {
    "id": "CharShapeNormal",
    "description": "보통모양 ALT+SHIFT+C",
    "sourcePage": 4
  },
  {
    "id": "CharShapeOutline",
    "description": "외곽선",
    "sourcePage": 4
  },
  {
    "id": "CharShapePrevFaceName",
    "description": "이전 글꼴 ALT+SHIFT+G",
    "sourcePage": 4
  },
  {
    "id": "CharShapeShadow",
    "description": "그림자",
    "sourcePage": 4
  },
  {
    "id": "CharShapeSpacing",
    "description": "자간(글자 모양 대화상자에서 Focus이동용으로 사용)",
    "sourcePage": 4
  },
  {
    "id": "CharShapeSpacingDecrease",
    "description": "자간 좁게 ALT+SHIFT+N",
    "sourcePage": 4
  },
  {
    "id": "CharShapeSpacingIncrease",
    "description": "자간 넓게 ALT+SHIFT+W",
    "sourcePage": 4
  },
  {
    "id": "CharShapeSubscript",
    "description": "아래첨자 ALT+SHIFT+S",
    "sourcePage": 4
  },
  {
    "id": "CharShapeSuperscript",
    "description": "위첨자 ALT+SHIFT+P",
    "sourcePage": 4
  },
  {
    "id": "CharShapeSuperSubscript",
    "description": "첨자 : \"위첨자 -> 아래첨자 -> 보통\" 반복",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorBlack",
    "description": "글자색을 검정",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorBlue",
    "description": "글자색을 파랑",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorBluish",
    "description": "글자색을 청록",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorGreen",
    "description": "글자색을 초록",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorRed",
    "description": "글자색을 빨강",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorViolet",
    "description": "글자색을 자주",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorWhite",
    "description": "글자색을 흰색",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTextColorYellow",
    "description": "글자색을 노랑",
    "sourcePage": 5
  },
  {
    "id": "CharShapeTypeFace",
    "description": "글꼴 이름(글자 모양 대화상자에서 Focus이동용 으로 사용)",
    "sourcePage": 5
  },
  {
    "id": "CharShapeUnderline",
    "description": "밑줄 ALT+SHIFT+U",
    "sourcePage": 5
  },
  {
    "id": "CharShapeWidth",
    "description": "장평(글자 모양 대화상자에서 Focus이동용으로 사용)",
    "sourcePage": 5
  },
  {
    "id": "CharShapeWidthDecrease",
    "description": "장평 좁게 ALT+SHIFT+J",
    "sourcePage": 5
  },
  {
    "id": "CharShapeWidthIncrease",
    "description": "장평 넓게 ALT+SHIFT+K",
    "sourcePage": 5
  },
  {
    "id": "Close",
    "description": "현재 리스트를 닫고 상위 리스트로 이동. 현재 리스트를 닫고 상위 리스트로 이동.",
    "sourcePage": 5
  },
  {
    "id": "CloseEx",
    "description": "Close의 확장 액션으로 전체화면 보기일 때 Root list로 빠져나온다. Shift+Esc",
    "sourcePage": 5
  },
  {
    "id": "Comment",
    "description": "숨은 설명",
    "sourcePage": 5
  },
  {
    "id": "CommentDelete",
    "description": "숨은 설명 지우기",
    "sourcePage": 5
  },
  {
    "id": "CommentModify",
    "description": "숨은 설명 고치기",
    "sourcePage": 5
  },
  {
    "id": "CompatibleDocument",
    "description": "호환 문서",
    "sourcePage": 5,
    "parameterSetId": "CompatibleDocument"
  },
  {
    "id": "ComposeChars",
    "description": "글자 겹침",
    "sourcePage": 6,
    "parameterSetId": "ChCompose"
  },
  {
    "id": "ConvertBrailleSetting",
    "description": "",
    "sourcePage": 6,
    "parameterSetId": "BrailleConvert"
  },
  {
    "id": "ConvertCase",
    "description": "대소문자 바꾸기",
    "sourcePage": 6,
    "parameterSetId": "ConvertCase"
  },
  {
    "id": "ConvertFullHalfWidth",
    "description": "전각 반각 바꾸기",
    "sourcePage": 6,
    "parameterSetId": "ConvertFullHalf"
  },
  {
    "id": "ConvertHiraGata",
    "description": "일어 바꾸기",
    "sourcePage": 6,
    "parameterSetId": "ConvertHiraToGata"
  },
  {
    "id": "ConvertJianFan",
    "description": "간/번체 바꾸기 Text가 선택된 상태에서만 동작",
    "sourcePage": 6,
    "parameterSetId": "ConvertJianFan"
  },
  {
    "id": "ConvertOptGugyulToHangul",
    "description": "한글로 옵션 - 구결을 한글로",
    "sourcePage": 6,
    "parameterSetId": "ConvertToHangul"
  },
  {
    "id": "ConvertOptHanjaToHangul",
    "description": "한글로 옵션 - 漢字를 한글로",
    "sourcePage": 6,
    "parameterSetId": "ConvertToHangul"
  },
  {
    "id": "ConvertOptHanjaToHanjaHang",
    "description": "한글로 옵션 - 漢字를 漢字(한글)로",
    "sourcePage": 6,
    "parameterSetId": "ConvertToHangul"
  },
  {
    "id": "ConvertToBraille",
    "description": "점자 변환",
    "sourcePage": 6,
    "parameterSetId": "BrailleConvert"
  },
  {
    "id": "ConvertToBrailleSelected",
    "description": "",
    "sourcePage": 6,
    "parameterSetId": "BrailleConvert"
  },
  {
    "id": "ConvertToHangul",
    "description": "한글로",
    "sourcePage": 6,
    "parameterSetId": "ConvertToHangul"
  },
  {
    "id": "Copy",
    "description": "복사하기",
    "sourcePage": 6
  },
  {
    "id": "CopyPage",
    "description": "쪽 복사하기",
    "sourcePage": 6
  },
  {
    "id": "Cut",
    "description": "오려두기",
    "sourcePage": 6
  },
  {
    "id": "Delete",
    "description": "Delete",
    "sourcePage": 6
  },
  {
    "id": "DeleteBack",
    "description": "Backspace",
    "sourcePage": 6
  },
  {
    "id": "DeleteCtrls",
    "description": "조판 부호 지우기",
    "sourcePage": 6,
    "parameterSetId": "DeleteCtrls"
  },
  {
    "id": "DeleteDocumentMasterPage",
    "description": "문서 전체 바탕쪽 삭제",
    "sourcePage": 6
  },
  {
    "id": "DeleteDutmal",
    "description": "덧말 지우기 누름틀/메모지우기",
    "sourcePage": 6,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "DeleteField",
    "description": "누름틀/메모 안의 내용은 지우지 않고, 단순히 누 름틀만 지운다.",
    "sourcePage": 6
  },
  {
    "id": "DeleteFieldMemo",
    "description": "메모 지우기",
    "sourcePage": 6
  },
  {
    "id": "DeleteLine",
    "description": "CTRL-Y (한줄 지우기)",
    "sourcePage": 6
  },
  {
    "id": "DeleteLineEnd",
    "description": "ALT-Y (현재 커서에서 줄 끝까지 지우기)",
    "sourcePage": 7
  },
  {
    "id": "DeletePage",
    "description": "쪽 지우기",
    "sourcePage": 7,
    "parameterSetId": "DeletePage"
  },
  {
    "id": "DeletePrivateInfoMark",
    "description": "개인 정보 감추기한 정보 다시보기",
    "sourcePage": 7
  },
  {
    "id": "DeletePrivateInfoMarkAtCur",
    "description": "현재 캐럿 위치의 감추기한 개인 정보 다시 보기",
    "sourcePage": 7
  },
  {
    "id": "DeleteSectionMasterPage",
    "description": "구역 바탕쪽 삭제",
    "sourcePage": 7
  },
  {
    "id": "DeleteWord",
    "description": "단어 지우기 CTRL-T",
    "sourcePage": 7
  },
  {
    "id": "DeleteWordBack",
    "description": "CTRL-BS(Back Space)",
    "sourcePage": 7
  },
  {
    "id": "DocFindEnd",
    "description": "문서 찾기 종료",
    "sourcePage": 7,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "DocFindInit",
    "description": "문서 찾기 초기화",
    "sourcePage": 7,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "DocFindNext",
    "description": "문서 찾기 계속",
    "sourcePage": 7,
    "parameterSetId": "DocFindInfo",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "DocSummaryInfo",
    "description": "문서 정보",
    "sourcePage": 7,
    "parameterSetId": "SummaryInfo"
  },
  {
    "id": "DocumentInfo",
    "description": "현재 문서에 대한 정보",
    "sourcePage": 7,
    "parameterSetId": "DocumentInfo",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "DocumentSecurity",
    "description": "문서 보안 설정",
    "sourcePage": 7,
    "parameterSetId": "DocSecurity"
  },
  {
    "id": "DrawObjCancelOneStep",
    "description": "다각형(곡선) 그리는 중 이전 선 지우기",
    "sourcePage": 7
  },
  {
    "id": "DrawObjCreatorArc",
    "description": "호 그리기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorCanvas",
    "description": "캔버스 그리기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorCurve",
    "description": "곡선 그리기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorEllipse",
    "description": "원 그리기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorFreeDrawing",
    "description": "펜",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorHorzTextBox",
    "description": "가로 글상자 만들기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorLine",
    "description": "선 그리기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiArc",
    "description": "반복해서 호 그리기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiCanvas",
    "description": "반복해서 캔버스 그리기",
    "sourcePage": 7,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiCurve",
    "description": "반복해서 곡선 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiEllipse",
    "description": "반복해서 원 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiFreeDra",
    "description": "반복해서 펜 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiLine",
    "description": "반복해서 선 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiPolygon",
    "description": "반복해서 다각형 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiRectang",
    "description": "반복해서 사각형 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorMultiTextBox",
    "description": "반복해서 글상자 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorObject",
    "description": "그리기 개체",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorPolygon",
    "description": "다각형 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorRectangle",
    "description": "사각형 그리기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorTextBox",
    "description": "글상자",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjCreatorVertTextBox",
    "description": "세로 글상자 만들기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjEditDetail",
    "description": "그리기 개체 편집",
    "sourcePage": 8
  },
  {
    "id": "DrawObjOpenClosePolygon",
    "description": "다각형 열기/닫기",
    "sourcePage": 8
  },
  {
    "id": "DrawObjTemplateLoad",
    "description": "그리기 마당에서 불러오기",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DrawObjTemplateSave",
    "description": "그리기 마당에 등록",
    "sourcePage": 8
  },
  {
    "id": "DrawShapeObjShadow",
    "description": "그리기 개체 그림자 만들기/지우기 개체가 선택된 상태에서만 동작",
    "sourcePage": 8,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "DropCap",
    "description": "문단 첫 글자 장식",
    "sourcePage": 8,
    "parameterSetId": "DropCap"
  },
  {
    "id": "DutmalChars",
    "description": "덧말 넣기",
    "sourcePage": 8,
    "parameterSetId": "Dutmal"
  },
  {
    "id": "EditFieldMemo",
    "description": "메모 내용 편집",
    "sourcePage": 8
  },
  {
    "id": "EditParaDown",
    "description": "문단 옮기기",
    "sourcePage": 8
  },
  {
    "id": "EditParaUp",
    "description": "문단 옮기기",
    "sourcePage": 8
  },
  {
    "id": "EndnoteEndOfDocument",
    "description": "미주–문서의 끝",
    "sourcePage": 9,
    "parameterSetId": "SecDef"
  },
  {
    "id": "EndnoteEndOfSection",
    "description": "미주–구역의 끝",
    "sourcePage": 9,
    "parameterSetId": "SecDef"
  },
  {
    "id": "EndnoteToFootnote",
    "description": "모든 미주를 각주로 Note",
    "sourcePage": 9,
    "parameterSetId": "ExchangeFootnoteEnd"
  },
  {
    "id": "EquationCreate",
    "description": "수식 만들기",
    "sourcePage": 9,
    "parameterSetId": "EqEdit"
  },
  {
    "id": "EquationModify",
    "description": "수식 편집하기",
    "sourcePage": 9,
    "parameterSetId": "EqEdit"
  },
  {
    "id": "EquationPropertyDialog",
    "description": "수식 개체 속성 고치기",
    "sourcePage": 9,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "Erase",
    "description": "지우기",
    "sourcePage": 9
  },
  {
    "id": "ExchangeFootnoteEndnote",
    "description": "각주/미주 변환 Note",
    "sourcePage": 9,
    "parameterSetId": "ExchangeFootnoteEnd"
  },
  {
    "id": "ExecReplace",
    "description": "바꾸기(실행)",
    "sourcePage": 9,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "ExtractImagesFromDoc",
    "description": "삽입 그림을 연결 그림으로 추출",
    "sourcePage": 9,
    "parameterSetId": "SummaryInfo"
  },
  {
    "id": "FileClose",
    "description": "문서 닫기",
    "sourcePage": 9
  },
  {
    "id": "FileNew",
    "description": "새문서",
    "sourcePage": 9
  },
  {
    "id": "FileOpen",
    "description": "파일 열기",
    "sourcePage": 9
  },
  {
    "id": "FileOpenMRU",
    "description": "최근 작업 문서",
    "sourcePage": 9
  },
  {
    "id": "FilePassword",
    "description": "문서 암호",
    "sourcePage": 9,
    "parameterSetId": "Password"
  },
  {
    "id": "FilePasswordChange",
    "description": "문서 암호 변경 및 해제",
    "sourcePage": 9,
    "parameterSetId": "Password"
  },
  {
    "id": "FilePreview",
    "description": "미리 보기",
    "sourcePage": 9
  },
  {
    "id": "FileQuit",
    "description": "끝",
    "sourcePage": 9
  },
  {
    "id": "FileRWPasswordChange",
    "description": "문서 열기/쓰기 암호 설정",
    "sourcePage": 10,
    "parameterSetId": "Password"
  },
  {
    "id": "FileRWPasswordNew",
    "description": "문서 열기/쓰기 암호 설정",
    "sourcePage": 10,
    "parameterSetId": "Password"
  },
  {
    "id": "FileSave",
    "description": "파일 저장",
    "sourcePage": 10
  },
  {
    "id": "FileSaveAs",
    "description": "다른 이름으로 저장",
    "sourcePage": 10
  },
  {
    "id": "FileSaveAsImage",
    "description": "그림 포맷으로 저장하기",
    "sourcePage": 10,
    "parameterSetId": "Print"
  },
  {
    "id": "FileSaveAsImageOption",
    "description": "그림 포맷으로 저장할 때 옵션 설정하기",
    "sourcePage": 10,
    "parameterSetId": "Print"
  },
  {
    "id": "FileSaveOptionDlg",
    "description": "저장 옵션 배포용 문서(출판 전용 문서).",
    "sourcePage": 10
  },
  {
    "id": "FileSetSecurity",
    "description": "대화상자를 띄우지 않고 ParameterSet을 직접 설정하여 생성한다. 예제는 “배포용 문서 만들기“ 참고",
    "sourcePage": 10,
    "parameterSetId": "FileSetSecurity",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "FileTemplate",
    "description": "문서마당",
    "sourcePage": 10,
    "parameterSetId": "FileOpen"
  },
  {
    "id": "FillColorShadeDec",
    "description": "면 색 음영 비율 감소",
    "sourcePage": 10
  },
  {
    "id": "FillColorShadeInc",
    "description": "면 색 음영 비율 증가",
    "sourcePage": 10
  },
  {
    "id": "FindAll",
    "description": "모두 찾기",
    "sourcePage": 10,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "FindDlg",
    "description": "찾기",
    "sourcePage": 10,
    "parameterSetId": "FindReplace"
  },
  {
    "id": "FindForeBackBookmark",
    "description": "앞뒤로 찾아가기 : 책갈피",
    "sourcePage": 10
  },
  {
    "id": "FindForeBackCtrl",
    "description": "앞뒤로 찾아가기 : 조판 부호",
    "sourcePage": 10
  },
  {
    "id": "FindForeBackFind",
    "description": "앞뒤로 찾아가기 : 찾기",
    "sourcePage": 10
  },
  {
    "id": "FindForeBackLine",
    "description": "앞뒤로 찾아가기 : 줄",
    "sourcePage": 10
  },
  {
    "id": "FindForeBackPage",
    "description": "앞뒤로 찾아가기 : 페이지",
    "sourcePage": 10
  },
  {
    "id": "FindForeBackSection",
    "description": "앞뒤로 찾아가기 : 구역",
    "sourcePage": 10
  },
  {
    "id": "FindForeBackStyle",
    "description": "앞뒤로 찾아가기 : 스타일",
    "sourcePage": 11
  },
  {
    "id": "FindOption",
    "description": "찾기 옵션 한/글 2024 부터 지원",
    "sourcePage": 11,
    "parameterSetId": "FindReplace"
  },
  {
    "id": "FootnoteBeneathText",
    "description": "각주–본문 아래",
    "sourcePage": 11,
    "parameterSetId": "SecDef"
  },
  {
    "id": "FootnoteBottomOfEachColumn",
    "description": "다단 각주–각 단 아래",
    "sourcePage": 11,
    "parameterSetId": "SecDef"
  },
  {
    "id": "FootnoteBottomOfMultiColum",
    "description": "다단 각주–전 단",
    "sourcePage": 11,
    "parameterSetId": "SecDef"
  },
  {
    "id": "FootnoteBottomOfRightColum",
    "description": "다단 각주–오른쪽 단 아래",
    "sourcePage": 11,
    "parameterSetId": "SecDef"
  },
  {
    "id": "FootnoteNoBeneathText",
    "description": "각주–꼬리말 바로 위",
    "sourcePage": 11,
    "parameterSetId": "SecDef"
  },
  {
    "id": "FootnoteOption",
    "description": "각주/미주 모양",
    "sourcePage": 11,
    "parameterSetId": "SecDef"
  },
  {
    "id": "FootnoteToEndnote",
    "description": "모든 각주를 미주로 Note",
    "sourcePage": 11,
    "parameterSetId": "ExchangeFootnoteEnd"
  },
  {
    "id": "FormDesignMode",
    "description": "디자인 모드 변경",
    "sourcePage": 11
  },
  {
    "id": "FormObjCreatorCheckButton",
    "description": "Check버튼 넣기",
    "sourcePage": 11
  },
  {
    "id": "FormObjCreatorComboBox",
    "description": "ComboBox넣기",
    "sourcePage": 11
  },
  {
    "id": "FormObjCreatorEdit",
    "description": "Edit넣기",
    "sourcePage": 11
  },
  {
    "id": "FormObjCreatorListBox",
    "description": "ListBox넣기",
    "sourcePage": 11
  },
  {
    "id": "FormObjCreatorPushButton",
    "description": "Push버튼 넣기",
    "sourcePage": 11
  },
  {
    "id": "FormObjCreatorRadioButton",
    "description": "Radio버튼 넣기",
    "sourcePage": 11
  },
  {
    "id": "FormObjCreatorScrollBar",
    "description": "ScrollBar넣기",
    "sourcePage": 11
  },
  {
    "id": "ForwardFind",
    "description": "앞으로 찾기",
    "sourcePage": 12,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "FrameStatusBar",
    "description": "상태바 보이기/숨기기",
    "sourcePage": 12
  },
  {
    "id": "FtpDownload",
    "description": "FTP서버에서 파일 다운 받아 문서 오픈하기",
    "sourcePage": 12,
    "parameterSetId": "FtpDownload"
  },
  {
    "id": "FtpUpload",
    "description": "웹 서버로 올리기",
    "sourcePage": 12,
    "parameterSetId": "FtpUpload"
  },
  {
    "id": "GetDefaultBullet",
    "description": "글머리표 디폴트 값",
    "sourcePage": 12,
    "parameterSetId": "ParaShape",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "GetDefaultParaNumber",
    "description": "문단번호 디폴트 값",
    "sourcePage": 12,
    "parameterSetId": "ParaShape",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "GetDocFilters",
    "description": "유틸리티 액션 로마자 스펠링(Rome Spelling)을 얻기 위한 액 션이다.",
    "sourcePage": 12,
    "parameterSetId": "DocFilters"
  },
  {
    "id": "GetRome String",
    "description": "Run()으로 실행시키면 프로그램이 죽는다. 반드 시 ParameterSet을 생성한 다음에 Execute() 시킨다.",
    "sourcePage": 12,
    "parameterSetId": "ChangeRome",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "GetSectionApplyString",
    "description": "유틸리티 액션",
    "sourcePage": 12,
    "parameterSetId": "SectionApply"
  },
  {
    "id": "GetSectionApplyTo",
    "description": "유틸리티 액션 저장된 버전 정보/비교 Item을 얻어오는 액션이",
    "sourcePage": 12,
    "parameterSetId": "SectionApply"
  },
  {
    "id": "GetVersionItemInfo",
    "description": "다. ParameterSet에 얻어올 Item의 Index값을 반 드시 세팅한 후 사용한다.",
    "sourcePage": 12,
    "parameterSetId": "VersionInfo"
  },
  {
    "id": "Goto",
    "description": "찾아가기",
    "sourcePage": 12,
    "parameterSetId": "GotoE"
  },
  {
    "id": "GotoStyle",
    "description": "찾아가기-스타일(찾기/바꾸기 대화상자에서 사용)",
    "sourcePage": 12,
    "parameterSetId": "GotoE"
  },
  {
    "id": "HanThDIC",
    "description": "유의어 사전",
    "sourcePage": 12
  },
  {
    "id": "HeaderFooter",
    "description": "머리말/꼬리말",
    "sourcePage": 12,
    "parameterSetId": "HeaderFooter"
  },
  {
    "id": "HeaderFooterDelete",
    "description": "머리말 지우기",
    "sourcePage": 13
  },
  {
    "id": "HeaderFooterInsField",
    "description": "코드 넣기",
    "sourcePage": 13,
    "parameterSetId": "HeaderFooter"
  },
  {
    "id": "HeaderFooterModify",
    "description": "머리말/꼬리말 고치기",
    "sourcePage": 13
  },
  {
    "id": "HeaderFooterToNext",
    "description": "이후 머리말",
    "sourcePage": 13
  },
  {
    "id": "HeaderFooterToPrev",
    "description": "이전 머리말",
    "sourcePage": 13
  },
  {
    "id": "HiddenCredits",
    "description": "인터넷 정보 차례 숨기기([도구-차례/찾아보기-차례 숨기기]",
    "sourcePage": 13
  },
  {
    "id": "HideTitle",
    "description": "메뉴에 대응). 적용여부는 Ctrl+G,C를 이용해 조판부호를 확인 하면 알 수 있다.",
    "sourcePage": 13
  },
  {
    "id": "Him Config",
    "description": "입력기 언어별 환경설정",
    "sourcePage": 13
  },
  {
    "id": "HimKbdChange",
    "description": "바꾸기",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlEquationCreate97",
    "description": "수식 만들기(글97버전)",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlFileNew",
    "description": "새문서",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlFileOpen",
    "description": "파일 열기",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlFileSave",
    "description": "파일 저장",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlFileSaveAs",
    "description": "다른 이름으로 저장 블록 저장 (글 컨트롤 전용).",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlFileSaveAsAutoBlock",
    "description": "만약 텍스트가 선택되지 않은 경우에는 다른 이름 으로 저장이 실행된다. 블록 저장 (글 컨트롤 전용).",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlFileSaveAutoBlock",
    "description": "만약 텍스트가 선택되지 않은 경우에는 저장하기가 실행된다.",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlFindDlg",
    "description": "찾기 대화상자",
    "sourcePage": 13
  },
  {
    "id": "HwpCtrlReplaceDlg",
    "description": "바꾸기 대화상자",
    "sourcePage": 13
  },
  {
    "id": "HwpDic",
    "description": "한컴 사전",
    "sourcePage": 13
  },
  {
    "id": "Hyperlink",
    "description": "캐럿이 필드 안에 위치했는지 여부에 따라 Insert 또는 Modify 하이퍼링크 액션",
    "sourcePage": 14,
    "parameterSetId": "HyperLink"
  },
  {
    "id": "HyperlinkBackward",
    "description": "하이퍼링크 뒤로",
    "sourcePage": 14
  },
  {
    "id": "HyperlinkForward",
    "description": "하이퍼링크 앞으로",
    "sourcePage": 14
  },
  {
    "id": "HyperlinkJump",
    "description": "하이퍼링크 이동",
    "sourcePage": 14,
    "parameterSetId": "HyperlinkJump"
  },
  {
    "id": "Idiom",
    "description": "상용구",
    "sourcePage": 14,
    "parameterSetId": "Idiom"
  },
  {
    "id": "ImageFindPath",
    "description": "그림 경로 찾기",
    "sourcePage": 14
  },
  {
    "id": "ImportCharactersFromPictur",
    "description": "그림에서 글자 가져오기",
    "sourcePage": 14
  },
  {
    "id": "IndexMark",
    "description": "찾아보기 표시",
    "sourcePage": 14,
    "parameterSetId": "IndexMark"
  },
  {
    "id": "IndexMarkModify",
    "description": "찾아보기 표시 고치기 문자/코드 변환.",
    "sourcePage": 14,
    "parameterSetId": "IndexMark"
  },
  {
    "id": "InputCodeChange",
    "description": "현재 캐럿의 바로 앞 문자를 찾아서 문자이면 코드 로, 코드이면 문자로 변환해준다.(변환 가능한 코 드영역 0x0020 ~ 0x10FFFF 까지)",
    "sourcePage": 14
  },
  {
    "id": "InputCodeTable",
    "description": "문자표",
    "sourcePage": 14,
    "parameterSetId": "CodeTable"
  },
  {
    "id": "InputDateStyle",
    "description": "날짜/시간 형식 지정해서 넣기 ([입력-날짜/시간 -날짜/시간 형식]메뉴와 동일).",
    "sourcePage": 14,
    "parameterSetId": "InputDateStyle"
  },
  {
    "id": "InputHanja",
    "description": "한자 변환",
    "sourcePage": 14
  },
  {
    "id": "InputHanjaBusu",
    "description": "부수로 입력",
    "sourcePage": 14
  },
  {
    "id": "InputHanjaMean",
    "description": "새김으로 입력",
    "sourcePage": 14
  },
  {
    "id": "InputPersonsNameHanja",
    "description": "인명한자 변환",
    "sourcePage": 14,
    "parameterSetId": "InputHanja"
  },
  {
    "id": "InsertAutoNum",
    "description": "번호 다시 넣기",
    "sourcePage": 14
  },
  {
    "id": "InsertCCLMark",
    "description": "CCL 넣기",
    "sourcePage": 14,
    "parameterSetId": "HyperLink"
  },
  {
    "id": "InsertChart",
    "description": "차트 만들기",
    "sourcePage": 14,
    "parameterSetId": "OleCreation"
  },
  {
    "id": "InsertConnectLineArcBoth",
    "description": "개체 연결선(구부러진 양쪽 화살표 연결선)",
    "sourcePage": 14,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineArcNoArro",
    "description": "개체 연결선(구부러진 연결선)",
    "sourcePage": 14,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineArcOneWay",
    "description": "개체 연결선(구부러진 화살표 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineMultiArcB",
    "description": "개체 연결선 반복해서 그리기(구부러진 양쪽 화살",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "oth",
    "description": "표 연결선)",
    "sourcePage": 15
  },
  {
    "id": "InsertConnectLineMultiArcN",
    "description": "개체 연결선 반복해서 그리기(구부러진 양쪽 화살",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "oArrow",
    "description": "표 연결선)",
    "sourcePage": 15
  },
  {
    "id": "InsertConnectLineMultiArcO",
    "description": "개체 연결선 반복해서 그리기(구부러진 양쪽 화살",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "neWay",
    "description": "표 연결선)",
    "sourcePage": 15
  },
  {
    "id": "InsertConnectLineMultiStra",
    "description": "개체 연결선 반복해서 그리기(직선 양쪽 화살표 연",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ightBoth",
    "description": "결선)",
    "sourcePage": 15
  },
  {
    "id": "InsertConnectLineMultiStra",
    "description": "개체 연결선 반복해서 그리기(직선 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineMultiStra",
    "description": "개체 연결선 반복해서 그리기(직선 화살표 연결",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ightOneWay",
    "description": "선)",
    "sourcePage": 15
  },
  {
    "id": "InsertConnectLineMultiStro",
    "description": "개체 연결선 반복해서 그리기(꺾인 양쪽 화살표 연",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "keBoth",
    "description": "결선)",
    "sourcePage": 15
  },
  {
    "id": "InsertConnectLineMultiStro",
    "description": "개체 연결선 반복해서 그리기(꺾인 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineMultiStro",
    "description": "개체 연결선 반복해서 그리기(꺾인 화살표 연결",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "keOneWay",
    "description": "선)",
    "sourcePage": 15
  },
  {
    "id": "InsertConnectLineStraightB",
    "description": "개체 연결선(직선 양쪽 화살표 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineStraightN",
    "description": "개체 연결선(직선 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineStraightO",
    "description": "개체 연결선(직선 화살표 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineStrokeBot",
    "description": "개체 연결선(꺾인 양쪽 화살표 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineStrokeNoA",
    "description": "개체 연결선(꺾인 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertConnectLineStrokeOne",
    "description": "개체 연결선(꺾인 화살표 연결선)",
    "sourcePage": 15,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertCpNo",
    "description": "상용구 코드 넣기(현재 쪽 번호)",
    "sourcePage": 15
  },
  {
    "id": "InsertCpTpNo",
    "description": "상용구 코드 넣기(현재 쪽/전체 쪽)",
    "sourcePage": 16
  },
  {
    "id": "InsertCrossReference",
    "description": "상호 참조 만들기(삽입하기)",
    "sourcePage": 16,
    "parameterSetId": "ActionCrossRef"
  },
  {
    "id": "InsertDateCode",
    "description": "상용구 코드 넣기(만든 날짜)",
    "sourcePage": 16
  },
  {
    "id": "InsertDocInfo",
    "description": "상용구 코드 넣기(만든 사람, 현재 쪽, 만든 날 짜)",
    "sourcePage": 16
  },
  {
    "id": "InsertDocTitle",
    "description": "상용구 코드 넣기(문서 제목)",
    "sourcePage": 16,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "InsertDocumentProperty",
    "description": "상호 참조 넣기",
    "sourcePage": 16,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "InsertEndnote",
    "description": "미주 입력",
    "sourcePage": 16
  },
  {
    "id": "InsertFieldCitation",
    "description": "인용",
    "sourcePage": 16
  },
  {
    "id": "InsertFieldCtrl",
    "description": "필트컨트롤(누름틀,개인 정보, 문서요약 ...)을 추가한다.",
    "sourcePage": 16,
    "parameterSetId": "FieldCtrl"
  },
  {
    "id": "InsertFieldDateTime",
    "description": "날짜/시간 코드로 넣기([입력-날짜/시간-날짜/시 간 코드]메뉴와 동일)",
    "sourcePage": 16
  },
  {
    "id": "InsertFieldFileName",
    "description": "파일 이름 넣기([입력-날짜/시간-파일 이름]메뉴 와 동일)",
    "sourcePage": 16,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "InsertFieldMemo",
    "description": "메모 넣기([입력-메모-메모 넣기]메뉴와 동일)",
    "sourcePage": 16
  },
  {
    "id": "InsertFieldRevisionChagne",
    "description": "메모고침표 넣기(현재 글메뉴에 없음, 메모와 동일한 기능)",
    "sourcePage": 16
  },
  {
    "id": "InsertFieldTemplate",
    "description": "문서마당 정보",
    "sourcePage": 16,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "InsertFile",
    "description": "끼워 넣기",
    "sourcePage": 16,
    "parameterSetId": "InsertFile"
  },
  {
    "id": "InsertFileName",
    "description": "상용구 코드 넣기(파일 이름만)",
    "sourcePage": 16,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "InsertFilePath",
    "description": "상용구 코드 넣기(파일 이름과 경로)",
    "sourcePage": 16,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "InsertFixedWidthSpace",
    "description": "고정폭 빈칸 삽입",
    "sourcePage": 16
  },
  {
    "id": "InsertFootnote",
    "description": "각주 입력",
    "sourcePage": 16
  },
  {
    "id": "InsertHyperlink",
    "description": "하이퍼링크 만들기",
    "sourcePage": 16,
    "parameterSetId": "HyperlinkJump"
  },
  {
    "id": "InsertIdiom",
    "description": "상용구 등록",
    "sourcePage": 17,
    "parameterSetId": "Idiom"
  },
  {
    "id": "InsertLastPrintDate",
    "description": "상용구 코드 넣기(마지막 인쇄한 날짜)",
    "sourcePage": 17
  },
  {
    "id": "InsertLastSaveBy",
    "description": "상용구 코드 넣기(마지막 저장한 사람)",
    "sourcePage": 17
  },
  {
    "id": "InsertLastSaveDate",
    "description": "상용구 코드 넣기(마지막 저장한 날짜)",
    "sourcePage": 17
  },
  {
    "id": "InsertLine",
    "description": "선 넣기",
    "sourcePage": 17
  },
  {
    "id": "InsertLinkImageToDoc",
    "description": "연결 그림을 문서에 삽입",
    "sourcePage": 17,
    "parameterSetId": "SummaryInfo"
  },
  {
    "id": "InsertMovie",
    "description": "동영상 파일 삽입",
    "sourcePage": 17,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "InsertNonBreakingSpace",
    "description": "묶음 빈칸 삽입",
    "sourcePage": 17
  },
  {
    "id": "InsertPageNum",
    "description": "쪽 번호 넣기",
    "sourcePage": 17
  },
  {
    "id": "InsertRevision",
    "description": "교정 부호 넣기([입력-교정 부호-교정 부호 넣기] 메뉴와 동일)",
    "sourcePage": 17,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionAttach",
    "description": "교정 부호 넣기 : 붙임표",
    "sourcePage": 17,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionClipping",
    "description": "교정 부호 넣기 : 뺌표",
    "sourcePage": 17,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionDelete",
    "description": "교정 부호 넣기 : 지움표",
    "sourcePage": 17,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionHyperlink",
    "description": "교정 부호 넣기 : 자료연결",
    "sourcePage": 17,
    "parameterSetId": "HyperLink"
  },
  {
    "id": "InsertRevisionInsert",
    "description": "교정 부호 넣기 : 넣음표",
    "sourcePage": 17,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLeftMove",
    "description": "교정 부호 넣기 : 왼자리 옮김표",
    "sourcePage": 17,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLine",
    "description": "교정 부호 넣기 : 줄표",
    "sourcePage": 17,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLineAttach",
    "description": "교정 부호 넣기 : 줄 붙임표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLineInsert",
    "description": "교정 부호 넣기 : 줄 비움표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLineLink",
    "description": "교정 부호 넣기 : 줄 이음표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLineSeparate",
    "description": "교정 부호 넣기 : 줄 바꿈표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLineTransfer",
    "description": "교정 부호 넣기 : 줄 서로 바꿈표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionLineTransfer",
    "description": "교정 부호 넣기 : 줄 서로 바꿈 나눔표(내부용)",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionPraise",
    "description": "교정 부호 넣기 : 칭찬표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionRightMove",
    "description": "교정 부호 넣기 : 오른자리 옮김표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionSawTooth",
    "description": "교정 부호 넣기 : 톱니표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionSimpleChange",
    "description": "교정 부호 넣기 : 고침표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionSpace",
    "description": "교정 부호 넣기 : 띄움표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionSymbol",
    "description": "교정 부호 넣기 : 부호 넣음표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionThinking",
    "description": "교정 부호 넣기 : 생각표",
    "sourcePage": 18,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionTransfer",
    "description": "교정 부호 넣기 : 자리 바꿈표",
    "sourcePage": 19,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertRevisionTransferSpli",
    "description": "교정 부호 넣기 : 자리바꿈 나눔표(내부용)",
    "sourcePage": 19,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "InsertSoftHyphen",
    "description": "하이픈 삽입",
    "sourcePage": 19
  },
  {
    "id": "InsertSpace",
    "description": "공백 삽입",
    "sourcePage": 19
  },
  {
    "id": "InsertStringDateTime",
    "description": "날짜/시간 넣기 - 문자열로 넣기([입력-날짜/시 간-날짜/시간 문자열]메뉴와 동일)",
    "sourcePage": 19
  },
  {
    "id": "InsertTab",
    "description": "탭 삽입",
    "sourcePage": 19
  },
  {
    "id": "InsertText",
    "description": "텍스트 삽입",
    "sourcePage": 19,
    "parameterSetId": "InsertText"
  },
  {
    "id": "InsertTpNo",
    "description": "상용구 코드 넣기(전체 쪽수)",
    "sourcePage": 19
  },
  {
    "id": "InsertUserName",
    "description": "상용구 코드 넣기(만든 사람)",
    "sourcePage": 19,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "InsertVoice",
    "description": "음성 삽입",
    "sourcePage": 19,
    "parameterSetId": "OleCreation"
  },
  {
    "id": "Jajun",
    "description": "한자 자전",
    "sourcePage": 19
  },
  {
    "id": "LabelAdd",
    "description": "라벨 새 쪽 추가하기",
    "sourcePage": 19
  },
  {
    "id": "LabelTemplate",
    "description": "라벨 문서 만들기",
    "sourcePage": 19
  },
  {
    "id": "LeftShiftBlock",
    "description": "텍스트블록 상태에서 블록 왼쪽에 있는 탭(or 공 백)을 지운다.",
    "sourcePage": 19
  },
  {
    "id": "LinkDocument",
    "description": "문서 연결([파일-문서 연결]메뉴와 동일) 글상자 연결",
    "sourcePage": 19,
    "parameterSetId": "LinkDocument"
  },
  {
    "id": "LinkTextBox",
    "description": "글상자가 선택되지 않았거나, 캐럿이 글상자 내부 에 있지 않으면 동작하지 않는다.",
    "sourcePage": 19
  },
  {
    "id": "MacroDefine",
    "description": "매크로 정의",
    "sourcePage": 20,
    "parameterSetId": "KeyMacro"
  },
  {
    "id": "MacroPause",
    "description": "매크로 실행 일시 중지 (정의/실행)",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay1",
    "description": "매크로 1",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay10",
    "description": "매크로 10",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay11",
    "description": "매크로 11",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay2",
    "description": "매크로 2",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay3",
    "description": "매크로 3",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay4",
    "description": "매크로 4",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay5",
    "description": "매크로 5",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay6",
    "description": "매크로 6",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay7",
    "description": "매크로 7",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay8",
    "description": "매크로 8",
    "sourcePage": 20
  },
  {
    "id": "MacroPlay9",
    "description": "매크로 9",
    "sourcePage": 20
  },
  {
    "id": "MacroRepeat",
    "description": "매크로 실행",
    "sourcePage": 21
  },
  {
    "id": "MacroRepeatDlg",
    "description": "매크로 실행",
    "sourcePage": 21,
    "parameterSetId": "KeyMacro"
  },
  {
    "id": "MacroStop",
    "description": "매크로 실행 중지 (정의/실행)",
    "sourcePage": 21
  },
  {
    "id": "MailMergeField",
    "description": "메일 머지 필드(표시달기 or 고치기)",
    "sourcePage": 21
  },
  {
    "id": "MailMergeGenerate",
    "description": "메일 머지 만들기",
    "sourcePage": 21,
    "parameterSetId": "MailMergeGenerate"
  },
  {
    "id": "MailMergeInsert",
    "description": "메일 머지 표시 달기",
    "sourcePage": 21,
    "parameterSetId": "FieldCtrl"
  },
  {
    "id": "MailMergeModify",
    "description": "메일 머지 고치기 모든 버전비교 문서 만들기.",
    "sourcePage": 21,
    "parameterSetId": "FieldCtrl"
  },
  {
    "id": "MakeAllVersionDiffs",
    "description": "현재 문서 및 문서가 가지고 있는 버전정보를 HML 파일로 생성한다.(생성된 파일을 가지고 향 후 버 전비교를 실행한다)",
    "sourcePage": 21,
    "parameterSetId": "VersionInfo"
  },
  {
    "id": "MakeContents",
    "description": "차례 만들기",
    "sourcePage": 21,
    "parameterSetId": "MakeContents"
  },
  {
    "id": "MakeIndex",
    "description": "찾아보기 만들기 한영 수동 전환.",
    "sourcePage": 21
  },
  {
    "id": "ManualChangeHangul",
    "description": "현재 커서위치 또는 문단나누기 이전에 입력된 내 용에 대해서 강제적으로 한/영 전환을 한다.",
    "sourcePage": 21
  },
  {
    "id": "ManuScriptTemplate",
    "description": "원고지 쓰기",
    "sourcePage": 21,
    "parameterSetId": "FileOpen"
  },
  {
    "id": "MarkPenDelete",
    "description": "형광팬 삭제",
    "sourcePage": 21
  },
  {
    "id": "MarkPenNext",
    "description": "형광팬 이동(다음)",
    "sourcePage": 21
  },
  {
    "id": "MarkPenPrev",
    "description": "형광팬 이동(이전) 형광펜, 선택된 Text영역의 배경을 형광펜으로 칠 해준다.",
    "sourcePage": 22
  },
  {
    "id": "MarkPenShape",
    "description": "Run() 실행불가, 반드시 MarkpenShape ParameterSet의 Color 아이템 값을 설정하고 사용해야 함",
    "sourcePage": 22,
    "parameterSetId": "MarkpenShape",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "MarkPrivateInfo",
    "description": "개인 정보 즉시 감추기(텍스트 블록 상태,암호화) 제목 차례 표시([도구-차례/찾아보기-제목 차례 표시]메뉴에 대응)",
    "sourcePage": 22,
    "parameterSetId": "PrivateInfoSecurity"
  },
  {
    "id": "MarkTitle",
    "description": "차례 코드가 삽입되어 나중에 차례 만들기에서 사 용할 수 있다.적용여부는 Ctrl+G,C를 이용해 조 판부호를 확인하면 알 수 있다.",
    "sourcePage": 22
  },
  {
    "id": "MasterPage",
    "description": "바탕쪽",
    "sourcePage": 22,
    "parameterSetId": "MasterPage"
  },
  {
    "id": "MasterPageDelete",
    "description": "바탕쪽 삭제바탕쪽 편집모드일 경우에만 동작한다. 기존 바탕쪽과 겹침",
    "sourcePage": 22,
    "parameterSetId": "MasterPage",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "MasterPageDuplicate",
    "description": "바탕쪽 편집상태가 활성화되어 있으며 [구역 마지 막쪽], [구역임의 쪽]일 경우에만 사용 가능하다.",
    "sourcePage": 22
  },
  {
    "id": "MasterPageEntry",
    "description": "바탕쪽 편집모드 바탕쪽이 존재할 때만 편집모드로 변환한다.",
    "sourcePage": 22,
    "parameterSetId": "MasterPage"
  },
  {
    "id": "MasterPageExcept",
    "description": "첫 쪽 제외",
    "sourcePage": 22
  },
  {
    "id": "MasterPageFront",
    "description": "바탕쪽 앞으로 보내기 바탕쪽 편집모드일 경우에만 동작한다.",
    "sourcePage": 22
  },
  {
    "id": "MasterPagePrevSection",
    "description": "앞 구역 바탕쪽 사용",
    "sourcePage": 22
  },
  {
    "id": "MasterPageToNext",
    "description": "이후 바탕쪽",
    "sourcePage": 22
  },
  {
    "id": "MasterPageToPrevious",
    "description": "이전 바탕쪽",
    "sourcePage": 22
  },
  {
    "id": "MasterPageTypeDlg",
    "description": "바탕쪽 종류 다이얼로그 띄움",
    "sourcePage": 22,
    "parameterSetId": "MasterPage",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "MemoShape",
    "description": "메모 모양([입력-메모-메모 모양]메뉴와 동일함)",
    "sourcePage": 22,
    "parameterSetId": "SecDef"
  },
  {
    "id": "MemoToNext",
    "description": "다음 메모",
    "sourcePage": 22
  },
  {
    "id": "MemoToPrev",
    "description": "이전 메모",
    "sourcePage": 22
  },
  {
    "id": "MessageBox",
    "description": "메시지 박스",
    "sourcePage": 22,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ModifyBookmark",
    "description": "책갈피 고치기",
    "sourcePage": 23,
    "parameterSetId": "BookMark"
  },
  {
    "id": "ModifyComposeChars",
    "description": "고치기 - 글자 겹침",
    "sourcePage": 23
  },
  {
    "id": "ModifyCrossReference",
    "description": "상호 참조 고치기",
    "sourcePage": 23,
    "parameterSetId": "ActionCrossRef"
  },
  {
    "id": "ModifyCtrl",
    "description": "고치기 : 컨트롤",
    "sourcePage": 23
  },
  {
    "id": "ModifyDutmal",
    "description": "고치기 - 덧말",
    "sourcePage": 23
  },
  {
    "id": "ModifyFieldClickhere",
    "description": "누름틀 정보 고치기",
    "sourcePage": 23,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "ModifyFieldDate",
    "description": "날짜 필드 고치기 날짜/시간 넣기 고치기.",
    "sourcePage": 23,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "ModifyFieldDateTime",
    "description": "반드시 코드로 작성된 \"날짜/시간\"이어야하며 코 드의 앞(누름틀 밖의)에 캐럿이 존재해야만 동작 한다.",
    "sourcePage": 23,
    "parameterSetId": "InputDateStyle"
  },
  {
    "id": "ModifyFieldPath",
    "description": "문서 경로 필드 고치기",
    "sourcePage": 23,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "ModifyFieldSummary",
    "description": "문서 요약 필드 고치기",
    "sourcePage": 23,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "ModifyFieldUserInfo",
    "description": "개인 정보 필드 고치기 고치기(채우기 속성 탭으로) 만약 Ctrl(ShapeObject,누름틀, 날짜/시간 코",
    "sourcePage": 23,
    "parameterSetId": "InsertFieldTemplate"
  },
  {
    "id": "ModifyFillProperty",
    "description": "드 등)이 선택되지 않았다면 역방향탐색 (SelectCtrlReverse)을 이용해서 개체를 탐색 한다. 채우기 속성이 없는 Ctrl일 경우에는 첫 번 째 탭이 선택된 상태로 고치기 창이 뜬다.",
    "sourcePage": 23
  },
  {
    "id": "ModifyHyperlink",
    "description": "하이퍼링크 고치기 고치기(선/테두리 속성 탭으로) 만약 Ctrl(ShapeObject,누름틀, 날짜/시간 코",
    "sourcePage": 23,
    "parameterSetId": "HyperLink"
  },
  {
    "id": "ModifyLineProperty",
    "description": "드 등)이 선택되지 않았다면 역방향탐색 (SelectCtrlReverse)을 이용해서 개체를 탐색 한다. 선/테두리 속성이 없는 Ctrl일 경우에는 첫 번째 탭이 선택된 상태로 고치기 창이 뜬다. 교정 부호 고치기ModifyFieldDateTime과 마찬",
    "sourcePage": 24
  },
  {
    "id": "ModifyRevision",
    "description": "가지로 정확히 교정부호(조판 부호)의 앞에 캐럿 이 존재해야 실행된다. 자료 연결(교정 부호) 고치기",
    "sourcePage": 24,
    "parameterSetId": "RevisionDef"
  },
  {
    "id": "ModifyRevisionHyperlink",
    "description": "ModifyRevision과 마찬가지로 정확히 교정부호 (조판 부호)의 앞에 캐럿이 존재해야 실행된다. Run()으로 실행되지 않는다.",
    "sourcePage": 24,
    "parameterSetId": "HyperLink",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "ModifySecTextHorz",
    "description": "가로 쓰기",
    "sourcePage": 24,
    "parameterSetId": "TextVertical"
  },
  {
    "id": "ModifySecTextVert",
    "description": "세로 쓰기(영문 눕힘)",
    "sourcePage": 24,
    "parameterSetId": "TextVertical"
  },
  {
    "id": "ModifySecTextVertAll",
    "description": "세로 쓰기(영문 세움)",
    "sourcePage": 24,
    "parameterSetId": "TextVertical"
  },
  {
    "id": "ModifySection",
    "description": "구역",
    "sourcePage": 24,
    "parameterSetId": "SecDef"
  },
  {
    "id": "ModifyShapeObject",
    "description": "고치기 - 개체 속성 단의 시작점으로 이동한다. 단이 없을 경우에는 아",
    "sourcePage": 24
  },
  {
    "id": "MoveColumnBegin",
    "description": "무동작도 하지 않는다. 해당 리스트 안에서만 동작 한다. 단의 끝점으로 이동한다. 단이 없을 경우에는 아무",
    "sourcePage": 24
  },
  {
    "id": "MoveColumnEnd",
    "description": "동작도 하지 않는다. 해당 리스트 안에서만 동작한 다. 문서의 시작으로 이동.",
    "sourcePage": 24
  },
  {
    "id": "MoveDocBegin",
    "description": "만약 셀렉션을 확장하는 경우에는 LIST_BEGIN/END와 동일하다. 현재 서브 리스트 내에 있으면 빠져나간다. 문서의 끝으로 이동.",
    "sourcePage": 24
  },
  {
    "id": "MoveDocEnd",
    "description": "만약 셀렉션을 확장하는 경우에는 LIST_BEGIN/END와 동일하다. 현재 서브 리스트 내에 있으면 빠져나간다.",
    "sourcePage": 24
  },
  {
    "id": "MoveDown",
    "description": "캐럿을 (논리적 개념의) 아래로 이동시킨다.",
    "sourcePage": 25
  },
  {
    "id": "MoveLeft",
    "description": "캐럿을 (논리적 개념의) 왼쪽으로 이동시킨다.",
    "sourcePage": 25
  },
  {
    "id": "MoveLineBegin",
    "description": "현재 위치한 줄의 시작/끝으로 이동",
    "sourcePage": 25
  },
  {
    "id": "MoveLineDown",
    "description": "한 줄 아래로 이동한다.",
    "sourcePage": 25
  },
  {
    "id": "MoveLineEnd",
    "description": "현재 위치한 줄의 시작/끝으로 이동",
    "sourcePage": 25
  },
  {
    "id": "MoveLineUp",
    "description": "한 줄 위로 이동한다.",
    "sourcePage": 25
  },
  {
    "id": "MoveListBegin",
    "description": "현재 리스트의 시작으로 이동",
    "sourcePage": 25
  },
  {
    "id": "MoveListEnd",
    "description": "현재 리스트의 끝으로 이동",
    "sourcePage": 25
  },
  {
    "id": "MoveNextChar",
    "description": "한 글자 뒤로 이동. 현재 리스트만을 대상으로 동 작한다.",
    "sourcePage": 25
  },
  {
    "id": "MoveNextColumn",
    "description": "뒤 단으로 이동",
    "sourcePage": 25
  },
  {
    "id": "MoveNextParaBegin",
    "description": "다음 문단의 시작으로 이동. 현재 리스트만을 대상 으로 동작한다.",
    "sourcePage": 25
  },
  {
    "id": "MoveNextPos",
    "description": "한 글자 뒤로 이동. 서브 리스트를 옮겨 다닐 수 있다. 한 글자 뒤로 이동. 서브 리스트를 옮겨 다닐 수",
    "sourcePage": 25
  },
  {
    "id": "MoveNextPosEx",
    "description": "있다. (머리말, 꼬리말, 각주, 미주, 글상자 포 함)",
    "sourcePage": 25
  },
  {
    "id": "MoveNextWord",
    "description": "한 단어 뒤로 이동. 현재 리스트만을 대상으로 동 작한다. 현재 페이지의 시작점으로 이동한다.",
    "sourcePage": 25
  },
  {
    "id": "MovePageBegin",
    "description": "만약 캐럿의 위치가 변경되었다면 화면이 전환되어 쪽의 상단으로 페이지뷰잉이 맞춰진다.",
    "sourcePage": 25
  },
  {
    "id": "MovePageDown",
    "description": "앞 페이지의 시작으로 이동. 현재 탑레벨 리스트가 아니면 탑레벨 리스트로 빠져나온다. 현재 페이지의 끝점으로 이동한다.",
    "sourcePage": 25
  },
  {
    "id": "MovePageEnd",
    "description": "만약 캐럿의 위치가 변경되었다면 화면이 전환되어 쪽의 하단으로 페이지뷰잉이 맞춰진다.",
    "sourcePage": 25
  },
  {
    "id": "MovePageUp",
    "description": "뒤 페이지의 시작으로 이동. 현재 탑레벨 리스트가 아니면 탑레벨 리스트로 빠져나온다.",
    "sourcePage": 25
  },
  {
    "id": "MoveParaBegin",
    "description": "현재 위치한 문단의 시작/끝으로 이동",
    "sourcePage": 26
  },
  {
    "id": "MoveParaEnd",
    "description": "현재 위치한 문단의 시작/끝으로 이동 한 레벨 상위/탑레벨/루트 리스트로 이동한다. 현재 루트 리스트에 위치해 있어 더 이상 상위 리",
    "sourcePage": 26
  },
  {
    "id": "MoveParentList",
    "description": "스트가 없을 때는 위치 이동 없이 리턴한다. 이동 한 후의 위치는 상위 리스트에서 서브리스트가 속 한 컨트롤 코드가 위치한 곳이다. 위치 이동시 셀 렉션은 무조건 풀린다.",
    "sourcePage": 26
  },
  {
    "id": "MovePrevChar",
    "description": "한 글자 앞 이동. 현재 리스트만을 대상으로 동작 한다.",
    "sourcePage": 26
  },
  {
    "id": "MovePrevColumn",
    "description": "앞 단으로 이동",
    "sourcePage": 26
  },
  {
    "id": "MovePrevParaBegin",
    "description": "앞 문단의 시작으로 이동. 현재 리스트만을 대상으 로 동작한다.",
    "sourcePage": 26
  },
  {
    "id": "MovePrevParaEnd",
    "description": "앞 문단의 끝으로 이동. 현재 리스트만을 대상으로 동작한다.",
    "sourcePage": 26
  },
  {
    "id": "MovePrevPos",
    "description": "한 글자 앞으로 이동. 서브 리스트를 옮겨 다닐 수 있다. 한 글자 앞으로 이동. 서브 리스트를 옮겨 다닐 수",
    "sourcePage": 26
  },
  {
    "id": "MovePrevPosEx",
    "description": "있다. (머리말, 꼬리말, 각주, 미주, 글상자 포 함)",
    "sourcePage": 26
  },
  {
    "id": "MovePrevWord",
    "description": "한 단어 앞으로 이동. 현재 리스트만을 대상으로 동작한다.",
    "sourcePage": 26
  },
  {
    "id": "MoveRight",
    "description": "캐럿을 (논리적 개념의) 오른쪽으로 이동시킨다. 한 레벨 상위/탑레벨/루트 리스트로 이동한다. 현재 루트 리스트에 위치해 있어 더 이상 상위 리",
    "sourcePage": 26
  },
  {
    "id": "MoveRootList",
    "description": "스트가 없을 때는 위치 이동 없이 리턴한다. 이동 한 후의 위치는 상위 리스트에서 서브리스트가 속 한 컨트롤 코드가 위치한 곳이다. 위치 이동시 셀 렉션은 무조건 풀린다.",
    "sourcePage": 26
  },
  {
    "id": "MoveScrollDown",
    "description": "아래 방향으로 스크롤하면서 이동",
    "sourcePage": 27
  },
  {
    "id": "MoveScrollNext",
    "description": "다음 방향으로 스크롤하면서 이동",
    "sourcePage": 27
  },
  {
    "id": "MoveScrollPrev",
    "description": "이전 방향으로 스크롤하면서 이동",
    "sourcePage": 27
  },
  {
    "id": "MoveScrollUp",
    "description": "위 방향으로 스크롤하면서 이동",
    "sourcePage": 27
  },
  {
    "id": "MoveSectionDown",
    "description": "뒤 섹션으로 이동. 현재 루트 리스트가 아니면 루 트 리스트로 빠져나온다.",
    "sourcePage": 27
  },
  {
    "id": "MoveSectionUp",
    "description": "앞 섹션으로 이동. 현재 루트 리스트가 아니면 루 트 리스트로 빠져나온다.",
    "sourcePage": 27
  },
  {
    "id": "MoveSelDocBegin",
    "description": "셀렉션: 문서 처음",
    "sourcePage": 27
  },
  {
    "id": "MoveSelDocEnd",
    "description": "셀렉션: 문서 끝",
    "sourcePage": 27
  },
  {
    "id": "MoveSelDown",
    "description": "셀렉션: 캐럿을 (논리적 방향) 아래로 이동",
    "sourcePage": 27
  },
  {
    "id": "MoveSelLeft",
    "description": "셀렉션: 캐럿을 (논리적 방향) 왼쪽으로 이동",
    "sourcePage": 27
  },
  {
    "id": "MoveSelLineBegin",
    "description": "셀렉션: 줄 처음",
    "sourcePage": 27
  },
  {
    "id": "MoveSelLineDown",
    "description": "셀렉션: 한줄 아래",
    "sourcePage": 27
  },
  {
    "id": "MoveSelLineEnd",
    "description": "셀렉션: 줄 끝",
    "sourcePage": 27
  },
  {
    "id": "MoveSelLineUp",
    "description": "셀렉션: 한줄 위",
    "sourcePage": 27
  },
  {
    "id": "MoveSelListBegin",
    "description": "셀렉션: 리스트 처음",
    "sourcePage": 27
  },
  {
    "id": "MoveSelListEnd",
    "description": "셀렉션: 리스트 끝",
    "sourcePage": 27
  },
  {
    "id": "MoveSelNextChar",
    "description": "셀렉션: 다음 글자",
    "sourcePage": 27
  },
  {
    "id": "MoveSelNextParaBegin",
    "description": "셀렉션: 다음 문단 처음",
    "sourcePage": 27
  },
  {
    "id": "MoveSelNextPos",
    "description": "셀렉션: 다음 위치",
    "sourcePage": 27
  },
  {
    "id": "MoveSelNextWord",
    "description": "셀렉션: 다음 단어",
    "sourcePage": 27
  },
  {
    "id": "MoveSelPageDown",
    "description": "셀렉션: 페이지다운",
    "sourcePage": 27
  },
  {
    "id": "MoveSelPageUp",
    "description": "셀렉션: 페이지 업",
    "sourcePage": 27
  },
  {
    "id": "MoveSelParaBegin",
    "description": "셀렉션: 문단 처음",
    "sourcePage": 27
  },
  {
    "id": "MoveSelParaEnd",
    "description": "셀렉션: 문단 끝",
    "sourcePage": 28
  },
  {
    "id": "MoveSelPrevChar",
    "description": "셀렉션: 이전 글자",
    "sourcePage": 28
  },
  {
    "id": "MoveSelPrevParaBegin",
    "description": "셀렉션: 이전 문단 시작",
    "sourcePage": 28
  },
  {
    "id": "MoveSelPrevParaEnd",
    "description": "셀렉션: 이전 문단 끝",
    "sourcePage": 28
  },
  {
    "id": "MoveSelPrevPos",
    "description": "셀렉션: 이전 위치",
    "sourcePage": 28
  },
  {
    "id": "MoveSelPrevWord",
    "description": "셀렉션: 이전 단어",
    "sourcePage": 28
  },
  {
    "id": "MoveSelRight",
    "description": "셀렉션: 캐럿을 (논리적 방향) 오른쪽으로 이동",
    "sourcePage": 28
  },
  {
    "id": "MoveSelTopLevelBegin",
    "description": "셀렉션: 처음",
    "sourcePage": 28
  },
  {
    "id": "MoveSelTopLevelEnd",
    "description": "셀렉션: 끝",
    "sourcePage": 28
  },
  {
    "id": "MoveSelUp",
    "description": "셀렉션: 캐럿을 (논리적 방향) 위로 이동",
    "sourcePage": 28
  },
  {
    "id": "MoveSelViewDown",
    "description": "셀렉션: 아래",
    "sourcePage": 28
  },
  {
    "id": "MoveSelViewUp",
    "description": "셀렉션: 위",
    "sourcePage": 28
  },
  {
    "id": "MoveSelWordBegin",
    "description": "셀렉션: 단어 처음",
    "sourcePage": 28
  },
  {
    "id": "MoveSelWordEnd",
    "description": "셀렉션: 단어 끝",
    "sourcePage": 28
  },
  {
    "id": "MoveTopLevelBegin",
    "description": "탑레벨 리스트의 시작으로 이동",
    "sourcePage": 28
  },
  {
    "id": "MoveTopLevelEnd",
    "description": "탑레벨 리스트의 끝으로 이동 한 레벨 상위/탑레벨/루트 리스트로 이동한다. 현재 루트 리스트에 위치해 있어 더 이상 상위 리",
    "sourcePage": 28
  },
  {
    "id": "MoveTopLevelList",
    "description": "스트가 없을 때는 위치 이동 없이 리턴한다. 이동 한 후의 위치는 상위 리스트에서 서브리스트가 속 한 컨트롤 코드가 위치한 곳이다. 위치 이동시 셀 렉션은 무조건 풀린다.",
    "sourcePage": 28
  },
  {
    "id": "MoveUp",
    "description": "캐럿을 (논리적 개념의) 위로 이동시킨다.",
    "sourcePage": 28
  },
  {
    "id": "MoveViewBegin",
    "description": "현재 뷰의 시작에 위치한 곳으로 이동",
    "sourcePage": 28
  },
  {
    "id": "MoveViewDown",
    "description": "현재 뷰의 크기만큼 아래로 이동한다. PgDn 키의 기능이다.",
    "sourcePage": 29
  },
  {
    "id": "MoveViewEnd",
    "description": "현재 뷰의 끝에 위치한 곳으로 이동",
    "sourcePage": 29
  },
  {
    "id": "MoveViewUp",
    "description": "현재 뷰의 크기만큼 위로 이동한다. PgUp 키의 기 능이다.",
    "sourcePage": 29
  },
  {
    "id": "MoveWordBegin",
    "description": "현재 위치한 단어의 시작으로 이동. 현재 리스트만 을 대상으로 동작한다.",
    "sourcePage": 29
  },
  {
    "id": "MoveWordEnd",
    "description": "현재 위치한 단어의 끝으로 이동. 현재 리스트만을 대상으로 동작한다.",
    "sourcePage": 29
  },
  {
    "id": "MPBreakNewSection",
    "description": "새 구역 만들기–바탕쪽 편집 상태에서",
    "sourcePage": 29,
    "parameterSetId": "MasterPage"
  },
  {
    "id": "MPCopyFromOtherSection",
    "description": "바탕쪽 가져오기–다른 구역의 바탕쪽 종류와 내용 을 복사",
    "sourcePage": 29,
    "parameterSetId": "Masterpage"
  },
  {
    "id": "MPSectionToNext",
    "description": "이후 구역으로",
    "sourcePage": 29
  },
  {
    "id": "MPSectionToPrevious",
    "description": "이전 구역으로",
    "sourcePage": 29
  },
  {
    "id": "MPShowMarginBorder",
    "description": "여백 보기–바탕쪽 편집 상태에서",
    "sourcePage": 29
  },
  {
    "id": "MultiColumn",
    "description": "다단",
    "sourcePage": 29,
    "parameterSetId": "ColDef"
  },
  {
    "id": "NewNumber",
    "description": "새 번호로 시작",
    "sourcePage": 29,
    "parameterSetId": "AutoNum"
  },
  {
    "id": "NewNumberModify",
    "description": "새 번호 고치기",
    "sourcePage": 29,
    "parameterSetId": "AutoNum"
  },
  {
    "id": "NextTextBoxLinked",
    "description": "연결된 글상자의 다음 글상자로 이동",
    "sourcePage": 29
  },
  {
    "id": "NoneTextArtShadow",
    "description": "글맵시 그림자 없음",
    "sourcePage": 29,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "NoteDelete",
    "description": "주석 지우기",
    "sourcePage": 29
  },
  {
    "id": "NoteModify",
    "description": "주석 고치기",
    "sourcePage": 29
  },
  {
    "id": "NoteNoSuperscript",
    "description": "주석 번호 보통(윗 첨자 사용 안함)",
    "sourcePage": 29,
    "parameterSetId": "SecDef"
  },
  {
    "id": "NoteNumProperty",
    "description": "주석 번호 속성",
    "sourcePage": 29
  },
  {
    "id": "NoteSuperscript",
    "description": "주석 번호 작게(윗 첨자)",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "NoteToNext",
    "description": "주석 다음으로 이동",
    "sourcePage": 30
  },
  {
    "id": "NoteToPrev",
    "description": "주석 앞으로 이동",
    "sourcePage": 30
  },
  {
    "id": "OleCreateNew",
    "description": "개체 삽입",
    "sourcePage": 30,
    "parameterSetId": "OleCreation"
  },
  {
    "id": "OutlineNumber",
    "description": "개요번호",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageBorder",
    "description": "쪽 테두리/배경",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageBorderTab",
    "description": "쪽 테두리/배경(항상 테두리 탭이 선택되어 보인 다.)",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageFillTab",
    "description": "쪽 테두리/배경(항상 테두리 탭이 선택되어 보인 다.)",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageHiding",
    "description": "감추기",
    "sourcePage": 30,
    "parameterSetId": "PageHiding"
  },
  {
    "id": "PageHidingModify",
    "description": "감추기 고치기",
    "sourcePage": 30,
    "parameterSetId": "PageHiding"
  },
  {
    "id": "PageLandscape",
    "description": "용지 넓게",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageMarginSetup",
    "description": "편집 용지(쪽 여백 설정) 한/글 2022 부터 지원",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageNumPos",
    "description": "쪽 번호 매기기",
    "sourcePage": 30,
    "parameterSetId": "PageNumPos"
  },
  {
    "id": "PageNumPosModify",
    "description": "쪽 번호 매기기",
    "sourcePage": 30,
    "parameterSetId": "PageNumPos"
  },
  {
    "id": "PagePortrait",
    "description": "용지 좁게",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageSetup",
    "description": "편집 용지",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "PageSetupDL",
    "description": "편집 용지(쪽 여백 설정)",
    "sourcePage": 30,
    "parameterSetId": "SecDef"
  },
  {
    "id": "ParagraphShape",
    "description": "문단 모양",
    "sourcePage": 30,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "ParagraphShapeAlignCenter",
    "description": "가운데 정렬",
    "sourcePage": 30
  },
  {
    "id": "ParagraphShapeAlignDistrib",
    "description": "배분 정렬",
    "sourcePage": 30
  },
  {
    "id": "ParagraphShapeAlignDivisio",
    "description": "나눔 정렬",
    "sourcePage": 30
  },
  {
    "id": "ParagraphShapeAlignJustify",
    "description": "양쪽 정렬",
    "sourcePage": 30
  },
  {
    "id": "ParagraphShapeAlignLeft",
    "description": "왼쪽 정렬",
    "sourcePage": 30
  },
  {
    "id": "ParagraphShapeAlignRight",
    "description": "오른쪽 정렬",
    "sourcePage": 30
  },
  {
    "id": "ParagraphShapeDecreaseLeft",
    "description": "왼쪽 여백 줄이기",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeDecreaseLine",
    "description": "줄 간격을 점점 좁힘",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeDecreaseMarg",
    "description": "왼쪽-오른쪽 여백 줄이기",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeDecreaseRigh",
    "description": "오른쪽 여백 키우기",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeIncreaseLeft",
    "description": "왼쪽 여백 키우기",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeIncreaseLine",
    "description": "줄 간격을 점점 넓힘",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeIncreaseMarg",
    "description": "왼쪽-오른쪽 여백 키우기",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeIncreaseRigh",
    "description": "오른쪽 여백 줄이기",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeIndentAtCare",
    "description": "첫 줄 내어 쓰기",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeIndentNegati",
    "description": "첫 줄을 한 글자 내어 씀",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeIndentPositi",
    "description": "첫 줄을 한 글자 들여 씀",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeProtect",
    "description": "문단 보호",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeSingleRow",
    "description": "한 줄로 입력",
    "sourcePage": 31
  },
  {
    "id": "ParagraphShapeWithNext",
    "description": "다음 문단과 함께",
    "sourcePage": 31
  },
  {
    "id": "ParaNumberBullet",
    "description": "문단번호/글머리표 한 수준 위로",
    "sourcePage": 31,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "ParaNumberBulletLevelDown",
    "description": "문단번호/글머리표 한 수준 아래로",
    "sourcePage": 31,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "ParaNumberBulletLevelUp",
    "description": "문단번호/글머리표 한 수준 위로",
    "sourcePage": 31,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "ParaNumberDlg",
    "description": "문단번호 대화상자",
    "sourcePage": 31,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "ParaShapeDialog",
    "description": "문단 모양 대화상자(내부 구현용)",
    "sourcePage": 31,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "Paste",
    "description": "붙이기",
    "sourcePage": 31
  },
  {
    "id": "PastePage",
    "description": "쪽 붙여넣기",
    "sourcePage": 32
  },
  {
    "id": "PasteSpecial",
    "description": "골라 붙이기",
    "sourcePage": 32
  },
  {
    "id": "PictureBulletDlg",
    "description": "그림 글머리표 대화상자",
    "sourcePage": 32,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "PictureChange",
    "description": "그림 바꾸기",
    "sourcePage": 32,
    "parameterSetId": "PictureChange"
  },
  {
    "id": "PictureEffect1",
    "description": "그림 그레이 스케일",
    "sourcePage": 32
  },
  {
    "id": "PictureEffect2",
    "description": "그림 흑백으로",
    "sourcePage": 32
  },
  {
    "id": "PictureEffect3",
    "description": "그림 워터마크",
    "sourcePage": 32
  },
  {
    "id": "PictureEffect4",
    "description": "그림 효과 없음",
    "sourcePage": 32
  },
  {
    "id": "PictureEffect5",
    "description": "그림 밝기 증가",
    "sourcePage": 32
  },
  {
    "id": "PictureEffect6",
    "description": "그림 밝기 감소",
    "sourcePage": 32
  },
  {
    "id": "PictureEffect7",
    "description": "그림 명암 증가",
    "sourcePage": 32
  },
  {
    "id": "PictureEffect8",
    "description": "그림 명암 감소",
    "sourcePage": 32
  },
  {
    "id": "PictureInsertDialog",
    "description": "그림 넣기 (대화상자를 띄워 선택한 이미지 파일을 문서에 삽입하는 액션 : API용)",
    "sourcePage": 32
  },
  {
    "id": "PictureLinkedToEmbedded",
    "description": "연결된 그림을 모두 삽입그림으로",
    "sourcePage": 32
  },
  {
    "id": "PictureNoBrightness",
    "description": "그림 밝기 효과 없음",
    "sourcePage": 32,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "PictureNoContrast",
    "description": "그림 대비 효과 없음",
    "sourcePage": 32,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "PictureNoGlow",
    "description": "그림 네온 효과 없음",
    "sourcePage": 32,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "PictureNoReflection",
    "description": "그림 반사 효과 없음",
    "sourcePage": 32,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "PictureNoShadow",
    "description": "그림 그림자 효과 없음",
    "sourcePage": 33,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "PictureNoSofeEdge",
    "description": "그림 부드러운 가장자리 효과 없음",
    "sourcePage": 33,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "PictureNoStyle",
    "description": "그림 스타일 효과 없음",
    "sourcePage": 33,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "PictureSave",
    "description": "그림 빼내기",
    "sourcePage": 33
  },
  {
    "id": "PictureSaveAsAll",
    "description": "삽입된 바이너리 그림 다른 형태로 저장.",
    "sourcePage": 33,
    "parameterSetId": "SaveAsImage"
  },
  {
    "id": "PictureSaveAsOption",
    "description": "바이너리 그림을 다른 형태로 저장하는 옵션을 설 정",
    "sourcePage": 33,
    "parameterSetId": "SaveAsImage"
  },
  {
    "id": "PictureScissor",
    "description": "그림 자르기",
    "sourcePage": 33
  },
  {
    "id": "PictureToOriginal",
    "description": "그림 원래 그림으로",
    "sourcePage": 33
  },
  {
    "id": "Preference",
    "description": "환경 설정",
    "sourcePage": 33,
    "parameterSetId": "Preference"
  },
  {
    "id": "Presentation",
    "description": "프레젠테이션",
    "sourcePage": 33,
    "parameterSetId": "Presentation"
  },
  {
    "id": "PresentationDelete",
    "description": "프레젠테이션 삭제",
    "sourcePage": 33,
    "parameterSetId": "Presentation"
  },
  {
    "id": "PresentationRange",
    "description": "프레젠테이션 범위 설정.",
    "sourcePage": 33,
    "parameterSetId": "PresentationRange"
  },
  {
    "id": "PresentationSetup",
    "description": "프레젠테이션 설정 연결된 글상자의 이전 글상자로 이동",
    "sourcePage": 33,
    "parameterSetId": "Presentation"
  },
  {
    "id": "PrevTextBoxLinked",
    "description": "현재 글상자가 선택되거나, 글상자 내부에 캐럿이 존재하지 않으면 동작하지 않는다.",
    "sourcePage": 33
  },
  {
    "id": "Print",
    "description": "인쇄",
    "sourcePage": 33,
    "parameterSetId": "Print"
  },
  {
    "id": "PrintSetup",
    "description": "인쇄옵션 - 워터 마크",
    "sourcePage": 33,
    "parameterSetId": "Print"
  },
  {
    "id": "PrintToImage",
    "description": "그림으로 저장하기",
    "sourcePage": 33,
    "parameterSetId": "PrintToImage"
  },
  {
    "id": "PrintToPDF",
    "description": "PDF인쇄",
    "sourcePage": 33,
    "parameterSetId": "Print"
  },
  {
    "id": "PrivateInfoChangePassword",
    "description": "개인 정보 보안 암호 변경",
    "sourcePage": 33,
    "parameterSetId": "PrivateInfoSecurity"
  },
  {
    "id": "PrivateInfoSetPassword",
    "description": "개인 정보 보안 암호 설정",
    "sourcePage": 33,
    "parameterSetId": "PrivateInfoSecurity"
  },
  {
    "id": "PutBullet",
    "description": "글머리표 달기",
    "sourcePage": 33,
    "parameterSetId": "ParaShape",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "PutNewParaNumber",
    "description": "문단번호 새 번호 시작하기",
    "sourcePage": 34,
    "parameterSetId": "ParaShape",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "PutOutlineNumber",
    "description": "개요번호 달기",
    "sourcePage": 34,
    "parameterSetId": "ParaShape",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "PutParaNumber",
    "description": "문단번호 달기",
    "sourcePage": 34,
    "parameterSetId": "ParaShape",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "QuickCommand Run",
    "description": "입력 자동 명령 동작",
    "sourcePage": 34
  },
  {
    "id": "QuickCorrect Edit",
    "description": "빠른 교정 ―내용 편집",
    "sourcePage": 34,
    "parameterSetId": "QCorrect"
  },
  {
    "id": "QuickCorrect Run",
    "description": "빠른 교정 ―내용 편집",
    "sourcePage": 34
  },
  {
    "id": "QuickCorrect Sound",
    "description": "빠른 교정 ― 메뉴에서 효과음 On/Off",
    "sourcePage": 34
  },
  {
    "id": "QuickCorrect",
    "description": "빠른 교정 (실질적인 동작 Action)",
    "sourcePage": 34
  },
  {
    "id": "QuickMarkInsert0 ~ 9",
    "description": "쉬운 책갈피 - 삽입",
    "sourcePage": 34
  },
  {
    "id": "QuickMarkMove0 ~ 9",
    "description": "쉬운 책갈피 - 이동",
    "sourcePage": 34
  },
  {
    "id": "RecalcPageCount",
    "description": "현재 페이지의 쪽 번호 재계산 최근에 사용한 문자표 입력",
    "sourcePage": 34
  },
  {
    "id": "RecentCode",
    "description": "최근에 사용한 문자표가 없을 경우에는 문자표 대 화상자를 띄운다.",
    "sourcePage": 34
  },
  {
    "id": "Redo",
    "description": "다시 실행",
    "sourcePage": 34
  },
  {
    "id": "RepeatFind",
    "description": "다시 찾기",
    "sourcePage": 34,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "ReplaceDlg",
    "description": "찾아 바꾸기",
    "sourcePage": 34,
    "parameterSetId": "FindReplace"
  },
  {
    "id": "ReplacePrivateInfoDlg",
    "description": "개인 정보 찾아 숨기기(문자열 치환)",
    "sourcePage": 34
  },
  {
    "id": "ReplyMemo",
    "description": "메모 회신 한/글 2022 부터 지원",
    "sourcePage": 34
  },
  {
    "id": "ReturnKeyInField",
    "description": "캐럿이 필드 안에 위치한 상태에서 Return Key에 대한 액션 분기",
    "sourcePage": 34
  },
  {
    "id": "ReturnPrevPos",
    "description": "직전위치로 돌아가기",
    "sourcePage": 34
  },
  {
    "id": "ReverseFind",
    "description": "거꾸로 찾기",
    "sourcePage": 34,
    "parameterSetId": "FindReplace",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "RightShiftBlock",
    "description": "텍스트블록 상태에서 블록이 문단의 시작위치에서 시작할 경우 블록 왼쪽에 탭을 삽입한다.",
    "sourcePage": 34
  },
  {
    "id": "SaveBlockAction",
    "description": "블록 저장하기",
    "sourcePage": 34,
    "parameterSetId": "FileSaveBlock"
  },
  {
    "id": "SaveFootnote",
    "description": "주석 저장 새 버전으로 저장([파일-버전 비교/저장]메뉴를",
    "sourcePage": 34,
    "parameterSetId": "SaveFootnote"
  },
  {
    "id": "SaveHistoryItem",
    "description": "누르면 나타나는 대화상자에서 [새 버전 저장] 버 튼을 누른 것과 동일)",
    "sourcePage": 35,
    "parameterSetId": "VersionInfo"
  },
  {
    "id": "ScanHFTFonts",
    "description": "한/글 글꼴 검색 매크로 정의",
    "sourcePage": 35
  },
  {
    "id": "ScrMacroDefine",
    "description": "매크로 정의 대화상자를 띄우고, 설정이 끝나면 매 크로를 기록한다.",
    "sourcePage": 35,
    "parameterSetId": "ScriptMacro"
  },
  {
    "id": "ScrMacroPause",
    "description": "매크로 기록 일시정지/재시작",
    "sourcePage": 35
  },
  {
    "id": "ScrMacroPlay1 ~ 11",
    "description": "#번 매크로 실행(Alt+Shift+#)",
    "sourcePage": 35
  },
  {
    "id": "ScrMacroRepeatDlg",
    "description": "스크립트 매크로 실행 대화상자([도구-매크로-스 크립트 매크로 실행]메뉴와 동일)",
    "sourcePage": 35,
    "parameterSetId": "ScriptMacro"
  },
  {
    "id": "ScrMacroSecurityDlg",
    "description": "스크립트 매크로 보안 설정 대화상자([도구-매크 로-스크립트 매크로 보안]메뉴와 동일)",
    "sourcePage": 35,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ScrMacroStop",
    "description": "매크로 기록 중지",
    "sourcePage": 35
  },
  {
    "id": "SearchAddress",
    "description": "주소 검색",
    "sourcePage": 35,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "SearchForeign",
    "description": "외래어사전검색",
    "sourcePage": 35,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "SearchPrivateInfo",
    "description": "개인 정보 찾아 감추기(암호화)",
    "sourcePage": 35
  },
  {
    "id": "Select",
    "description": "선택 (F3 Key를 누른 효과)",
    "sourcePage": 35
  },
  {
    "id": "SelectAll",
    "description": "모두 선택",
    "sourcePage": 35
  },
  {
    "id": "SelectColumn",
    "description": "칸 블록 선택 (F4 Key를 누른 효과)",
    "sourcePage": 35
  },
  {
    "id": "SelectCtrlFront",
    "description": "개체선택 정방향",
    "sourcePage": 35
  },
  {
    "id": "SelectCtrlReverse",
    "description": "개체선택 역방향",
    "sourcePage": 36
  },
  {
    "id": "SelectPageNumShape",
    "description": "쪽 번호 모양",
    "sourcePage": 36,
    "parameterSetId": "AutoNum"
  },
  {
    "id": "SendBrowserText",
    "description": "브라우저로 보내기",
    "sourcePage": 36
  },
  {
    "id": "SendMailAttach",
    "description": "편지 보내기 - 첨부파일로",
    "sourcePage": 36,
    "parameterSetId": "FileSendMail"
  },
  {
    "id": "SendMailText",
    "description": "편지 보내기 - 본문으로",
    "sourcePage": 36,
    "parameterSetId": "FileSendMail"
  },
  {
    "id": "SetLineNumbers",
    "description": "줄 번호 넣기",
    "sourcePage": 36,
    "parameterSetId": "SecDef"
  },
  {
    "id": "ShapeCopyPaste",
    "description": "모양 복사",
    "sourcePage": 36,
    "parameterSetId": "ShapeCopyPaste"
  },
  {
    "id": "ShapeObjAlignBottom",
    "description": "아래로 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignCenter",
    "description": "가운데로 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignHeight",
    "description": "높이 맞춤",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignHorzSpacing",
    "description": "왼쪽/오른쪽 일정한 비율로 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignLeft",
    "description": "왼쪽으로 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignMiddle",
    "description": "중간 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignRight",
    "description": "오른쪽으로 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignSize",
    "description": "폭/높이 맞춤",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignTop",
    "description": "위로 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignVertSpacing",
    "description": "위/아래 일정한 비율로 정렬",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAlignWidth",
    "description": "폭 맞춤",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAttachCaption",
    "description": "캡션 넣기",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAttachTextBox",
    "description": "글 상자로 만들기",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjAttrDialog",
    "description": "틀 속성 환경설정",
    "sourcePage": 36,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjBringForward",
    "description": "앞으로",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjBringInFrontOfText",
    "description": "글 앞으로",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjBringToFront",
    "description": "맨 앞으로",
    "sourcePage": 36
  },
  {
    "id": "ShapeObjComment",
    "description": "개체 설명문 수정하기",
    "sourcePage": 36,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjCtrlSendBehindText",
    "description": "글 뒤로",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjDetachCaption",
    "description": "캡션 없애기",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjDetachTextBox",
    "description": "글상자 속성 없애기",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjDialog",
    "description": "환경설정",
    "sourcePage": 37,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjectCopy",
    "description": "그리기 모양 복사 e",
    "sourcePage": 37,
    "parameterSetId": "ShapeObjectCopyPast"
  },
  {
    "id": "ShapeObjectPaste",
    "description": "그리기 모양 붙여넣기 e",
    "sourcePage": 37,
    "parameterSetId": "ShapeObjectCopyPast"
  },
  {
    "id": "ShapeObjFillProperty",
    "description": "고치기 대화상자중 fill tab",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjGroup",
    "description": "틀 묶기",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjGuideLine",
    "description": "그리기 개체 안내선",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjHorzFlip",
    "description": "그리기 개체 좌우 뒤집기",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjHorzFlipOrgState",
    "description": "그리기 개체 좌우 뒤집기 원상태로 되돌리기",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjInsertCaptionNum",
    "description": "캡션 번호 넣기",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjLineProperty",
    "description": "고치기 대화상자중 line tab",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjLineStyleOhter",
    "description": "다른 선 종류",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjLineWidthOhter",
    "description": "다른 선 굵기",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjLock",
    "description": "개체 Lock",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjMoveDown",
    "description": "키로 움직이기(아래)",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjMoveLeft",
    "description": "키로 움직이기(왼쪽)",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjMoveRight",
    "description": "키로 움직이기(오른쪽)",
    "sourcePage": 37
  },
  {
    "id": "ShapeObjMoveUp",
    "description": "키로 움직이기(위)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjNextObject",
    "description": "이후 개채로 이동(tab키)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjNorm",
    "description": "기본 도형 설정",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjNoShade",
    "description": "채우기 색 음영 없음",
    "sourcePage": 38,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjNoShadow",
    "description": "그림자 없음",
    "sourcePage": 38,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjPrevObject",
    "description": "이전 개체로 이동(shift + tab키)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjProtectSize",
    "description": "그리기 개체 크기 고정",
    "sourcePage": 38,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjRandomAngleRotater",
    "description": "자유각 회전",
    "sourcePage": 38,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjResizeDown",
    "description": "키로 크기 조절(shift + 아래)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjResizeLeft",
    "description": "키로 크기 조절(shift + 왼쪽)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjResizeRight",
    "description": "키로 크기 조절(shift + 오른쪽)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjResizeUp",
    "description": "키로 크기 조절(shift + 위)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjRightAngleRotater",
    "description": "90도 회전",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjRightAngleRotaterA",
    "description": "-90도 회전",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjRotater",
    "description": "자유각 회전(회전중심 고정)",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjSaveAsPicture",
    "description": "그리기개체를 그림으로 저장하기",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjSelect",
    "description": "틀 선택 도구",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjSendBack",
    "description": "뒤로",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjSendToBack",
    "description": "맨 뒤로",
    "sourcePage": 38
  },
  {
    "id": "ShapeObjShadowEnlarge",
    "description": "그리기 개체 그림자를 큰 형태로 변경그림자가 없 으면 생성한다.",
    "sourcePage": 38,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowMoveDown",
    "description": "그리기 개체 그림자를 밑으로 이동시킨다. 그림자 가 없으면 생성한다.",
    "sourcePage": 38,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowMoveLeft",
    "description": "그리기 개체 그림자를 왼쪽으로 이동시킨다. 그림 자가 없으면 생성한다.",
    "sourcePage": 38,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowMoveOrginal",
    "description": "그리기 개체 그림자 위치 원점으로(offset제거)",
    "sourcePage": 38,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowMoveRight",
    "description": "그리기 개체 그림자를 오른쪽으로 이동시킨다. 그 림자가 없으면 생성한다.",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowMoveUp",
    "description": "그리기 개체 그림자를 위로 이동시킨다. 그림자가 없으면 생성한다.",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowNarrow",
    "description": "그리기 개체 그림자를 작은 형태로 변경. 그림자가 없으면 생성한다.",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowParellelLeft",
    "description": "그리기 개체 그림자를 원본 개체와 동일한 크기로",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "Bottom",
    "description": "왼쪽하단에 생성한다.",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShadowParellelLeft",
    "description": "그리기 개체 그림자를 원본 개체와 동일한 크기로",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "Top",
    "description": "왼쪽상단에 생성한다.",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShadowParellelRigh",
    "description": "그리기 개체 그림자를 원본 개체와 동일한 크기로",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "tBottom",
    "description": "오른쪽하단에 생성한다.",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShadowParellelRigh",
    "description": "그리기 개체 그림자를 원본 개체와 동일한 크기로",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "tTop",
    "description": "오른쪽상단에 생성한다.",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShadowShearLeftBot",
    "description": "그리기 개체 그림자를 왼쪽 뒷부분으로 눕혀서 생",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "tom",
    "description": "성한다.",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShadowShearLeftTop",
    "description": "그리기 개체 그림자를 왼쪽 앞부분으로 눕혀서 생 성한다.",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ShapeObjShadowShearRightBo",
    "description": "그리기 개체 그림자를 오른쪽 뒷부분으로 눕혀서",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "ttom",
    "description": "생성한다.",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShadowShearRightTo",
    "description": "그리기 개체 그림자를 오른쪽 앞부분으로 눕혀서",
    "sourcePage": 39,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "p",
    "description": "생성한다.",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShear",
    "description": "그리기 개체 기울이기",
    "sourcePage": 39,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ShapeObjShowGuideLine",
    "description": "그리기 개체 안내선",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjShowGuideLineBase",
    "description": "그리기 안내선 한/글 2024 부터 지원",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjTableSelCell",
    "description": "테이블 선택상태에서 첫 번째 셀 선택하기",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjTextBoxEdit",
    "description": "글상자 선택상태에서 편집모드로 들어가기",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjToggleTextBox",
    "description": "도형 글 상자로 만들기- Toggle",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjUngroup",
    "description": "틀 풀기",
    "sourcePage": 39
  },
  {
    "id": "ShapeObjUnlockAll",
    "description": "개체 Unlock All",
    "sourcePage": 40
  },
  {
    "id": "ShapeObjVertFlip",
    "description": "그리기 개체 상하 뒤집기",
    "sourcePage": 40
  },
  {
    "id": "ShapeObjVertFlipOrgState",
    "description": "그리기 개체 상하 뒤집기 원상태로 되돌리기",
    "sourcePage": 40
  },
  {
    "id": "ShapeObjWrapSquare",
    "description": "직사각형",
    "sourcePage": 40
  },
  {
    "id": "ShapeObjWrapTopAndBottom",
    "description": "자리 차지",
    "sourcePage": 40
  },
  {
    "id": "ShowLineNumbers",
    "description": "줄 번호 넣기",
    "sourcePage": 40,
    "parameterSetId": "SecDef"
  },
  {
    "id": "Soft Keyboard",
    "description": "보기",
    "sourcePage": 40
  },
  {
    "id": "Sort",
    "description": "소트",
    "sourcePage": 40,
    "parameterSetId": "Sort"
  },
  {
    "id": "SpellingCheck",
    "description": "맞춤법",
    "sourcePage": 40
  },
  {
    "id": "SplitMemoOpen",
    "description": "메모창 열기",
    "sourcePage": 40
  },
  {
    "id": "Style",
    "description": "스타일 (글2005이하버전)",
    "sourcePage": 40,
    "parameterSetId": "Style"
  },
  {
    "id": "StyleAdd",
    "description": "스타일 추가(글2007, 스타일 대화상자를 띄움)",
    "sourcePage": 40,
    "parameterSetId": "Style"
  },
  {
    "id": "StyleChangeToCurrentShape",
    "description": "스타일 현재 모양으로 바꾸기",
    "sourcePage": 40,
    "parameterSetId": "StyleItem"
  },
  {
    "id": "StyleClearCharStyle",
    "description": "글자 스타일 해제",
    "sourcePage": 40
  },
  {
    "id": "StyleDelete",
    "description": "스타일 제거",
    "sourcePage": 40,
    "parameterSetId": "StyleDelete"
  },
  {
    "id": "StyleEdit",
    "description": "스타일 편집",
    "sourcePage": 40,
    "parameterSetId": "Style"
  },
  {
    "id": "StyleEx",
    "description": "스타일 (글2007)",
    "sourcePage": 40,
    "parameterSetId": "Style"
  },
  {
    "id": "StyleParaNumberBullet",
    "description": "문단번호/글머리표",
    "sourcePage": 40,
    "parameterSetId": "ParaShape"
  },
  {
    "id": "StyleShortcut1",
    "description": "스타일 단축키<Ctrl + 1>",
    "sourcePage": 40
  },
  {
    "id": "StyleShortcut10",
    "description": "스타일 단축키<Ctrl + 0>",
    "sourcePage": 40
  },
  {
    "id": "StyleShortcut2",
    "description": "스타일 단축키<Ctrl + 2>",
    "sourcePage": 40
  },
  {
    "id": "StyleShortcut3",
    "description": "스타일 단축키<Ctrl + 3>",
    "sourcePage": 40
  },
  {
    "id": "StyleShortcut4",
    "description": "스타일 단축키<Ctrl + 4>",
    "sourcePage": 40
  },
  {
    "id": "StyleShortcut5",
    "description": "스타일 단축키<Ctrl + 5>",
    "sourcePage": 40
  },
  {
    "id": "StyleShortcut6",
    "description": "스타일 단축키<Ctrl + 6>",
    "sourcePage": 40
  },
  {
    "id": "StyleShortcut7",
    "description": "스타일 단축키<Ctrl + 7>",
    "sourcePage": 41
  },
  {
    "id": "StyleShortcut8",
    "description": "스타일 단축키<Ctrl + 8>",
    "sourcePage": 41
  },
  {
    "id": "StyleShortcut9",
    "description": "스타일 단축키<Ctrl + 9>",
    "sourcePage": 41
  },
  {
    "id": "StyleTemplate",
    "description": "스타일 마당",
    "sourcePage": 41,
    "parameterSetId": "StyleTemplate"
  },
  {
    "id": "Sum",
    "description": "블록 합계",
    "sourcePage": 41,
    "parameterSetId": "Sum"
  },
  {
    "id": "SuppressLineNumbers",
    "description": "줄 번호 넣기",
    "sourcePage": 41
  },
  {
    "id": "TableAppendRow",
    "description": "줄 추가",
    "sourcePage": 41
  },
  {
    "id": "TableAutoDrawPenStyleWidth",
    "description": "표 그리기 선 모양",
    "sourcePage": 41,
    "parameterSetId": "TableDrawPen"
  },
  {
    "id": "TableAutoFill",
    "description": "자동 채우기",
    "sourcePage": 41,
    "parameterSetId": "AutoFill",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "TableAutoFillDlg",
    "description": "자동 채우기",
    "sourcePage": 41,
    "parameterSetId": "AutoFill",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "TableBreak",
    "description": "표 쪽 경계에서(나누지 않음)",
    "sourcePage": 41,
    "parameterSetId": "Table"
  },
  {
    "id": "TableBreakCell",
    "description": "표 쪽 경계에서(나눔)",
    "sourcePage": 41,
    "parameterSetId": "Table"
  },
  {
    "id": "TableBreakNone",
    "description": "표 쪽 경계에서(셀 단위로 나눔)",
    "sourcePage": 41,
    "parameterSetId": "Table"
  },
  {
    "id": "TableCaptionPosBottom",
    "description": "테이블 캡션 위치-아래",
    "sourcePage": 41,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableCaptionPosLeftBottom",
    "description": "테이블 캡션 위치–윈쪽 아래",
    "sourcePage": 41,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableCaptionPosLeftCenter",
    "description": "테이블 캡션 위치–왼쪽 가운데",
    "sourcePage": 41,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableCaptionPosLeftTop",
    "description": "테이블 캡션 위치–왼쪽 위",
    "sourcePage": 41,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableCaptionPosRightBottom",
    "description": "테이블 캡션 위치–오른쪽 아래",
    "sourcePage": 41,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableCaptionPosRightCenter",
    "description": "테이블 캡션 위치–오른쪽 가운데",
    "sourcePage": 41,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableCaptionPosRightTop",
    "description": "테이블 캡션 위치–오른쪽 위",
    "sourcePage": 41,
    "parameterSetId": "ShpaeObject"
  },
  {
    "id": "TableCaptionPosTop",
    "description": "테이블 캡션 위치-위",
    "sourcePage": 41,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableCellAlignCenterBottom",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 41
  },
  {
    "id": "TableCellAlignCenterCenter",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 41
  },
  {
    "id": "TableCellAlignCenterTop",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 41
  },
  {
    "id": "TableCellAlignLeftBottom",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 42
  },
  {
    "id": "TableCellAlignLeftCenter",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 42
  },
  {
    "id": "TableCellAlignLeftTop",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 42
  },
  {
    "id": "TableCellAlignRightBottom",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 42
  },
  {
    "id": "TableCellAlignRightCenter",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 42
  },
  {
    "id": "TableCellAlignRightTop",
    "description": "para align + cell valign :테이블의 셀 내에 서만 동작함.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBlock",
    "description": "셀 블록",
    "sourcePage": 42
  },
  {
    "id": "TableCellBlockCol",
    "description": "셀 블록 (칸)",
    "sourcePage": 42
  },
  {
    "id": "TableCellBlockExtend",
    "description": "셀 블록 연장(F5 + F5)",
    "sourcePage": 42
  },
  {
    "id": "TableCellBlockExtendAbs",
    "description": "셀 블록 연장(SHIFT + F5)",
    "sourcePage": 42
  },
  {
    "id": "TableCellBlockRow",
    "description": "셀 블록(줄)",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderAll",
    "description": "모든 셀 테두리 toggle(있음/없음). 셀 블록 상 태일 경우에만 동작한다.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderBottom",
    "description": "가장 아래 셀 테두리 toggle(있음/없음). 셀 블 록 상태일 경우에만 동작한다.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderDiagonalDow",
    "description": "대각선(⍂) 셀 테두리 toggle(있음/없음). 셀",
    "sourcePage": 42
  },
  {
    "id": "n",
    "description": "블록 상태일 경우에만 동작한다.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderDiagonalUp",
    "description": "대각선(⍁) 셀 테두리 toggle(있음/없음). 셀 블록 상태일 경우에만 동작한다.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderInside",
    "description": "모든 안쪽 셀 테두리 toggle(있음/없음). 셀 블 록 상태일 경우에만 동작한다.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderInsideHorz",
    "description": "모든 안쪽 가로 셀 테두리 toggle(있음/없음). 셀 블록 상태일 경우에만 동작한다.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderInsideVert",
    "description": "모든 안쪽 세로 셀 테두리 toggle(있음/없음). 셀 블록 상태일 경우에만 동작한다.",
    "sourcePage": 42
  },
  {
    "id": "TableCellBorderLeft",
    "description": "가장 왼쪽의 셀 테두리 toggle(있음/없음) 셀 블 록 상태일 경우에만 동작한다.",
    "sourcePage": 43
  },
  {
    "id": "TableCellBorderNo",
    "description": "모든 셀 테두리 지움. 셀 블록 상태일 경우에만 동 작한다.",
    "sourcePage": 43
  },
  {
    "id": "TableCellBorderOutside",
    "description": "바깥 셀 테두리 toggle(있음/없음) 셀 블록 상태 일 경우에만 동작한다.",
    "sourcePage": 43
  },
  {
    "id": "TableCellBorderRight",
    "description": "가장 오른쪽의 셀 테두리 toggle(있음/없음) 셀 블록 상태일 경우에만 동작한다.",
    "sourcePage": 43
  },
  {
    "id": "TableCellBorderTop",
    "description": "가장 위의 셀 테두리 toggle(있음/없음) 셀 블록 상태일 경우에만 동작한다.",
    "sourcePage": 43
  },
  {
    "id": "TableCellShadeDec",
    "description": "셀 배경의 음영을 낮춘다.(결과적으로 밝아진다)",
    "sourcePage": 43,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "TableCellShadeInc",
    "description": "셀 배경의 음영을 높인다.(결과적으로 어두워진 다)",
    "sourcePage": 43,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "TableCellTextHorz",
    "description": "셀 문자 방향–가로 쓰기",
    "sourcePage": 43,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "TableCellTextVert",
    "description": "셀 음영 없음",
    "sourcePage": 43,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "TableCellTextVertAll",
    "description": "셀 문자 방향–세로 쓰기–영문 세움",
    "sourcePage": 43,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "TableCellToggleDirection",
    "description": "표 문자 방향- toggle",
    "sourcePage": 43,
    "parameterSetId": "CellBorderFill"
  },
  {
    "id": "TableColBegin",
    "description": "셀 이동: 열 시작",
    "sourcePage": 43
  },
  {
    "id": "TableColEnd",
    "description": "셀 이동: 열 끝",
    "sourcePage": 43
  },
  {
    "id": "TableColPageDown",
    "description": "셀 이동: 페이지다운",
    "sourcePage": 43
  },
  {
    "id": "TableColPageUp",
    "description": "셀 이동: 페이지 업",
    "sourcePage": 43
  },
  {
    "id": "TableCreate",
    "description": "표 만들기",
    "sourcePage": 43,
    "parameterSetId": "TableCreation"
  },
  {
    "id": "TableDeleteCell",
    "description": "셀 삭제",
    "sourcePage": 43
  },
  {
    "id": "TableDeleteColumn",
    "description": "칸 지우기",
    "sourcePage": 43,
    "parameterSetId": "TableDeleteLine"
  },
  {
    "id": "TableDeleteComma",
    "description": "세자리마다 자리점 빼기",
    "sourcePage": 43
  },
  {
    "id": "TableDeleteRow",
    "description": "줄-칸 지우기",
    "sourcePage": 43,
    "parameterSetId": "TableDeleteLine"
  },
  {
    "id": "TableDeleteRowColumn",
    "description": "줄-칸 지우기",
    "sourcePage": 43,
    "parameterSetId": "TableDeleteLine"
  },
  {
    "id": "TableDistributeCellHeight",
    "description": "셀 높이를 같게",
    "sourcePage": 43
  },
  {
    "id": "TableDistributeCellWidth",
    "description": "셀 너비를 같게",
    "sourcePage": 43
  },
  {
    "id": "TableDrawPen",
    "description": "표 그리기",
    "sourcePage": 44
  },
  {
    "id": "TableEraser",
    "description": "표 지우개",
    "sourcePage": 44
  },
  {
    "id": "TableFormula",
    "description": "계산식",
    "sourcePage": 44,
    "parameterSetId": "FieldCtrl"
  },
  {
    "id": "TableFormulaAvgAuto",
    "description": "블록 평균",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaAvgHor",
    "description": "가로 평균",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaAvgVer",
    "description": "세로 평균",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaProAuto",
    "description": "블록 곱",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaProHor",
    "description": "가로 곱",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaProVer",
    "description": "세로 곱",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaSumAuto",
    "description": "블록 합계",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaSumHor",
    "description": "가로 합계",
    "sourcePage": 44
  },
  {
    "id": "TableFormulaSumVer",
    "description": "세로 합계",
    "sourcePage": 44
  },
  {
    "id": "TableInsertComma",
    "description": "세자리마다 자리점 넣기",
    "sourcePage": 44
  },
  {
    "id": "TableInsertLeftColumn",
    "description": "왼쪽 칸 삽입",
    "sourcePage": 44,
    "parameterSetId": "TableInsertLine"
  },
  {
    "id": "TableInsertLowerRow",
    "description": "아래쪽 줄 삽입",
    "sourcePage": 44,
    "parameterSetId": "TableInsertLine"
  },
  {
    "id": "TableInsertRightColumn",
    "description": "오른쪽 칸 삽입",
    "sourcePage": 44,
    "parameterSetId": "TableInsertLine"
  },
  {
    "id": "TableInsertRowColumn",
    "description": "줄-칸 삽입",
    "sourcePage": 44,
    "parameterSetId": "TableInsertLine"
  },
  {
    "id": "TableInsertUpperRow",
    "description": "위쪽 줄 삽입",
    "sourcePage": 44,
    "parameterSetId": "TableInsertLine"
  },
  {
    "id": "TableLeftCell",
    "description": "셀 이동: 셀 왼쪽",
    "sourcePage": 44
  },
  {
    "id": "TableLowerCell",
    "description": "셀 이동: 셀 아래",
    "sourcePage": 44
  },
  {
    "id": "TableMergeCell",
    "description": "셀 합치기",
    "sourcePage": 44
  },
  {
    "id": "TableMergeTable",
    "description": "표 붙이기",
    "sourcePage": 44
  },
  {
    "id": "TablePropertyDialog",
    "description": "표 고치기",
    "sourcePage": 44,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableResizeCellDown",
    "description": "셀 크기 변경: 셀 아래",
    "sourcePage": 44
  },
  {
    "id": "TableResizeCellLeft",
    "description": "셀 크기 변경: 셀 왼쪽",
    "sourcePage": 44
  },
  {
    "id": "TableResizeCellRight",
    "description": "셀 크기 변경: 셀 오른쪽",
    "sourcePage": 44
  },
  {
    "id": "TableResizeCellUp",
    "description": "셀 크기 변경: 셀 위",
    "sourcePage": 45
  },
  {
    "id": "TableResizeDown",
    "description": "셀 크기 변경 셀 크기 변경: 셀 아래",
    "sourcePage": 45
  },
  {
    "id": "TableResizeExDown",
    "description": "TebleResizeDown과 다른 점은 셀 블록 상태가 아니어도 동작한다는 점이다. 셀 크기 변경: 셀 왼쪽",
    "sourcePage": 45
  },
  {
    "id": "TableResizeExLeft",
    "description": "TebleResizeLeft와 다른 점은 셀 블록 상태가 아니어도 동작한다는 점이다. 셀 크기 변경: 셀 오른쪽",
    "sourcePage": 45
  },
  {
    "id": "TableResizeExRight",
    "description": "TebleResizeRight와 다른 점은 셀 블록 상태가 아니어도 동작한다는 점이다. 셀 크기 변경: 셀 위",
    "sourcePage": 45
  },
  {
    "id": "TableResizeExUp",
    "description": "TebleResizeUp과 다른 점은 셀 블록 상태가 아 니어도 동작한다는 점이다.",
    "sourcePage": 45
  },
  {
    "id": "TableResizeLeft",
    "description": "셀 크기 변경",
    "sourcePage": 45
  },
  {
    "id": "TableResizeLineDown",
    "description": "셀 크기 변경: 선아래",
    "sourcePage": 45
  },
  {
    "id": "TableResizeLineLeft",
    "description": "셀 크기 변경: 선 왼쪽",
    "sourcePage": 45
  },
  {
    "id": "TableResizeLineRight",
    "description": "셀 크기 변경: 선 오른쪽",
    "sourcePage": 45
  },
  {
    "id": "TableResizeLineUp",
    "description": "셀 크기 변경: 선 위",
    "sourcePage": 45
  },
  {
    "id": "TableResizeRight",
    "description": "셀 크기 변경",
    "sourcePage": 45
  },
  {
    "id": "TableResizeUp",
    "description": "셀 크기 변경",
    "sourcePage": 45
  },
  {
    "id": "TableRightCell",
    "description": "셀 이동: 셀 오른쪽",
    "sourcePage": 45
  },
  {
    "id": "TableRightCellAppend",
    "description": "셀 이동: 셀 오른쪽에 이어서",
    "sourcePage": 45
  },
  {
    "id": "TableSplitCell",
    "description": "셀 나누기",
    "sourcePage": 45,
    "parameterSetId": "TableSplitCell"
  },
  {
    "id": "TableSplitCellCol2",
    "description": "셀 칸 나누기",
    "sourcePage": 45,
    "parameterSetId": "TableSplitCell"
  },
  {
    "id": "TableSplitCellRow2",
    "description": "셀 줄 나누기",
    "sourcePage": 45,
    "parameterSetId": "TableSplitCell"
  },
  {
    "id": "TableSplitTable",
    "description": "표 나누기",
    "sourcePage": 45
  },
  {
    "id": "TableStringToTable",
    "description": "문자열을 표로",
    "sourcePage": 45,
    "parameterSetId": "TableStrToTbl"
  },
  {
    "id": "TableSubtractRow",
    "description": "표 줄 삭제",
    "sourcePage": 45,
    "parameterSetId": "TableDeleteLine"
  },
  {
    "id": "TableSwap",
    "description": "표 뒤집기",
    "sourcePage": 46,
    "parameterSetId": "TableSwap"
  },
  {
    "id": "TableTableToString",
    "description": "표를 문자열로",
    "sourcePage": 46,
    "parameterSetId": "TableTblToStr"
  },
  {
    "id": "TableTemplate",
    "description": "표 마당",
    "sourcePage": 46,
    "parameterSetId": "TableTemplate"
  },
  {
    "id": "TableTreatAsChar",
    "description": "표 글자처럼 취급",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TableUpperCell",
    "description": "셀 이동: 셀 위",
    "sourcePage": 46
  },
  {
    "id": "TableVAlignBottom",
    "description": "셀 세로정렬 아래",
    "sourcePage": 46
  },
  {
    "id": "TableVAlignCenter",
    "description": "셀 세로정렬 가운데",
    "sourcePage": 46
  },
  {
    "id": "TableVAlignTop",
    "description": "셀 세로정렬 위",
    "sourcePage": 46
  },
  {
    "id": "TextArtCreate",
    "description": "글맵시",
    "sourcePage": 46,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "TextArtModify",
    "description": "글맵시 고치기",
    "sourcePage": 46,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "TextArtShadow",
    "description": "글맵시 그림자 넣기/빼기",
    "sourcePage": 46,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "TextArtShadowMobeToDown",
    "description": "글맵시 그림자 위치 이동-아래로",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextArtShadowMobeToLeft",
    "description": "글맵시 그림자 위치 이동-왼쪽으로",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextArtShadowMobeToRight",
    "description": "글맵시 그림자 위치 이동-오른쪽으로",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextArtShadowMoveToUp",
    "description": "글맵시 그림자 위치 이동-위로",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignCenterBottom",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignCenterCenter",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignCenterTop",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignLeftBottom",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignLeftCenter",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignLeftTop",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignRightBottom",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignRightCenter",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxAlignRightTop",
    "description": "글상자 정렬",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxTextHorz",
    "description": "글상자 문자 방향–가로 쓰기",
    "sourcePage": 46,
    "parameterSetId": "ShpaeObject"
  },
  {
    "id": "TextBoxTextVert",
    "description": "글상자 문자 방향–세로 쓰기–영문 눕힘",
    "sourcePage": 46,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxTextVertAll",
    "description": "글상자 문자 방향–세로 쓰기–영문 세움",
    "sourcePage": 47,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxToggleDirection",
    "description": "글상자 문자 방향–세로/가로 토글",
    "sourcePage": 47,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxVAlignBottom",
    "description": "글상자 세로 정렬-아래",
    "sourcePage": 47,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxVAlignCenter",
    "description": "글상자 세로 정렬-가운데",
    "sourcePage": 47,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "TextBoxVAlignTop",
    "description": "글상자 세로 정렬-위",
    "sourcePage": 47,
    "parameterSetId": "ShapeObject"
  },
  {
    "id": "ToggleOverwrite",
    "description": "Toggle Overwrite",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeApply",
    "description": "변경추적:변경내용 적용",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeApplyAll",
    "description": "변경추적:문서에서 변경내용 모두 적용",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeApplyNext",
    "description": "변경추적:적용 후 다음으로 이동",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeApplyPrev",
    "description": "변경추적:적용 후 이전으로 이동",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeApplyViewAll",
    "description": "변경추적:표시된 변경내용 모두 적용",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeAuthor",
    "description": "변경추적:사용자 이름 변경",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeCancel",
    "description": "변경추적:변경내용 취소",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeCancelAll",
    "description": "변경추적:문서에서 변경내용 모두 취소",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeCancelNext",
    "description": "변경추적:취소 후 다음으로 이동",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeCancelPrev",
    "description": "변경추적:취소 후 이전으로 이동",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeCancelViewAll",
    "description": "변경추적:표시된 변경내용 모두 취소",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeNext",
    "description": "변경추적:다음 변경내용",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeOption",
    "description": "변경추적:변경 내용 추적 설정",
    "sourcePage": 47,
    "parameterSetId": "TrackChange"
  },
  {
    "id": "TrackChangePrev",
    "description": "변경추적:이전 변경내용",
    "sourcePage": 47
  },
  {
    "id": "TrackChangeProtection",
    "description": "변경추적:변경추적 보호",
    "sourcePage": 47,
    "parameterSetId": "Password"
  },
  {
    "id": "Undo",
    "description": "되살리기",
    "sourcePage": 47
  },
  {
    "id": "UnlinkTextBox",
    "description": "글상자 연결 끊기",
    "sourcePage": 47
  },
  {
    "id": "UserAutoFill",
    "description": "자동 채우기(TableAutoFill, TableAutoFillDlg와 동일)",
    "sourcePage": 47,
    "parameterSetId": "AutoFill",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "VersionDelete",
    "description": "버전정보 지우기",
    "sourcePage": 47,
    "parameterSetId": "VersionInfo",
    "notes": "Action table marks this ParameterSet ID with an asterisk."
  },
  {
    "id": "VersionDeleteAll",
    "description": "모든 버전정보 지우기",
    "sourcePage": 48
  },
  {
    "id": "VersionInfo",
    "description": "버전 정보",
    "sourcePage": 48,
    "parameterSetId": "VersionInfo"
  },
  {
    "id": "VersionSave",
    "description": "버전 저장하기",
    "sourcePage": 48,
    "parameterSetId": "VersionInfo"
  },
  {
    "id": "VerticalText",
    "description": "세로쓰기",
    "sourcePage": 48,
    "parameterSetId": "TextVertical"
  },
  {
    "id": "ViewGridOption",
    "description": "격자",
    "sourcePage": 48,
    "parameterSetId": "GridInfo"
  },
  {
    "id": "ViewIdiom",
    "description": "상용구 보기",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionColor",
    "description": "컬러로 보기 (회색조 보기 되돌리기 액션)",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionColorCustom",
    "description": "사용자색 보기",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionColorCustomOptio",
    "description": "사용자색 설정",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionCtrlMark",
    "description": "조판 부호",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionGray",
    "description": "회색조 보기",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionGuideLine",
    "description": "안내선",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionMemo",
    "description": "메모 보이기/숨기기([보기-메모-메모 보이기/숨 기기]메뉴와 동일)",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionMemoGuideline",
    "description": "메모 안내선 표시([보기-메모-메모 안내선 표시] 메뉴와 동일)",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionPaper",
    "description": "쪽 윤곽 보기",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionParaMark",
    "description": "문단 부호",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionPicture",
    "description": "그림 보이기/숨기기([보기-그림]메뉴와 동일)",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionPronounce",
    "description": "한자/일어 발음 표시 (Toggle)",
    "sourcePage": 48,
    "parameterSetId": "PronounceInfo"
  },
  {
    "id": "ViewOptionPronounceSetting",
    "description": "한자/일어 발음 표시 설정",
    "sourcePage": 48,
    "parameterSetId": "PronounceInfo"
  },
  {
    "id": "ViewOptionRevision",
    "description": "교정부호 보이기/숨기기([보기-교정부호]메뉴와 동일)",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionTrackChange",
    "description": "변경추적 보기",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionTrackChangeFinal",
    "description": "변경추적 보기:최종본 보기",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionTrackChangeFinal",
    "description": "변경추적 보기:메모 및 변경 내용 최종본",
    "sourcePage": 48
  },
  {
    "id": "ViewOptionTrackChangeInlin",
    "description": "변경추적 보기:안내문에 표시",
    "sourcePage": 49
  },
  {
    "id": "ViewOptionTrackChangeInser",
    "description": "변경추적 보기:삽입 및 삭제",
    "sourcePage": 49
  },
  {
    "id": "ViewOptionTrackChangeOrigi",
    "description": "변경추적 보기:원본 보기",
    "sourcePage": 49
  },
  {
    "id": "ViewOptionTrackChangeOrigi",
    "description": "변경추적 보기:메모 및 변경 내용 원본",
    "sourcePage": 49
  },
  {
    "id": "ViewOptionTrackChangeShape",
    "description": "변경추적 보기:서식",
    "sourcePage": 49
  },
  {
    "id": "ViewOptionTrackChnageInfo",
    "description": "변경추적 보기:변경 내용 보기",
    "sourcePage": 49
  },
  {
    "id": "ViewShowGrid",
    "description": "격자 보이기",
    "sourcePage": 49,
    "parameterSetId": "GridInfo"
  },
  {
    "id": "ViewZoom",
    "description": "화면 확대(Ribbon)",
    "sourcePage": 49,
    "parameterSetId": "ViewProperties"
  },
  {
    "id": "ViewZoomFitPage",
    "description": "화면 확대: 페이지에 맞춤",
    "sourcePage": 49,
    "parameterSetId": "ViewProperties"
  },
  {
    "id": "ViewZoomFitWidth",
    "description": "화면 확대: 폭에 맞춤",
    "sourcePage": 49,
    "parameterSetId": "ViewProperties"
  },
  {
    "id": "ViewZoomLock",
    "description": "화면 잠금",
    "sourcePage": 49
  },
  {
    "id": "ViewZoomNormal",
    "description": "화면 확대: 정상",
    "sourcePage": 49,
    "parameterSetId": "ViewProperties"
  },
  {
    "id": "VoiceCommand Config",
    "description": "음성 명령 설정",
    "sourcePage": 49
  },
  {
    "id": "VoiceCommand Resume",
    "description": "음성 명령 레코딩 시작",
    "sourcePage": 49
  },
  {
    "id": "VoiceCommand Stop",
    "description": "음성 명령 레코딩 중지",
    "sourcePage": 49
  },
  {
    "id": "VoiceCommand View",
    "description": "음성 명령창 보이기",
    "sourcePage": 49,
    "notes": "Action table marks ParameterSet ID as +."
  },
  {
    "id": "VoiceCommand",
    "description": "음성 명령 동작 var dact = pHwpCtrl.CreateAction(\"FileSetSecurity\"); var dset = null; if (dact) dset = dact.CreateSet(); if (dact && dset) { dact.GetDefault(dset); dset.SetItem(\"Password\", HwpControl.password.value); dset.SetItem(\"NoPrint\", HwpControl.NoPrint.checked); dset.SetItem(\"NoCopy\", HwpControl.NoCopy.checked); if (!dact.Execute(dset)) { var msg = \"배포용 문서 만들기 실패\"; if (dset.Item(\"Password\").length <= 6) { msg += \"\\n암호가 너무 짧습니다.\"; HwpControl.password.focus(); alert(msg); return; } alert(msg); } } else { var msg = \"배포용 문서 만들기 실패\"; if (pHwpCtrl.EditMode & 0x10) // 배포용 문서는 0x10 flag 를 포함한다. msg += \"\\n이미 배포용 문서로 지정된 상태입니다.\\n암호를 변경하기 위해서는 먼저 일반 문서로 변경하십시오.\" else if (pHwpCtrl.EditMode == 0) msg += \"\\n읽기 전용 문서입니다.\" alert(msg); } pHwpCtrl.focus(); pHwpCtrl.MovePos(3); // 커서를 문서의 맨 뒤로 이동 var act = pHwpCtrl.CreateAction(\"BackwardFind\"); // 뒤에서부터 찾는다. var set = act.CreateSet(); act.GetDefault(set); set.SetItem(\"IgnoreFindString\", 1); var subset = set.CreateItemSet(\"FindCharShape\", \"CharShape\"); subset.SetItem(\"UnderlineType\", 1); act.Execute(set); var set; var list, para, pos; set = pHwpCtrl.GetPosBySet(); list = set.Item(\"List\"); para = set.Item(\"Para\"); pos = set.Item(\"Pos\"); // 현재줄의 맨 앞으로 커서를 옮긴후 한단어를 블럭지정한다. pHwpCtrl.Run(\"MoveLineBegin\"); pHwpCtrl.Run(\"Select\"); pHwpCtrl.Run(\"MoveSelNextWord\"); // 블럭 지정된 단어의 글자 속성을 변경한다. var dAct = pHwpCtrl.CreateAction(\"CharShape\"); var dSet = dAct.CreateSet(); dAct.GetDefault(dSet); dSet.SetItem(\"TextColor\", 0xFF0000); // 글자 색을 파란색으로 dAct.Execute(dSet); pHwpCtrl.Run(\"Cancel\"); // 문서의 맨 처음에서 끝까지 돌면서 각 줄의 맨 처음 단어의 글자속성을 변경한다. pHwpCtrl.MovePos(2); // 페이지 맨 처음으로 var con = true; while (con) { OnTestApi1(); // 현재줄의 맨 처음 단어 색깔 변경 con = pHwpCtrl.MovePos(20); // 한줄 아래로 (예전 API 매뉴얼에는 21로 되어 있으나 잘못된 값임. // 한줄 위/아래로가 서로 값이 바뀌었음) }",
    "sourcePage": 49,
    "notes": "Action table marks ParameterSet ID as +."
  }
];

export const parameterSetDefinitions: readonly ParameterSetDefinition[] = [
  {
    "id": "ActionCrossRef",
    "description": "상호참조 삽입",
    "sourcePage": 1,
    "items": [
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "※command string 참조"
      }
    ]
  },
  {
    "id": "AutoFill",
    "description": "자동 채우기",
    "sourcePage": 2,
    "items": [
      {
        "id": "AutoFillSection",
        "type": "PIT_UI",
        "description": "자동 채우기 섹션 : 0 = 기본, 1 = 사용자 정의"
      },
      {
        "id": "AutoFillItem",
        "type": "PIT_UI",
        "description": "섹션의 아이템 인덱스 : 0 ~"
      }
    ]
  },
  {
    "id": "AutoNum",
    "description": "번호 넣기",
    "sourcePage": 3,
    "items": [
      {
        "id": "NumType",
        "type": "PIT_UI1",
        "description": "2 = 미주 번호 3 = 그림 번호 4 = 표 번호 5 = 수식 번호"
      },
      {
        "id": "NewNumber",
        "type": "PIT_UI2",
        "description": "새 시작 번호 (1 .. n)"
      },
      {
        "id": "NumFormat",
        "type": "PIT_UI2",
        "description": "번호 모양"
      }
    ]
  },
  {
    "id": "BookMark",
    "description": "책갈피",
    "sourcePage": 4,
    "items": [
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "책갈피 이름"
      },
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "책갈피 종류 : 0 = 일반 책갈피, 1 = 블록 책갈피"
      },
      {
        "id": "Command",
        "type": "PIT_UI",
        "description": "책갈피 명령의 종류 : 0 = 책갈피 생성, 1 = 책갈피로 이동, 2 = 책갈피 수정"
      }
    ]
  },
  {
    "id": "BorderFill",
    "description": "테두리/배경의 일반 속성",
    "sourcePage": 5,
    "items": [
      {
        "id": "BorderTypeLeft",
        "type": "PIT_UI2",
        "description": "4방향 테두리 종류 : 왼쪽 [선 종류]"
      },
      {
        "id": "BorderTypeRight",
        "type": "PIT_UI2",
        "description": "4방향 테두리 종류 : 오른쪽"
      },
      {
        "id": "BorderTypeTop",
        "type": "PIT_UI2",
        "description": "4방향 테두리 종류 : 위"
      },
      {
        "id": "BorderTypeBottom",
        "type": "PIT_UI2",
        "description": "4방향 테두리 종류 : 아래"
      },
      {
        "id": "BorderWidthLeft",
        "type": "PIT_UI1",
        "description": "4방향 테두리 두께 : 왼쪽 [선 종류]"
      },
      {
        "id": "BorderWidthRight",
        "type": "PIT_UI1",
        "description": "4방향 테두리 두께 : 오른쪽"
      },
      {
        "id": "BorderWidthTop",
        "type": "PIT_UI1",
        "description": "4방향 테두리 두께 : 위"
      },
      {
        "id": "BorderWidthBottom",
        "type": "PIT_UI1",
        "description": "4방향 테두리 두께 : 아래"
      },
      {
        "id": "BorderCorlorLeft",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔 : 왼쪽 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "BorderColorRight",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔 : 오른쪽 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "BorderColorTop",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔 : 위 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "BorderColorBottom",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔 :아래 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR) 슬래쉬 대각선 플래그 : 비트 플래그의 조합으로 표현되며 각 위치의 비트는 다음을 나타낸 다."
      },
      {
        "id": "SlashFlag",
        "type": "PIT_UI2",
        "description": "0 = 하단 대각선 bit 1 = 중앙 대각선 bit 2 = 상단 대각선 더 자세한 내용은 하단의 ※ 대각선의 형태를 참고한다. 백슬래쉬 대각선 플래그 : 비트 플래그의 조합으로 표현되며 각 위치의 비트는 다음을 나타낸 다.",
        "subType": "bit"
      },
      {
        "id": "BackSlashFlag",
        "type": "PIT_UI2",
        "description": "0 = 하단 대각선 bit 1 = 중앙 대각선 bit 2 = 상단 대각선 더 자세한 내용은 하단의 ※ 대각선의 형태를 참고한다.",
        "subType": "bit"
      },
      {
        "id": "DiagonalType",
        "type": "PIT_UI2",
        "description": "선 종류 셀에서는 대각선, 표에서는 자동으로 나눠진 경계선에서 사용"
      },
      {
        "id": "DiagonalWidth",
        "type": "PIT_UI1",
        "description": "선 종류 셀에서는 대각선, 표에서는 자동으로 나눠진 경계선에서 사용 선 색상"
      },
      {
        "id": "DiagonalColor",
        "type": "PIT_UI4",
        "description": "color를 나타내기 위한 32비트 값 (0x00BBGGRR) 셀에서는 대각선, 표에서는 자동으로 나눠진 경계선에서 사용",
        "subType": "RGB"
      },
      {
        "id": "BorderFill3D",
        "type": "PIT_UI1",
        "description": "3차원 효과 : 0 = off, 1 = on"
      },
      {
        "id": "Shadow",
        "type": "PIT_UI1",
        "description": "그림자 효과 : 0 = off, 1 = on"
      },
      {
        "id": "FillAttr",
        "type": "PIT_SET",
        "description": "배경 채우기 속성",
        "subType": "DrawFillAttr"
      },
      {
        "id": "CrookedSlashFlag",
        "type": "PIT_UI2",
        "description": "꺾인 대각선 플래그 (bit 0, 1이 각각 slash, back slash의 가 운데 대각선이 꺾인 대각선임을 나타낸다.)"
      },
      {
        "id": "BreakCellSeparateLine",
        "type": "PIT_UI1",
        "description": "자동으로 나뉜 표의 경계선 설정 : 0 = 경계선 설정을 기본 값에 따름, 1 = 사용자가 경계선 설정 음영 비율 증가/감소."
      },
      {
        "id": "ShadeFaceColorIncDec",
        "type": "PIT_UI1",
        "description": "음영 비율 증가/감소 엑션에서 전달 됨. 구현용으로만 쓰임. 이 아이템이 없으면(음영 비율 증가/감소는 없는 것이고 있다면 값 이 TRUE이면 증가, FALSE이면 감소이다.)"
      },
      {
        "id": "CounterSlashFlag",
        "type": "PIT_UI1",
        "description": "슬래쉬 대각선의 역방향 플래그(우상향 대각선) : 0 = 순방향, 1 = 역방향"
      },
      {
        "id": "CounterBackSlashFlag",
        "type": "PIT_UI1",
        "description": "역슬래쉬 대각선의 역방향 플래그(좌상향 대각선) : 0 = 순방향, 1 = 역방향"
      },
      {
        "id": "CenterLineFlag",
        "type": "PIT_UI1",
        "description": "중심선 : ( 0 = 중심선 없음, 1 = 중심선 있음) 더 자세한 내용은 하단의 ※ 중심선의 형태를 참고한다. Low Byte CrookedSlashFlag (슬래쉬 대각선의 꺾임 여부)"
      },
      {
        "id": "CrookedSlashFlag1",
        "type": "PIT_UI1",
        "description": "(CrookedSlashFlag를 쓰기 편하도록 CrookedSlashFlag1,2로 나눔) High Byte CrookedSlashFlag (역슬래쉬 대각선의 꺾임 여부)"
      },
      {
        "id": "CrookedSlashFlag2",
        "type": "PIT_UI1",
        "description": "(CrookedSlashFlag를 쓰기 편하도록 CrookedSlashFlag1,2로 나눔) ※ 대각선의 형태는 다음의 3가지의 아이템을 통해서 결정된다. - SlashFlag(BackSlashFlag) -> 괄호 안은 역슬래쉬의 경우 - CrookedSlashFlag1(CrookedSlashFlag2) - CounterSlashFlag(CounterBackSlashFlag) SlashFlag는 대각선의 유형을 나타내며, 각각 를 나타낸다. (BackSlashFlag는 반대방향 ) CrookedSlashFlag는 대각선이 꺾임 여부를 나타내며, 오직 SlashFlag(BackSlashFlag)가 0x02( or ) 인 경우에만 유 효하다. 실제로 적용된 모습은 (SlashFlag) 또는 (BackSlashFlag) 이다. CounterSlashFlag는 역방향을 나태나며, Flag가 켜있으면 를 각각 로 변경시킨다. (CounterBackSlashFlag는 ) Example : 현재 선택된 셀에 꺾인 대각선 넣기 Javascript function OnInsertCrookedSlash() { var vAct = vHwpCtrl.CreateAction(\"CellBorder\"); var vSet = act.CreateSet(); // Create CellBorder ParameterSet (drived BorderFill) vAct.GetDefault(vSet); vSet.SetItem(\"DiagonalType\", 1); // Line type is Solid vSet.SetItem(\"BackSlashFlag\", 0x02); // One Line Back-Slash vSet.SetItem(\"CrookedSlashFlag2\", 1); // Slash is Crooked vAct.Execute(vSet); } ※ 중심선의 형태는 다음의 2가지의 아이템을 통해서 결정된다. - CenterLineFlag - CrookedSlashFlag1, CrookedSlashFlag2 CenterLineFlag는 단순히 중심선을 설정할 것인지 설정하지 않을 것인지를 나타낸다. CenterLineFlag가 1로 설정되었다면, 실제 로 중심선의 가로 또는 세로를 설정하는 값은 CrookedSlashFlag가 결정하게 된다. CrookedSlashFlag1 = 가로 중심선 유/무(1/0) CrookedSlashFlag2 = 세로 중심선 유/무(1/0) 가로세로 모두 설정하려면 CrookedSlashFlag1/2 모두 값을 1로 설정하면 된다. 중심선과 대각선은 서로 배타적으로 적용된다. (대각선이 설정되면 중심선은 취소되며, 중심선이 설정되면 대각선은 취소된다.) Example : 현재 선택된 셀에 중심선 넣기 Javascript function OnInsertCrookedSlash() { var vAct = vHwpCtrl.CreateAction(\"CellBorder\"); var vSet = act.CreateSet(); // Create CellBorder ParameterSet (drived BorderFill) vAct.GetDefault(vSet); vSet.SetItem(\"DiagonalType\", 1); // Line type is Solid vSet.SetItem(\"CenterLineFlag\", 1); // Set CenterLine vSet.SetItem(\"CrookedSlashFlag2\", 1); // Vertical CenterLine vAct.Execute(vSet); }"
      }
    ]
  },
  {
    "id": "BorderFillExt",
    "description": "UI 구현을 위한 BorderFill 확장",
    "sourcePage": 9,
    "items": [
      {
        "id": "TypeHorz",
        "type": "PIT_UI2",
        "description": "중앙선 종류 : 가로 [선 종류]"
      },
      {
        "id": "TypeVert",
        "type": "PIT_UI2",
        "description": "중앙선 종류 : 세로"
      },
      {
        "id": "WidthHorz",
        "type": "PIT_UI1",
        "description": "중앙선 두께 : 가로 [선 종류]"
      },
      {
        "id": "WidthVert",
        "type": "PIT_UI1",
        "description": "중앙선 두께 : 세로"
      },
      {
        "id": "ColorHorz",
        "type": "PIT_UI4",
        "description": "중앙선 색깔 : 가로 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "ColorVert",
        "type": "PIT_UI4",
        "description": "중앙선 색깔 : 세로 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      }
    ]
  },
  {
    "id": "BulletShape",
    "description": "불릿 모양(글머리표 모양)",
    "sourcePage": 10,
    "items": [
      {
        "id": "HasCharShape",
        "type": "PIT_UI1",
        "description": "자체적인 글자 모양을 사용할지 여부 : 0 = 스타일을 따라감, 1 = 자체 모양을 가짐"
      },
      {
        "id": "CharShape",
        "type": "PIT_SET",
        "description": "글자 모양 (HasCharShape가 1일 경우에만 사용)",
        "subType": "CharShape"
      },
      {
        "id": "WidthAdjust",
        "type": "PIT_I",
        "description": "번호 너비 보정 값 (HWPUNIT)"
      },
      {
        "id": "TextOffset",
        "type": "PIT_I",
        "description": "본문과의 거리 (percent or HWPUNIT)"
      },
      {
        "id": "Alignment",
        "type": "PIT_UI1",
        "description": "번호 정렬 : 0 = 왼쪽 정렬, 1 = 가운데 정렬, 2 = 오른쪽 정렬"
      },
      {
        "id": "UseInstWidth",
        "type": "PIT_UI1",
        "description": "번호 너비를 문서 내 문자열의 너비에 따를지 여부 on / off"
      },
      {
        "id": "AutoIndent",
        "type": "PIT_UI1",
        "description": "번호 너비 자동 들여쓰기 여부 : 0 = 들여쓰기 안함, 1 = 들여쓰기"
      },
      {
        "id": "TextOffsetType",
        "type": "PIT_UI1",
        "description": "본문과의 거리 종류 : 0 = percent, 1 = HWPUNIT"
      },
      {
        "id": "BulletChar",
        "type": "PIT_UI2",
        "description": "불릿 문자 코드"
      },
      {
        "id": "HasImage",
        "type": "PIT_UI1",
        "description": "그림 글머리표 여부 : 0 = 일반 글머리표, 1 = 그림 글머리표"
      },
      {
        "id": "BulletImage",
        "type": "PIT_SET",
        "description": "글머리표 이미지",
        "subType": "DrawFillAttr"
      },
      {
        "id": "CheckedBulletChar",
        "type": "PIT_UI2",
        "description": "체크된 불릿 문자 코드"
      },
      {
        "id": "Checkable",
        "type": "PIT_UI1",
        "description": "체크 가능 여부"
      }
    ]
  },
  {
    "id": "Caption",
    "description": "캡션 속성",
    "sourcePage": 11,
    "items": [
      {
        "id": "Side",
        "type": "PIT_UI1",
        "description": "방향. 0 = 왼쪽, 1 = 오른쪽, 2 = 위, 3 = 아래"
      },
      {
        "id": "Width",
        "type": "PIT_I",
        "description": "캡션 폭 (가로 방향일 때만 사용됨. 단위 HWPUNIT)"
      },
      {
        "id": "Gap",
        "type": "PIT_I",
        "description": "캡션과 틀 사이 간격(HWPUNIT)"
      },
      {
        "id": "CapFullSize",
        "type": "PIT_UI1",
        "description": "캡션 폭에 여백을 포함할지 여부 (세로 방향일 때만 사용됨)"
      }
    ]
  },
  {
    "id": "CaptureEnd",
    "description": "갈무리 끝",
    "sourcePage": 12,
    "items": [
      {
        "id": "BeginX",
        "type": "PIT_I",
        "description": "시작점과 X 좌표(페이지 X좌표)"
      },
      {
        "id": "BeginY",
        "type": "PIT_I",
        "description": "시작점과 Y 좌표(페이지 Y좌표)"
      },
      {
        "id": "EndX",
        "type": "PIT_I",
        "description": "끝점의 X 좌표(페이지 X좌표)"
      },
      {
        "id": "EndY",
        "type": "PIT_I",
        "description": "끝점의 Y 좌표(페이지 Y좌표)"
      },
      {
        "id": "PageNum",
        "type": "PIT_UI",
        "description": "페이지 번호"
      },
      {
        "id": "Path",
        "type": "PIT_BSTR",
        "description": "파일 경로, (한/글 2022부터 지원)"
      },
      {
        "id": "Format",
        "type": "PIT_I",
        "description": "포맷 번호, (한/글 2022부터 지원)"
      }
    ]
  },
  {
    "id": "Cell",
    "description": "셀",
    "sourcePage": 13,
    "items": [
      {
        "id": "HasMargin",
        "type": "PIT_UI1",
        "description": "테이블의 기본 셀 여백 대신 자체 셀 여백을 적용할지 여부. (on / off)"
      },
      {
        "id": "Protected",
        "type": "PIT_UI1",
        "description": "사용자 편집을 막을지 여부 : 0 = off, 1 = on"
      },
      {
        "id": "Header",
        "type": "PIT_UI1",
        "description": "제목 셀인지 여부 : 0 = off, 1 = on"
      },
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "셀의 폭 (HWPUNIT)"
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "셀의 높이 (HWPUNIT)"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "양식모드에서 편집 가능 여부 : 0 = off, 1 = on"
      },
      {
        "id": "Dirty",
        "type": "PIT_UI1",
        "description": "초기화 상태인지 수정된 상태인지 여부 : 0 = off, 1 = on"
      },
      {
        "id": "CellCtrlData",
        "type": "PIT_SET",
        "description": "셀 데이터",
        "subType": "CtrlData"
      }
    ]
  },
  {
    "id": "CellBorderFill",
    "description": "셀 테두리/배경",
    "sourcePage": 14,
    "items": [
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "적용 대상 : 0 = 선택된 셀, 1 = 전체 셀, 2 = 여러 셀에 걸쳐 적 용"
      },
      {
        "id": "NoNeighborCell",
        "type": "PIT_UI1",
        "description": "주변 셀에 선 모양을 적용하지 않을지 여부 (1이면 적용하지 않는 다)"
      },
      {
        "id": "TableBorderFill",
        "type": "PIT_SET",
        "description": "표 테두리/배경",
        "subType": "BorderFill"
      },
      {
        "id": "AllCellsBorderFill",
        "type": "PIT_SET",
        "description": "전체 셀의 테두리/배경",
        "subType": "BorderFill"
      },
      {
        "id": "SelCellsBorderFill",
        "type": "PIT_SET",
        "description": "선택된 셀의 테두리/배경",
        "subType": "BorderFill"
      }
    ]
  },
  {
    "id": "ChangeRome",
    "description": "로마자 변환",
    "sourcePage": 15,
    "items": [
      {
        "id": "Option",
        "type": "PIT_UI1",
        "description": "1 = 주소 2 = 사람이름 3 = 한글복원"
      },
      {
        "id": "HanString",
        "type": "PIT_BSTR",
        "description": "변경시킬 또는 변경된 한글문자"
      }
    ]
  },
  {
    "id": "CharShape",
    "description": "글자 모양",
    "sourcePage": 16,
    "items": [
      {
        "id": "FaceNameHangul",
        "type": "PIT_BSTR",
        "description": "글꼴 이름 (한글)"
      },
      {
        "id": "FaceNameLatin",
        "type": "PIT_BSTR",
        "description": "글꼴 이름 (영문)"
      },
      {
        "id": "FaceNameHanja",
        "type": "PIT_BSTR",
        "description": "글꼴 이름 (한자)"
      },
      {
        "id": "FaceNameJapanese",
        "type": "PIT_BSTR",
        "description": "글꼴 이름 (일본어)"
      },
      {
        "id": "FaceNameOther",
        "type": "PIT_BSTR",
        "description": "글꼴 이름 (기타)"
      },
      {
        "id": "FaceNameSymbol",
        "type": "PIT_BSTR",
        "description": "글꼴 이름 (심벌)"
      },
      {
        "id": "FaceNameUser",
        "type": "PIT_BSTR",
        "description": "글꼴 이름 (사용자)"
      },
      {
        "id": "FontTypeHangul",
        "type": "PIT_UI1",
        "description": "폰트 종류 (한글) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeLatin",
        "type": "PIT_UI1",
        "description": "폰트 종류 (영문) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeHanja",
        "type": "PIT_UI1",
        "description": "폰트 종류 (한자) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeJapanese",
        "type": "PIT_UI1",
        "description": "폰트 종류 (일본어) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeOther",
        "type": "PIT_UI1",
        "description": "폰트 종류 (기타) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeSymbol",
        "type": "PIT_UI1",
        "description": "폰트 종류 (심벌) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontTypeUser",
        "type": "PIT_UI1",
        "description": "폰트 종류 (사용자) : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "SizeHangul",
        "type": "PIT_UI1",
        "description": "각 언어별 크기 비율. (한글) 10% - 250%"
      },
      {
        "id": "SizeLatin",
        "type": "PIT_UI1",
        "description": "각 언어별 크기 비율. (영문) 10% - 250%"
      },
      {
        "id": "SizeHanja",
        "type": "PIT_UI1",
        "description": "각 언어별 크기 비율. (한자) 10% - 250%"
      },
      {
        "id": "SizeJapanese",
        "type": "PIT_UI1",
        "description": "각 언어별 크기 비율. (일본어) 10% - 250%"
      },
      {
        "id": "SizeOther",
        "type": "PIT_UI1",
        "description": "각 언어별 크기 비율. (기타) 10% - 250%"
      },
      {
        "id": "SizeSymbol",
        "type": "PIT_UI1",
        "description": "각 언어별 크기 비율. (심벌) 10% - 250%"
      },
      {
        "id": "SizeUser",
        "type": "PIT_UI1",
        "description": "각 언어별 크기 비율. (사용자) 10% - 250%"
      },
      {
        "id": "RatioHangul",
        "type": "PIT_UI1",
        "description": "각 언어별 장평 비율. (한글) 50% - 200%"
      },
      {
        "id": "RatioLatin",
        "type": "PIT_UI1",
        "description": "각 언어별 장평 비율. (영문) 50% - 200%"
      },
      {
        "id": "RatioHanja",
        "type": "PIT_UI1",
        "description": "각 언어별 장평 비율. (한자) 50% - 200%"
      },
      {
        "id": "RatioJapanese",
        "type": "PIT_UI1",
        "description": "각 언어별 장평 비율. (일본어) 50% - 200%"
      },
      {
        "id": "RatioOther",
        "type": "PIT_UI1",
        "description": "각 언어별 장평 비율. (기타) 50% - 200%"
      },
      {
        "id": "RatioSymbol",
        "type": "PIT_UI1",
        "description": "각 언어별 장평 비율. (심벌) 50% - 200%"
      },
      {
        "id": "RatioUser",
        "type": "PIT_UI1",
        "description": "각 언어별 장평 비율. (사용자) 50% - 200%"
      },
      {
        "id": "SpacingHangul",
        "type": "PIT_I1",
        "description": "각 언어별 자간. (한글) -50% - 50%"
      },
      {
        "id": "SpacingLatin",
        "type": "PIT_I1",
        "description": "각 언어별 자간. (영문) -50% - 50%"
      },
      {
        "id": "SpacingHanja",
        "type": "PIT_I1",
        "description": "각 언어별 자간. (한자) -50% - 50%"
      },
      {
        "id": "SpacingJapanese",
        "type": "PIT_I1",
        "description": "각 언어별 자간. (일본어) -50% - 50%"
      },
      {
        "id": "SpacingOther",
        "type": "PIT_I1",
        "description": "각 언어별 자간. (기타) -50% - 50%"
      },
      {
        "id": "SpacingSymbol",
        "type": "PIT_I1",
        "description": "각 언어별 자간. (심벌) -50% - 50%"
      },
      {
        "id": "SpacingUser",
        "type": "PIT_I1",
        "description": "각 언어별 자간. (사용자) -50% - 50%"
      },
      {
        "id": "OffsetHangul",
        "type": "PIT_I1",
        "description": "각 언어별 오프셋. (한글) -100% - 100%"
      },
      {
        "id": "OffsetLatin",
        "type": "PIT_I1",
        "description": "각 언어별 오프셋. (영문) -100% - 100%"
      },
      {
        "id": "OffsetHanja",
        "type": "PIT_I1",
        "description": "각 언어별 오프셋. (한자) -100% - 100%"
      },
      {
        "id": "OffsetJapanese",
        "type": "PIT_I1",
        "description": "각 언어별 오프셋. (일본어) -100% - 100%"
      },
      {
        "id": "OffsetOther",
        "type": "PIT_I1",
        "description": "각 언어별 오프셋. (기타) -100% - 100%"
      },
      {
        "id": "OffsetSymbol",
        "type": "PIT_I1",
        "description": "각 언어별 오프셋. (심벌) -100% - 100%"
      },
      {
        "id": "OffsetUser",
        "type": "PIT_I1",
        "description": "각 언어별 오프셋. (사용자) -100% - 100%"
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
        "description": "밑줄 종류 : 0 = none, 1 = bottom, 2 = center, 3 = top 외곽선 종류 :"
      },
      {
        "id": "OutlineType",
        "type": "PIT_UI1",
        "description": "0 = none, 1 = solid, 2 = dot, 3 = thick, 4 = dash, 5 = dashdot, 6 = dashdotdot"
      },
      {
        "id": "ShadowType",
        "type": "PIT_UI1",
        "description": "그림자 종류 : 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "TextColor",
        "type": "PIT_UI4",
        "description": "글자색. (COLORREF) RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "ShadeColor",
        "type": "PIT_UI4",
        "description": "음영색. (COLORREF) RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "UnderlineShape",
        "type": "PIT_UI1",
        "description": "밑줄 모양 : 선 종류"
      },
      {
        "id": "UnderlineColor",
        "type": "PIT_UI4",
        "description": "밑줄 색 (COLORREF) RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I1",
        "description": "그림자 간격 (X 방향) -100% - 100%"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I1",
        "description": "그림자 간격 (Y 방향) -100% - 100%"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "그림자 색 (COLORREF) RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR) 취소선 종류 :"
      },
      {
        "id": "StrikeOutType",
        "type": "PIT_UI1",
        "description": "0 = none, 1 = red single, 2 = red double, 3 = text single, 4 = text double"
      },
      {
        "id": "DiacSymMark",
        "type": "PIT_UI1",
        "description": "강조점 종류 : 0 = none, 1 = 검정 동그라미, 2 = 속 빈 동그라미"
      },
      {
        "id": "UseFontSpace",
        "type": "PIT_UI1",
        "description": "글꼴에 어울리는 빈칸 : 0 = off, 1 = on"
      },
      {
        "id": "UseKerning",
        "type": "PIT_UI1",
        "description": "커닝 : 0 = off, 1 = on"
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "글자 크기 (HWPUNIT) 취소선 모양 0 실선 1 파선 2 점선 3 일점쇄선 4 이점쇄선 5 긴 파선 6 원형 점선 7 이중 실선"
      },
      {
        "id": "StrikeOutShape",
        "type": "PIT_UI1",
        "description": "8 얇고 굵은 이중선 9 굵고 얇은 이중선 10 얇고 굵고 얇은 삼중선 11 물결선 12 이중 물결선 13 3D 굵은선 14 3D 굵은선 (광원 반대) 15 3D 실선 16 3D 실선 (광원 반대)"
      },
      {
        "id": "StrikeOutColor",
        "type": "PIT_UI4",
        "description": "취소선색 (COLORREF)"
      },
      {
        "id": "BorderFill",
        "type": "PIT_SET",
        "description": "테두리/배경",
        "subType": "BorderFill"
      }
    ]
  },
  {
    "id": "ChCompose",
    "description": "글자 겹침",
    "sourcePage": 19,
    "items": [
      {
        "id": "Chars",
        "type": "PIT_BSTR",
        "description": "겹쳐질 글자들 테두리 타입 1 ○"
      },
      {
        "id": "CircleType",
        "type": "PIT_UI",
        "description": "3 □ 5 △ 8 ◇"
      },
      {
        "id": "CharSize",
        "type": "PIT_I",
        "description": "테두리 내부 문자의 크기 비율 -6 ~ +2 (40%~120%)"
      },
      {
        "id": "CheckCompose",
        "type": "PIT_UI1",
        "description": "테두리 내부의 문자 겹치기 여부 TRUE=겹치기:FALSE=펼치기"
      },
      {
        "id": "CharShapes",
        "type": "PIT_SET",
        "description": "겹쳐지는 문자들의 속성셋",
        "subType": "ChComposeShapes"
      },
      {
        "id": "TextDir",
        "type": "PIT_UI1",
        "description": "텍스트 방향"
      }
    ]
  },
  {
    "id": "ChComposeShapes",
    "description": "글자 겹치기 글자 속성셋",
    "sourcePage": 20,
    "items": [
      {
        "id": "CircleCharShape",
        "type": "PIT_SET",
        "description": "겹쳐지는 문자들의 속성.",
        "subType": "CharShape"
      },
      {
        "id": "InnerCharShape1-9",
        "type": "PIT_SET",
        "description": "겹쳐지는 문자들의 속성 1~9",
        "subType": "CharShape"
      }
    ]
  },
  {
    "id": "CodeTable",
    "description": "문자표",
    "sourcePage": 21,
    "items": [
      {
        "id": "Text",
        "type": "PIT_BSTR",
        "description": "삽입될 스트링"
      }
    ]
  },
  {
    "id": "ColDef",
    "description": "단 정의 속성",
    "sourcePage": 22,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "단 종류 : 0 = 보통 다단, 1 = 배분 다단, 2 = 평행 다단"
      },
      {
        "id": "Count",
        "type": "PIT_UI1",
        "description": "단 개수. 1-255까지."
      },
      {
        "id": "SameSize",
        "type": "PIT_UI1",
        "description": "단의 너비를 같도록 할지 여부 : 0 = 단 너비 각자 지정, 1 = 단 너비 동일"
      },
      {
        "id": "SameGap",
        "type": "PIT_I4",
        "description": "단 사이 간격(HWPUNIT) SAME_SIZE가 1일 때만 사용된다. 각 단의 너비와 간격(HWPUNIT) col*2 = 단의 폭, col*2 + 1 = 단 사이 간격."
      },
      {
        "id": "WidthGap",
        "type": "PIT_ARRAY",
        "description": "영역 전체의 폭을 Column ratio base (=32768)로 보았을 때의 비율로 환산한다. SameSize가 0일 때만 사용된다. 배열의 아이템의 개수는 Count*2-1과 같아야 한다.",
        "subType": "PIT_UI2"
      },
      {
        "id": "Layout",
        "type": "PIT_UI1",
        "description": "단 방향 지정 : 0 = 왼쪽부터, 1 = 오른쪽부터, 2 = 맞쪽"
      },
      {
        "id": "LineType",
        "type": "PIT_UI1",
        "description": "선 종류"
      },
      {
        "id": "LineWidth",
        "type": "PIT_UI1",
        "description": "선 종류"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "선 색깔. (COLORREF) RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR) 적용범위 : 0 = 선택된 다단 1 = 선택된 문자열 2 = 현재 다단 3 = 개체 전체"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "4 = 선택된 셀 5 = 현재 구역 6 = 문서 전체 7 = 현재 셀 8 = 새 쪽으로 9 = 새 다단으로 10 = 모든 셀 적용범위의 분류. 아래 값의 조합이다."
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": "0x0001 = 선택된 다단 0x0002 = 선택된 문자열 0x0004 = 현재 다단 0x0008 = 개체 전체 0x0010 = 선택된 셀 0x0020 = 현재 구역 0x0040 = 문서전체 0x0080 = 현재 셀 0x0100 = 새 쪽으로 0x0200 = 새 다단으로 0x0400 = 모든 셀"
      }
    ]
  },
  {
    "id": "ConvertCase",
    "description": "대/소문자 변환",
    "sourcePage": 24,
    "items": []
  },
  {
    "id": "ConvertFullHalf",
    "description": "전/반각 변환",
    "sourcePage": 25,
    "items": []
  },
  {
    "id": "ConvertHiraToGata",
    "description": "히라가나/가타가나 변환",
    "sourcePage": 26,
    "items": []
  },
  {
    "id": "ConvertJianFan",
    "description": "간/번체 변환",
    "sourcePage": 27,
    "items": []
  },
  {
    "id": "ConvertToHangul",
    "description": "한자, 일어, 구결을 한글로",
    "sourcePage": 28,
    "items": []
  },
  {
    "id": "CtrlData",
    "description": "컨트롤 데이터",
    "sourcePage": 29,
    "items": [
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "사용자가 지정한 컨트롤의 이름."
      }
    ]
  },
  {
    "id": "DeleteCtrls",
    "description": "조판 부호 컨트롤 지우기",
    "sourcePage": 30,
    "items": [
      {
        "id": "DeleteCtrlType",
        "type": "PIT_ARRAY",
        "description": "지울 개체 목록",
        "subType": "PIT_UI"
      }
    ]
  },
  {
    "id": "DocFilters",
    "description": "Document 필터 리스트",
    "sourcePage": 31,
    "items": [
      {
        "id": "DocFilters",
        "type": "PIT_BSTR",
        "description": "'|'문자로 분리된 필터 리스트 스트링(MFC 와 같은 방법)을 가져옴"
      },
      {
        "id": "Format",
        "type": "PIT_ARRAY",
        "description": "필터 리스트를 string array형태로 가져옴 (Export시에만) Import 리스트를 가져올 것인지 Export 리스트를 가져올 것인지의",
        "subType": "PIT_BSTR"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "관한 타입. Import = 1 Export = 0 (on input)"
      },
      {
        "id": "Hide",
        "type": "PIT_BSTR",
        "description": "필터 목록에서 제거를 위한 필터 아이템 Format 문자열. 구분자 '|' 사용"
      }
    ]
  },
  {
    "id": "DocFindInfo",
    "description": "문서 찾기",
    "sourcePage": 32,
    "items": [
      {
        "id": "ListID",
        "type": "PIT_UI",
        "description": "현재 위치한 리스트"
      },
      {
        "id": "ParaID",
        "type": "PIT_UI",
        "description": "현재 위치한 문단"
      },
      {
        "id": "Pos",
        "type": "PIT_UI",
        "description": "현재 위치한 글자"
      }
    ]
  },
  {
    "id": "DocumentInfo",
    "description": "문서에 대한 정보",
    "sourcePage": 33,
    "items": [
      {
        "id": "CurPara",
        "type": "PIT_UI",
        "description": "현재 위치한 문단"
      },
      {
        "id": "CurPos",
        "type": "PIT_UI",
        "description": "현재 위치한 오프셋"
      },
      {
        "id": "CurParaLen",
        "type": "PIT_UI",
        "description": "현재 위치한 문단의 길이 현재 리스트의 종류"
      },
      {
        "id": "CurCtrl",
        "type": "PIT_UI",
        "description": "0 = 일반 텍스트 1 = 글상자 기타 = 컨트롤 ID"
      },
      {
        "id": "CurParaCount",
        "type": "PIT_UI",
        "description": "현재 리스트의 문단 수"
      },
      {
        "id": "RootPara",
        "type": "PIT_UI",
        "description": "루트 리스트의 현재 문단"
      },
      {
        "id": "RootPos",
        "type": "PIT_UI",
        "description": "루트 리스트의 현재 오프셋"
      },
      {
        "id": "RootParaCout",
        "type": "PIT_UI",
        "description": "루트 리스트의 문단 수 자세한 정보를 구할지 여부"
      },
      {
        "id": "DetailInfo",
        "type": "PIT_I1",
        "description": "~ 로 시작하는 아이템의 정보를 얻기 위해서는 이 값을 1로 넣어준 후에 액션을 실행해준다.",
        "subType": "Detail"
      },
      {
        "id": "DetailCharCount",
        "type": "PIT_UI",
        "description": "문서에 포함된 글자 수"
      },
      {
        "id": "DetailWordCount",
        "type": "PIT_UI",
        "description": "문서에 포함된 어절 수"
      },
      {
        "id": "DetailLineCount",
        "type": "PIT_UI",
        "description": "문서에 포함된 줄 수"
      },
      {
        "id": "DetailPageCount",
        "type": "PIT_UI",
        "description": "문서에 포함된 쪽 수"
      },
      {
        "id": "DetailCurPage",
        "type": "PIT_UI",
        "description": "현재 쪽 번호"
      },
      {
        "id": "DetailCurPrtPage",
        "type": "PIT_UI",
        "description": "현재 쪽 번호 (인쇄 번호) 구역의 속성까지 구할지 여부"
      },
      {
        "id": "SectionInfo",
        "type": "PIT_UI",
        "description": "아이템은 이 값을 1로 넣어준 후 액션을 실행한 후에 얻을 수 있다.",
        "subType": "SecDef"
      },
      {
        "id": "SecDef",
        "type": "PIT_SET",
        "description": "구역의 속성",
        "subType": "SecDef"
      }
    ]
  },
  {
    "id": "DrawArcType",
    "description": "그리기 개체의 부채꼴 테두리 모양",
    "sourcePage": 34,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "호의 유형 : 0 = 호, 1 = 부채꼴, 2 = 화살모양"
      },
      {
        "id": "Interval",
        "type": "PIT_ARRAY",
        "description": "확장타원(호)에서 호의 시작점과 끝점을 나타내게 한다.",
        "subType": "PIT_I"
      }
    ]
  },
  {
    "id": "DrawCoordInfo",
    "description": "그리기 개체의 좌표 정보",
    "sourcePage": 35,
    "items": [
      {
        "id": "Count",
        "type": "PIT_UI4",
        "description": "점의 개수"
      },
      {
        "id": "Point",
        "type": "PIT_ARRAY",
        "description": "좌표 Array (X1,Y1), (X2,Y2), ..., (Xn,Yn)",
        "subType": "PIT_I"
      },
      {
        "id": "Line",
        "type": "PIT_ARRAY",
        "description": "선 속성 Array(곡선에서만 쓰임)",
        "subType": "PIT_UI1"
      }
    ]
  },
  {
    "id": "DrawCtrlHyperlink",
    "description": "그리기 개체의 Hyperlink 정보",
    "sourcePage": 36,
    "items": [
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "String 참조",
        "subType": "Command"
      }
    ]
  },
  {
    "id": "DrawEditDetail",
    "description": "그리기 개체의 다각형 편집",
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
        "description": "고칠 점의 인덱스"
      },
      {
        "id": "PointX",
        "type": "PIT_I",
        "description": "점의 X 좌표"
      },
      {
        "id": "PointY",
        "type": "PIT_I",
        "description": "점의 Y 좌표"
      }
    ]
  },
  {
    "id": "DrawFillAttr",
    "description": "그리기 개체의 채우기 속성",
    "sourcePage": 38,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "1 = 면색 또는 무늬색 2 = 그림 3 = 그러데이션 배경 유형이 그러데이션일 때 그러데이션 형태 1 = 줄무늬형"
      },
      {
        "id": "GradationType",
        "type": "PIT_I",
        "description": "2 = 원형 3 = 원뿔형 4 = 사각형"
      },
      {
        "id": "GradationAngle",
        "type": "PIT_I",
        "description": "그러데이션의 기울임(시작각)"
      },
      {
        "id": "GradationCenterX",
        "type": "PIT_I",
        "description": "그러데이션의 가로중심(중심 X 좌표)"
      },
      {
        "id": "GradationCenterY",
        "type": "PIT_I",
        "description": "그러데이션의 가로중심(중심 Y 좌표)"
      },
      {
        "id": "GradationStep",
        "type": "PIT_I",
        "description": "그러데이션 번짐 정도 (0..100)"
      },
      {
        "id": "GradationColorNum",
        "type": "PIT_I",
        "description": "그러데이션의 색 수"
      },
      {
        "id": "GradationColor",
        "type": "PIT_ARRAY",
        "description": "그러데이션의 색깔 (시작색, 중간색1,..중간색 n-2, 끝색) 2<= n <=10",
        "subType": "PIT_I"
      },
      {
        "id": "GradationIndexPos",
        "type": "PIT_ARRAY",
        "description": "그러데이션 다음 색깔과의 거리(얼마나 번지고 나서 다음색깔로 가 는가)",
        "subType": "PIT_I"
      },
      {
        "id": "GradationStepCenter",
        "type": "PIT_UI1",
        "description": "그러데이션 번짐 정도의 중심 (0..100)"
      },
      {
        "id": "GradationAlpha",
        "type": "PIT_UI1",
        "description": "그러데이션 투명도"
      },
      {
        "id": "WinBrushFaceColor",
        "type": "PIT_UI",
        "description": "면 색 (RGB 0x00BBGGRR)"
      },
      {
        "id": "WinBrushHatchColor",
        "type": "PIT_UI",
        "description": "무늬 색 (RGB 0x00BBGGRR) 무늬 스타일 0 = 4 ="
      },
      {
        "id": "WinBrushFaceStyle",
        "type": "PIT_I1",
        "description": "1 = 5 = 2 = 6 = 3 ="
      },
      {
        "id": "WinBrushAlpha",
        "type": "PIT_UI",
        "description": "면/무늬 색 투명도"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "의 배경을 그림으로 선택했을 경우. 또는 그림개체일 경우의 그림파일 경로",
        "subType": "ShapeObject"
      },
      {
        "id": "Embedded",
        "type": "PIT_UI1",
        "description": "그림이 문서에 직접 삽입(TRUE) / 파일로 연결(FALSE) 그림 효과"
      },
      {
        "id": "PicEffect",
        "type": "PIT_UI1",
        "description": "0 = 실제 이미지 그대로 1 = 그레이스케일 2 = 흑백 효과"
      },
      {
        "id": "Brightness",
        "type": "PIT_I1",
        "description": "명도 (-100 ~ 100)"
      },
      {
        "id": "Contrast",
        "type": "PIT_I1",
        "description": "밝기 (-100 ~ 100)"
      },
      {
        "id": "Reverse",
        "type": "PIT_UI1",
        "description": "반전 유무 ShapeObject의 배경일 경우에만 의미 있는 아이템, 배경을 채우는 방식을 결정한다. (그림개체에는 해당사항 없음) 0 = 바둑판식으로 1 = 가로/위만 바둑판식으로 배열 2 = 가로/아래만 바둑판식으로 배열 3 = 세로/왼쪽만 바둑판식으로 배열 4 = 세로/오른쪽만 바둑판식으로 배열 5 = 크기에 맞추어"
      },
      {
        "id": "DrawFillImageType",
        "type": "PIT_I",
        "description": "6 = 가운데로 7 = 가운데 위로 8 = 가운데 아래로 9 = 왼쪽 가운데로 10 = 왼쪽 위로 11 = 왼쪽 아래로 12 = 오른쪽 가운데로 13 = 오른쪽 위로 14 = 오른쪽 아래로"
      },
      {
        "id": "SkipLeft",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 왼쪽 자르기"
      },
      {
        "id": "SkipRight",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 오른쪽 자르기"
      },
      {
        "id": "SkipTop",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 위 자르기"
      },
      {
        "id": "SkipBottom",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 아래 자르기"
      },
      {
        "id": "OriginalSizeX",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 원본 크기 X size"
      },
      {
        "id": "OriginalSizeY",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 원본 크기 Y size"
      },
      {
        "id": "InsideMarginLeft",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (왼쪽)"
      },
      {
        "id": "InsideMarginRight",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (오른 쪽)"
      },
      {
        "id": "InsideMarginTop",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (위)"
      },
      {
        "id": "InsideMarginBottom",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (아래)"
      },
      {
        "id": "WindowsBrush",
        "type": "PIT_UI1",
        "description": "현재 선택된 brush의 type이 면/무늬 브러시인가를 나타냄"
      },
      {
        "id": "GradationBrush",
        "type": "PIT_UI1",
        "description": "현재 선택된 brush의 type이 그러데이션 브러시인가를 나타냄"
      },
      {
        "id": "ImageBrush",
        "type": "PIT_UI1",
        "description": "현재 선택된 brush의 type이 그림 브러시인가를 나타냄"
      },
      {
        "id": "ImageCreateOnDrag",
        "type": "PIT_UI1",
        "description": "그림 개체 생성 시 마우스로 끌어 생성할지 여부"
      },
      {
        "id": "ImageAlpha",
        "type": "PIT_UI1",
        "description": "그림 개체/배경 투명도"
      },
      {
        "id": "FileNameStr",
        "type": "PIT_BSTR",
        "description": "브러쉬 설정을 위한 itemid"
      }
    ]
  },
  {
    "id": "DrawImageAttr",
    "description": "그림 개체 속성",
    "sourcePage": 41,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "의 배경을 그림으로 선택했을 경우 또는 그림개체일 경우의 그림파일 경로",
        "subType": "ShapeObject"
      },
      {
        "id": "Embedded",
        "type": "PIT_UI1",
        "description": "그림이 문서에 직접 삽입(TRUE) / 파일로 연결(FALSE) 그림 효과"
      },
      {
        "id": "PicEffect",
        "type": "PIT_UI1",
        "description": "0 = 실제 이미지 그대로 1 = 그레이스케일 2 = 흑백 효과"
      },
      {
        "id": "Brightness",
        "type": "PIT_I1",
        "description": "명도 (-100 ~ 100)"
      },
      {
        "id": "Contrast",
        "type": "PIT_I1",
        "description": "밝기 (-100 ~ 100)"
      },
      {
        "id": "Reverse",
        "type": "PIT_UI1",
        "description": "반전 유무 ShapeObject의 배경일 경우에만 의미 있는 아이템, 배경을 채우는 방식을 결정한다. (그림개체에는 해당사항 없음) 0 = 바둑판식으로 1 = 가로/위만 바둑판식으로 배열 2 = 가로/아래만 바둑판식으로 배열 3 = 세로/왼쪽만 바둑판식으로 배열 4 = 세로/오른쪽만 바둑판식으로 배열 5 = 크기에 맞추어"
      },
      {
        "id": "DrawFillImageType",
        "type": "PIT_I",
        "description": "6 = 가운데로 7 = 가운데 위로 8 = 가운데 아래로 9 = 왼쪽 가운데로 10 = 왼쪽 위로 11 = 왼쪽 아래로 12 = 오른쪽 가운데로 13 = 오른쪽 위로 14 = 오른쪽 아래로"
      },
      {
        "id": "SkipLeft",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 왼쪽 자르기"
      },
      {
        "id": "SkipRight",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 오른쪽 자르기"
      },
      {
        "id": "SkipTop",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 위 자르기"
      },
      {
        "id": "SkipBottom",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 아래 자르기"
      },
      {
        "id": "OriginalSizeX",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 원본 크기 X size"
      },
      {
        "id": "OriginalSizeY",
        "type": "PIT_UI",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 원본 크기 Y size"
      },
      {
        "id": "InsideMarginLeft",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (왼쪽)"
      },
      {
        "id": "InsideMarginRight",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (오른 쪽)"
      },
      {
        "id": "InsideMarginTop",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (위)"
      },
      {
        "id": "InsideMarginBotto",
        "type": "PIT_I4",
        "description": "그림 개체일 경우에만 의미 있는 아이템, 이미지 안쪽 여백. (아래) m"
      },
      {
        "id": "WindowsBrush",
        "type": "PIT_UI1",
        "description": "현재 선택된 brush의 type이 면/무늬 브러시인가를 나타냄"
      },
      {
        "id": "GradationBrush",
        "type": "PIT_UI1",
        "description": "현재 선택된 brush의 type이 그러데이션 브러시인가를 나타냄"
      },
      {
        "id": "ImageBrush",
        "type": "PIT_UI1",
        "description": "현재 선택된 brush의 type이 그림 브러시인가를 나타냄"
      },
      {
        "id": "ImageCreateOnDrag",
        "type": "PIT_UI1",
        "description": "그림 개체 생성 시 마우스로 끌어 생성할지 여부"
      },
      {
        "id": "ImageCreateTreatA",
        "type": "PIT_UI1",
        "description": "그림 넣을때 글자처럼 취급 여부 sChar"
      },
      {
        "id": "ImageAdjustPrevOb",
        "type": "PIT_UI1",
        "description": "앞 개체 속성 적용 ject"
      },
      {
        "id": "ImageAdjustTableC",
        "type": "PIT_UI1",
        "description": "테이블 셀 크기에 맞춰 이미지 조정 ell"
      },
      {
        "id": "ImageInsertFileNa",
        "type": "PIT_UI1",
        "description": "캡션에 파일이름 넣기 meInCaption"
      },
      {
        "id": "ImageAutoRotate",
        "type": "PIT_UI1",
        "description": "이미지 자동 회전"
      },
      {
        "id": "FileNameStr",
        "type": "PIT_BSTR",
        "description": "브러쉬 설정을 위한 itemid"
      },
      {
        "id": "ImageAlphaEffect",
        "type": "PIT_I1",
        "description": "이미지 투명도"
      },
      {
        "id": "ImageUseTextInPic",
        "type": "PIT_UI1",
        "description": "이미지에서 텍스트 추출, (한/글 2024부터 지원) ture"
      }
    ]
  },
  {
    "id": "DrawImageScissoring",
    "description": "그림 개체의 자르기 정보",
    "sourcePage": 43,
    "items": [
      {
        "id": "Xoffset",
        "type": "PIT_I",
        "description": "자를 x축 오프셋"
      },
      {
        "id": "Yoffset",
        "type": "PIT_I",
        "description": "자를 y축 오프셋"
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
    "description": "그리기 개체의 Layout",
    "sourcePage": 44,
    "items": [
      {
        "id": "CreateNumPt",
        "type": "PIT_UI",
        "description": "생성할 점의 수"
      },
      {
        "id": "CreatePt",
        "type": "PIT_ARRAY",
        "description": "생성할 점의 위치정보 POINT(x,y)로 계산되므로 CreateNumPt*2의 개수로 구성 됨.",
        "subType": "PIT_I"
      },
      {
        "id": "CurveSegmentInfo",
        "type": "PIT_ARRAY",
        "description": "곡선 세그먼트 정보",
        "subType": "PIT_UI1"
      }
    ]
  },
  {
    "id": "DrawLineAttr",
    "description": "그리기 개체의 선 속성",
    "sourcePage": 45,
    "items": [
      {
        "id": "Alpha",
        "type": "PIT_UI1",
        "description": "투명도"
      }
    ]
  },
  {
    "id": "DrawRectType",
    "description": "사각형 모서리 모양",
    "sourcePage": 46,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "모서리의 곡률 지정 (0 ~ 50까지)"
      }
    ]
  },
  {
    "id": "DrawResize",
    "description": "그리기 개체 Resizing 정보",
    "sourcePage": 47,
    "items": [
      {
        "id": "Xoffset",
        "type": "PIT_I",
        "description": "그리기 개체 X좌표 위치"
      },
      {
        "id": "Yoffset",
        "type": "PIT_I",
        "description": "그리기 개체 Y좌표 위치"
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
    "description": "그리기 개체 회전 정보",
    "sourcePage": 48,
    "items": [
      {
        "id": "Command",
        "type": "PIT_UI",
        "description": "1 = 회전 영역의 중심을 기준으로 회전 2 = 그리기 개체 중심을 기준으로 회전 3 = 회전 영역의 중심을 기준으로 회전 & 중심이 변경됨"
      },
      {
        "id": "CenterX",
        "type": "PIT_I",
        "description": "회전 중심의 X 좌표"
      },
      {
        "id": "CenterY",
        "type": "PIT_I",
        "description": "회전 중심의 Y 좌표"
      },
      {
        "id": "ObjectCenterX",
        "type": "PIT_I",
        "description": "그리기 개체의 중심 X 좌표"
      },
      {
        "id": "ObjectCenterY",
        "type": "PIT_I",
        "description": "그리기 개체의 중심 Y 좌표"
      },
      {
        "id": "Angle",
        "type": "PIT_I",
        "description": "회전 각 그림 회전 여부"
      },
      {
        "id": "RotateImage",
        "type": "PIT_UI1",
        "description": "0 = 회전 안 함 1 = 회전함"
      }
    ]
  },
  {
    "id": "DrawScAction",
    "description": "그리기 개체 90도 회전 및 좌우/상하 뒤집기",
    "sourcePage": 49,
    "items": [
      {
        "id": "RotateCenterX",
        "type": "PIT_I4",
        "description": "회전 중심 X 좌표"
      },
      {
        "id": "RotateCenterY",
        "type": "PIT_I4",
        "description": "회전 중심 Y 좌표"
      },
      {
        "id": "RotateAngel",
        "type": "PIT_I",
        "description": "회전각"
      },
      {
        "id": "HorzFlip",
        "type": "PIT_UI",
        "description": "수평 flip (좌우 뒤집기)"
      },
      {
        "id": "VertFlip",
        "type": "PIT_UI",
        "description": "수직 flip (상하 뒤집기)"
      }
    ]
  },
  {
    "id": "DrawShadow",
    "description": "그리기 개체 그림자 정보",
    "sourcePage": 50,
    "items": [
      {
        "id": "ShadowType",
        "type": "PIT_I4",
        "description": "그림자 종류. 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "그림자 색 (COLORREF)"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I4",
        "description": "그림자 X축 간격 (-48% ~ 48%)"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I4",
        "description": "그림자 Y축 간격 (-48% ~ 48%)"
      },
      {
        "id": "ShadowAlpha",
        "type": "PIT_UI1",
        "description": "그림자 투명도"
      }
    ]
  },
  {
    "id": "DrawShear",
    "description": "그리기 개체 기울이기 정보",
    "sourcePage": 51,
    "items": [
      {
        "id": "XFactor",
        "type": "PIT_I",
        "description": "축 기울이기 각도",
        "subType": "X"
      },
      {
        "id": "YFactor",
        "type": "PIT_I",
        "description": "축 기울이기 각도",
        "subType": "Y"
      }
    ]
  },
  {
    "id": "DrawTextart",
    "description": "글맵시 속성",
    "sourcePage": 52,
    "items": [
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "글맵시에 넣을 문자열 내용"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "글꼴"
      },
      {
        "id": "FontStyle",
        "type": "PIT_BSTR",
        "description": "속성. 값은 항상 0(Regular)이다."
      },
      {
        "id": "FontType",
        "type": "PIT_UI1",
        "description": "폰트 종류 : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "LineSpacing",
        "type": "PIT_I4",
        "description": "줄 간격 (50 ~ 500)"
      },
      {
        "id": "CharSpacing",
        "type": "PIT_I4",
        "description": "글자간격 (50 ~ 500)"
      },
      {
        "id": "AlignType",
        "type": "PIT_UI1",
        "description": "정렬 방식"
      },
      {
        "id": "Shape",
        "type": "PIT_UI1",
        "description": "형태 (0 ~ 54)"
      },
      {
        "id": "ShadowType",
        "type": "PIT_UI1",
        "description": "그림자 종류. 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I1",
        "description": "그림자 X축 간격 (-48% ~ 48%)"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I1",
        "description": "그림자 Y축 간격 (-48% ~ 48%)"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "그림자 색 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "NumberOfLines",
        "type": "PIT_UI1",
        "description": "글맵시에 넣을 문자열 내용의 줄 수"
      }
    ]
  },
  {
    "id": "DropCap",
    "description": "문단 첫 글자 장식",
    "sourcePage": 53,
    "items": [
      {
        "id": "Style",
        "type": "PIT_UI",
        "description": "1=2줄차지 2=3줄차지 4=여백"
      },
      {
        "id": "FaceName",
        "type": "PIT_BSTR",
        "description": "글꼴"
      },
      {
        "id": "LineStyle",
        "type": "PIT_I",
        "description": "선 스타일"
      },
      {
        "id": "LineWeight",
        "type": "PIT_UI",
        "description": "선 굵기"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "선 색 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "FaceColor",
        "type": "PIT_UI4",
        "description": "글꼴 색 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "Spacing",
        "type": "PIT_I",
        "description": "본문과의 간격"
      }
    ]
  },
  {
    "id": "Dutmal",
    "description": "덧말",
    "sourcePage": 54,
    "items": [
      {
        "id": "ResultText",
        "type": "PIT_BSTR",
        "description": "본말"
      },
      {
        "id": "SubText",
        "type": "PIT_BSTR",
        "description": "덧말"
      },
      {
        "id": "PosType",
        "type": "PIT_UI1",
        "description": "덧말 위치. 0 = 위, 1 = 아래."
      },
      {
        "id": "FsizeRatio",
        "type": "PIT_UI1",
        "description": "덧말 크기 Percent. 0=이면 기본 50%."
      },
      {
        "id": "Option",
        "type": "PIT_UI1",
        "description": "옵션"
      },
      {
        "id": "StyleNo",
        "type": "PIT_UI1",
        "description": "스타일번호 (옵션이 켜있을 때) 덧말의 좌우 Align. 0 = 양쪽 정렬 1 = 왼쪽 정렬"
      },
      {
        "id": "Align",
        "type": "PIT_UI1",
        "description": "2 = 오른쪽 정렬 3 = 가운데 정렬 4 = 배분 정렬 5 = 나눔 정렬 기본은 가운데 정렬이며 옵션이 켜있을 때만 유효"
      },
      {
        "id": "Delete",
        "type": "PIT_UI1",
        "description": "덧말 지움"
      },
      {
        "id": "Modify",
        "type": "PIT_UI1",
        "description": "덧말 편집 모드 여부"
      }
    ]
  },
  {
    "id": "EngineProperties",
    "description": "환경 설정 옵션",
    "sourcePage": 55,
    "items": [
      {
        "id": "DoAnyCursorEdit",
        "type": "PIT_UI1",
        "description": "마우스로 두 번 누르기 한곳에 입력가능"
      },
      {
        "id": "DoOutLineStyle",
        "type": "PIT_UI1",
        "description": "개요 번호 삽입 문단에 개요 스타일 자동 적용"
      },
      {
        "id": "InsertLock",
        "type": "PIT_UI1",
        "description": "삽입 잠금"
      },
      {
        "id": "TabMoveCell",
        "type": "PIT_UI1",
        "description": "표 안에서 <Tab>으로 셀 이동"
      },
      {
        "id": "FaxDriver",
        "type": "PIT_BSTR",
        "description": "팩스 드라이버"
      },
      {
        "id": "PDFDriver",
        "type": "PIT_BSTR",
        "description": "드라이버",
        "subType": "PDF"
      },
      {
        "id": "EnableAutoSpell",
        "type": "PIT_UI1",
        "description": "맞춤법 도우미 작동"
      },
      {
        "id": "OpenNewWindow",
        "type": "PIT_UI1",
        "description": "새창으로 불러오기"
      },
      {
        "id": "CtrlMaskAs2002",
        "type": "PIT_UI1",
        "description": "한글 2002 방식으로 조판 부호 표시하기"
      },
      {
        "id": "ShowGuildLines",
        "type": "PIT_UI1",
        "description": "개체 투명선 보이기"
      },
      {
        "id": "ImageAutoCheck",
        "type": "PIT_UI1",
        "description": "이미지 파일의 경로 검사 다이얼로그 띄우기 유무."
      },
      {
        "id": "OptimizeWebHwpCop",
        "type": "PIT_UI1",
        "description": "웹한글로 복사 최적화 끄고/켜기 y"
      }
    ]
  },
  {
    "id": "EqEdit",
    "description": "수식",
    "sourcePage": 56,
    "items": [
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "수식 스크립트."
      },
      {
        "id": "BaseUnit",
        "type": "PIT_I4",
        "description": "수식이 삽입되는 앞의 글자와 같은 높이 (기본 값은 POINT 10 )"
      },
      {
        "id": "Color",
        "type": "PIT_I4",
        "description": "수식이 삽입되는 글자 색과 같은 색 (기본 값은 WINDOWTEXT 색) RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)"
      },
      {
        "id": "LineMode",
        "type": "PIT_I4",
        "description": "줄 단위를 사용할지의 여부"
      },
      {
        "id": "Version",
        "type": "PIT_BSTR",
        "description": "수식 스크립트 버전 정보 수식 속성 적용 범위"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI4",
        "description": "0 : 선택된 수식 개체 1 : 문서 전체"
      },
      {
        "id": "VisualString",
        "type": "PIT_BSTR",
        "description": "수식 비주얼 스크립트"
      },
      {
        "id": "EqFontName",
        "type": "PIT_BSTR",
        "description": "폰트명"
      }
    ]
  },
  {
    "id": "ExchangeFootnoteEndNote",
    "description": "각주/미주 변환",
    "sourcePage": 57,
    "items": [
      {
        "id": "Flag",
        "type": "PIT_UI1",
        "description": "0 : 모든 각주를 미주로 바꾸기 1 : 모든 미주를 각주로 바꾸기 2 : 각주와 미주를 서로 바꾸기"
      }
    ]
  },
  {
    "id": "FieldCtrl",
    "description": "필드 컨트롤의 공통 데이터",
    "sourcePage": 58,
    "items": [
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "필드의 명령문"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "일부분 readonly mode에서 편집 가능한 필드인지 여부"
      },
      {
        "id": "FieldDirty",
        "type": "PIT_UI1",
        "description": "필드가 초기화 상태인지 수정되어 있는 상태인지 여부"
      },
      {
        "id": "CtrlData",
        "type": "PIT_SET",
        "description": "필드 이름 저장을 위한 영역",
        "subType": "CtrlData"
      },
      {
        "id": "User",
        "type": "PIT_BSTR",
        "description": "컨트롤 데이터"
      },
      {
        "id": "MemoType",
        "type": "PIT_UI1",
        "description": "메모 타입, (한/글 2022부터 지원)"
      }
    ]
  },
  {
    "id": "FileConvert",
    "description": "여러 파일을 동시에 특정 포맷으로 변환하여 저장 (관련 Action/API 존재하지 않음)",
    "sourcePage": 59,
    "items": [
      {
        "id": "Format",
        "type": "PIT_BSTR",
        "description": "변환 포맷"
      },
      {
        "id": "SrcFileList",
        "type": "PIT_ARRAY",
        "description": "Source 파일 리스트",
        "subType": "PIT_BSTR"
      },
      {
        "id": "DestFileList",
        "type": "PIT_ARRAY",
        "description": "Destination 파일 리스트",
        "subType": "PIT_BSTR"
      }
    ]
  },
  {
    "id": "FileInfo",
    "description": "파일 정보",
    "sourcePage": 60,
    "items": [
      {
        "id": "Format",
        "type": "PIT_BSTR",
        "description": ": 한글 파일 UNKNOWN : 알 수 없음.",
        "subType": "HWP"
      },
      {
        "id": "VersionStr",
        "type": "PIT_BSTR",
        "description": "파일의 버전 문자열 ex)5.0.0.3"
      },
      {
        "id": "VersionNum",
        "type": "PIT_UI4",
        "description": "파일의 버전 ex) 0x05000003 암호 여부 (현재는 파일 버전 3.0.0.0 이후 문서-한글97, 한글 워 디안, 한글 2002-에 대해서만 판단한다.)"
      },
      {
        "id": "Encrypted",
        "type": "PIT_I4",
        "description": "-1 : 판단 할 수 없음 0 : 암호가 걸려 있지 않음 양수: 암호가 걸려 있음."
      },
      {
        "id": "Compressed",
        "type": "PIT_I4",
        "description": "압축 여부"
      }
    ]
  },
  {
    "id": "FileOpen",
    "description": "파일 오픈",
    "sourcePage": 61,
    "items": [
      {
        "id": "SaveFileName",
        "type": "PIT_BSTR",
        "description": "유한다. 즉 OpenFileName과 SaveFileName은 이름만 다를 뿐 동 일한 아이템이다)"
      },
      {
        "id": "OpenFormat",
        "type": "PIT_BSTR",
        "description": "파일 형식. (OpenFileName과 마찬가지로 동일 아이템 지칭) SaveFormat"
      },
      {
        "id": "OpenReadOnly",
        "type": "PIT_UI1",
        "description": "읽기 전용 옵션 0x00 = 새 창으로 열기 0x01 = 현재 창의 새 탭에 열기"
      },
      {
        "id": "OpenFlag",
        "type": "PIT_UI1",
        "description": "0x02 = 현재 창의 현재 탭에 열기 0x03 = 위 세 값의 mask 0x04 =이미 열려진 문서일 때 다시 load할지 뭍을 것인지 0x08 = 초기 모드를 최근 작업 문서 상태로 0x10 = 문서 마당"
      },
      {
        "id": "SaveOverWrite",
        "type": "PIT_UI1",
        "description": "덮어 쓰기"
      },
      {
        "id": "ModifiedFlag",
        "type": "PIT_UI1",
        "description": "플래그",
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
        "description": "97 호환 저장"
      },
      {
        "id": "SaveHwp97",
        "type": "PIT_UI1",
        "description": "97 문서로 저장"
      },
      {
        "id": "SaveDistribute",
        "type": "PIT_UI1",
        "description": "배포용 문서로 저장"
      },
      {
        "id": "SaveDRMDoc",
        "type": "PIT_UI1",
        "description": "보안 문서로 저장"
      }
    ]
  },
  {
    "id": "FileSaveAs",
    "description": "파일 저장",
    "sourcePage": 62,
    "items": [
      {
        "id": "SaveFileName",
        "type": "PIT_BSTR",
        "description": "유한다. 즉 OpenFileName과 SaveFileName은 이름만 다를 뿐 동 일한 아이템이다)"
      },
      {
        "id": "OpenFormat",
        "type": "PIT_BSTR",
        "description": "파일 형식. (OpenFileName과 마찬가지로 동일 아이템 지칭) SaveFormat"
      },
      {
        "id": "OpenReadOnly",
        "type": "PIT_UI1",
        "description": "읽기 전용 옵션 0x00 = 새 창으로 열기 0x01 = 현재 창의 새 탭에 열기"
      },
      {
        "id": "OpenFlag",
        "type": "PIT_UI1",
        "description": "0x02 = 현재 창의 현재 탭에 열기 0x03 = 위 세 값의 mask 0x04 =이미 열려진 문서일 때 다시 load할지 뭍을 것인지 0x08 = 초기 모드를 최근 작업 문서 상태로 0x10 = 문서 마당"
      },
      {
        "id": "SaveOverWrite",
        "type": "PIT_UI1",
        "description": "덮어 쓰기"
      },
      {
        "id": "ModifiedFlag",
        "type": "PIT_UI1",
        "description": "플래그",
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
        "description": "97 호환 저장"
      },
      {
        "id": "SaveHwp97",
        "type": "PIT_UI1",
        "description": "97 문서로 저장"
      },
      {
        "id": "SaveDistribute",
        "type": "PIT_UI1",
        "description": "배포용 문서로 저장"
      },
      {
        "id": "SaveDRMDoc",
        "type": "PIT_UI1",
        "description": "보안 문서로 저장"
      }
    ]
  },
  {
    "id": "FileSaveBlock",
    "description": "블록 지정된 부분을 저장",
    "sourcePage": 63,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "파일 이름"
      },
      {
        "id": "Format",
        "type": "PIT_BSTR",
        "description": "파일 포맷"
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
    "description": "메일 보내기",
    "sourcePage": 64,
    "items": [
      {
        "id": "To",
        "type": "PIT_BSTR",
        "description": "받는 사람"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "메일 보내기 유형: 0 = 본문, 1 = 첨부파일"
      },
      {
        "id": "Subject",
        "type": "PIT_BSTR",
        "description": "제목"
      },
      {
        "id": "Filepath",
        "type": "PIT_BSRT",
        "description": "사용자가 직접 입력한 파일 (이 아이템은 Type 아이템이 1(첨부파 일)로 설정되어 있을 때만 유효하다)"
      }
    ]
  },
  {
    "id": "FileSetSecurity",
    "description": "배포용 문서",
    "sourcePage": 65,
    "items": [
      {
        "id": "Password",
        "type": "PIT_BSTR",
        "description": "배포용 문서 암호(7자리 이상 가능) 프린트 가능한 배포용 문서를 만들지의 여부"
      },
      {
        "id": "NoPrint",
        "type": "PIT_UI1",
        "description": "0 : 프린트 가능 1 : 프린트 가능하지 않음 문서 내용 복사가 가능한 배포용 문서를 만들지의 여부"
      },
      {
        "id": "NoCopy",
        "type": "PIT_UI1",
        "description": "0 : 복사 가능 1 : 복사 가능하지 않음"
      }
    ]
  },
  {
    "id": "FindReplace",
    "description": "찾기/찾아 바꾸기",
    "sourcePage": 66,
    "items": [
      {
        "id": "FindString",
        "type": "PIT_BSTR",
        "description": "찾을 문자열"
      },
      {
        "id": "ReplaceString",
        "type": "PIT_BSTR",
        "description": "바꿀 문자열"
      },
      {
        "id": "Direction",
        "type": "PIT_UI1",
        "description": "찾을 방향 : 0 = 아래쪽, 1 = 위쪽, 2 = 문서 전체"
      },
      {
        "id": "MatchCase",
        "type": "PIT_UI1",
        "description": "대소문자 구별 (on / off)"
      },
      {
        "id": "AllWordForms",
        "type": "PIT_UI1",
        "description": "문자열 결합 (on / off)"
      },
      {
        "id": "SeveralWords",
        "type": "PIT_UI1",
        "description": "여러 단어 찾기 (on / off)"
      },
      {
        "id": "UseWildCards",
        "type": "PIT_UI1",
        "description": "아무개 문자 (on / off)"
      },
      {
        "id": "WholeWordOnly",
        "type": "PIT_UI1",
        "description": "온전한 낱말 (on / off)"
      },
      {
        "id": "AutoSpell",
        "type": "PIT_UI1",
        "description": "토씨 자동 교정 (on / off)"
      },
      {
        "id": "ReplaceMode",
        "type": "PIT_UI1",
        "description": "찾아 바꾸기 모드 (on / off)"
      },
      {
        "id": "IgnoreFindString",
        "type": "PIT_UI1",
        "description": "찾을 문자열 무시 (on / off)"
      },
      {
        "id": "IgnoreReplaceStrin",
        "type": "PIT_UI1",
        "description": "바꿀 문자열 무시 (on / off) g"
      },
      {
        "id": "FindCharShape",
        "type": "PIT_SET",
        "description": "찾을 글자 모양",
        "subType": "CharShape"
      },
      {
        "id": "FindParaShape",
        "type": "PIT_SET",
        "description": "찾을 문단 모양",
        "subType": "ParaShape"
      },
      {
        "id": "ReplaceCharShape",
        "type": "PIT_SET",
        "description": "바꿀 글자 모양",
        "subType": "CharShape"
      },
      {
        "id": "ReplaceParaShape",
        "type": "PIT_SET",
        "description": "바꿀 문단 모양",
        "subType": "ParaShape"
      },
      {
        "id": "FindStyle",
        "type": "PIT_BSTR",
        "description": "찾을 스타일"
      },
      {
        "id": "ReplaceStyle",
        "type": "PIT_BSTR",
        "description": "바꿀 스타일"
      },
      {
        "id": "IgnoreMessage",
        "type": "PIT_UI1",
        "description": "메시지박스 표시 안함. (on / off)"
      },
      {
        "id": "HanjaFromHangul",
        "type": "PIT_UI1",
        "description": "한글임으로 한자 차기"
      },
      {
        "id": "FindJaso",
        "type": "PIT_UI1",
        "description": "자소로 찾기 (on / off)"
      },
      {
        "id": "FindRegExp",
        "type": "PIT_UI1",
        "description": "정규식(조건식)으로 찾기 (on / off) (ver:0x06050107)"
      },
      {
        "id": "FindType",
        "type": "PIT_UI1",
        "description": "다시 찾기를 할 때 마지막으로 실행한 [찾기 TRUE]를 할 것인가 [찾아가기 FALSE]할 것인가의 여부 (ver:0x06050110)"
      }
    ]
  },
  {
    "id": "FlashProperties",
    "description": "플래시 파일 삽입 시 필요한 옵션",
    "sourcePage": 67,
    "items": [
      {
        "id": "Base",
        "type": "PIT_BSTR",
        "description": "경로의 Base"
      },
      {
        "id": "Qulaity",
        "type": "PIT_BSTR",
        "description": "재생 품질"
      },
      {
        "id": "Scale",
        "type": "PIT_BSTR",
        "description": "스케일"
      },
      {
        "id": "WMode",
        "type": "PIT_BSTR",
        "description": "윈도우 모드"
      },
      {
        "id": "AutoPlay",
        "type": "PIT_UI1",
        "description": "자동 재생 여부 : 0 = off, 1 = on"
      },
      {
        "id": "LoopPlay",
        "type": "PIT_UI1",
        "description": "반복 재생 여부 : 0 = off, 1 = on"
      },
      {
        "id": "ShowMenu",
        "type": "PIT_UI1",
        "description": "메뉴 보이기 : 0 = Hide, 1 = Show"
      },
      {
        "id": "BgColor",
        "type": "PIT_UI4",
        "description": "배경색 (COLORREF)"
      },
      {
        "id": "NumberFormat",
        "type": "PIT_UI1",
        "description": "번호모양"
      },
      {
        "id": "UserChar",
        "type": "PIT_UI2",
        "description": "사용자 기호 (WCHAR)"
      },
      {
        "id": "PrefixChar",
        "type": "PIT_UI2",
        "description": "앞 장식 문자 (WCHAR)"
      },
      {
        "id": "Suffix",
        "type": "PIT_UI2",
        "description": "뒤 장식 문자 (WCHAR) 위치 - 각주용 옵션 (한 페이지 내에서 각주를 다단에 어떻게 위치시킬 지) 0 = 각 단마다 따로 배열"
      },
      {
        "id": "PlaceAt",
        "type": "PIT_UI1",
        "description": "1 = 통단으로 배열 2 = 가장 오른쪽 단에 배열 - 미주용 옵션 (문서 내에서 미주를 어디에 위치시킬지) 0 = 문서의 마지막 1 = 구역의 마지막 번호 매기기"
      },
      {
        "id": "Restart",
        "type": "PIT_UI1",
        "description": "0 = 앞 구역에 이어서 1 = 현재 구역부터 새로 시작 2 = 쪽마다 새로 시작 (각주 전용)"
      },
      {
        "id": "NewNumber",
        "type": "PIT_UI2",
        "description": "시작 번호 (1 .. n) 번호 매기기 값이 ‘쪽마다 새로 시작’ 일 때만 사용된다."
      },
      {
        "id": "LineLength",
        "type": "PIT_I4",
        "description": "구분선 길이 (HWPUNIT)"
      },
      {
        "id": "LineType",
        "type": "PIT_UI1",
        "description": "선 종류"
      },
      {
        "id": "LineWidth",
        "type": "PIT_UI1",
        "description": "선 굵기"
      },
      {
        "id": "SpaceAboveLine",
        "type": "PIT_I4",
        "description": "구분선 위 여백 (HWPUNIT)"
      },
      {
        "id": "SpaceBelowLine",
        "type": "PIT_I4",
        "description": "구분선 아래 여백 (HWPUNIT)"
      },
      {
        "id": "SpaceBetweenNotes",
        "type": "PIT_I4",
        "description": "주석 사이 여백 (HWPUNIT)"
      },
      {
        "id": "SuperScript",
        "type": "PIT_UI1",
        "description": "각주 내용 중 번호 코드의 모양을 위첨자 형식으로 할지"
      },
      {
        "id": "BeneathText",
        "type": "PIT_UI1",
        "description": "텍스트에 이어 바로 출력할지 여부 (on / off)"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "선 색깔 (COLORREF)"
      }
    ]
  },
  {
    "id": "FtpUpload",
    "description": "웹서버로 올리기",
    "sourcePage": 69,
    "items": [
      {
        "id": "Server",
        "type": "PIT_BSTR",
        "description": "서버 내임",
        "subType": "Ftp"
      },
      {
        "id": "UserName",
        "type": "PIT_BSTR",
        "description": "사용자 이름"
      },
      {
        "id": "Password",
        "type": "PIT_BSTR",
        "description": "사용자 패스워드"
      },
      {
        "id": "Directory",
        "type": "PIT_BSTR",
        "description": "디렉터리"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "파일 명"
      },
      {
        "id": "SiteName",
        "type": "PIT_ARRAY",
        "description": "사이트 이름",
        "subType": "PIT_BSTR"
      },
      {
        "id": "SaveType",
        "type": "PIT_UI",
        "description": "저장할 포맷. 0 = HTML 1 = HWP"
      }
    ]
  },
  {
    "id": "FtpDownload",
    "description": "웹서버로 올리기",
    "sourcePage": 70,
    "items": [
      {
        "id": "Server",
        "type": "PIT_BSTR",
        "description": "서버 내임",
        "subType": "Ftp"
      },
      {
        "id": "UserName",
        "type": "PIT_BSTR",
        "description": "사용자 이름"
      },
      {
        "id": "Password",
        "type": "PIT_BSTR",
        "description": "사용자 패스워드"
      },
      {
        "id": "Directory",
        "type": "PIT_BSTR",
        "description": "디렉터리"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "파일 명"
      },
      {
        "id": "SaveType",
        "type": "PIT_UI",
        "description": "저장할 포맷. 0 = HTML 1 = HWP 2: OOXML"
      }
    ]
  },
  {
    "id": "GotoE",
    "description": "찾아가기",
    "sourcePage": 71,
    "items": [
      {
        "id": "SetSelectionIndex",
        "type": "PIT_UI1",
        "description": "현재 선택되어 있는 라디오 값"
      },
      {
        "id": "DialogResult",
        "type": "PIT_UI",
        "description": "대화상자의 반환값"
      }
    ]
  },
  {
    "id": "GridInfo",
    "description": "격자 정보",
    "sourcePage": 72,
    "items": [
      {
        "id": "Method",
        "type": "PIT_UI1",
        "description": "0 = 격자와 상관없이 1 = 격자 자석효과 2 = 격자에만 붙음"
      },
      {
        "id": "Align",
        "type": "PIT_UI1",
        "description": "격자 기준(쪽 = 0 / 종이 = 1)"
      },
      {
        "id": "HorzAlign",
        "type": "PIT_I",
        "description": "격자 기준 가로 offset (단위 HWPUNIT)"
      },
      {
        "id": "VertAlign",
        "type": "PIT_I",
        "description": "격자 기준 세로 offset (단위 HWPUNIT) 격자 모양"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = 점 격자 1 = 선 격자"
      },
      {
        "id": "HorzSpan",
        "type": "PIT_UI",
        "description": "가로 간격 (단위 HWPUNIT)"
      },
      {
        "id": "VertSpan",
        "type": "PIT_UI",
        "description": "세로 간격 (단위 HWPUNIT)"
      },
      {
        "id": "HorzRange",
        "type": "PIT_U",
        "description": "가로 자석 범위 (단위 HWPUNIT)"
      },
      {
        "id": "VertRange",
        "type": "PIT_U",
        "description": "세로 자석 범위 (단위 HWPUNIT)"
      },
      {
        "id": "Show",
        "type": "PIT_UI1",
        "description": "격자 보이기 ( on / off )"
      },
      {
        "id": "ZOrder",
        "type": "PIT_UI1",
        "description": "격자 위치(글 위/글 아래) (ZOrder) 0 = 글 아래, 1 = 글 위 선격자 보이기 종류"
      },
      {
        "id": "ViewLine",
        "type": "PIT_UI1",
        "description": "0 = 모두 1 = 수평격자만 2 = 수직격자만"
      }
    ]
  },
  {
    "id": "HeaderFooter",
    "description": "머리말/꼬리말",
    "sourcePage": 73,
    "items": [
      {
        "id": "HeaderFooterCtrlType",
        "type": "PIT_UI",
        "description": "머리말/꼬리말 종류 : 0 = 머리말, 1 = 꼬리말"
      },
      {
        "id": "HeaderFooterStyle",
        "type": "PIT_UI",
        "description": "머리말/꼬리말 마당 스타일"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "머리말/꼬리말 위치 : 0 = 양쪽, 1 = 짝수쪽, 2 = 홀수쪽"
      }
    ]
  },
  {
    "id": "HyperLink",
    "description": "하이퍼링크 삽입 / 고치기",
    "sourcePage": 74,
    "items": [
      {
        "id": "Text",
        "type": "PIT_BSTR",
        "description": "하이퍼링크가 표시되는 문자열"
      },
      {
        "id": "Command",
        "type": "PIT_BSTR",
        "description": "String 참조",
        "subType": "Command"
      },
      {
        "id": "NoLInk",
        "type": "PIT_I",
        "description": "\"연결 안함\" 여부"
      },
      {
        "id": "ShapeObject",
        "type": "PIT_I",
        "description": "그림 및 그리기객체가 Selection되어 있는지 여부"
      },
      {
        "id": "DirectInsert",
        "type": "PIT_I",
        "description": "현재 캐럿 위치에 무조건 하이퍼링크 삽입 여부 (블록지정 상태면 블록해제 후 삽입)"
      }
    ]
  },
  {
    "id": "HyperlinkJump",
    "description": "하이퍼링크 이동",
    "sourcePage": 75,
    "items": [
      {
        "id": "Source",
        "type": "PIT_BSTR",
        "description": "에 대한 Object Path",
        "subType": "Source"
      },
      {
        "id": "Target",
        "type": "PIT_BSTR",
        "description": "이동할 Target에 대한 Object Path"
      }
    ]
  },
  {
    "id": "Idiom",
    "description": "상용구",
    "sourcePage": 76,
    "items": [
      {
        "id": "InputText",
        "type": "PIT_BSTR",
        "description": "삽입될 스트링/끼워 넣을 파일"
      },
      {
        "id": "InputType",
        "type": "PIT_UI1",
        "description": "입력기 상용구/한글 상용구"
      }
    ]
  },
  {
    "id": "IndexMark",
    "description": "찾아보기 표식",
    "sourcePage": 77,
    "items": [
      {
        "id": "First",
        "type": "PIT_BSTR",
        "description": "첫 번째 키"
      },
      {
        "id": "Second",
        "type": "PIT_BSTR",
        "description": "두 번째 키"
      }
    ]
  },
  {
    "id": "InputDateStyle",
    "description": "날짜/시간 표시 형식",
    "sourcePage": 78,
    "items": [
      {
        "id": "DateStyleType",
        "type": "PIT_UI1",
        "description": "문자열로 넣기/코드로 넣기"
      },
      {
        "id": "DateStyleDataForm",
        "type": "PIT_BSTR",
        "description": "필드 컨트롤의 안내문/지시문"
      }
    ]
  },
  {
    "id": "InsertFieldTemplate",
    "description": "문서마당 정보",
    "sourcePage": 79,
    "items": [
      {
        "id": "ShowSingle",
        "type": "PIT_I",
        "description": "1 = 개인 정보 페이지만 보이기 2 = 문서 요약 페이지만 보이기 3 = 만든 날짜 페이지만 보이기 4 = 파일 경로 페이지만 보이기"
      },
      {
        "id": "TemplateDirection",
        "type": "PIT_BSTR",
        "description": "필드 컨트롤의 안내문/지시문"
      },
      {
        "id": "TemplateHelp",
        "type": "PIT_BSTR",
        "description": "필드 컨트롤의 도움말"
      },
      {
        "id": "TemplateName",
        "type": "PIT_BSTR",
        "description": "필드 이름 (name) 필드의 종류."
      },
      {
        "id": "TemplateType",
        "type": "PIT_UI1",
        "description": "/Help/Name의 값이 실제로 적용되는 위치 : 0 = 누름틀, 1 = 개인 정보, 2 = 문서 요약, 3 = 만든 날짜, 4 = 파일 경로 필드의 양식모드에서 편집여부",
        "subType": "TemplateDirection"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "0 = 편집 불가능 1 = 편집 가능 ※ 필드(Field)는 꺽쇠(『』)로 둘러싸인 정보를 말하며, 문서마당의 모든 정보는 필드로 구성된다. ※ ShowSingle 아이템은 OnPopupDialog() 수행 시, 원하는 페이지만 대화상자에 표시하고 싶을 때 사용한다."
      }
    ]
  },
  {
    "id": "InsertFile",
    "description": "파일 삽입",
    "sourcePage": 80,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "삽입할 파일의 이름"
      },
      {
        "id": "FileFormat",
        "type": "PIT_BSTR",
        "description": "삽입할 파일의 확장자"
      },
      {
        "id": "FileArg",
        "type": "PIT_BSTR",
        "description": "삽입할 파일의 Argument"
      },
      {
        "id": "KeepSection",
        "type": "PIT_UI1",
        "description": "끼워 넣을 문서를 구역으로 나누어 쪽 모양을 유지할지 여부 on / off (ver:0x0605010E)"
      },
      {
        "id": "KeepCharshape",
        "type": "PIT_UI1",
        "description": "끼워 넣을 문서의 글자 모양을 유지할지 여부 on / off"
      },
      {
        "id": "KeepParashape",
        "type": "PIT_UI1",
        "description": "끼워 넣을 문서의 문단 모양을 유지할지 여부 on / onff"
      },
      {
        "id": "KeepStyle",
        "type": "PIT_UI1",
        "description": "끼워 넣을 문서의 스타일을 유지할지 여부 on / onff"
      },
      {
        "id": "MoveNextPos",
        "type": "PIT_UI1",
        "description": "삽입하고 삽입된 파일 다음 위치로 이동할지 여부"
      }
    ]
  },
  {
    "id": "InsertText",
    "description": "텍스트 삽입",
    "sourcePage": 81,
    "items": [
      {
        "id": "Text",
        "type": "PIT_BSTR",
        "description": "삽입할 텍스트"
      }
    ]
  },
  {
    "id": "KeyMacro",
    "description": "키매크로",
    "sourcePage": 82,
    "items": [
      {
        "id": "Index",
        "type": "PIT_I",
        "description": "정의(or 실행)할 매크로의 인덱스."
      },
      {
        "id": "RepeatCount",
        "type": "PIT_I",
        "description": "실행 반복 횟수"
      },
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "매크로 이름"
      }
    ]
  },
  {
    "id": "Label",
    "description": "라벨",
    "sourcePage": 83,
    "items": [
      {
        "id": "TopMargin",
        "type": "PIT_I4",
        "description": "용지 여백 : 위쪽"
      },
      {
        "id": "LeftMargin",
        "type": "PIT_I4",
        "description": "용지 여백 : 왼쪽"
      },
      {
        "id": "BoxWidth",
        "type": "PIT_I4",
        "description": "이름표 크기 : 폭"
      },
      {
        "id": "BoxLength",
        "type": "PIT_I4",
        "description": "이름표 크기 : 길이"
      },
      {
        "id": "MarginHor",
        "type": "PIT_I4",
        "description": "이름표 크기 : 좌우"
      },
      {
        "id": "BoxMarginVer",
        "type": "PIT_I4",
        "description": "이름표 크기 : 상하"
      },
      {
        "id": "LabelCols",
        "type": "PIT_I4",
        "description": "이름표 개수 : 줄 수 (or 세로)"
      },
      {
        "id": "LabelRows",
        "type": "PIT_I4",
        "description": "이름표 개수 : 칸 수 (or 가로)"
      },
      {
        "id": "LandScape",
        "type": "PIT_I4",
        "description": "용지 방향"
      },
      {
        "id": "PageWidth",
        "type": "PIT_I4",
        "description": "문서의 폭"
      },
      {
        "id": "PageLen",
        "type": "PIT_I4",
        "description": "문서의 길이"
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
    "description": "문서 연결",
    "sourcePage": 84,
    "items": [
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "연결 문서 FILE NAME"
      },
      {
        "id": "PageInherit",
        "type": "PIT_UI1",
        "description": "= 쪽 번호 잇기, FALSE = 쪽 번호 잇지 않기.",
        "subType": "TRUE"
      },
      {
        "id": "FootnoteInherit",
        "type": "PIT_UI1",
        "description": "= 각주 번호 잇기, FALSE = 각주 번호 잇지 않기.",
        "subType": "TRUE"
      }
    ]
  },
  {
    "id": "ListParaPos",
    "description": "커서의 위치",
    "sourcePage": 85,
    "items": [
      {
        "id": "List",
        "type": "PIT_UI",
        "description": "현재 위치한 리스트"
      },
      {
        "id": "Para",
        "type": "PIT_UI",
        "description": "현재 위치한 문단"
      },
      {
        "id": "Pos",
        "type": "PIT_UI",
        "description": "현재 위치한 글자"
      }
    ]
  },
  {
    "id": "ListProperties",
    "description": "서브 리스트의 속성",
    "sourcePage": 86,
    "items": [
      {
        "id": "TextDirection",
        "type": "PIT_UI1",
        "description": "글자 방향. (세부 스펙은 미정) 경계에서 줄 나눔 방식"
      },
      {
        "id": "LineWrap",
        "type": "PIT_UI1",
        "description": "0 = 일반적인 줄 바꿈 1 = 줄을 바꾸지 않음 2 = 자간을 조정하여 한 줄을 유지 세로 정렬"
      },
      {
        "id": "VertAlign",
        "type": "PIT_UI1",
        "description": "0 = 위로 정렬 1 = 가운데 정렬 2 = 아래로 정렬"
      },
      {
        "id": "MarginLeft",
        "type": "PIT_I4",
        "description": "각 방향 여백 : 왼쪽"
      },
      {
        "id": "MarginRight",
        "type": "PIT_I4",
        "description": "각 방향 여백 : 오른쪽"
      },
      {
        "id": "MarginTop",
        "type": "PIT_I4",
        "description": "각 방향 여백 : 위"
      },
      {
        "id": "MarginBottom",
        "type": "PIT_I4",
        "description": "각 방향 여백 : 아래"
      }
    ]
  },
  {
    "id": "MailMergeGenerate",
    "description": "메일 머지 만들기",
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
        "description": "문서 경로.",
        "subType": "Hwp"
      },
      {
        "id": "HwpId",
        "type": "PIT_UI",
        "description": "문서 ID",
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
        "description": "1 = KSSM 2 = GB 3 = BIG5 4 = SJIS 출력 방향 0 = PRINTER"
      },
      {
        "id": "Output",
        "type": "PIT_UI1",
        "description": "1 = PREVIEW 2 = FILE 3 = MAIL"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "파일 이름"
      },
      {
        "id": "Continue",
        "type": "PIT_UI1",
        "description": "쪽번호 잇기"
      },
      {
        "id": "PrintSet",
        "type": "PIT_SET",
        "description": "인쇄 선택 사항",
        "subType": "Print"
      },
      {
        "id": "Subject",
        "type": "PIT_BSTR",
        "description": "메일 제목 메일 종류"
      },
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = 본문 1 = 첨부파일"
      },
      {
        "id": "Field",
        "type": "PIT_BSTR",
        "description": "메일 주소 필드"
      },
      {
        "id": "FieldUpdate",
        "type": "PIT_UI1",
        "description": "필드 단위 업데이트"
      },
      {
        "id": "NxlPath",
        "type": "PIT_BSTR",
        "description": "넥셀 파일 경로"
      }
    ]
  },
  {
    "id": "MakeContents",
    "description": "차례 만들기",
    "sourcePage": 88,
    "items": [
      {
        "id": "Make",
        "type": "PIT_UI",
        "description": "0x08: 수식 차례 제목 차례를 지정한 경우에는 다음의 값을 추가로 지정할 수 있다. 0x10: 개요 문단으로 모으기 0x20: 스타일로 모으기 0x40: 차례코드로 모으기"
      },
      {
        "id": "Level",
        "type": "PIT_I",
        "description": "개요 수준"
      },
      {
        "id": "AutoTabRight",
        "type": "PIT_I1",
        "description": "문단 오른쪽 끝 자동 탭 여부 : 0 = 자동 탭 사용안함, 1 = 자동 탭 사용"
      },
      {
        "id": "Leader",
        "type": "PIT_UI",
        "description": "오른쪽 끝 탭 채울 모양(선 종류)"
      },
      {
        "id": "Styles",
        "type": "PIT_ARRAY",
        "description": "모을 스타일 목록",
        "subType": "PIT_UI"
      },
      {
        "id": "StyleName",
        "type": "PIT_BSTR",
        "description": "모을 스타일 이름들"
      },
      {
        "id": "OutFileName",
        "type": "PIT_BSTR",
        "description": "만들 파일 이름. “”이면 현재 문서에 생성 만들 위치. 반드시 0이어야 한다. (글 컨트롤은 탭이 없으므로)"
      },
      {
        "id": "Position",
        "type": "PIT_BSTR",
        "description": "0 = 현재 문서 1 = 새 탭으로 만들 차례 형식"
      },
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "0 : 필드로 넣기 1 : 문자열로 넣기"
      },
      {
        "id": "Hyperlink",
        "type": "PIT_UI",
        "description": "하이퍼링크 연결"
      }
    ]
  },
  {
    "id": "MarkpenShape",
    "description": "형광펜 모양",
    "sourcePage": 89,
    "items": [
      {
        "id": "Color",
        "type": "PIT_UI4",
        "description": "형광펜색 (COLORREF)"
      }
    ]
  },
  {
    "id": "MasterPage",
    "description": "바탕쪽",
    "sourcePage": 90,
    "items": [
      {
        "id": "Type",
        "type": "PIT_I4",
        "description": "0 = 양쪽 1 = 짝수쪽 2 = 홀수쪽"
      },
      {
        "id": "Duplicate",
        "type": "PIT_UI1",
        "description": "기존 바탕쪽과 겹침 (On/Off)"
      },
      {
        "id": "Front",
        "type": "PIT_UI1",
        "description": "바탕쪽과 앞으로 보내기 (On/Off) 적용대상"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "0 = 현재구역 1 = 문서 전체"
      },
      {
        "id": "CopySectionNumber",
        "type": "PIT_UI4",
        "description": "바탕쪽 가져오기의 구역 번호 바탕쪽 가져우기의 바탕쪽 종류들 0 = 양 쪽"
      },
      {
        "id": "CopyMasterPageTypes",
        "type": "PIT_ARRAY",
        "description": "1 = 짝수 쪽 2 = 홀수 쪽 3 = 구역 마지막쪽",
        "subType": "PIT_UI4"
      }
    ]
  },
  {
    "id": "MemoShape",
    "description": "메모 모양",
    "sourcePage": 91,
    "items": [
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "너비 (HWPUNIT)"
      },
      {
        "id": "LineType",
        "type": "PIT_UI1",
        "description": "선 종류"
      },
      {
        "id": "LineWidth",
        "type": "PIT_UI1",
        "description": "선 굵기"
      },
      {
        "id": "LineColor",
        "type": "PIT_UI4",
        "description": "선 색깔 (COLORREF)"
      },
      {
        "id": "FillColor",
        "type": "PIT_UI4",
        "description": "채우기 색깔 (COLORREF)"
      },
      {
        "id": "ActiveFillColor",
        "type": "PIT_UI4",
        "description": "활성화된 채우기 색깔 (COLORREF)"
      },
      {
        "id": "MemoType",
        "type": "PIT_UI4",
        "description": "메모 종류 - 현재 사용안 함 1 = 메모 넣기, 2 = 메모 지우기, 3 = 메모 고치기"
      }
    ]
  },
  {
    "id": "MousePos",
    "description": "마우스 위치",
    "sourcePage": 92,
    "items": [
      {
        "id": "XRelTo",
        "type": "PIT_UI4",
        "description": "0 : 종이 1 : 쪽 세로 상대적 기준"
      },
      {
        "id": "YRelTo",
        "type": "PIT_UI4",
        "description": "0 : 종이 1 : 쪽"
      },
      {
        "id": "Page",
        "type": "PIT_UI4",
        "description": "페이지 번호 ( 0 based)"
      },
      {
        "id": "X",
        "type": "PIT_I4",
        "description": "가로 클릭한 위치 (HWPUNIT)"
      },
      {
        "id": "Y",
        "type": "PIT_I4",
        "description": "세로 클릭한 위치 (HWPUNIT)"
      }
    ]
  },
  {
    "id": "MovieProperties",
    "description": "동영상 파일 삽입 시 필요한 옵션",
    "sourcePage": 93,
    "items": [
      {
        "id": "Base",
        "type": "PIT_BSTR",
        "description": "동영상 파일의 경로"
      },
      {
        "id": "Caption",
        "type": "PIT_BSTR",
        "description": "자막 파일의 경로"
      },
      {
        "id": "AutoPlay",
        "type": "PIT_UI1",
        "description": "자동 재생 여부 : 0 = off, 1 = on"
      },
      {
        "id": "AutoRewind",
        "type": "PIT_UI1",
        "description": "되감기 여부 : 0 = off, 1 = on"
      },
      {
        "id": "ShowMenu",
        "type": "PIT_UI1",
        "description": "메뉴 보이기 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowCtrlPanel",
        "type": "PIT_UI1",
        "description": "컨트롤 패널 보이기 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowPosCtrl",
        "type": "PIT_UI1",
        "description": "위치 컨트롤 보이기 : 0 = Hide, 1 = Show"
      },
      {
        "id": "EnablePos",
        "type": "PIT_UI1",
        "description": "위치 컨트롤 조절 여부 : 0 = Disable, 1 = Enable"
      },
      {
        "id": "ShowTrackBar",
        "type": "PIT_UI1",
        "description": "음량 조절막대(Track Bar) 보이기 : 0 = Hide, 1 = Show"
      },
      {
        "id": "EnableTrack",
        "type": "PIT_UI1",
        "description": "음량 조절 여부 : 0 = Disable, 1 = Enable"
      },
      {
        "id": "ShowChaption",
        "type": "PIT_UI1",
        "description": "자막 보이기 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowAudio",
        "type": "PIT_UI1",
        "description": "오디오 설정 보이기 : 0 = Hide, 1 = Show"
      },
      {
        "id": "ShowStatus",
        "type": "PIT_UI1",
        "description": "상태바 보기 (진행시간 등을 표시) : 0 = Hide, 1 = Show"
      }
    ]
  },
  {
    "id": "OleCreation",
    "description": "OLE 개체 생성",
    "sourcePage": 94,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = 새로 개체 생성 1 = 파일로부터 개체 생성 2 = 파일로 링크된 개체 생성"
      },
      {
        "id": "Clsid",
        "type": "PIT_BSTR",
        "description": "클래스 ID ('새로 개체 생성‘일 때 사용)"
      },
      {
        "id": "Path",
        "type": "PIT_BSTR",
        "description": "파일 경로 (‘파일로 링크된 개체 생성’, ‘파일로부터 개체 생성’일 때 사용)"
      },
      {
        "id": "Aspect",
        "type": "PIT_I",
        "description": "생성된 OLE 개체를 아이콘으로 표시할지 여부 : 0 = 내용으로 표시, 1 = 아이콘으로 표시"
      },
      {
        "id": "IconMetafile",
        "type": "PIT_BINDATA",
        "description": "가 아이콘일 때 적용할 아이콘 데이터 Aspect가 아이콘일 때 아이콘 매핑모드 1 = MM_TEXT 2 = MM_LOMETRIC 3 = MM_HIMETRIC",
        "subType": "Aspect"
      },
      {
        "id": "IconMM",
        "type": "PIT_I",
        "description": "4 = MM_LOENGLISH 5 = MM_HIENGLISH 6 = MM_TWIPS 7 = MM_ISOTROPIC 8 = MM_ANISOTROPIC ※ MFC의 매핑모드와 값/의미가 동일하다."
      },
      {
        "id": "IconXext",
        "type": "PIT_I",
        "description": "가 아이콘일 때 X축 매핑단위",
        "subType": "Aspect"
      },
      {
        "id": "IconYext",
        "type": "PIT_I",
        "description": "가 아이콘일 때 Y축 매핑단위",
        "subType": "Aspect"
      },
      {
        "id": "InnerOCX",
        "type": "PIT_I",
        "description": "글 내부에서 사용되는 OCX인지 여부 (예: 글의 Chart OLE)"
      },
      {
        "id": "SoProperties",
        "type": "PIT_SET",
        "description": "초기 shape object 속성",
        "subType": "ShapeObject"
      },
      {
        "id": "FlashProperties",
        "type": "PIT_SET",
        "description": "플래시 파일 삽입 시 필요한 옵션 셋",
        "subType": "FlashProperties"
      },
      {
        "id": "MovieProperties",
        "type": "PIT_SET",
        "description": "동영상 파일 삽입 시 필요한 옵션 셋",
        "subType": "MovieProperties"
      }
    ]
  },
  {
    "id": "PageBorderFill",
    "description": "구역의 쪽 테두리/배경",
    "sourcePage": 95,
    "items": [
      {
        "id": "TextBorder",
        "type": "PIT_UI1",
        "description": "= 본문 기준, FALSE = 종이 기준",
        "subType": "TRUE"
      },
      {
        "id": "HeaderInside",
        "type": "PIT_UI1",
        "description": "머리말 포함 (on / off)"
      },
      {
        "id": "FooterInside",
        "type": "PIT_UI1",
        "description": "꼬리말 포함 (on / off) 채울 영역"
      },
      {
        "id": "FillArea",
        "type": "PIT_UI1",
        "description": "0 = 종이 1 = 쪽 2 = 테두리"
      },
      {
        "id": "OffsetLeft",
        "type": "PIT_I",
        "description": "4방향 간격 (HWPUNIT) : 왼쪽"
      },
      {
        "id": "OffsetRight",
        "type": "PIT_I",
        "description": "4방향 간격 (HWPUNIT) : 오른쪽"
      },
      {
        "id": "OffsetTop",
        "type": "PIT_I",
        "description": "4방향 간격 (HWPUNIT) : 위"
      },
      {
        "id": "OffsetBottom",
        "type": "PIT_I",
        "description": "4방향 간격 (HWPUNIT) : 아래 왼쪽 라인 스타일 0 실선 1 파선 2 점선 3 일점쇄선 4 이점쇄선 5 긴 파선 6 원형 점선 7 이중 실선"
      },
      {
        "id": "BorderTypeLeft",
        "type": "PIT_UI2",
        "description": "8 얇고 굵은 이중선 9 굵고 얇은 이중선 10 얇고 굵고 얇은 삼중선 11 물결선 12 이중 물결선 13 3D 굵은선 14 3D 굵은선 (광원 반대) 15 3D 실선 16 3D 실선 (광원 반대)"
      },
      {
        "id": "BorderTypeRight",
        "type": "PIT_UI2",
        "description": "오른쪽 라인 스타일"
      },
      {
        "id": "BorderTypeTop",
        "type": "PIT_UI2",
        "description": "위쪽 라인 스타일"
      },
      {
        "id": "BorderTypeBottom",
        "type": "PIT_UI2",
        "description": "아래쪽 라인 스타일 왼쪽 테두리 두께 0 0.1mm 1 0.12mm 2 0.15mm 3 0.2mm 4 0.25mm 5 0.3mm 6 0.4mm"
      },
      {
        "id": "BorderWidthLeft",
        "type": "PIT_UI1",
        "description": "7 0.5mm 8 0.6mm 9 0.7mm 10 1.0mm 11 1.5mm 12 2.0mm 13 3.00mm 14 4.00mm 15 5.00mm"
      },
      {
        "id": "BorderWidthRight",
        "type": "PIT_UI1",
        "description": "오른쪽 테두리 두께"
      },
      {
        "id": "BorderWidthTop",
        "type": "PIT_UI1",
        "description": "위쪽 테두리 두께"
      },
      {
        "id": "BorderWidthBottom",
        "type": "PIT_UI1",
        "description": "아래쪽 테두리 두께"
      },
      {
        "id": "BorderCorlorLeft",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔(COLORREF)"
      },
      {
        "id": "BorderColorRight",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔(COLORREF)"
      },
      {
        "id": "BorderColorTop",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔(COLORREF)"
      },
      {
        "id": "BorderColorBottom",
        "type": "PIT_UI4",
        "description": "4방향 테두리 색깔(COLORREF)"
      },
      {
        "id": "SlashFlag",
        "type": "PIT_UI2",
        "description": "슬래쉬 대각선 플랙 (bit 0-2가 시계 방향으로 각각의 대각선 유무 를 나타냄"
      },
      {
        "id": "BackSlashFlag",
        "type": "PIT_UI2",
        "description": "백슬래쉬 대각선 플랙 (bit 0-2가 반시계 방향으로 각각의 대각선 유무를 나타냄)"
      },
      {
        "id": "DiagonalType",
        "type": "PIT_UI2",
        "description": "대각선 종류 선 종류 대각선 두께 0 0.1mm 1 0.12mm 2 0.15mm 3 0.2mm 4 0.25mm 5 0.3mm 6 0.4mm"
      },
      {
        "id": "DiagonalWidth",
        "type": "PIT_UI1",
        "description": "7 0.5mm 8 0.6mm 9 0.7mm 10 1.0mm 11 1.5mm 12 2.0mm 13 3.00mm 14 4.00mm 15 5.00mm"
      },
      {
        "id": "DiagonalColor",
        "type": "PIT_UI4",
        "description": "대각선 색깔 (COLORREF)"
      },
      {
        "id": "BorderFill3D",
        "type": "PIT_UI1",
        "description": "3차원 효과 on/off"
      },
      {
        "id": "Shadow",
        "type": "PIT_UI1",
        "description": "그림자 효과 on/off"
      },
      {
        "id": "FillAttr",
        "type": "PIT_SET",
        "description": "배경 채우기 속성",
        "subType": "DrawFillAttr"
      },
      {
        "id": "CrookedSlashFlag",
        "type": "PIT_UI2",
        "description": "꺽어진 대각선 플랙 (bit 0, 1이 각각 slash, back slash의 가 운데 대각선이 꺽어진 대각선임을 나타낸다.)"
      },
      {
        "id": "BreakCellSeparate",
        "type": "PIT_UI1",
        "description": "자동으로 나뉜 표의 경계선 설정 TRUE/FALSE Line 음영 비율 증가/감소."
      },
      {
        "id": "ShadeFaceColorInc",
        "type": "PIT_UI1",
        "description": "음영 비율 증가/감소 엑션에서 전달 됨. 구현용으로만 쓰임. Dec 이 아이템이 없으면(음영 비율 증가/감소는 없는 것이고 있다면 값 이 TRUE이면 증가, FALSE이면 감소이다.)"
      },
      {
        "id": "CounterSlashFlag",
        "type": "PIT_UI1",
        "description": "슬래쉬 대각선의 역방향 플랙(우상향 대각선)"
      },
      {
        "id": "CounterBackSlashF",
        "type": "PIT_UI1",
        "description": "역슬래쉬 대각선의 역방향 플랙(좌상향 대각선) lag"
      },
      {
        "id": "CenterLineFlag",
        "type": "PIT_UI1",
        "description": "중심선"
      },
      {
        "id": "CrookedSlashFlag1",
        "type": "PIT_UI1",
        "description": "상향 꺾어진 대각선"
      },
      {
        "id": "CrookedSlashFlag2",
        "type": "PIT_UI1",
        "description": "하향 꺽어진 대각선"
      }
    ]
  },
  {
    "id": "PageDef",
    "description": "구역 내의 용지 설정 속성",
    "sourcePage": 99,
    "items": [
      {
        "id": "PaperWidth",
        "type": "PIT_I4",
        "description": "용지 가로 크기 (HWPUNIT)"
      },
      {
        "id": "PaperHeight",
        "type": "PIT_I4",
        "description": "용지 세로 크기 (HWPUNIT)"
      },
      {
        "id": "Landscape",
        "type": "PIT_I4",
        "description": "용지 방향. 0 = 좁게, 1 = 넓게"
      },
      {
        "id": "LeftMargin",
        "type": "PIT_I4",
        "description": "왼쪽 여백 (HWPUNIT)"
      },
      {
        "id": "RightMargin",
        "type": "PIT_I4",
        "description": "오른쪽 여백 (HWPUNIT)"
      },
      {
        "id": "TopMargin",
        "type": "PIT_I4",
        "description": "위 여백 (HWPUNIT)"
      },
      {
        "id": "BottomMargin",
        "type": "PIT_I4",
        "description": "아래 여백 (HWPUNIT)"
      },
      {
        "id": "HeaderLen",
        "type": "PIT_I4",
        "description": "머리말 길이 (HWPUNIT)"
      },
      {
        "id": "FooterLen",
        "type": "PIT_I4",
        "description": "꼬리말 길이 (HWPUNIT)"
      },
      {
        "id": "GutterLen",
        "type": "PIT_I4",
        "description": "제본 여백 (HWPUNIT)"
      },
      {
        "id": "GutterType",
        "type": "PIT_UI1",
        "description": "편집 방법. 0 = 한쪽 편집, 1 = 맞쪽 편집, 2 = 위로 넘기기 적용범위 0 = 선택된 구역"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "1 = 선택된 문자열 2 = 현재 구역 3 = 문서전체 4 = 새 구역 : 현재 위치부터 새로 적용범위의 분류 (대화상자를 호출할 경우 사용) 0x01 = 선택된 구역"
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": "0x02 = 선택된 문자열 0x04 = 현재 구역 0x08 = 문서전체 0x10 = 새 구역 : 현재 위치부터 새로 Example : 편집용지 설정 예제 C++ { DHwpAction dact = m_cHwpCtrl.CreateAction(\"PageSetup\"); DHwpParameterSet dset = dact.CreateSet(); dact.GetDefault(dset); dset.SetItem (\"ApplyTo\", (COleVariant)(long)3); DHwpParameterSet _dset = dset.CreateItemSet (\"PageDef\", \"PageDef\"); // 1mm = 283.465 HWPUNITs _dset.SetItem (\"TopMargin\", (COleVariant)(long)5668); _dset.SetItem (\"BottomMargin\", (COleVariant)(long)5668); _dset.SetItem (\"LeftMargin\", (COleVariant)(long)2834); _dset.SetItem (\"RightMargin\", (COleVariant)(long)2834); _dset.SetItem (\"HeaderLen\", (COleVariant)(long)1417); _dset.SetItem (\"FooterLen\", (COleVariant)(long)1417); _dset.SetItem (\"GutterLen\", (COleVariant)(long)0); dact.Execute(dset); }"
      }
    ]
  },
  {
    "id": "PageHiding",
    "description": "감추기",
    "sourcePage": 101,
    "items": [
      {
        "id": "Fields",
        "type": "PIT_UI",
        "description": "0x04 = 바탕쪽 0x08 = 테두리 0x10 = 배경 0x20 = 쪽번호 위치"
      }
    ]
  },
  {
    "id": "PageNumCtrl",
    "description": "페이지번호 (97의 홀수 쪽에서 시작)",
    "sourcePage": 102,
    "items": [
      {
        "id": "PageStartsOn",
        "type": "PIT_UI1",
        "description": "0 = 양쪽 1 = 짝수쪽 2 = 홀수쪽"
      }
    ]
  },
  {
    "id": "PageNumPos",
    "description": "쪽 번호 위치",
    "sourcePage": 103,
    "items": [
      {
        "id": "NumberFormat",
        "type": "PIT_UI1",
        "description": "4 = A, B, C 8 = 가, 나, 다 13 = 一, 二, 三 15 = 갑, 을, 병 16 = 甲, 乙, 丙 ※ 중간에 빈 번호에도 문자포맷이 존재하나 이곳에서 사용하지 않 아 생략함"
      },
      {
        "id": "UserChar",
        "type": "PIT_UI2",
        "description": "사용자 기호(WCHAR). 글2007에선 더 이상 사용하지 않는다."
      },
      {
        "id": "PrefixChar",
        "type": "PIT_UI2",
        "description": "앞 장식 문자(WCHAR). 글2007에선 더 이상 사용하지 않는다."
      },
      {
        "id": "SuffixChar",
        "type": "PIT_UI2",
        "description": "뒤 장식 문자(WCHAR). 글2007에선 더 이상 사용하지 않는다."
      },
      {
        "id": "SideChar",
        "type": "PIT_UI2",
        "description": "양쪽 옆 장식 문자(WCHAR). L'-'만 사용할 수 있다. 번호 위치 0 = 쪽 번호 없음 1 = 왼쪽 위, 2 = 가운데 위, 3 = 오른쪽 위,"
      },
      {
        "id": "DrawPos",
        "type": "PIT_UI1",
        "description": "4 = 왼쪽 아래, 5 = 가운데 아래, 6 = 오른쪽 아래, 7 = 바깥쪽 위, 8 = 바깥쪽 아래, 9 = 안쪽 위, 10 = 안쪽 아래"
      },
      {
        "id": "NewNumber",
        "type": "PIT_UI2",
        "description": "새 시작 번호 (1 .. n)"
      }
    ]
  },
  {
    "id": "ParaShape",
    "description": "문단 모양",
    "sourcePage": 104,
    "items": [
      {
        "id": "LeftMargin",
        "type": "PIT_I4",
        "description": "왼쪽 여백 (URC)"
      },
      {
        "id": "RightMargin",
        "type": "PIT_I4",
        "description": "오른쪽 여백 (URC)"
      },
      {
        "id": "Indentation",
        "type": "PIT_I4",
        "description": "들여쓰기/내어 쓰기 (URC)"
      },
      {
        "id": "PrevSpacing",
        "type": "PIT_I4",
        "description": "문단 간격 위 (URC)"
      },
      {
        "id": "NextSpacing",
        "type": "PIT_I4",
        "description": "문단 간격 아래 (URC) 줄 간격 종류 (HWPUNIT)"
      },
      {
        "id": "LineSpacingType",
        "type": "PIT_UI1",
        "description": "0 = 글자에 따라 1 = 고정 값 2 = 여백만 지정 줄 간격 값. 줄 간격 종류(LineSpacingType)에 따라 :"
      },
      {
        "id": "LineSpacing",
        "type": "PIT_I4",
        "description": "- \"글자에 따라\"일 경우(0 - 500%) - “고정 값”일 경우(URC) - “여백만 지정”일 경우(URC) 정렬 방식 0 = 양쪽 정렬 1 = 왼쪽 정렬"
      },
      {
        "id": "AlignType",
        "type": "PIT_UI1",
        "description": "2 = 오른쪽 정렬 3 = 가운데 정렬 4 = 배분 정렬 5 = 나눔 정렬 (공백에만 배분) 줄 나눔 단위 (라틴 문자)"
      },
      {
        "id": "BreakLatinWord",
        "type": "PIT_UI1",
        "description": "0 = 단어 1 = 하이픈 2 = 글자"
      },
      {
        "id": "BreakNonLatinWord",
        "type": "PIT_UI1",
        "description": "단위 (비 라틴 문자) TRUE = 글자, FALSE = 어절"
      },
      {
        "id": "SnapToGrid",
        "type": "PIT_UI1",
        "description": "편집 용지의 줄 격자 사용 (on / off)"
      },
      {
        "id": "Condense",
        "type": "PIT_UI1",
        "description": "공백 최소값 (0 - 75%)"
      },
      {
        "id": "WidowOrphan",
        "type": "PIT_UI1",
        "description": "외톨이줄 보호 (on / off)"
      },
      {
        "id": "KeepWithNext",
        "type": "PIT_UI1",
        "description": "다음 문단과 함께 (on / off)"
      },
      {
        "id": "KeepLinesTogether",
        "type": "PIT_UI1",
        "description": "문단 보호 (on / off)"
      },
      {
        "id": "PagebreakBefore",
        "type": "PIT_UI1",
        "description": "문단 앞에서 항상 쪽 나눔 (on / off) 세로 정렬 0 = 글꼴기준"
      },
      {
        "id": "TextAlignment",
        "type": "PIT_UI1",
        "description": "1 = 위 2 = 가운데 3 = 아래"
      },
      {
        "id": "FontLineHeight",
        "type": "PIT_UI1",
        "description": "글꼴에 어울리는 줄 높이 (on / off) 문단 머리 모양 0 = 없음"
      },
      {
        "id": "HeadingType",
        "type": "PIT_UI1",
        "description": "1 = 개요 2 = 번호 3 = 불릿"
      },
      {
        "id": "Level",
        "type": "PIT_UI1",
        "description": "단계 (0 - 6)"
      },
      {
        "id": "BorderConnect",
        "type": "PIT_UI1",
        "description": "문단 테두리/배경 - 테두리 연결 (on / off)"
      },
      {
        "id": "BorderText",
        "type": "PIT_UI1",
        "description": "문단 테두리/배경 - 여백 무시 (0 = 단, 1 = 텍스트)"
      },
      {
        "id": "BorderOffsetLeft",
        "type": "PIT_I",
        "description": "문단 테두리/배경 - 4방향 간격 (HWPUNIT) : 왼쪽"
      },
      {
        "id": "BorderOffsetRight",
        "type": "PIT_I",
        "description": "문단 테두리/배경 - 4방향 간격 (HWPUNIT) : 오른쪽"
      },
      {
        "id": "BorderOffsetTop",
        "type": "PIT_I",
        "description": "문단 테두리/배경 - 4방향 간격 (HWPUNIT) : 위"
      },
      {
        "id": "BorderOffsetBottom",
        "type": "PIT_I",
        "description": "문단 테두리/배경 - 4방향 간격 (HWPUNIT) : 아래"
      },
      {
        "id": "TailType",
        "type": "PIT_UI1",
        "description": "문단 꼬리 모양 (마지막 꼬리 줄 적용) on/off"
      },
      {
        "id": "LineWrap",
        "type": "PIT_UI1",
        "description": "글꼴에 어울리는 줄 높이 (on/off)"
      },
      {
        "id": "TabDef",
        "type": "PIT_SET",
        "description": "탭 정의",
        "subType": "TabDef"
      },
      {
        "id": "Numbering",
        "type": "PIT_SET",
        "description": "문단 번호 문단 머리 모양(HeadingType)이 ‘개요’, ‘번호’ 일 때 사용",
        "subType": "NumberingShape"
      },
      {
        "id": "Bullet",
        "type": "PIT_SET",
        "description": "불릿 모양 문단 머리 모양(HeadingType)이 ‘불릿’(글머리표) 일 때 사용",
        "subType": "BulletShape"
      },
      {
        "id": "BorderFill",
        "type": "PIT_SET",
        "description": "테두리/배경",
        "subType": "BorderFill"
      },
      {
        "id": "AutoSpaceEAsianEng",
        "type": "PIT_UI1",
        "description": "한글과 영어 간격을 자동 조절 (on/off)"
      },
      {
        "id": "AutoSpaceEAsianNum",
        "type": "PIT_UI1",
        "description": "한글과 숫자 간격을 자동 조절 (on/off)"
      },
      {
        "id": "SuppressLineNum",
        "type": "PIT_UI1",
        "description": "줄 번호 표시 여부"
      },
      {
        "id": "Checked",
        "type": "PIT_UI1",
        "description": "체크 글머리표 사용시 체크 여부 (on/off) 텍스트 방향"
      },
      {
        "id": "TextDir",
        "type": "PIT_UI1",
        "description": "0 = 자동 1 = 오른편에서 왼편 2 = 왼편에서 오른편 (한/글 2022부터 지원)"
      }
    ]
  },
  {
    "id": "Password",
    "description": "문서 암호",
    "sourcePage": 107,
    "items": [
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "암호 문자열"
      },
      {
        "id": "FullRange",
        "type": "PIT_UI1",
        "description": "= 유니코드 모든 문자를 사용, FALSE = 영문자만 사용",
        "subType": "TRUE"
      },
      {
        "id": "Ask",
        "type": "PIT_UI1",
        "description": "= 문서 암호를 확인, FALSE = 문서 암호를 설정",
        "subType": "TRUE"
      },
      {
        "id": "Level",
        "type": "PIT_UI1",
        "description": "0 = 보안 수준 낮음, 1 = 보안 수준 높음"
      },
      {
        "id": "RWAsk",
        "type": "PIT_UI1",
        "description": "읽기/쓰기 암호 설정을 위해 새로 추가"
      },
      {
        "id": "ReadString",
        "type": "PIT_BSTR",
        "description": "열기 암호 문자열"
      },
      {
        "id": "WriteString",
        "type": "PIT_BSTR",
        "description": "쓰기 암호 문자열"
      },
      {
        "id": "ReadOnly",
        "type": "PIT_UI1",
        "description": "0 = 읽기 전용 아님, 1 = 읽기 전용 열기"
      }
    ]
  },
  {
    "id": "Preference",
    "description": "환경 설정",
    "sourcePage": 108,
    "items": [
      {
        "id": "ShowSinglePage",
        "type": "PIT_I",
        "description": "환경 설정 PropertySheet에 표시할 PropertyPage 번호 (하나만 선택)"
      },
      {
        "id": "ApplyLinkAttr",
        "type": "PIT_UI1",
        "description": "하이퍼링크 글자 속성 문서 전체에 적용하기 여부 (on/off)"
      },
      {
        "id": "ApplyForbidden",
        "type": "PIT_BSTR",
        "description": "(금칙 처리) 새 문서에 기본 값으로 설정 (on/off)"
      },
      {
        "id": "StartForbiddenStr",
        "type": "PIT_BSTR",
        "description": "(금칙 처리) 새 문서에 적용할 줄 앞 금칙 문자열"
      },
      {
        "id": "EndForbiddenStr",
        "type": "PIT_BSTR",
        "description": "(금칙 처리) 새 문서에 적용할 줄 뒤 금칙 문자열"
      },
      {
        "id": "UsePageLayout",
        "type": "PIT_UI1",
        "description": "새 문서 속성을 변경하면 유효화된 값으로 판단하고 사용함"
      },
      {
        "id": "PasteObjectAsPict",
        "type": "PIT_UI1",
        "description": "그림(메타파일) 형식으로 개체 붙이기 여부 ure"
      },
      {
        "id": "HwpxFormatDefault",
        "type": "PIT_UI1",
        "description": "기본 포맷 설정 여부 s",
        "subType": "hwpx"
      }
    ]
  },
  {
    "id": "Presentation",
    "description": "프레젠테이션",
    "sourcePage": 109,
    "items": [
      {
        "id": "Effect",
        "type": "PIT_UI",
        "description": "화면 전환 효과"
      },
      {
        "id": "Sound",
        "type": "PIT_BINDATA",
        "description": "효과음"
      },
      {
        "id": "InvertText",
        "type": "PIT_I",
        "description": "검은색 글자를 흰색으로"
      },
      {
        "id": "ShowMode",
        "type": "PIT_I",
        "description": "자동 전환 모드"
      },
      {
        "id": "ShowPage",
        "type": "PIT_UI",
        "description": "현재 쪽"
      },
      {
        "id": "ShowTime",
        "type": "PIT_UI",
        "description": "전환 시간 (초)"
      }
    ]
  },
  {
    "id": "Print",
    "description": "인쇄",
    "sourcePage": 110,
    "items": [
      {
        "id": "Range",
        "type": "PIT_UI1",
        "description": "3 = 현재까지 4 = 일부분 5 = 선택한 쪽만 6 = 현재 문서 (연결된 문서 미포함) 7 = 현재 구역"
      },
      {
        "id": "RangeCustom",
        "type": "PIT_BSTR",
        "description": "사용자가 직접 입력한 인쇄 범위"
      },
      {
        "id": "RangeIncludeLinkedDoc",
        "type": "PIT_UI1",
        "description": "연결된 문서 포함"
      },
      {
        "id": "NumCopy",
        "type": "PIT_UI2",
        "description": "인쇄 매수"
      },
      {
        "id": "Collate",
        "type": "PIT_UI1",
        "description": "한 부씩 찍기 인쇄 방법 0 = 자동 인쇄 1 = 공급 용지에 맞추어 2 = 나눠 찍기 3 = 자동으로 모아 찍기"
      },
      {
        "id": "PrintMethod",
        "type": "PIT_UI1",
        "description": "4 = 2쪽씩 모아 찍기 5 = 3쪽씩 모아 찍기 6 = 4쪽씩 모아 찍기 7 = 6쪽씩 모아 찍기 8 = 8쪽씩 모아 찍기 9 = 9쪽씩 모아 찍기 10 = 16쪽씩 모아 찍기"
      },
      {
        "id": "PrinterPaperSize",
        "type": "PIT_I",
        "description": "공급용지 종류(DEVMODE.dmPaperSize)"
      },
      {
        "id": "PrinterPaperWidth",
        "type": "PIT_I",
        "description": "공급용지 종류(DEVMODE.dmPaperWidth)"
      },
      {
        "id": "PrinterPaperLength",
        "type": "PIT_I",
        "description": "공급용지 종류(DEVMODE.dmPaperLength)"
      },
      {
        "id": "PrintAutoHeadNote",
        "type": "PIT_UI1",
        "description": "머리말 자동 인쇄"
      },
      {
        "id": "PrintAutoFootNote",
        "type": "PIT_UI1",
        "description": "꼬리말 자동 인쇄"
      },
      {
        "id": "PrintAutoHeadnoteLtext",
        "type": "PIT_BSTR",
        "description": "자동 머리말의 왼쪽 String"
      },
      {
        "id": "PrintAutoHeadnoteCtext",
        "type": "PIT_BSTR",
        "description": "자동 머리말의 가운데 String"
      },
      {
        "id": "PrintAutoHeadnoteRtext",
        "type": "PIT_BSTR",
        "description": "자동 머리말의 오른쪽 String"
      },
      {
        "id": "PrintAutoFootnoteLtext",
        "type": "PIT_BSTR",
        "description": "자동 꼬리말의 왼쪽 String"
      },
      {
        "id": "PrintAutoFootnoteCtext",
        "type": "PIT_BSTR",
        "description": "자동 꼬리말의 가운데 String"
      },
      {
        "id": "PrintAutoFootnoteRtext",
        "type": "PIT_BSTR",
        "description": "자동 꼬리말의 오른쪽 String"
      },
      {
        "id": "PrinterName",
        "type": "PIT_BSTR",
        "description": "프린터"
      },
      {
        "id": "PrintToFile",
        "type": "PIT_UI1",
        "description": "인쇄 결과를 파일로 저장"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "인쇄 결과를 저장할 파일 이름"
      },
      {
        "id": "ReverseOrder",
        "type": "PIT_UI1",
        "description": "역순 인쇄"
      },
      {
        "id": "Pause",
        "type": "PIT_UI2",
        "description": "끊어 찍기 매수"
      },
      {
        "id": "PrintImage",
        "type": "PIT_UI1",
        "description": "그림 개체"
      },
      {
        "id": "PrintDrawObj",
        "type": "PIT_UI1",
        "description": "그리기 개체"
      },
      {
        "id": "PrintClickHere",
        "type": "PIT_UI1",
        "description": "누름틀"
      },
      {
        "id": "PrintCropMark",
        "type": "PIT_UI1",
        "description": "편집 용지 표시"
      },
      {
        "id": "IdcPrintWallPaper",
        "type": "PIT_UI1",
        "description": "배경 그림"
      },
      {
        "id": "LastBlankPage",
        "type": "PIT_UI1",
        "description": "빈 마지막 쪽"
      },
      {
        "id": "BinderHoleType",
        "type": "PIT_UI1",
        "description": "바인더 구멍"
      },
      {
        "id": "EvenOddPageType",
        "type": "PIT_UI1",
        "description": "홀짝 인쇄"
      },
      {
        "id": "ZoomX",
        "type": "PIT_UI2",
        "description": "가로 확대"
      },
      {
        "id": "ZoomY",
        "type": "PIT_UI2",
        "description": "세로 확대"
      },
      {
        "id": "Flags",
        "type": "PIT_UI",
        "description": "문제 해결을 위한 고급 선택 사항 인쇄 방향(장치) 0 : 프린터"
      },
      {
        "id": "Device",
        "type": "PIT_UI1",
        "description": "1: 팩스 2: 그림으로 저장 3: PDF 파일로 저장 4: 미리보기"
      },
      {
        "id": "PrintFormObj",
        "type": "PIT_UI1",
        "description": "양식 개체 출력여부"
      },
      {
        "id": "PrintMarkPen",
        "type": "PIT_UI1",
        "description": "형광펜 출력여부"
      },
      {
        "id": "PrintMemo",
        "type": "PIT_UI1",
        "description": "메모 출력여부"
      },
      {
        "id": "PrintMemoContents",
        "type": "PIT_UI1",
        "description": "메모 내용 출력여부"
      },
      {
        "id": "PrintRevision",
        "type": "PIT_UI1",
        "description": "교정부호 출력여부"
      },
      {
        "id": "PrintWatermark",
        "type": "PIT_SET",
        "description": "인쇄워터마크",
        "subType": "PrintWatermark"
      },
      {
        "id": "UserOrder",
        "type": "PIT_UI1",
        "description": "사용자가 입력한 순서대로 인쇄"
      },
      {
        "id": "OverlapSize",
        "type": "PIT_UI2",
        "description": "나눠찍기시 내용이 겹치는 크기"
      },
      {
        "id": "UsingPagenum",
        "type": "PIT_UI1",
        "description": "문서의 쪽 번호로 입력"
      },
      {
        "id": "PrintBarcode",
        "type": "PIT_UI1",
        "description": "바코드"
      },
      {
        "id": "PrintPronounce",
        "type": "PIT_UI1",
        "description": "한자/일어 발음 표시"
      },
      {
        "id": "PrintColorSet",
        "type": "PIT_UI",
        "description": "색 변경 인쇄, 0 = normal, 1 = gary, 2 = light gray"
      },
      {
        "id": "PrintWithoutBlank",
        "type": "PIT_I",
        "description": "빈 쪽 없이 이어서 인쇄"
      }
    ]
  },
  {
    "id": "PrintToImage",
    "description": "그림으로 저장",
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
        "description": "그림 경로"
      },
      {
        "id": "ColorDepth",
        "type": "PIT_UI1",
        "description": "색상수 (bits: 8, 16...)"
      },
      {
        "id": "Resolution",
        "type": "PIT_UI2",
        "description": "해상도 인쇄 범위 0 : 문서 전체 (연결된 문서 포함) 1 : 현재 페이지만 2 : 현재 페이지부터"
      },
      {
        "id": "Range",
        "type": "PIT_UI1",
        "description": "3 : 현재 페이지까지 4 : 사용자 정의 5 : 선택한 쪽만 6 : 현재 문서 (연결된 문서 미포함) 7 : 현재 구역"
      },
      {
        "id": "Width",
        "type": "PIT_UI",
        "description": "그림 너비(pixel), (한/글 2022부터 지원)"
      },
      {
        "id": "Height",
        "type": "PIT_UI",
        "description": "그림 높이(pixel), (한/글 2022부터 지원)"
      }
    ]
  },
  {
    "id": "PrintWatermark",
    "description": "워터마크 속성",
    "sourcePage": 114,
    "items": [
      {
        "id": "WatermarkType",
        "type": "PIT_UI",
        "description": "0 = 워터마크 없음 1 = 그림 워터마크 2 = 글자 워터마크"
      },
      {
        "id": "PosPage",
        "type": "PIT_UI1",
        "description": "워터마크의 위치 기준 : 0 = 종이 기준, 1 = 쪽 기준"
      },
      {
        "id": "TextWrap",
        "type": "PIT_UI1",
        "description": "워터마크의 배치 : 0 = 글 뒤로, 1 = 글 앞으로"
      },
      {
        "id": "AlphaText",
        "type": "PIT_UI1",
        "description": "글자 투명도 (0 ~ 255)"
      },
      {
        "id": "AlphaImage",
        "type": "PIT_UI1",
        "description": "그림 투명도 (0 ~ 255)"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "그림 파일의 경로 or 그림파일 삽입일 경우에는 binary data"
      },
      {
        "id": "PicEffect",
        "type": "PIT_UI1",
        "description": "그림 효과 : 0 = 실제 이미지 그대로, 1 = 그레이스케일, 2 = 흑백효과"
      },
      {
        "id": "Brightness",
        "type": "PIT_I1",
        "description": "명도 (-100 ~ 100)"
      },
      {
        "id": "Contrast",
        "type": "PIT_I1",
        "description": "밝기 (-100 ~ 100) 채우기 유형 0 = 바둑판식으로 - 모두 8 = 가운데 아래로 1 = 바둑판식으로 - 가로/위 9 = 왼쪽 가운데로 2 = 바둑판식으로 - 가로/아래 10 = 왼쪽 위로"
      },
      {
        "id": "DrawFillImageType",
        "type": "PIT_I",
        "description": "3 = 바둑판식으로 - 세로/왼쪽 11 = 왼쪽 아래로 4 = 바둑판식으로 - 세로/오른 12 = 오른쪽 가운데로 쪽 13 = 오른쪽 위로 5 = 크기에 맞추어 14 = 오른쪽 아래로 6 = 가운데로 15 = 원래크기에 비례하여 7 = 가운데 위로"
      },
      {
        "id": "String",
        "type": "PIT_BSTR",
        "description": "글맵시에 넣을 문자열 내용 : 내용"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "글꼴"
      },
      {
        "id": "FontType",
        "type": "PIT_UI1",
        "description": "글꼴 속성 : 0 = don't care, 1 = TTF, 2 = HFT"
      },
      {
        "id": "FontSize",
        "type": "PIT_I",
        "description": "글꼴 크기 (HWPUNIT : 2500(25pt) ~ 25400(254pt)"
      },
      {
        "id": "ShadowType",
        "type": "PIT_UI1",
        "description": "그림자 종류 : 0 = none, 1 = drop, 2 = continuous"
      },
      {
        "id": "ShadowOffsetX",
        "type": "PIT_I1",
        "description": "축 그림자 간격 (-48% ~ 48% )",
        "subType": "X"
      },
      {
        "id": "ShadowOffsetY",
        "type": "PIT_I1",
        "description": "축 그림자 간격 (-48% ~ 48% )",
        "subType": "Y"
      },
      {
        "id": "ShadowColor",
        "type": "PIT_UI4",
        "description": "그림자 색 (COLORREF)"
      },
      {
        "id": "FontColor",
        "type": "PIT_UI4",
        "description": "글자색 (COLORREF)"
      },
      {
        "id": "RotateAngle",
        "type": "PIT_I",
        "description": "회전각도 (-360 ~ 360)"
      },
      {
        "id": "WaterMarkEff",
        "type": "PIT_UI1",
        "description": "워터마크 효과 : 0 = off, 1 = on"
      }
    ]
  },
  {
    "id": "QCorrect",
    "description": "빠른 교정",
    "sourcePage": 116,
    "items": [
      {
        "id": "LauncherKey",
        "type": "PIT_UI1",
        "description": "빠른 교정을 실행한 키 정보"
      },
      {
        "id": "HyperLinkRunKey",
        "type": "PIT_UI1",
        "description": "또는 email 하이퍼링크 작성 키 정보",
        "subType": "URL"
      }
    ]
  },
  {
    "id": "RevisionDef",
    "description": "교정부호 데이터",
    "sourcePage": 117,
    "items": [
      {
        "id": "SignType",
        "type": "PIT_UI",
        "description": "5 = 지움표 18 = 오른자리 옮김표 6 = 붙임표 19 = 자료연결 7 = 뺌표 20 = 왼자리 옮김표 8 = 줄 이음표 21 = 부분자리 옮김표 9 = 줄 붙임표 22 = 줄 서로 바꿈표 10 = 톱니표 23 = 자리바꿈 나눔표(내부용) 11 = 생각표 24 = 줄 서로 바꿈 나눔표(내부용) 12 = 칭찬표"
      },
      {
        "id": "SubText",
        "type": "PIT_BSTR",
        "description": "교정 문자열 교정 문자열을 가질 수 있는 교정부호만 적용. 나머지는 무시"
      },
      {
        "id": "Margin",
        "type": "PIT_I4",
        "description": "여백(HWPUNIT). 오른자리 옮김표와 왼자리 옮김표일 경우에만 적용."
      },
      {
        "id": "BeginPos",
        "type": "PIT_I4",
        "description": "시작위치(HWPUNIT). 오른자리 옮김표와 왼자리 옮김표일 경우에만 적용."
      }
    ]
  },
  {
    "id": "SaveFootnote",
    "description": "주석 저장",
    "sourcePage": 118,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "파일 이름 옵션"
      },
      {
        "id": "Flag",
        "type": "PIT_UI1",
        "description": "1 : 각주 저장 2 : 미주 저장 3 : 각주/미주 저장"
      }
    ]
  },
  {
    "id": "ScriptMacro",
    "description": "스크립트 매크로",
    "sourcePage": 119,
    "items": [
      {
        "id": "Index",
        "type": "PIT_I",
        "description": "정의(or 실행)할 매크로의 인덱스"
      },
      {
        "id": "RepeatCount",
        "type": "PIT_I",
        "description": "실행 반복 횟수"
      },
      {
        "id": "Name",
        "type": "PIT_BSTR",
        "description": "매크로 이름"
      },
      {
        "id": "Detail",
        "type": "PIT_BSTR",
        "description": "매크로 설명"
      }
    ]
  },
  {
    "id": "SecDef",
    "description": "구역의 속성",
    "sourcePage": 120,
    "items": [
      {
        "id": "TextDirection",
        "type": "PIT_UI1",
        "description": "글자 방향"
      },
      {
        "id": "StartsOn",
        "type": "PIT_UI1",
        "description": "구역 나눔으로 새 페이지가 생길 때의 페이지 번호 적용 옵션 0 = 이어서, 1 = 홀수, 2 = 짝수, 3 = 임의 값"
      },
      {
        "id": "LineGrid",
        "type": "PIT_I4",
        "description": "세로로 줄맞춤을 할지 여부. 0 = off, 1 - n = 간격을 HWPUNIT 단위로 지정"
      },
      {
        "id": "CharGrid",
        "type": "PIT_I4",
        "description": "가로로 줄맞춤을 할지 여부. 0 = off, 1 - n = 간격을 HWPUNIT 단위로 지정"
      },
      {
        "id": "PageDef",
        "type": "PIT_SET",
        "description": "용지 설정 정보",
        "subType": "PageDef"
      },
      {
        "id": "HideEmptyLine",
        "type": "PIT_UI1",
        "description": "빈 줄 감춤 on / off"
      },
      {
        "id": "SpaceBetweenColumns",
        "type": "PIT_I4",
        "description": "동일한 페이지에서 서로 다른 단 사이의 간격"
      },
      {
        "id": "TabStop",
        "type": "PIT_I4",
        "description": "기본 탭 간격"
      },
      {
        "id": "FootnoteShape",
        "type": "PIT_SET",
        "description": "각주 모양",
        "subType": "FootnoteShape"
      },
      {
        "id": "EndnoteShape",
        "type": "PIT_SET",
        "description": "미주 모양",
        "subType": "FootnoteShape"
      },
      {
        "id": "HideHeader",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 머리말 감추기 옵션 on / off"
      },
      {
        "id": "HideFooter",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 꼬리말 감추기 옵션 on / off"
      },
      {
        "id": "HideMasterPage",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 바탕쪽 감추기 옵션 on / off"
      },
      {
        "id": "HideBorder",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 테두리 감추기 옵션 on / off"
      },
      {
        "id": "HideFill",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 배경 감추기 옵션 on / off"
      },
      {
        "id": "HidePageNumPos",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 쪽번호 감추기 옵션 on / off"
      },
      {
        "id": "FirstBorder",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 테두리 표시 옵션 on / off"
      },
      {
        "id": "FirstFill",
        "type": "PIT_UI1",
        "description": "구역의 첫 쪽에만 배경 표시 옵션 on / off"
      },
      {
        "id": "OutlineShape",
        "type": "PIT_SET",
        "description": "개요 번호",
        "subType": "NumberingShape"
      },
      {
        "id": "PageBorderFillBoth",
        "type": "PIT_SET",
        "description": "쪽 테두리/배경 (양쪽)",
        "subType": "PageBorderFill"
      },
      {
        "id": "PageBorderFillEven",
        "type": "PIT_SET",
        "description": "쪽 테두리/배경 (짝수)",
        "subType": "PageBorderFill"
      },
      {
        "id": "PageBorderFillOdd",
        "type": "PIT_SET",
        "description": "쪽 테두리/배경 (홀수)",
        "subType": "PageBorderFill"
      },
      {
        "id": "PageNumber",
        "type": "PIT_UI2",
        "description": "쪽 시작 번호 0 = 앞 구역에 이어, n = 새 번호로 시작"
      },
      {
        "id": "FigureNumber",
        "type": "PIT_UI2",
        "description": "그림 시작 번호 0 = 앞 구역에 이어, n = 새 번호로 시작"
      },
      {
        "id": "TableNumber",
        "type": "PIT_UI2",
        "description": "표 시작 번호 0 = 앞 구역에 이어, n = 새 번호로 시작"
      },
      {
        "id": "EquationNumber",
        "type": "PIT_UI2",
        "description": "수식 시작 번호 0 = 앞 구역에 이어, n = 새 번호로 시작"
      },
      {
        "id": "WongojiFormat",
        "type": "PIT_UI1",
        "description": "원고지 방식의 포맷팅. CHAR_GRID가 지정되어야 함."
      },
      {
        "id": "MemoShape",
        "type": "PIT_SET",
        "description": "메모 모양",
        "subType": "MemoShape"
      },
      {
        "id": "TextVerticalWidthHead",
        "type": "PIT_I",
        "description": "머리말/꼬리말 세로쓰기 여부 적용범위 0 = 선택된 구역"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "1 = 선택된 문자열 2 = 현재 구역 3 = 문서전체 4 = 새 구역 : 현재 위치부터 새로 적용범위의 분류 (대화상자를 호출할 경우 사용) 0x01 = 선택된 구역"
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": "0x02 = 선택된 문자열 0x04 = 현재 구역 0x08 = 문서전체 0x10 = 새 구역 : 현재 위치부터 새로"
      },
      {
        "id": "ApplyToPageBorderFill",
        "type": "PIT_UI1",
        "description": "채울 영역 분류 (PageBorder 액션에서 사용) 0 = 종이, 1 = 쪽, 2 = 테두리"
      },
      {
        "id": "LineNumberRestart",
        "type": "PIT_UI1",
        "description": "줄 번호 형식 0 = 기본, 1 = 쪽마다, 2 = 구역마다, 3 = 이어서"
      },
      {
        "id": "LineNumberCountBy",
        "type": "PIT_UI2",
        "description": "줄 번호 표시 간격"
      },
      {
        "id": "LineNumberDistance",
        "type": "PIT_UI",
        "description": "본문과의 줄 번호 간격 (HWPUNIT)"
      },
      {
        "id": "LineNumberStart",
        "type": "PIT_UI2",
        "description": "줄 번호 시작 번호"
      },
      {
        "id": "ShowLineNumbers",
        "type": "PIT_UI1",
        "description": "줄 번호 표시 여부 (On/Off)"
      },
      {
        "id": "SectionApplyString",
        "type": "PIT_SET",
        "description": "적용 범위 서브셋, (한/글 2022부터 지원)",
        "subType": "PageBorderFill"
      }
    ]
  },
  {
    "id": "SectionApply",
    "description": "적용할 구역 설정",
    "sourcePage": 122,
    "items": [
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "적용범위 분류(ApplyClass)에서 하나의 값"
      },
      {
        "id": "String",
        "type": "PIT_ARRAY",
        "description": "ApplyTo를 문자열로 변환한 값의 배열",
        "subType": "PIT_BSTR"
      },
      {
        "id": "Index",
        "type": "PIT_I",
        "description": "를 변환한 ComboBox의 Index",
        "subType": "ApplyTo"
      },
      {
        "id": "ConvAplly2Index",
        "type": "PIT_I",
        "description": "값을 ComboBox의 Index로 변환할지 여부 FALSE이면 IndexToApply로 변환이 이루어진다. (반대변환) 적용범위 분류(ApplyClass)를 사용자가 직접 설정할 때 사용.",
        "subType": "ApplyTo"
      },
      {
        "id": "Category",
        "type": "PIT_I",
        "description": "아이템이 없으면 글이 현재 상태에 맞춰 적용범위 분류 (ApplyClass)를 설정한다. (일반적으로 설정하지 않고 사용) 상기 파라메터셋은 실제로 글에서 사용되는 파라메터셋이 아닌 일종의 도구용 파라메터셋이다. 즉, 글의 기능을 위해 존재하지 않는 다. 위 파라메터셋은 GetSectionApplyString과 GetSectionApplyTo 액션에서만 사용된다. 이 두 액션은 글의 상태에 따라 바뀌는 ApplyClass와 ApplyTo의 값을 쉽게 얻기 위해 고안되었다. GetSectionApplyString 액션은 현재 글의 상태에 따라 구역의 적용범위를 얻기 위해 고안된 유틸리티 액션이다. 사용방법은 다음과 같다. 액션을 생성한 후 ApplyTo에 적용할 범위 flag를 넣어준다. 만약 적당한 ApplyTo flag값이 들어왔다면, “쪽/테두리 배경” 대화상자에서 볼 수 있는 “적용범위” ComboBox의 선택된 값을 Index 아이템을 통해서 얻을 수 있다. 그림. 적용범위 ComboBox의 모습. 위 그림에서 ApplyTo에 해당하는 것은 \"현재 구역“, ”문서 전체“, ”새 구역으로“ 각각의 flag값이며, 이 ApplyTo값이 모두 조합된 값이 ApplyClass가 된다. ApplyClass에 해당되는 값은 문자열로도 얻어올 수 있으며, 얻어오는 장소가 바로 String 아이템이다. 위 그림의 예를 들어 각 아이템에 할당되는 값을 나타내면 다음과 같다. ApplyTo : 0x08 ApplyTo : 0x1C (0x04|0x08|0x10) Index : 3 String : \"현재 구역“ ”문서 전체“ ”새 구역으로“ ※ 위 값 중 Index의 값이 1이 아닌 3인 이유는 Index의 값으로 넘어오는 값은 콤보박스를 기준으로 하지 않고 모든 ApplyTo값의 순서에 따른 Index값을 기준으로 하기 때문이다. Example : GetSectionApplyString 액션 사용하기 C++ CDHwpAction myAction = m_HwpCtrl.CreateAction(\"GetSectionApplyString\"); CDHwpParameterSet mySet = myAction.CreateSet(); // myAction.GetDefault(); // 해당 Action은 GetDefault();를 생략해도 상관없다. mySet.SetItem(\"ApplyTo\", CComVariant(0x08)); myAction.Execute(mySet); int nIdx = (int)mySet.Item(\"Index\"); // 얻어온 Index값을 저장. 이후 String값도 저장한다. ... GetSectionApplyTo 액션은 ApplyTo와 Index 아이템 값의 상호변환을 위한 Action이다. ConvAplly2Index를 TRUE로 설정하면 ApplyTo -> Index 변환이, ConvAplly2Index를 FALSE로 설정하면 Index->ApplyTo 변환 이 이루어진다. Example : GetSectionApplyTo 액션 사용하기 C++ CDHwpAction myAction = m_HwpCtrl.CreateAction(\"GetSectionApplyTo\"); CDHwpParameterSet mySet = myAction.CreateSet(); // myAction.GetDefault(); // 해당 Action은 GetDefault();를 생략해도 상관없다. mySet.SetItem(\"ApplyTo\", 0x08); mySet.SetItem(\"ConvAplly2Index\", CComVariant(TRUE)); myAction.Execute(mySet); int nIdx = (int)mySet.Item(\"Index\"); // 얻어온 Index값을 저장 ... ※ 현재 위 액션은 SecDef 파라메터셋(구역정보)에 대한 ApplyTo, ApplyClass만을 구해온다. 다른 정보영역의 ApplyTo, ApplyClass의 값을 얻어오는 유틸리티 액션의 구현에 대해서는 아직 정해진 바가 없다."
      }
    ]
  },
  {
    "id": "ShapeCopyPaste",
    "description": "모양 복사",
    "sourcePage": 125,
    "items": [
      {
        "id": "Type",
        "type": "PIT_I",
        "description": "1 = 문단 모양 복사 2 = 글자와 문단 모양 두개 복사 3 = 글자 스타일 복사 4 = 문단 스타일 복사"
      },
      {
        "id": "CellAttr",
        "type": "PIT_UI1",
        "description": "셀 모양 복사"
      },
      {
        "id": "CellBorder",
        "type": "PIT_UI1",
        "description": "선 모양 복사"
      },
      {
        "id": "CellFill",
        "type": "PIT_UI1",
        "description": "셀 배경 복사"
      },
      {
        "id": "TypeBodyAndCellOnly",
        "type": "PIT_I",
        "description": "본문과 셀 모양 둘 다 복사 or 셀 모양만 복사"
      }
    ]
  },
  {
    "id": "ShapeObject",
    "description": "그리기 개체의 공통 속성 (도형, 글상자, 표, 그림 등)",
    "sourcePage": 126,
    "items": [
      {
        "id": "TreatAsChar",
        "type": "PIT_UI1",
        "description": "글자처럼 취급 on / off"
      },
      {
        "id": "AffectsLine",
        "type": "PIT_UI1",
        "description": "줄 간격에 영향을 줄지 여부 on / off (TreatAsChar가 TRUE일 경우에만 사용된다) 세로 위치의 기준. 0 = 종이 영역(Paper)"
      },
      {
        "id": "VertRelTo",
        "type": "PIT_UI1",
        "description": "1 = 쪽 영역(Page) 2 = 문단 영역(Paragraph) (TreatAsChar가 FALSE일 경우에만 사용된다) VertRelTo값에 따른 상대적인 정렬 기준. VertRelTo값이 2(문단영역)일 경우 0 값만 사용할 수 있다."
      },
      {
        "id": "VertAlign",
        "type": "PIT_UI1",
        "description": "0 = 위(Top) 1 = 가운데(Center) 2 = 아래(Bottom)"
      },
      {
        "id": "VertOffset",
        "type": "PIT_I4",
        "description": "와 VertAlign을 기준으로 한 Y축 위치 오프셋 값. HWPUNIT 단위. 가로 위치의 기준. 0 = 종이 영역(Paper)",
        "subType": "VertRelTo"
      },
      {
        "id": "HorzRelTo",
        "type": "PIT_UI1",
        "description": "1 = 쪽 영역(Page) 2 = 다단 영역(Column) 3 = 문단 영역(Paragraph) (TreatAsChar가 FALSE일 경우에만 사용된다) HorzRelTo값에 따른 상대적인 정렬 기준."
      },
      {
        "id": "HorzAlign",
        "type": "PIT_UI1",
        "description": "값이 3(문단영역)일 경우 0~2 사이의 값만 사용할 수 있다. 0 = 왼쪽(Left) 1 = 가운데(Center) 2 = 오른쪽(Right) 3 = 안쪽(Inside) 4 = 바깥쪽(Outside)",
        "subType": "HorzRelTo"
      },
      {
        "id": "HorzOffset",
        "type": "PIT_I4",
        "description": "와 HorzAlign을 기준으로 한 X축 위치 오프셋 값. HWPUNIT 단위. 그리기 개체의 세로 위치를 쪽 영역 안쪽으로 제한할지 여부 on /",
        "subType": "HorzRelTo"
      },
      {
        "id": "FlowWithText",
        "type": "PIT_UI1",
        "description": "VertRelTo값이 2(문단영역)일 경우에만 의미가 있다. 다른 개체와 겹치는 것을 허용할지 여부 on / off",
        "subType": "off"
      },
      {
        "id": "AllowOverlap",
        "type": "PIT_UI1",
        "description": "가 FALSE일 때만 의미가 있으며, FlowWithText가 TRUE이면 AllowOverlap은 항상 FALSE로 간주한다. 개체 너비 기준. 0 = 종이(Paper)",
        "subType": "TreatAsChar"
      },
      {
        "id": "WidthRelTo",
        "type": "PIT_UI1",
        "description": "1 = 쪽(Page) 2 = 다단(Column) 3 = 문단(Paragraph) 4 = 고정 값(Absolute) 개체 너비 값. WidthRelTo에 따라 값의 의미 및 단위가 달라진다. WidthRelTo 의미 및 단위"
      },
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "0 종이 너비의 몇 % 1 쪽 너비의 몇 % 2 단 너비의 몇 % 3 문단 너비의 몇 % 4 고정 값(단위 HWPUNIT) 개체 높이 기준."
      },
      {
        "id": "HeightRelTo",
        "type": "PIT_UI1",
        "description": "0 = 종이(Paper) 1 = 쪽(Page) 2 = 고정 값(Absolute) 개체 높이 값. HeightRelTo에 다라 값의 의미 및 단위가 달라진다."
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "HeightRelTo 의미 및 단위 0 종이 높이의 몇 % 1 쪽 높이의 몇 % 2 고정 값(단위 HWPUNIT)"
      },
      {
        "id": "ProtectSize",
        "type": "PIT_UI1",
        "description": "크기 보호 on / off 그리기 개체와 본문 사이의 배치 방법. 0 = 어울림(Square) 1 = 자리 차지(Top & Bottom)"
      },
      {
        "id": "TextWrap",
        "type": "PIT_UI1",
        "description": "2 = 글 뒤로(Behind Text) 3 = 글 앞으로(In front of Text) 4 = 경계를 명확히 지킴(Tight) - 현재 사용안함 5 = 경계를 통과함(Through) - 현재 사용안함 (TreatAsChar가 FALSE일 경우에만 사용된다) 그리기 개체의 좌/우 어느 쪽에 글을 배치할지 지정하는 옵션. TextWrap의 값이 0일 때만 유효하다."
      },
      {
        "id": "TextFlow",
        "type": "PIT_UI1",
        "description": "0 = 양쪽 모두(Both) 1 = 왼쪽만(Left Only) 2 = 오른쪽만(Right Only) 3 = 왼쪽과 오른쪽 중 넓은 쪽(Largest Only)"
      },
      {
        "id": "OutsideMarginLeft",
        "type": "PIT_I4",
        "description": "개체의 바깥 여백. (왼쪽) HWPUNIT 단위"
      },
      {
        "id": "OutsideMarginRight",
        "type": "PIT_I4",
        "description": "개체의 바깥 여백. (오른쪽) HWPUNIT 단위"
      },
      {
        "id": "OutsideMarginTop",
        "type": "PIT_I4",
        "description": "개체의 바깥 여백. (위) HWPUNIT 단위"
      },
      {
        "id": "OutsideMarginBottom",
        "type": "PIT_I4",
        "description": "개체의 바깥 여백. (아래) HWPUNIT 단위"
      },
      {
        "id": "NumberingType",
        "type": "PIT_UI1",
        "description": "이 개체가 속하는 번호 범주. 0 = 없음, 1 = 그림, 2 = 표, 3 = 수식"
      },
      {
        "id": "LayoutWidth",
        "type": "PIT_I4",
        "description": "개체가 페이지에 배열될 때 계산되는 폭의 값"
      },
      {
        "id": "LayoutHeight",
        "type": "PIT_I4",
        "description": "개체가 페이지에 배열될 때 계산되는 높이 값"
      },
      {
        "id": "Lock",
        "type": "PIT_UI1",
        "description": "개체 보호하기 on / off"
      },
      {
        "id": "HoldAnchorObj",
        "type": "PIT_UI1",
        "description": "쪽 나눔 방지 on / off"
      },
      {
        "id": "PageNumber",
        "type": "PIT_UI",
        "description": "개체가 존재 하는 페이지"
      },
      {
        "id": "AdjustSelection",
        "type": "PIT_UI1",
        "description": "개체 Selection 상태 TRUE/FASLE"
      },
      {
        "id": "AdjustTextBox",
        "type": "PIT_UI1",
        "description": "글상자로 TRUE/FASLE"
      },
      {
        "id": "AdjustPrevObjAttr",
        "type": "PIT_UI1",
        "description": "앞개체 속성 따라가기 TRUE/FASLE ShapeObject는 위의 공통 ITEM 외에도 다음의 ITEM을 선택적으로 가질 수 있다."
      },
      {
        "id": "ShapeDrawLayOut",
        "type": "PIT_SET",
        "description": "그리기 개체의 Layout",
        "subType": "DrawLayOut"
      },
      {
        "id": "ShapeDrawLineAttr",
        "type": "PIT_SET",
        "description": "그리기 개체의 Line 속성",
        "subType": "DrawLineAttr"
      },
      {
        "id": "ShapeDrawFillAttr",
        "type": "PIT_SET",
        "description": "그리기 개체의 Fill 속성",
        "subType": "DrawFillAttr"
      },
      {
        "id": "ShapeDrawImageAttr",
        "type": "PIT_SET",
        "description": "그림 개체 속성",
        "subType": "DrawImageAttr"
      },
      {
        "id": "ShapeDrawRectType",
        "type": "PIT_SET",
        "description": "사각형 그리기 개체 유형",
        "subType": "DrawRectType"
      },
      {
        "id": "ShapeDrawArcType",
        "type": "PIT_SET",
        "description": "호 그리기 개체 유형",
        "subType": "DrawArcType"
      },
      {
        "id": "ShapeDrawResize",
        "type": "PIT_SET",
        "description": "그리기 개체 리사이징",
        "subType": "DrawResize"
      },
      {
        "id": "ShapeDrawRotate",
        "type": "PIT_SET",
        "description": "그리기 개체 회전",
        "subType": "DrawRotate"
      },
      {
        "id": "ShapeDrawEditDetail",
        "type": "PIT_SET",
        "description": "그리기 개체 EditDetail",
        "subType": "DrawEditDetail"
      },
      {
        "id": "ShapeDrawImageScissoring",
        "type": "PIT_SET",
        "description": "그림 개체 자르기",
        "subType": "DrawImageScissoring"
      },
      {
        "id": "ShapeDrawScAction",
        "type": "PIT_SET",
        "description": "그리기 개체 회전",
        "subType": "DrawScAction"
      },
      {
        "id": "ShapeDrawCtrlHyperlink",
        "type": "PIT_SET",
        "description": "그리기 개체 하이퍼링크",
        "subType": "DrawCtrlHyperlink"
      },
      {
        "id": "ShapeDrawCoordInfo",
        "type": "PIT_SET",
        "description": "그리기 개체 좌표정보",
        "subType": "DrawCoordInfo"
      },
      {
        "id": "ShapeDrawShear",
        "type": "PIT_SET",
        "description": "그리기 개체 기울이기",
        "subType": "DrawShear"
      },
      {
        "id": "ShapeDrawTextart",
        "type": "PIT_SET",
        "description": "글맵시",
        "subType": "DrawTextart"
      },
      {
        "id": "ShapeDrawShadow",
        "type": "PIT_SET",
        "description": "그림자",
        "subType": "DrawShadow"
      },
      {
        "id": "ShapeTableCell",
        "type": "PIT_SET",
        "description": "셀 정보",
        "subType": "Cell"
      },
      {
        "id": "ShapeListProperties",
        "type": "PIT_SET",
        "description": "서브 list 속성",
        "subType": "ListProperties"
      },
      {
        "id": "ShapeCaption",
        "type": "PIT_SET",
        "description": "캡션",
        "subType": "Caption"
      },
      {
        "id": "ShapeFormGeneral",
        "type": "PIT_SET",
        "description": "양식개체 일반",
        "subType": "FormGeneral"
      },
      {
        "id": "ShapeFormCommonAttr",
        "type": "PIT_SET",
        "description": "양식개체 공통속성",
        "subType": "FormCommonAttr"
      },
      {
        "id": "ShapeFormCharshapeattr",
        "type": "PIT_SET",
        "description": "양식개체 글자모양 속성",
        "subType": "FormCharshapeattr"
      },
      {
        "id": "ShapeFormButtonAttr",
        "type": "PIT_SET",
        "description": "양식개체 버튼 속성",
        "subType": "FormButtonAttr"
      },
      {
        "id": "ShapeFormComboboxAttr",
        "type": "PIT_SET",
        "description": "양식개체 콤보박스 속성",
        "subType": "FormComboboxAttr"
      },
      {
        "id": "ShapeFormEditAttr",
        "type": "PIT_SET",
        "description": "양식개체 에디트박스 속성",
        "subType": "FormEditAttr"
      },
      {
        "id": "ShapeFormScrollbarAttr",
        "type": "PIT_SET",
        "description": "양식개체 스크롤바 속성",
        "subType": "FormScrollbarAttr"
      },
      {
        "id": "ShapeFormListBoxAttr",
        "type": "PIT_SET",
        "description": "양식개체 리스트박스 속성",
        "subType": "FormListBoxAttr"
      },
      {
        "id": "ShapeType",
        "type": "PIT_UI1",
        "description": "의 종류",
        "subType": "TablePropertyDialog"
      },
      {
        "id": "ShapeCellSize",
        "type": "PIT_UI1",
        "description": "셀 크기 적용 여부 ( on / off )"
      },
      {
        "id": "ShapeCreationType",
        "type": "PIT_UI1",
        "description": "그리기 개체 형태 (DrawObjCreatorObject에서 사용)"
      },
      {
        "id": "ShapeCreationMode",
        "type": "PIT_UI1",
        "description": "마우스로 그리기 여부 ( on / off ) (DrawObjCreatorObject에서 사용)"
      },
      {
        "id": "ShapeComment",
        "type": "PIT_SET",
        "description": "개체 설명문",
        "subType": "ShapeObjComment"
      }
    ]
  },
  {
    "id": "ShapeObjComment",
    "description": "개체 설명문개체 설명문",
    "sourcePage": 131,
    "items": [
      {
        "id": "EditShapeObjCommentS",
        "type": "PIT_BSTR",
        "description": "개체 설명 문자열"
      },
      {
        "id": "EditShapeObjCommentF",
        "type": "PIT_UI",
        "description": "개체 설명문 데이터 작성을 위한 추가 데이터 전달. 0 = 사용안함,"
      }
    ]
  },
  {
    "id": "ShapeObjectCopyPaste",
    "description": "그리기 개체 모양 복사/붙여 넣기",
    "sourcePage": 132,
    "items": [
      {
        "id": "Type",
        "type": "PIT_I",
        "description": "그리기 모양 복사/붙여 넣기 종류 (예약.. 현재 사용하지 않음)"
      },
      {
        "id": "ShapeObjectLine",
        "type": "PIT_UI",
        "description": "그리기 선 모양 복사"
      },
      {
        "id": "ShapeObjectFill",
        "type": "PIT_UI1",
        "description": "그리기 채우기 복사"
      },
      {
        "id": "ShapeObjectSize",
        "type": "PIT_UI1",
        "description": "그리기 개체 크기 복사"
      },
      {
        "id": "ShapeObjectShadow",
        "type": "PIT_UI1",
        "description": "그리기 개체 그림자 복사"
      },
      {
        "id": "ShapeObjectPicEffect",
        "type": "PIT_UI1",
        "description": "그림 효과 복사"
      }
    ]
  },
  {
    "id": "Sort",
    "description": "소트",
    "sourcePage": 133,
    "items": [
      {
        "id": "KeyOption",
        "type": "PIT_ARRAY",
        "description": "키 콤보에서 선택된 키를 저장함.",
        "subType": "PIT_I4"
      },
      {
        "id": "CheckJasoReverse",
        "type": "PIT_UI1",
        "description": "자소 단위 비교 Flag - 종, 중, 초"
      },
      {
        "id": "DelimiterType",
        "type": "PIT_UI1",
        "description": "필드 구분 기호 형식 : 0 = 탭(Tab), 1 = 콤마(,), 2 = 빈칸(Space), 3 = 사용자 정의"
      },
      {
        "id": "DelimiterChars",
        "type": "PIT_BSTR",
        "description": "필드 구분 기호들. DelimiterType이 3(사용자 정의)일 경우에만 유효"
      },
      {
        "id": "IgnoreMultiDelimiter",
        "type": "PIT_UI1",
        "description": "연속되는 구분기호 무시 Flag"
      },
      {
        "id": "CheckFromRear",
        "type": "PIT_UI1",
        "description": "단어 뒤에서 부터 비교 Flag"
      },
      {
        "id": "CheckExtendYear",
        "type": "PIT_UI1",
        "description": "두 자리 년도 확장 check Flag"
      },
      {
        "id": "YearBase",
        "type": "PIT_UI",
        "description": "두 자리 년도 시작 년도"
      },
      {
        "id": "LangOrderType",
        "type": "PIT_UI1",
        "description": "사전언어순서 값"
      },
      {
        "id": "CheckJaso",
        "type": "PIT_UI1",
        "description": "자소 단위 비교 Flag - 초, 중, 종"
      },
      {
        "id": "EachPara",
        "type": "PIT_UI1",
        "description": "정렬시 각 문단별 정렬 여부 Flag – 키 옵션이 “단어” 인 경우만 사용됨"
      }
    ]
  },
  {
    "id": "Style",
    "description": "스타일",
    "sourcePage": 134,
    "items": [
      {
        "id": "Apply",
        "type": "PIT_I",
        "description": "적용할 스타일 인덱스"
      }
    ]
  },
  {
    "id": "StyleDelete",
    "description": "스타일 지우기",
    "sourcePage": 135,
    "items": [
      {
        "id": "Target",
        "type": "PIT_I",
        "description": "지워야할 스타일 인덱스"
      },
      {
        "id": "Alternation",
        "type": "PIT_I",
        "description": "대체할 스타일 인덱스"
      }
    ]
  },
  {
    "id": "StyleTemplate",
    "description": "스타일 마당",
    "sourcePage": 136,
    "items": [
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "파일 이름"
      }
    ]
  },
  {
    "id": "Sum",
    "description": "블록 계산 (합계/평균/줄 수)",
    "sourcePage": 137,
    "items": [
      {
        "id": "Sum",
        "type": "PIT_BSTR",
        "description": "합"
      },
      {
        "id": "Average",
        "type": "PIT_BSTR",
        "description": "평균"
      },
      {
        "id": "LineCount",
        "type": "PIT_BSTR",
        "description": "줄 수"
      },
      {
        "id": "Comma",
        "type": "PIT_UI1",
        "description": "세 자리마다 쉼표로 자리 구분 (on / off)"
      },
      {
        "id": "Option",
        "type": "PIT_I4",
        "description": "형식 옵션"
      },
      {
        "id": "Method",
        "type": "PIT_I4",
        "description": "동작 옵션 (0:copy, 1: paste)"
      }
    ]
  },
  {
    "id": "SummaryInfo",
    "description": "문서 정보",
    "sourcePage": 138,
    "items": [
      {
        "id": "Title",
        "type": "PIT_BSTR",
        "description": "제목"
      },
      {
        "id": "Subject",
        "type": "PIT_BSTR",
        "description": "주제"
      },
      {
        "id": "Author",
        "type": "PIT_BSTR",
        "description": "지은이"
      },
      {
        "id": "Date",
        "type": "PIT_BSTR",
        "description": "날짜"
      },
      {
        "id": "KeyWords",
        "type": "PIT_BSTR",
        "description": "키워드"
      },
      {
        "id": "Comments",
        "type": "PIT_BSTR",
        "description": "기타"
      },
      {
        "id": "CreationTimeLow",
        "type": "PIT_UI4",
        "description": "작성한 날짜 (low)"
      },
      {
        "id": "CreationTimeHigh",
        "type": "PIT_UI4",
        "description": "작성한 날짜 (high)"
      },
      {
        "id": "ModifiedTimeLow",
        "type": "PIT_UI4",
        "description": "마지막 수정한 날짜 (low)"
      },
      {
        "id": "ModifiedTimeHigh",
        "type": "PIT_UI4",
        "description": "마지막 수정한 날짜 (high)"
      },
      {
        "id": "PrintedTimeLow",
        "type": "PIT_UI",
        "description": "마지막 인쇄한 날짜 (low)"
      },
      {
        "id": "PrintedTimeHigh",
        "type": "PIT_UI4",
        "description": "마지막 인쇄한 날짜 (high)"
      },
      {
        "id": "LastSavedBy",
        "type": "PIT_BSTR",
        "description": "마지막 저장한 사람 Characters PMT_INT 문서분량 (글자) Words PMT_INT 문서분량 (낱말) Lines PMT_INT 문서분량 (줄) Paragraphs PMT_INT 문서분량 (문단) Pages PMT_INT 문서분량 (쪽) CopyPapers PMT_INT 문서분량 (원고지) Etcetera PMT_INT 문서분량 (표, 그림 등)"
      },
      {
        "id": "DocVersion",
        "type": "PIT_BSTR",
        "description": "문서 파일 버전"
      },
      {
        "id": "HwpVersion",
        "type": "PIT_BSTR",
        "description": "문서를 생성한 글 워드프로그램의 버전"
      },
      {
        "id": "HanjaChar",
        "type": "PIT_I1",
        "description": "문서분량 (한자 수)"
      },
      {
        "id": "CharactersExceptS",
        "type": "PIT_I",
        "description": "문서분량 (글자-공백 제외) pace"
      },
      {
        "id": "ExtractImagePath",
        "type": "PIT_BSTR",
        "description": "그림 파일 연결 경로 - 한/글 외부에서 사용함"
      },
      {
        "id": "ExtractImageBaseF",
        "type": "PIT_BSTR",
        "description": "삽입 그림을 연결 그림으로 변경할 때, 파일의 기본 이름 ileName"
      },
      {
        "id": "ExtractImageExtNa",
        "type": "PIT_BSTR",
        "description": "연결 그림으로 변경할 삽입 그림 파일의 확장자 me"
      },
      {
        "id": "ChangeImageExtFro",
        "type": "PIT_BSTR",
        "description": "변경할 그림 파일의 확장자(FROM) m"
      },
      {
        "id": "ChangeImageExtTo",
        "type": "PIT_BSTR",
        "description": "변경할 그림 파일의 확장자(TO)"
      },
      {
        "id": "EmbedImagePath",
        "type": "PIT_BSTR",
        "description": "삽입할 연결 그림 파일의 경로"
      },
      {
        "id": "SelectedSummaryIn",
        "type": "PIT_SET",
        "description": "선택된 영역의 정보 fo",
        "subType": "SummaryInfo"
      },
      {
        "id": "LicenseInfo",
        "type": "PIT_SET",
        "description": "저작권 CCL, 공공누리 정보",
        "subType": "SummaryInfo"
      },
      {
        "id": "LicenseFlag",
        "type": "PIT_UI4",
        "description": "공공누리, CCL 플래그",
        "subType": "SummaryInfo"
      },
      {
        "id": "UserPropertyName",
        "type": "PIT_ARRAY",
        "description": "사용자 속성 – 이름, (한/글 2024부터 지원)",
        "subType": "PIT_BSTR"
      },
      {
        "id": "UserPropertyForma",
        "type": "PIT_ARRAY",
        "description": "사용자 속성 - 형식, (한/글 2024부터 지원) t",
        "subType": "PIT_BSTR"
      },
      {
        "id": "UserPropertyValue",
        "type": "PIT_ARRAY",
        "description": "사용자 속성 - 값, (한/글 2024부터 지원)",
        "subType": "PIT_BSTR"
      }
    ]
  },
  {
    "id": "TabDef",
    "description": "탭 정의",
    "sourcePage": 140,
    "items": [
      {
        "id": "AutoTabLeft",
        "type": "PIT_UI1",
        "description": "문단 왼쪽 끝 탭 (on / off)"
      },
      {
        "id": "AutoTabRight",
        "type": "PIT_UI1",
        "description": "문단 오른쪽 끝 탭 (on / off) 각각의 탭 정의. 하나의 탭 아이템은 세 개의 인수로 표현되어 있음. (n * 3 + 0) - PIT_I : 탭 위치 (URC) (n * 3 + 1) - PIT_I : 채울 모양 (아래참조) (n * 3 + 2) - PIT_I : 탭 종류 (아래참조.)"
      },
      {
        "id": "TabItem",
        "type": "PIT_ARRAY",
        "description": "채울 모양 : 선 종류 탭 종류 : 0 = 왼쪽 1 = 오른쪽 2 = 가운데 3 = 소수점",
        "subType": "PIT_I"
      },
      {
        "id": "DeleteTab",
        "type": "PIT_ARRAY",
        "description": "지운 탭 위치 (URC) 첫 번째 값이 -1 이면 모두 지웠음을 의미한다.",
        "subType": "PIT_I"
      }
    ]
  },
  {
    "id": "Table",
    "description": "표",
    "sourcePage": 141,
    "items": [
      {
        "id": "PageBreak",
        "type": "PIT_UI1",
        "description": "0 = 나누지 않는다. 1 = 테이블은 나누지만 셀은 나누지 않는다. 2 = 셀 내의 텍스트도 나눈다."
      },
      {
        "id": "RepeatHeader",
        "type": "PIT_UI1",
        "description": "제목 행을 반복할지 여부. (on / off)"
      },
      {
        "id": "CellSpacing",
        "type": "PIT_UI4",
        "description": "셀 간격(HTML의 셀 간격과 동일 의미. HWPUNIT)"
      },
      {
        "id": "CellMarginLeft",
        "type": "PIT_I4",
        "description": "기본 셀 안쪽 여백(왼쪽)"
      },
      {
        "id": "CellMarginRight",
        "type": "PIT_I4",
        "description": "기본 셀 안쪽 여백(오른쪽)"
      },
      {
        "id": "CellMarginTop",
        "type": "PIT_I4",
        "description": "기본 셀 안쪽 여백(위쪽)"
      },
      {
        "id": "CellMarginBottom",
        "type": "PIT_I4",
        "description": "기본 셀 안쪽 여백(아래쪽)"
      },
      {
        "id": "BorderFill",
        "type": "PIT_SET",
        "description": "표에 적용되는 테두리/배경",
        "subType": "BorderFill"
      },
      {
        "id": "TableCharInfo",
        "type": "PIT_SET",
        "description": "표와 연결된 차트 정보 - 차트 미완성",
        "subType": "TableChartInfo"
      },
      {
        "id": "TableBorderFill",
        "type": "PIT_SET",
        "description": "표에 적용되는 테두리/배경",
        "subType": "BorderFill"
      },
      {
        "id": "Cell",
        "type": "PIT_SET",
        "description": "셀 속성",
        "subType": "Cell"
      },
      {
        "id": "TreatAsChar",
        "type": "PIT_UI1",
        "description": "글자처럼 취급 on / off"
      },
      {
        "id": "AffectsLine",
        "type": "PIT_UI1",
        "description": "줄 간격에 영향을 줄지 여부 on / off TREAT_AS_CHAR = TRUE일 때만 사용됨 세로 위치의 기준. TREAT_AS_CHAR = FALSE일 때만 사용됨"
      },
      {
        "id": "VertRelTo",
        "type": "PIT_UI1",
        "description": "0 = 종이 1 = 본문 영역 2 = 문단 VERT_REL_TO에 대한 상대적인 배열 방식. VERT_REL_TO의 값에 따라 가능한 범위가 제한된다. 0 = 위"
      },
      {
        "id": "VertAlign",
        "type": "PIT_UI1",
        "description": "1 = 가운데 2 = 아래 3 = 안쪽 4 = 바깥쪽"
      },
      {
        "id": "VertOffset",
        "type": "PIT_UI4",
        "description": "와 VERT_ALIGN을 기준점으로 한 상대적인 오프셋 값. HWPUNIT 단위. 가로 위치의 기준. TREAT_AS_CHAR = FALSE일 때만 사용됨",
        "subType": "VERT_REL_TO"
      },
      {
        "id": "HorzRelTo",
        "type": "PIT_UI1",
        "description": "0 = 종이 1 = 본문 영역 2 = 단 3 = 문단 HORZ_REL_TO에 대한 상대적인 배열 방식. 0 = 왼쪽"
      },
      {
        "id": "HorzAlign",
        "type": "PIT_UI1",
        "description": "1 = 가운데 2 = 오른쪽 3 = 안쪽 4 = 바깥쪽"
      },
      {
        "id": "HorzOffset",
        "type": "PIT_I4",
        "description": "와 HORZ_ALIGN을 기준점으로 한 상대적인 오프셋 값. HWPUNIT 단위.",
        "subType": "HORZ_REL_TO"
      },
      {
        "id": "FlowWithText",
        "type": "PIT_UI1",
        "description": "오브젝트의 세로 위치를 본문 영역으로 제한할지 여부 on / off VERT_REL_TO = PARA일 때만 사용됨 다른 오브젝트와 겹치는 것을 허용할지 여부 on / off"
      },
      {
        "id": "AllowOverlap",
        "type": "PIT_UI1",
        "description": "= FALSE일 때만 사용됨 FLOW_WITH_TEXT = TRUE이면 언제나 FALSE로 간주한다. 오브젝트 폭의 기준 0 = 종이",
        "subType": "TREAT_AS_CHAR"
      },
      {
        "id": "WidthRelTo",
        "type": "PIT_UI1",
        "description": "1 = 본문 영역 2 = 단 3 = 문단(VertRelTo = 문단일 때만 가능) 4 = 절대값 오브젝트 폭의 값 WIDTH_REL_TO의 값에 따라 다음과 같은 다른 단위를 뜻한다. 0 = 종이의 몇 %"
      },
      {
        "id": "Width",
        "type": "PIT_I4",
        "description": "1 = 본문 영역의 몇 % 2 = 단의 몇 % 3 = 문단의 몇 % 4 = 절대값 HWPUNIT 오브젝트 높이의 기준"
      },
      {
        "id": "HeightRelTo",
        "type": "PIT_UI1",
        "description": "0 = 종이 1 = 본문 영역 2 = 절대값 오브젝트의 높이 값 HEIGHT_REL_TO의 값에 따라 다음과 같은 다른 단위를 뜻한다."
      },
      {
        "id": "Height",
        "type": "PIT_I4",
        "description": "0 = 종이의 몇 % 1 = 본문 영역의 몇 % 2 = 절대값 HWPUNIT"
      },
      {
        "id": "ProtectSize",
        "type": "PIT_UI1",
        "description": "크기 보호 on / off 오브젝트 주위를 텍스트가 어떻게 흘러갈지 지정하는 옵션. TREAT_AS_CHAR = FALSE일 때만 사용됨 0 = bound rect를 따라"
      },
      {
        "id": "TextWrap",
        "type": "PIT_UI1",
        "description": "1 = 좌, 우에는 텍스트를 배치하지 않음 2 = 글과 겹치게 하여 글 뒤로 3 = 글과 겹치게 하여 글 앞으로 4 = 오브젝트의 outline을 따라 5 = 오브젝트 내부의 빈 공간까지 오브젝트의 좌/우 어느쪽에 글을 배치할지 지정하는 옵션. TEXT_WRAP가 SQUARE, TIGHT, THROUGH일 때만 사용된다."
      },
      {
        "id": "TextFlow",
        "type": "PIT_UI1",
        "description": "0 = 양쪽 1 = 왼쪽 2 = 오른쪽 3 = 큰쪽"
      },
      {
        "id": "OutsideMarginLeft",
        "type": "PIT_I4",
        "description": "오브젝트의 바깥 여백. HWPUNIT 단위"
      },
      {
        "id": "OutsideMarginRigh",
        "type": "PIT_I4",
        "description": "오브젝트의 바깥 여백. HWPUNIT 단위 t"
      },
      {
        "id": "OutsideMarginTop",
        "type": "PIT_I4",
        "description": "오브젝트의 바깥 여백. HWPUNIT 단위"
      },
      {
        "id": "OutsideMarginBott",
        "type": "PIT_I4",
        "description": "오브젝트의 바깥 여백. HWPUNIT 단위 om 이 개체가 속하는 번호 범주"
      },
      {
        "id": "NumberingType",
        "type": "PIT_UI1",
        "description": "1 = 그림 2 = 표 3 = 수식 오브젝트가 페이지에 배열될 때 계산되는 폭의 값"
      },
      {
        "id": "LayoutWidth",
        "type": "PIT_I4",
        "description": "글상자등이 늘어나면 늘어난 값을 계산해서 가진다. 단위는 HWPITID_SO_WIDTH와 같다."
      },
      {
        "id": "LayoutHeight",
        "type": "PIT_I4",
        "description": "오브젝트가 페이지에 배열될 때 계산되는 높이 값 글상자등이 늘어나면 늘어난 값을 계산해서 가진다. 단위는 HWPITID_SO_HEIGHT와 같다."
      },
      {
        "id": "Lock",
        "type": "PIT_UI1",
        "description": "오브젝트 선택 가능 on / off"
      },
      {
        "id": "HoldAnchorObj",
        "type": "PIT_UI1",
        "description": "쪽 나눔방지 on/off"
      },
      {
        "id": "PageNumber",
        "type": "PIT_UI",
        "description": "개체가 존재 하는 페이지"
      },
      {
        "id": "AdjustSelection",
        "type": "PIT_UI1",
        "description": "개체 Selection 상태 TRUE/FASLE"
      },
      {
        "id": "AdjustTextbox",
        "type": "PIT_UI1",
        "description": "글상자로 TRUE/FASLE"
      },
      {
        "id": "AdjustPrevObjAttr",
        "type": "PIT_UI1",
        "description": "앞개체 속성 따라가기 TRUE/FASLE Example : Table ParameterSet 설정하기 Visual Basic Dim TableSet As HwpParameterSet Set TableSet = HwpCtrl.CreateSet(\"Table\") TableSet.SetItem \"PageBreak\", 1 ← Table의 아이템 TableSet.SetItem \"TreatAsChar\", True ← ShapeObject의 아이템"
      }
    ]
  },
  {
    "id": "TableCreation",
    "description": "표 생성",
    "sourcePage": 145,
    "items": [
      {
        "id": "Rows",
        "type": "PIT_UI2",
        "description": "행 수 (생략하면 5)"
      },
      {
        "id": "Cols",
        "type": "PIT_UI2",
        "description": "칼럼 수 (생략하면 5)"
      },
      {
        "id": "RowHeight",
        "type": "PIT_ARRAY",
        "description": "행의 디폴트 높이 (PIT_I4)",
        "subType": "PIT_I4"
      },
      {
        "id": "ColWidth",
        "type": "PIT_ARRAY",
        "description": "칼럼의 디폴트 폭 (PIT_I4)",
        "subType": "PIT_I4"
      },
      {
        "id": "CellInfo",
        "type": "PIT_ARRAY",
        "description": "정보가 없는 셀은 디폴트값을 따라가므로 모든 셀에 대해 정보를 줄 필요는 없다.",
        "subType": "PIT_I4"
      },
      {
        "id": "WidthType",
        "type": "PIT_UI1",
        "description": "너비"
      },
      {
        "id": "HeightType",
        "type": "PIT_UI1",
        "description": "높이"
      },
      {
        "id": "WidthValue",
        "type": "PIT_I",
        "description": "너비 값"
      },
      {
        "id": "HeightValue",
        "type": "PIT_I",
        "description": "높이 값"
      },
      {
        "id": "TableTemplateValue",
        "type": "PIT_UI1",
        "description": "표 마당 적용 여부"
      },
      {
        "id": "TableProperties",
        "type": "PIT_SET",
        "description": "초기 표 속성",
        "subType": "Table"
      },
      {
        "id": "TableTemplate",
        "type": "PIT_SET",
        "description": "표마당 적용 속성",
        "subType": "TableTemplate"
      },
      {
        "id": "TableDrawProperties",
        "type": "PIT_SET",
        "description": "마우스로 선을 그릴 때 속성",
        "subType": "TableDrawPen"
      },
      {
        "id": "TextSelect",
        "type": "PIT_I",
        "description": "텍스트 선택 여부"
      }
    ]
  },
  {
    "id": "TableDeleteLine",
    "description": "표의 줄/칸 삭제",
    "sourcePage": 146,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "0 = 줄, 1 = 칸"
      }
    ]
  },
  {
    "id": "TableDrawPen",
    "description": "마우스로 테이블을 그릴 때 쓰이는 펜",
    "sourcePage": 147,
    "items": [
      {
        "id": "Style",
        "type": "PIT_UI2",
        "description": "을 그리는 연필(펜)의 선 모양",
        "subType": "Table"
      },
      {
        "id": "Width",
        "type": "PIT_UI1",
        "description": "을 그리는 연필(펜)의 선 굵기",
        "subType": "Table"
      },
      {
        "id": "Color",
        "type": "PIT_UI4",
        "description": "을 그리는 연필(펜)의 선 색깔 RGB color를 나타내기 위한 32비트 값 (0x00BBGGRR)",
        "subType": "Table"
      }
    ]
  },
  {
    "id": "TableInsertLine",
    "description": "표의 줄/칸 삽입",
    "sourcePage": 148,
    "items": [
      {
        "id": "Side",
        "type": "PIT_UI1",
        "description": "방향"
      },
      {
        "id": "Count",
        "type": "PIT_UI1",
        "description": "개수"
      }
    ]
  },
  {
    "id": "TableSplitCell",
    "description": "셀 나누기",
    "sourcePage": 149,
    "items": [
      {
        "id": "Cols",
        "type": "PIT_UI2",
        "description": "칸 수"
      },
      {
        "id": "Rows",
        "type": "PIT_UI2",
        "description": "줄 수"
      },
      {
        "id": "DistributeHeight",
        "type": "PIT_UI1",
        "description": "줄 높이를 같게"
      },
      {
        "id": "Merge",
        "type": "PIT_UI1",
        "description": "나누기 전에 합치기"
      },
      {
        "id": "Mode2",
        "type": "PIT_UI1",
        "description": "셀 나누기 모드 2, 셀 나누기를 할 때, adjust를 생략하고 셀이 어 긋나는 것을 방지한다."
      }
    ]
  },
  {
    "id": "TableStrToTbl",
    "description": "문자열을 표로",
    "sourcePage": 150,
    "items": [
      {
        "id": "DelimiterType",
        "type": "PIT_UI1",
        "description": "분리 문자(탭, 쉼표, 공백)"
      },
      {
        "id": "UserDefine",
        "type": "PIT_BSTR",
        "description": "사용자 정의 필드 구분 기호"
      },
      {
        "id": "AutoOrDefine",
        "type": "PIT_UI1",
        "description": "자동으로 할 것인지 분리 문자를 지정 할 것인지를 결정"
      },
      {
        "id": "KeepSeperator",
        "type": "PIT_UI1",
        "description": "선택 사항 (구분자 유지)"
      },
      {
        "id": "DelimiterEtc",
        "type": "PIT_BSTR",
        "description": "기타 문자 필드 구분 기호"
      },
      {
        "id": "TableCreation",
        "type": "PIT_SET",
        "description": "만들 표 속성",
        "subType": "TableCreation"
      }
    ]
  },
  {
    "id": "TableSwap",
    "description": "표 뒤집기",
    "sourcePage": 151,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "2 = X와 Y를 바꿈 3 = 반시계 방향으로 90도 회전 4 = 180도 회전 5 = 시계 방향으로 90도 회전"
      },
      {
        "id": "SwapMargin",
        "type": "PIT_UI1",
        "description": "여백 뒤집기 지원여부"
      }
    ]
  },
  {
    "id": "TableTblToStr",
    "description": "표를 문자열로",
    "sourcePage": 152,
    "items": [
      {
        "id": "DelimiterType",
        "type": "PIT_UI1",
        "description": "분리 문자(탭, 쉼표, 공백)"
      },
      {
        "id": "UserDefine",
        "type": "PIT_BSTR",
        "description": "사용자 정의 필드 구분 기호"
      }
    ]
  },
  {
    "id": "TableTemplate",
    "description": "표 마당 정보",
    "sourcePage": 153,
    "items": [
      {
        "id": "Format",
        "type": "PIT_UI",
        "description": "0x0002 = 글자 모양과 문단 모양 0x0004 = 셀 배경 0x0008 = 그레이 스케일 적용 대상. 다음 값의 조합으로 구성된다. 0x0001 = 제목 줄"
      },
      {
        "id": "ApplyTarger",
        "type": "PIT_UI",
        "description": "0x0002 = 마지막 줄 0x0004 = 첫째 칸 0x0008 = 마지막 칸"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "표 마당 파일 이름"
      },
      {
        "id": "CreateMode",
        "type": "PIT_UI1",
        "description": "표 만들기 모드 (표 만들기에서 제목줄에 제목 속성 넣기 위해)"
      },
      {
        "id": "ThemeColor",
        "type": "PIT_UI",
        "description": "테마색 설정."
      }
    ]
  },
  {
    "id": "TextCtrl",
    "description": "TEXT 컨트롤의 공통 데이터",
    "sourcePage": 154,
    "items": [
      {
        "id": "CtrlData",
        "type": "PIT_SET",
        "description": "컨트롤 이름 저장을 위한 영역",
        "subType": "CtrlData"
      }
    ]
  },
  {
    "id": "TextVertical",
    "description": "세로쓰기",
    "sourcePage": 155,
    "items": [
      {
        "id": "Landscope",
        "type": "PIT_UI1",
        "description": "용지 방향. 0 = 좁게, 1 = 넓게 글자 방향."
      },
      {
        "id": "TextDirection",
        "type": "PIT_UI2",
        "description": "0 = 보통 (왼쪽에서 오른쪽) 1 = 세로쓰기 (라틴 문자 회전) 2 = 세로쓰기 (라틴 문자 포함)"
      },
      {
        "id": "TextVerticalWidthHead",
        "type": "PIT_I",
        "description": "머리말/꼬리말 세로쓰기 여부 적용 대상 0 = 선택된 구역 1 = 선택된 문자열"
      },
      {
        "id": "ApplyTo",
        "type": "PIT_UI1",
        "description": "2 = 현재 구역 3 = 문서전체 4 = 새 구역 : 현재 위치부터 새로 5 = no items (적용대상 없음) 적용 대상 분류. 적용 대상 분류는 현재 캐럿의 상태에 따라 ApplyTo에 적용 가능한 대상을 한정짓는 역할을 한다. 내부적으로 값이 계산되므로, 값을 참조하는 용도로만 사용하도록 한다. 다음의 값의 조합으로 구성된"
      },
      {
        "id": "ApplyClass",
        "type": "PIT_UI1",
        "description": "다. 0x0001 = 선택된 구역 0x0002 = 선택된 문자열 0x0004 = 현재 구역 0x0008 = 문서 전체 0x0010 = 새 구역 : 현재 위치부터 새로"
      }
    ]
  },
  {
    "id": "UserQCommandFile",
    "description": "사용자 자동 명령 파일 저장/로드",
    "sourcePage": 156,
    "items": [
      {
        "id": "Save",
        "type": "PIT_I4",
        "description": "저장 (TRUE = Save, FALSE = Open)"
      },
      {
        "id": "FileName",
        "type": "PIT_BSTR",
        "description": "파일명"
      },
      {
        "id": "LoadType",
        "type": "PIT_I4",
        "description": "로드 방법 (TRUE = Overwrite, FALSE = Merge)"
      }
    ]
  },
  {
    "id": "VersionInfo",
    "description": "버전 정보",
    "sourcePage": 157,
    "items": [
      {
        "id": "SourcePath",
        "type": "PIT_BSTR",
        "description": "버전 비교용 소스 패스"
      },
      {
        "id": "TargetPath",
        "type": "PIT_BSTR",
        "description": "버전 비교용 타겟 패스"
      },
      {
        "id": "ItemStartIndex",
        "type": "PIT_UI1",
        "description": "버전 비교를 보여줄 시작 히스토리 인덱스"
      },
      {
        "id": "ItemEndIndex",
        "type": "PIT_UI1",
        "description": "버전 비교를 보여줄 마지막 히스토리 인덱스"
      },
      {
        "id": "ItemOverWrite",
        "type": "PIT_UI1",
        "description": "히스토리 정보를 저장할 때 마지막 버전으로 덮어쓰는 플랙 (on/off)"
      },
      {
        "id": "ItemSaveDescriptio",
        "type": "PIT_UI1",
        "description": "히스토리 정보를 저장할 때 설명을 입력하는 대화상자를 띄우는 플 n 랙 (on/off)"
      },
      {
        "id": "TempFilePath",
        "type": "PIT_ARRAY",
        "description": "버전 비교용 임시파일 경로",
        "subType": "PIT_BSTR"
      },
      {
        "id": "ItemInfoIndex",
        "type": "PIT_UI4",
        "description": "버전 정보 얻어오기 및 삭제 시 사용될 인덱스"
      },
      {
        "id": "SaveFilePath",
        "type": "PIT_BSTR",
        "description": "버전 저장 파일 경로(OCX 컨트롤용)"
      },
      {
        "id": "ItemInfoWriter",
        "type": "PIT_BSTR",
        "description": "작성자 정보"
      },
      {
        "id": "ItemInfoDescriptio",
        "type": "PIT_BSTR",
        "description": "해당 버전에 대한 설명 n"
      },
      {
        "id": "ItemInfoTimeHi",
        "type": "PIT_UI4",
        "description": "날짜 정보, FILETIME의 HIWORD"
      },
      {
        "id": "ItemInfoTimeLo",
        "type": "PIT_UI4",
        "description": "날짜 정보, FILETIME의 LOWORD"
      },
      {
        "id": "ItemInfoLock",
        "type": "PIT_UI1",
        "description": "히스토리 정보 수정 플랙"
      },
      {
        "id": "VersionAutoSave",
        "type": "PIT_UI1",
        "description": "새 버전으로 자동 저장 on/off"
      },
      {
        "id": "VersionDiffSplitVi",
        "type": "PIT_UI1",
        "description": "버전 비교 방식 (한 화면에서 비교 : 0, 두 화면에서 비교 : 1) ew"
      },
      {
        "id": "UsedStanTime",
        "type": "PIT_UI1",
        "description": "표준시 사용 플랙"
      },
      {
        "id": "UsedCert",
        "type": "PIT_UI1",
        "description": "공인인증서 인증 사용 플랙"
      },
      {
        "id": "FileDiff",
        "type": "PIT_UI1",
        "description": "문서 비교 액션 플랙"
      },
      {
        "id": "ResultSourcePath",
        "type": "PIT_BSTR",
        "description": "문서 비교 SRC 결과 파일 경로 (OCX 컨트롤용)"
      },
      {
        "id": "ResultTargetPath",
        "type": "PIT_BSTR",
        "description": "문서 비교 TGT 결과 파일 경로 (OCX 컨트롤용)"
      },
      {
        "id": "ResultMergedPath",
        "type": "PIT_BSTR",
        "description": "문서 비교 Merged 결과 파일 경로 (OCX 컨트롤용)"
      },
      {
        "id": "ResultOption",
        "type": "PIT_UI1",
        "description": "문서 비교 결과 옵션 (0:메모, 1:교정부호) (OCX 컨트롤용)"
      },
      {
        "id": "ResultShowMemo",
        "type": "PIT_UI1",
        "description": "문서 비교 결과 메모를 화면에 보이게 할 지 여부(문서 비교 결과 옵션이 메모일 경우에 동작) (OCX 컨트롤용)"
      }
    ]
  },
  {
    "id": "ViewProperties",
    "description": "뷰의 속성",
    "sourcePage": 158,
    "items": [
      {
        "id": "OptionFlag",
        "type": "PIT_UI",
        "description": "0x0004 = 문단 마크 기호로 0x0008 = 안내선 0x0010 = 그리기 격자 0x0020 = 그림 감춤 화면 확대 종류. 0 = 사용자 정의"
      },
      {
        "id": "ZoomType",
        "type": "PIT_UI1",
        "description": "1 = 쪽 맞춤 2 = 폭 맞춤 3 = 여러 쪽"
      },
      {
        "id": "ZoomRatio",
        "type": "PIT_UI2",
        "description": "화면 확대 종류가 “사용자 정의”인 경우 화면 확대 비율. 10% ~ 500%"
      },
      {
        "id": "ZoomCntX",
        "type": "PIT_UI1",
        "description": "화면 확대 종류가 “여러 쪽”인 경우 가로 페이지 수. 1 ~ 8"
      },
      {
        "id": "ZoomCntY",
        "type": "PIT_UI1",
        "description": "화면 확대 종류가 “여러 쪽”인 경우 세로 페이지 수. 1 ~ 8"
      },
      {
        "id": "ZoomMirror",
        "type": "PIT_UI1",
        "description": "맞쪽 보기. 페이지 수가 2의 배수일 때만 동작"
      },
      {
        "id": "PageDir",
        "type": "PIT_UI1",
        "description": "쪽 방향(HWPPAGE_DIR_VERT : 0, HWPPAGE_DIR_HORZ : 1)"
      },
      {
        "id": "MouseWheelDir",
        "type": "PIT_UI1",
        "description": "마우스 휠 방향(HWPWHEEL_DIR_VERT : 0, HWPWHEEL_DIR_HORZ : 1)"
      },
      {
        "id": "DragDrop",
        "type": "PIT_UI1",
        "description": "드래그 앤 드롭 지원"
      }
    ]
  },
  {
    "id": "ViewStatus",
    "description": "뷰 상태 정보 ver:0x06000101",
    "sourcePage": 159,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI",
        "description": "0 (현재 View의 절대 Pos값만 지원함)"
      },
      {
        "id": "ViewPosX",
        "type": "PIT_I4",
        "description": "현재 뷰의 X값"
      },
      {
        "id": "ViewPosY",
        "type": "PIT_I4",
        "description": "현재 뷰의 Y값"
      }
    ]
  },
  {
    "id": "CompatibleDocument",
    "description": "호환 문서",
    "sourcePage": 160,
    "items": [
      {
        "id": "TargetProgram",
        "type": "PIT_UI",
        "description": "대상 프로그램"
      },
      {
        "id": "Default",
        "type": "PIT_UI",
        "description": "대화상자 기본 제공 여부"
      },
      {
        "id": "CurrentVersion",
        "type": "PIT_UI",
        "description": "현재 버전 여부"
      }
    ]
  },
  {
    "id": "PronounceInfo",
    "description": "한자/일어 발음 표시",
    "sourcePage": 161,
    "items": [
      {
        "id": "Show",
        "type": "PIT_UI1",
        "description": "한자/일어 발음 표시 보이기"
      },
      {
        "id": "Position",
        "type": "PIT_UI1",
        "description": "표시 위치"
      },
      {
        "id": "Hanja",
        "type": "PIT_UI1",
        "description": "한자 표시"
      },
      {
        "id": "Japanese",
        "type": "PIT_UI1",
        "description": "일어 표시"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "글꼴"
      },
      {
        "id": "TextSize",
        "type": "PIT_UI1",
        "description": "글자 크기"
      },
      {
        "id": "TextColor",
        "type": "PIT_UI4",
        "description": "글자 색"
      },
      {
        "id": "Heterography",
        "type": "PIT_UI1",
        "description": "동자이음 문자 표시 여부"
      }
    ]
  },
  {
    "id": "StyleItem",
    "description": "스타일 - 바로 편집하기 대화상자",
    "sourcePage": 162,
    "items": [
      {
        "id": "Type",
        "type": "PIT_UI1",
        "description": "스타일 종류"
      },
      {
        "id": "NameLocal",
        "type": "PIT_BSTR",
        "description": "스타일 이름(로컬)"
      },
      {
        "id": "NameEng",
        "type": "PIT_BSTR",
        "description": "스타일 이름(영문)"
      },
      {
        "id": "Next",
        "type": "PIT_I",
        "description": "다음 스타일 인덱스"
      },
      {
        "id": "LockForm",
        "type": "PIT_UI1",
        "description": "양식스타일 보호"
      },
      {
        "id": "CharShape",
        "type": "PIT_SET",
        "description": "글자 모양",
        "subType": "CharShape"
      },
      {
        "id": "ParaShape",
        "type": "PIT_SET",
        "description": "문단 모양",
        "subType": "ParaShape"
      }
    ]
  },
  {
    "id": "InsertFieldTemplate",
    "description": "상호 참조 넣기",
    "sourcePage": 163,
    "items": [
      {
        "id": "ShowSingle",
        "type": "PIT_UI",
        "description": "문서 마당 정보 PropertySheet 대화상자에서 원하는 페이지(탭) 만 보이기"
      },
      {
        "id": "TemplateDirection",
        "type": "PIT_BSTR",
        "description": "필드 컨트롤의 안내문/지시문"
      },
      {
        "id": "TemplateHelp",
        "type": "PIT_BSTR",
        "description": "필드 컨트롤의 도움말"
      },
      {
        "id": "TemplateName",
        "type": "PIT_BSTR",
        "description": "필드 이름 (name) 필드의 종류 0 = 누름틀"
      },
      {
        "id": "TemplateType",
        "type": "PIT_UI1",
        "description": "1 = 개인 정보 2 = 문서 요약 3 = 만든 날짜 4 = 파일 이름/경로"
      },
      {
        "id": "Editable",
        "type": "PIT_UI1",
        "description": "부분편집 모드에서 편집속성"
      }
    ]
  },
  {
    "id": "SaveAsImage",
    "description": "바이너리 그림을 다른 형태로 저장하는 옵션을 설정",
    "sourcePage": 164,
    "items": [
      {
        "id": "ResizeImage",
        "type": "PIT_UI1",
        "description": "문서에 삽입된 그림 오브젝트의 크기를 고려하여 최소 크기로 저장 여부."
      },
      {
        "id": "DelCutting",
        "type": "PIT_UI1",
        "description": "잘라내기 이미지 불필요한 부분 삭제 여부"
      },
      {
        "id": "SaveAsFormat",
        "type": "PIT_I",
        "description": "다른이름으로 저장한 포맷"
      },
      {
        "id": "SaveDpiX",
        "type": "PIT_UI",
        "description": "변경될 이미지 X축 DPI"
      },
      {
        "id": "SaveDpiY",
        "type": "PIT_UI",
        "description": "변경될 이미지 Y축 DPI"
      },
      {
        "id": "SaveType",
        "type": "PIT_UI1",
        "description": "저장 액션 타입(None = 0x00, insert = 0x01, SaveTime = 0x03)"
      },
      {
        "id": "MinWidth",
        "type": "PIT_UI",
        "description": "최소 너비"
      },
      {
        "id": "MinHeight",
        "type": "PIT_UI",
        "description": "최소 높이"
      },
      {
        "id": "ExtendFormat",
        "type": "PIT_UI1",
        "description": "지원 포맷 확장, (한/글 2024부터 지원)"
      },
      {
        "id": "Resolution",
        "type": "PIT_UI",
        "description": "제한 해상도 설정(예 : 3840 * 2160), (한/글 2024부터 지원)"
      },
      {
        "id": "AllFormat",
        "type": "PIT_UI1",
        "description": "모든 이미지 포맷 변환, (한/글 2024부터 지원)"
      }
    ]
  },
  {
    "id": "BrailleConvert",
    "description": "점자 변환",
    "sourcePage": 165,
    "items": [
      {
        "id": "ResultType",
        "type": "PIT_UI1",
        "description": "결과 문자코드 형식"
      },
      {
        "id": "CharHeight",
        "type": "PIT_I4",
        "description": "글자 모양-크기"
      },
      {
        "id": "FontName",
        "type": "PIT_BSTR",
        "description": "글자 모양-글꼴"
      },
      {
        "id": "FontType",
        "type": "PIT_UI1",
        "description": "글자 모양-글꼴타입"
      },
      {
        "id": "LineCharApply",
        "type": "PIT_UI1",
        "description": "줄/글자 수 - 적용 여부"
      },
      {
        "id": "LineCharType",
        "type": "PIT_UI1",
        "description": "줄/글자 수 - 종류"
      },
      {
        "id": "LineSpacing",
        "type": "PIT_I4",
        "description": "줄/글자 수 - 줄 간격"
      },
      {
        "id": "CharSpacing",
        "type": "PIT_I4",
        "description": "줄/글자 수 - 글자 간격"
      },
      {
        "id": "PaperApply",
        "type": "PIT_UI1",
        "description": "용지 - 적용 여부"
      },
      {
        "id": "PaperType",
        "type": "PIT_I4",
        "description": "용지 - 설정 용지 타입"
      },
      {
        "id": "TargetView",
        "type": "PIT_UI1",
        "description": "결과 새창/새탭 0:새창으로, 1:새탭으로"
      }
    ]
  },
  {
    "id": "PictureChange",
    "description": "그림 바꾸기",
    "sourcePage": 166,
    "items": [
      {
        "id": "PicturePath",
        "type": "PIT_BSTR",
        "description": "그림 경로"
      },
      {
        "id": "PictureEmbed",
        "type": "PIT_UI1",
        "description": "여부",
        "subType": "Embed"
      }
    ]
  },
  {
    "id": "PresentationRange",
    "description": "문서 전체 프레젠테이션 설정",
    "sourcePage": 167,
    "items": [
      {
        "id": "PresentationDefau",
        "type": "PIT_SET",
        "description": "기본 설정값 lt",
        "subType": "Presentation"
      },
      {
        "id": "ExistPresentation",
        "type": "PIT_UI1",
        "description": "에 프레젠테이션 설정 유무. 1 = 설정, 0 = 비설정.",
        "subType": "section"
      }
    ]
  },
  {
    "id": "DeletePage",
    "description": "쪽 지우기 글2007",
    "sourcePage": 168,
    "items": [
      {
        "id": "Range",
        "type": "PIT_UI1",
        "description": "범위"
      },
      {
        "id": "RangeCustom",
        "type": "PIT_BSTR",
        "description": "사용자가 직접 입력한 범위"
      },
      {
        "id": "UsingPagenum",
        "type": "PIT_UI1",
        "description": "문서의 쪽 번호로 입력"
      }
    ]
  },
  {
    "id": "TrackChange",
    "description": "변경 추적",
    "sourcePage": 169,
    "items": [
      {
        "id": "InsertShape",
        "type": "PIT_UI1",
        "description": "삽입 모양"
      },
      {
        "id": "InsertColor",
        "type": "PIT_UI1",
        "description": "삽입 색"
      },
      {
        "id": "DeleteShape",
        "type": "PIT_UI1",
        "description": "삭제 모양"
      },
      {
        "id": "DeleteColor",
        "type": "PIT_UI1",
        "description": "삭제 색"
      },
      {
        "id": "ChangeShape",
        "type": "PIT_UI1",
        "description": "변경 모양"
      },
      {
        "id": "ChangeColor",
        "type": "PIT_UI1",
        "description": "변경 색"
      },
      {
        "id": "Format",
        "type": "PIT_UI1",
        "description": "서식 추적 여부"
      },
      {
        "id": "FormatShape",
        "type": "PIT_UI1",
        "description": "서식 추적 모양"
      },
      {
        "id": "FormatColor",
        "type": "PIT_UI1",
        "description": "서식 추적 색"
      },
      {
        "id": "MemoWidth",
        "type": "PIT_I4",
        "description": "메모 너비"
      },
      {
        "id": "MemoLine",
        "type": "PIT_UI1",
        "description": "메모 선 표시"
      },
      {
        "id": "MemoColor",
        "type": "PIT_UI1",
        "description": "메모 색"
      },
      {
        "id": "Tooltip",
        "type": "PIT_UI1",
        "description": "툴팁 표시"
      }
    ]
  },
  {
    "id": "PrivateInfoSecurity",
    "description": "개인 정보 보안",
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
        "description": "개인 정보 암호"
      },
      {
        "id": "ChangePassword",
        "type": "PIT_BSTR",
        "description": "바꿀 개인 정보 암호"
      },
      {
        "id": "Pattern",
        "type": "PIT_BSTR",
        "description": "개인 정보 패턴"
      },
      {
        "id": "Telephone",
        "type": "PIT_UI1",
        "description": "전화번호 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Resident",
        "type": "PIT_UI1",
        "description": "주민등록번호 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Email",
        "type": "PIT_UI1",
        "description": "전자우편 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Account",
        "type": "PIT_UI1",
        "description": "계좌 번호 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Credit",
        "type": "PIT_UI1",
        "description": "신용카드 번호 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Address",
        "type": "PIT_UI1",
        "description": "주소 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Birthday",
        "type": "PIT_UI1",
        "description": "생년월일 (찾을 개인 정보 on/off)"
      },
      {
        "id": "IPAddress",
        "type": "PIT_UI1",
        "description": "인터넷주소 (찾을 개인 정보 on/off)"
      },
      {
        "id": "ForeignerNo",
        "type": "PIT_UI1",
        "description": "외국인등록번호 (찾을 개인 정보 on/off)"
      },
      {
        "id": "UserDef",
        "type": "PIT_UI1",
        "description": "사용자 정의 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Etc",
        "type": "PIT_UI1",
        "description": "기타 (찾을 개인 정보 on/off)"
      },
      {
        "id": "NoMessageBox",
        "type": "PIT_UI1",
        "description": "메세지 박스를 띄우지 않을지 여부"
      },
      {
        "id": "DelHyperlink",
        "type": "PIT_UI1",
        "description": "하이퍼링크(이메일 연결)를 지울지 여부"
      },
      {
        "id": "MarkChar",
        "type": "PIT_UI",
        "description": "개인 정보 표시 문자"
      },
      {
        "id": "MarkCharType",
        "type": "PIT_UI",
        "description": "표시 문자 선택 사항"
      },
      {
        "id": "PasswordOnOff",
        "type": "PIT_UI1",
        "description": "개인 정보 보안 암호 설정/취소 개인 정보 Type(0:정규표현식-일반, 1:일반문자열, 2:정규표현식"
      },
      {
        "id": "InfoType",
        "type": "PIT_UI",
        "description": "-주민번호, 3:주소검색, 4:외국인번호, 5이상: 나머지 개인정보의 정규표현식)"
      },
      {
        "id": "License",
        "type": "PIT_UI1",
        "description": "운전면허 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Passport",
        "type": "PIT_UI1",
        "description": "여권번호 (찾을 개인 정보 on/off)"
      },
      {
        "id": "Encrypted",
        "type": "PIT_UI1",
        "description": "문서에 암호화된 개인 정보 필드가 있을 때 여부"
      },
      {
        "id": "UnregistPattern",
        "type": "PIT_UI1",
        "description": "값 Description 0 없음. (NULL) 1 실선. (SOLID) 2 긴 점선. (DASH) 3 점선. (DOT) 4 -.-.-.-. 5 -..-..-.. 6 HNCDR_LS_DASH보다 긴 선분의 반복. (LONGDASH) 7 HNCDR_LS_DOT보다 큰 동그라미의 반복. (CIRCLE) 8 2중선. (DOUBLESLIM) 9 가는 선 + 굵은 선 2중선. (SLIMTHICK) 10 굵은 선 + 가는 선 2중선. (THICKSLIM) 11 가는 선 + 굵은 선 + 가는 선 3중선. (SLIMTHICKSLIM) 12 물결. (WAVE) 13 물결 2중선. (DOUBLEWAVE) 14 두꺼운 3D. (THICK3D) 15 두꺼운 3D. 광원 반대. (THICKREV3D) 16 3D 단선. (3D) 17 3D 단선. 광원 반대. (REV3D) 값 Description -1 최소값 (=0.1 mm) 0 0.1 mm 1 0.12 mm 2 0.15 mm 3 0.2 mm 4 0.25 mm 5 0.3 mm 6 0.4 mm 7 0.5 mm 8 0.6 mm 9 0.7 mm 10 1.0 mm 11 1.5 mm 12 2.0 mm 13 3.0 mm 14 4.0 mm 15 5.0 mm 16 최대값 (=5.0 mm) 값 Description 0 1, 2, 3 1 동그라미 쳐진 1, 2, 3 2 I, II, III 3 i, ii, iii 4 A, B, C 5 a, b, c 6 동그라미 쳐진 A, B, C 7 동그라미 쳐진 a, b, c 8 가, 나, 다 9 동그라미 쳐진 가, 나, 다 10 ㄱ, ㄴ, ㄷ 11 동그라미 쳐진 ㄱ, ㄴ, ㄷ 12 일, 이, 삼 13 一, 二, 三 14 동그라미 쳐진 一, 二, 三 각주/미주 전용 (0x80부터 4가지 문자가 차례로 반복 시작) 0x81 사용자 지정 문자 반복 많은 정보를 한 줄의 문자열에 포함하고 있으므로 상당히 복잡한 구조를 가지고 있습니다. 가장 빠르게 익힐 수 있는 방법은 원하는 형식의 하이퍼링크를 직접 만들고 해당 문서를 HWPML(*.hml)형식으로 저장한 후 XML문서를 볼 수 있는 프로그램(예:Microsoft Internet Explorer)에서 열어보면 자세한 내용을 알 수 있습니다. (IE에서는 hml확장자를 xml 로 변경하신 후 봐야합니다.) 예) HyperLink정보가 hml문서에 저장되어 있는 모습 <FIELDBEGIN Type=\"Hyperlink\" InstId=\"2118971508\" Editable=\"false\" Dirty=\"false\" Property=\"0\" Command=\"http://www.haansoft.com;1;0;0\" /> 하이퍼링크의 문자열은 “;”을 구분자로 하는 다음과 같은 구조를 가집니다. [TARGET];[LINK_TYPE];[OBJ_TYPE];[OPTION] TARGET은 하이퍼링크의 대상을 뜻하며, 연결 유형에 따라 다음과 같은 형태를 가집니다. Link Type Syntax Example 글개체 글문서?개체ID ParameterSet.hwp?#2043988344 웹 주소 URL http://www.haansoft.com 이메일 주소 mailto:메일주소 mailto:swlab@haansoft.com 외부 프로그램 file path c:\\hnc\\hnctt\\hnctt.exe ※ 연결 유형이 글개체이고, 동일문서상의 개체일 경우에는 구문(Syntax)의 글문서를 제외할 수 있습니다. (예: ?#2043988344) TARGET에서 사용되는 개체ID는 hml문서를 참조하여 얻을 수 있습니다. 개체 Element안의 \"InstId\"속성이 그 개체의 ID를 나타냅니다. TARGET에서 사용할 때에는 앞에 #을 붙여 개체ID임을 나타냅니다. TARGET 다음으로 표현되는 데이터들은 다음과 같은 의미를 가집니다. Item Decription LINK_TYPE 연결 유형 : 0 = 글개체, 1 = 웹 주소, 2 = 이메일, 3 = 외부 프로그램 OBJ_TYPE 연결할 글개체의 유형. LINK_TYPE이 글개체가 아니면 이 값은 무시된다. 0 = 책갈피, 1 = 개요, 2 = 표, 3 = 그림, 4 = 수식 하이퍼링크 이동시 옵션. 외부의 글문서와 연결된 경우에만 적용된다. OPTION 0 = 현재창에 외부문서를 연다. (현재문서는 닫힘) 1 = 현재창에 새 탭을 띄워 외부문서를 연다. 2 = 새 창을 띄워 외부문서를 연다. 다음은 위 내용을 종합하여 작성한 하이퍼링크 Command 문자열의 예제입니다. 외부문서“ParameterSet.hwp\"의 책갈피와 연결. 현재문서에 연 ParameterSet.hwp?#2043988344;0;0;0 다. C:\\Hnc\\Hwp70\\Readme.Hwp?#204399566;0;0;0 외부문서“Readme.hwp\"의 책갈피와 연결(절대경로). 현재문서에 ?#2043988345;0;1;1 연다. ?#2043988347;0;3;2 현재문서의 “개요”와 연결. 새 탭에 연다. http://www.haansoft.com;1;0;0 현재문서의 “그림”과 연결. 새 창에 연다. mailto:swlab@haansoft.com;2;0;0 해당 웹 주소로 연결한다. c:\\hnc\\hnctt\\hnctt.exe;3;0;0 해당 메일주소로 연결한다. (연결된 프로그램 자동로딩) 한글의 타자연습프로그램을 로딩시킨다. 상호참조는 하이퍼링크의 확장된 형태로 하이퍼링크와 비슷한 형태의 Command 문자열을 가집니다. 상호참조의 문자열은 다음과 같은 구조를 가집니다. [TARGET];[OBJ_TYPE];[REF_STRING];[HYPERLINK];[OPTION] 각 항목은 다음과 같습니다. Item Decription TARGET HyperLink와 동일 OBJ_TYPE 참조 대상의 유형. 0 = 표, 1 = 그림, 2 = 수식, 3 = 각주, 4 = 미주, 5 = 개요, 6 = 책갈피 참조 내용. REF_STRING 0 = 개체가 위치한 쪽, 1 = 개체번호, 2 = 개체내용, 3 = 위/아래 존재여부 (일반) 0 = 개체가 위치한 쪽, 1 = 책갈피이름, 2 = 책갈피내용, 3 = 위/아래 존재여부 (책갈피) 0 = 개체가 위치한 쪽, 1 = 개체번호, 3 = 위/아래 존재여부 (각주/미주) HYPERLINK 하이퍼링크 여부 : 0 = 연결 안 함, 1 = 연결함 하이퍼링크 이동시 옵션. 외부의 글문서와 연결된 경우에만 적용된다. OPTION 0 = 현재창에 외부문서를 연다. (현재문서는 닫힘) 1 = 현재창에 새 탭을 띄워 외부문서를 연다. 2 = 새 창을 띄워 외부문서를 연다. TARGET에서 사용되는 개체ID는 하이퍼링크와 마찬가지로 hml문서를 참조하여 얻을 수 있습니다. 개체 Element안의 \"InstId\"속성이 그 개체의 ID를 나타냅니다. TARGET에서 사용할 때에는 앞에 #을 붙여 개체ID임을 나타냅니다. “각주”,“미주”개체는 “InstId”속성이 존재하지 않습니다. 이런 경우에는 개체가 존재하는 순서(INDEX)로 개체를 구분합니다. TARGET에서 사용할 때는 마찬가지로 앞에 #을 붙입니다. “책갈피” 개체의 경우에는 \"InstId\"속성 대신 \"Name\"속성을 사용합니다. 이 경우에는 #을 붙이지 않습니다. 다음은 위 내용을 종합하여 작성한 상호참조 Command 문자열 예제입니다. ?#2043988345;0;0;0;0 표를 상호참조하여 화면에 표의 Page를 표시한다. ?#1;3;1;0;0 각주를 상호참조하여 화면에 각주번호를 표시한다. C:\\Hnc\\Hwp70\\Readme.Hwp?#204399566;1;2;1;2 외부문서\"ReadMe.hwp\"의 그림을 상호참조한다. 클릭시 새 창에 ?책갈피;6;2;0;0 띄움 책갈피를 상호참조하여 화면에 책갈피 내용을 표시한다. ※ 상호참조는 하이퍼링크와 다르게 절대경로만으로 외부문서를 참조할 수 있다. 적용범위란 현재 실행한 액션이 적용될 범위를 말하는 것이다. 예를 들면 표의 테두리를 변경하는 액션을 수행할 때 이것을 전체 셀에 할 것인지, 선택된 셀에만 적용할 것인지를 가늠하는 용도로 쓰인 다. ApplyTo는 위에서 말한 적용범위를 나타낸 아이템으로 적용범위가 필요한 모든 액션에 들어가 있다. ApplyTo에 들어가는 값은 각각의 액션에 따라 다르며 들어갈 수 있는 값은 액션이 직접 정의하여 사용한다. (일반적으로 동일한 파라메 터셋을 사용하는 액션은 동일한 ApplyTo 값을 가진다.) 캐럿의 상태에 따라 ApplyTo에 들어갈 수 있는 값이 제한적일 수 있다. 이런 경우 대화상자에서 선택될 수 있는 적용범위를 제한해 주는 것이 좋은데 이것을 정의한 아이템이 바로 ApplyClass이다. 마찬가지 로 적용범위의 제한이 필요한 모든 액션에 들어가 있다. (적용범위를 가지나 캐럿의 상태에 따라 적용범위를 제한할 필요가 없으면 ApplyClass가 필요 없다.) ApplyClass는 ApplyTo와 마찬가지로 각각의 액션이 들어가는 값을 정의하며, ApplyTo와 다르게 정의한 값을 조합하여 사용한다. (일종의 Mask시스템으로 지정된 bit flag가 존재하면 ApplyTo로 적용 가능한 값이다.) HNC Type C++(MFC) Type HNC Type C++(MFC) Type PIT_NULL NULL PMT_INT8 char PIT_BSTR BSTR (OLE Automation string) PMT_INT16 short PIT_I1 char (1byte signed integer) PMT_INT32 long PIT_I2 short (2byte signed integer) PMT_INT int PIT_I4 long (4byte signed integer) PMT_BYTE BYTE (unsigned char) PIT_I int (machine dependent PMT_UINT16 unsigned short integer) PIT_UI1 unsigned char PMT_UINT32 unsigned long PIT_UI2 unsigned short PMT_UINT unsigned int PIT_UI4 unsigned long PMT_CHAR char PIT_UI unsigned int PMT_UCHAR BYTE (unsigned char) HwpParameterSet PMT_WCHAR unsigned short PMT_SHORT short PIT_SET 내부에서 해당 ParameterSet을 생성 PMT_LONG long 한 뒤 그 객체의 Dispatch ID를 돌 려준다. PMT_ULONG unsigned long HwpParameterArray PMT_WORD unsigned short PMT_DWORD unsigned long PIT_ARRAY 내부에서 해당 ParameterArray를 PMT_BOOL int 생성한 뒤 그 객체의 Dispatch ID를 돌려준다. PMT_ASTR char * PIT_BINDATA any (따로 타입을 체크하지 않음) PMT_WSTR wchar_t * PIT_UI64 리눅스용 64bit UINT PMT_BSTR BSTR ※ PIT_* or PMT_* Type은 각 시스템의 호환성을 위해 내부적으로 지정한 기호상수이다. 각 시스템에서 이 기호상수를 해석해서 시스템에 잘 호환되는 내부 Data Type으로 변환하여 사용한다. 그러므로, 해당 타입이 꼭 C++(MFC) Type과 100% 호환되는 것은 아니며, 또한 액션에 따라 내부적으로 해석하는 방법이 다른 수도 있다. 해당 타입을 사용할 때에는 의미론적인 Data Type으로 인지하여 사용한다. 글이 사용하는 기본 단위. 1mm는 283.465HWPUNIT 이며, 1inch는 7200HWPUNIT 이다. 32bit 정수값. HWPUNIT 또는 Relative Character Position을 나타낸다. Bit0 = 0인 경우, HWPUNIT을 나타내며, Bit1~31에 HWPUNIT에 해당하는 값이 저장된다. BIT0 = 1인 경우, Relative Character이며 Bit1~31에는 n*100의 값을 가진다. #define HWPURC_MAKE(type, value) (((value) << 1) | ((type) & 1)) #define HWPURC_TYPE(data) ((data) & 1) #define HWPURC_VALUE(data) ((data) >> 1)"
      }
    ]
  }
];

export const eventDefinitions: readonly HwpEventDefinition[] = [
  {
    "id": "Quit",
    "description": "한/글을 종료할 때 발생",
    "sourcePage": 46
  },
  {
    "id": "CreateXHwpWindow",
    "description": "한/글에서 새 문서 창을 열었을 때 발생",
    "sourcePage": 46
  },
  {
    "id": "CloseXHwpWindow",
    "description": "한/글에서 문서 창을 닫았을 때 발생",
    "sourcePage": 46
  },
  {
    "id": "NewDocument",
    "description": "새 문서를 생성할 경우 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentBeforeClose",
    "description": "문서를 닫기 직전에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentBeforeOpen",
    "description": "문서를 열기 직전에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentAfterOpen",
    "description": "문서를 열고 난 후에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentBeforeSave",
    "description": "문서를 저장하기 직전에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentAfterSave",
    "description": "문서를 저장한 후에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentAfterClose",
    "description": "문서를 닫고 난 후에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentChange",
    "description": "문서가 변경됐을 경우에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentBeforePrint",
    "description": "문서를 인쇄하기 직전에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentAfterPrint",
    "description": "문서를 인쇄하고 난 후에 발생(Document ID를 반환)",
    "sourcePage": 46,
    "returnType": "long"
  },
  {
    "id": "DocumentClickedHyperlink",
    "description": "하이퍼링크를 클릭했을 때 발생",
    "sourcePage": 46
  },
  {
    "id": "DocumentModifiedHyperlink",
    "description": "하이퍼링크를 수정했을 때 발생",
    "sourcePage": 46
  },
  {
    "id": "BeforeQuit",
    "description": "한/글을 종료하기 직전에 발생",
    "sourcePage": 46
  }
];
