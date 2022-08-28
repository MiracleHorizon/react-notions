import ITheme, { Theme } from 'themes/theme.model'
import {
  IOutlineButtonColors,
  OutlineButtonColorsEnum,
} from 'models/decor/outlineButton'
import {
  BLUE_OUTLINE_BUTTON_STYLES,
  GRAY_OUTLINE_BUTTON_STYLES,
  RED_OUTLINE_BUTTON_STYLES,
} from 'utils/constants/colors'

export default function outlineButtonStylesHandler(
  color: OutlineButtonColorsEnum,
  theme: ITheme
): IOutlineButtonColors {
  switch (color) {
    case OutlineButtonColorsEnum.GRAY:
      return theme.identifier === Theme.LIGHT
        ? GRAY_OUTLINE_BUTTON_STYLES.light
        : GRAY_OUTLINE_BUTTON_STYLES.dark
    case OutlineButtonColorsEnum.RED:
      return theme.identifier === Theme.LIGHT
        ? RED_OUTLINE_BUTTON_STYLES.light
        : RED_OUTLINE_BUTTON_STYLES.dark
    case OutlineButtonColorsEnum.BLUE:
      return theme.identifier === Theme.LIGHT
        ? BLUE_OUTLINE_BUTTON_STYLES.light
        : BLUE_OUTLINE_BUTTON_STYLES.dark
    default:
      throw new Error('Ошибка установки цвета.')
  }
}
