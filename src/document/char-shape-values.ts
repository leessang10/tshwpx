import { setBooleanValue, setValue, type ParameterValues } from "../internal/parameter-values";
import type { CharShapeOptions, CharShapePresetColor } from "./types";

const FACE_NAME_ITEM_IDS = [
  "FaceNameHangul",
  "FaceNameLatin",
  "FaceNameHanja",
  "FaceNameJapanese",
  "FaceNameOther",
  "FaceNameSymbol",
  "FaceNameUser",
] as const;

export const TEXT_COLOR_ACTIONS: Record<CharShapePresetColor, string> = {
  black: "CharShapeTextColorBlack",
  blue: "CharShapeTextColorBlue",
  bluish: "CharShapeTextColorBluish",
  green: "CharShapeTextColorGreen",
  red: "CharShapeTextColorRed",
  violet: "CharShapeTextColorViolet",
  white: "CharShapeTextColorWhite",
  yellow: "CharShapeTextColorYellow",
};

export function createCharShapeValues(options: CharShapeOptions): ParameterValues {
  const values: ParameterValues = {};

  setValue(values, "Height", options.height);
  setBooleanValue(values, "Bold", options.bold);
  setBooleanValue(values, "Italic", options.italic);

  if (options.faceName !== undefined) {
    for (const itemId of FACE_NAME_ITEM_IDS) {
      values[itemId] = options.faceName;
    }
  }

  setValue(values, "TextColor", options.textColor);

  return values;
}
