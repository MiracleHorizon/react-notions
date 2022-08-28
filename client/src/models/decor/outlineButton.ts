export interface IOutlineButtonColors {
  color: string
  brColor: string
  hover: string
  active: string
}

export interface IOutlineButtonStyles {
  light: IOutlineButtonColors
  dark: IOutlineButtonColors
}

export enum OutlineButtonColorsEnum {
  RED = 'red',
  GRAY = 'gray',
  BLUE = 'blue',
}
