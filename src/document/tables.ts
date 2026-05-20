import type { HwpBridge } from "../bridges/types";
import { setArrayValue, setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import { createParameterSetPayload } from "../internal/parameter-sets";
import type { TableCellSplitOptions, TableInsertOptions } from "./types";

export class DocumentTablesApi {
  readonly rows: DocumentTableRowsApi;
  readonly columns: DocumentTableColumnsApi;
  readonly cells: DocumentTableCellsApi;
  readonly formulas: DocumentTableFormulasApi;
  readonly resize: DocumentTableResizeApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.rows = new DocumentTableRowsApi(bridge);
    this.columns = new DocumentTableColumnsApi(bridge);
    this.cells = new DocumentTableCellsApi(bridge);
    this.formulas = new DocumentTableFormulasApi(bridge);
    this.resize = new DocumentTableResizeApi(bridge);
  }

  async insert(options: TableInsertOptions = {}): Promise<void> {
    const values: ParameterValues = {};

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
}

export class DocumentTableRowsApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {}

  async insertAbove(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertUpperRow", createParameterSetPayload("TableInsertLine", { Count: count }));
  }

  async insertBelow(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertLowerRow", createParameterSetPayload("TableInsertLine", { Count: count }));
  }

  async append(): Promise<void> {
    await this.bridge.run("TableAppendRow");
  }

  async delete(): Promise<void> {
    await this.bridge.execute("TableDeleteRow", createParameterSetPayload("TableDeleteLine", { Type: 0 }));
  }
}

export class DocumentTableColumnsApi {
  constructor(private readonly bridge: Pick<HwpBridge, "execute">) {}

  async insertLeft(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertLeftColumn", createParameterSetPayload("TableInsertLine", { Count: count }));
  }

  async insertRight(count = 1): Promise<void> {
    await this.bridge.execute("TableInsertRightColumn", createParameterSetPayload("TableInsertLine", { Count: count }));
  }

  async delete(): Promise<void> {
    await this.bridge.execute("TableDeleteColumn", createParameterSetPayload("TableDeleteLine", { Type: 1 }));
  }
}

export class DocumentTableCellsApi {
  readonly align: DocumentTableCellAlignmentApi;
  readonly border: DocumentTableCellBorderApi;
  readonly shading: DocumentTableCellShadingApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.align = new DocumentTableCellAlignmentApi(bridge);
    this.border = new DocumentTableCellBorderApi(bridge);
    this.shading = new DocumentTableCellShadingApi(bridge);
  }

  async merge(): Promise<void> {
    await this.bridge.run("TableMergeCell");
  }

  async split(options: TableCellSplitOptions = {}): Promise<void> {
    const values: ParameterValues = {};

    setValue(values, "Rows", options.rows);
    setValue(values, "Cols", options.cols);
    setBooleanValue(values, "DistributeHeight", options.distributeHeight);
    setBooleanValue(values, "Merge", options.mergeBeforeSplit);
    setBooleanValue(values, "Mode2", options.keepAdjust);

    await this.bridge.execute("TableSplitCell", createParameterSetPayload("TableSplitCell", values));
  }

  async delete(): Promise<void> {
    await this.bridge.run("TableDeleteCell");
  }

  async distributeHeight(): Promise<void> {
    await this.bridge.run("TableDistributeCellHeight");
  }

  async distributeWidth(): Promise<void> {
    await this.bridge.run("TableDistributeCellWidth");
  }
}

export class DocumentTableCellAlignmentApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async leftTop(): Promise<void> {
    await this.bridge.run("TableCellAlignLeftTop");
  }

  async leftMiddle(): Promise<void> {
    await this.bridge.run("TableCellAlignLeftCenter");
  }

  async leftBottom(): Promise<void> {
    await this.bridge.run("TableCellAlignLeftBottom");
  }

  async centerTop(): Promise<void> {
    await this.bridge.run("TableCellAlignCenterTop");
  }

  async centerMiddle(): Promise<void> {
    await this.bridge.run("TableCellAlignCenterCenter");
  }

  async centerBottom(): Promise<void> {
    await this.bridge.run("TableCellAlignCenterBottom");
  }

  async rightTop(): Promise<void> {
    await this.bridge.run("TableCellAlignRightTop");
  }

  async rightMiddle(): Promise<void> {
    await this.bridge.run("TableCellAlignRightCenter");
  }

  async rightBottom(): Promise<void> {
    await this.bridge.run("TableCellAlignRightBottom");
  }
}

export class DocumentTableCellBorderApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async all(): Promise<void> {
    await this.bridge.run("TableCellBorderAll");
  }

  async none(): Promise<void> {
    await this.bridge.run("TableCellBorderNo");
  }

  async outside(): Promise<void> {
    await this.bridge.run("TableCellBorderOutside");
  }

  async inside(): Promise<void> {
    await this.bridge.run("TableCellBorderInside");
  }

  async top(): Promise<void> {
    await this.bridge.run("TableCellBorderTop");
  }

  async bottom(): Promise<void> {
    await this.bridge.run("TableCellBorderBottom");
  }

  async left(): Promise<void> {
    await this.bridge.run("TableCellBorderLeft");
  }

  async right(): Promise<void> {
    await this.bridge.run("TableCellBorderRight");
  }

  async insideHorizontal(): Promise<void> {
    await this.bridge.run("TableCellBorderInsideHorz");
  }

  async insideVertical(): Promise<void> {
    await this.bridge.run("TableCellBorderInsideVert");
  }

  async diagonalDown(): Promise<void> {
    await this.bridge.run("TableCellBorderDiagonalDow");
  }

  async diagonalUp(): Promise<void> {
    await this.bridge.run("TableCellBorderDiagonalUp");
  }
}

export class DocumentTableCellShadingApi {
  constructor(private readonly bridge: Pick<HwpBridge, "run">) {}

  async increase(): Promise<void> {
    await this.bridge.run("TableCellShadeInc");
  }

  async decrease(): Promise<void> {
    await this.bridge.run("TableCellShadeDec");
  }
}

export class DocumentTableFormulasApi {
  readonly sum: DocumentTableFormulaGroupApi;
  readonly average: DocumentTableFormulaGroupApi;
  readonly product: DocumentTableFormulaGroupApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run">) {
    this.sum = new DocumentTableFormulaGroupApi(bridge, "TableFormulaSumAuto", "TableFormulaSumHor", "TableFormulaSumVer");
    this.average = new DocumentTableFormulaGroupApi(bridge, "TableFormulaAvgAuto", "TableFormulaAvgHor", "TableFormulaAvgVer");
    this.product = new DocumentTableFormulaGroupApi(bridge, "TableFormulaProAuto", "TableFormulaProHor", "TableFormulaProVer");
  }
}

export class DocumentTableFormulaGroupApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly autoActionId: string,
    private readonly horizontalActionId: string,
    private readonly verticalActionId: string,
  ) {}

  async auto(): Promise<void> {
    await this.bridge.run(this.autoActionId);
  }

  async horizontal(): Promise<void> {
    await this.bridge.run(this.horizontalActionId);
  }

  async vertical(): Promise<void> {
    await this.bridge.run(this.verticalActionId);
  }
}

export class DocumentTableResizeApi {
  readonly cell: DocumentTableResizeDirectionApi;
  readonly table: DocumentTableResizeDirectionApi;
  readonly line: DocumentTableResizeDirectionApi;
  readonly extended: DocumentTableResizeDirectionApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run">) {
    this.cell = new DocumentTableResizeDirectionApi(
      bridge,
      "TableResizeCellUp",
      "TableResizeCellDown",
      "TableResizeCellLeft",
      "TableResizeCellRight",
    );
    this.table = new DocumentTableResizeDirectionApi(
      bridge,
      "TableResizeUp",
      "TableResizeDown",
      "TableResizeLeft",
      "TableResizeRight",
    );
    this.line = new DocumentTableResizeDirectionApi(
      bridge,
      "TableResizeLineUp",
      "TableResizeLineDown",
      "TableResizeLineLeft",
      "TableResizeLineRight",
    );
    this.extended = new DocumentTableResizeDirectionApi(
      bridge,
      "TableResizeExUp",
      "TableResizeExDown",
      "TableResizeExLeft",
      "TableResizeExRight",
    );
  }
}

export class DocumentTableResizeDirectionApi {
  constructor(
    private readonly bridge: Pick<HwpBridge, "run">,
    private readonly upActionId: string,
    private readonly downActionId: string,
    private readonly leftActionId: string,
    private readonly rightActionId: string,
  ) {}

  async up(): Promise<void> {
    await this.bridge.run(this.upActionId);
  }

  async down(): Promise<void> {
    await this.bridge.run(this.downActionId);
  }

  async left(): Promise<void> {
    await this.bridge.run(this.leftActionId);
  }

  async right(): Promise<void> {
    await this.bridge.run(this.rightActionId);
  }
}
