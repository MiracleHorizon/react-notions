import ITheme, { Theme } from 'themes/theme.model'
import {
  IOutlineButtonColors,
  OutlineButtonColorsEnum,
} from 'models/decor/outlineButton/outlineButton.models'
import {
  grayOutlineButtonStyles,
  redOutlineButtonStyles,
} from 'models/decor/outlineButton/outlineButton.colors'

export default function outlineButtonStylesHandler(
  color: OutlineButtonColorsEnum,
  theme: ITheme
): IOutlineButtonColors {
  switch (color) {
    case OutlineButtonColorsEnum.GRAY:
      return theme.identifier === Theme.LIGHT
        ? grayOutlineButtonStyles.light
        : grayOutlineButtonStyles.dark
    case OutlineButtonColorsEnum.RED:
      return theme.identifier === Theme.LIGHT
        ? redOutlineButtonStyles.light
        : redOutlineButtonStyles.dark
    default:
      throw new Error('Ошибка установки цвета.')
  }
}
