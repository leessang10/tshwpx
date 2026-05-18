import type { HwpBridge } from "../bridges/types";
import { setArrayValue, setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import { createParameterSetPayload } from "../internal/parameter-sets";
import type { TableCellSplitOptions, TableInsertOptions } from "./types";

export class DocumentTablesApi {
  readonly rows: DocumentTableRowsApi;
  readonly columns: DocumentTableColumnsApi;
  readonly cells: DocumentTableCellsApi;

  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {
    this.rows = new DocumentTableRowsApi(bridge);
    this.columns = new DocumentTableColumnsApi(bridge);
    this.cells = new DocumentTableCellsApi(bridge);
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
  constructor(private readonly bridge: Pick<HwpBridge, "run" | "execute">) {}

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
