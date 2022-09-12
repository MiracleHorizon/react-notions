import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import { NOTION_CONTENT_ITEM_COLORS } from 'utils/constants/colors'
import ITheme, { Theme } from 'themes/theme.model'

export default class ContentItemColorsHandler {
  public static setColor(color: NotionContentItemColorsEnum, theme: ITheme) {
    const { colors } = NOTION_CONTENT_ITEM_COLORS

    switch (color) {
      case NotionContentItemColorsEnum.DEFAULT:
        return theme.identifier === Theme.LIGHT
          ? colors.Default.light
          : colors.Default.dark

      case NotionContentItemColorsEnum.GRAY:
        return theme.identifier === Theme.LIGHT
          ? colors.Gray.light
          : colors.Gray.dark

      case NotionContentItemColorsEnum.BROWN:
        return theme.identifier === Theme.LIGHT
          ? colors.Brown.light
          : colors.Brown.dark

      case NotionContentItemColorsEnum.ORANGE:
        return theme.identifier === Theme.LIGHT
          ? colors.Orange.light
          : colors.Orange.dark

      case NotionContentItemColorsEnum.YELLOW:
        return theme.identifier === Theme.LIGHT
          ? colors.Yellow.light
          : colors.Yellow.dark

      case NotionContentItemColorsEnum.GREEN:
        return theme.identifier === Theme.LIGHT
          ? colors.Green.light
          : colors.Green.dark

      case NotionContentItemColorsEnum.BLUE:
        return theme.identifier === Theme.LIGHT
          ? colors.Blue.light
          : colors.Blue.dark

      case NotionContentItemColorsEnum.PURPLE:
        return theme.identifier === Theme.LIGHT
          ? colors.Purple.light
          : colors.Purple.dark

      case NotionContentItemColorsEnum.PINK:
        return theme.identifier === Theme.LIGHT
          ? colors.Pink.light
          : colors.Pink.dark

      case NotionContentItemColorsEnum.RED:
        return theme.identifier === Theme.LIGHT
          ? colors.Red.light
          : colors.Red.dark

      default:
        return theme.identifier === Theme.LIGHT
          ? colors.Default.light
          : colors.Default.dark
    }
  }

  public static setBgColor(color: NotionContentItemColorsEnum, theme: ITheme) {
    const { bgColors } = NOTION_CONTENT_ITEM_COLORS

    switch (color) {
      case NotionContentItemColorsEnum.DEFAULT:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Default.light
          : bgColors.Default.dark

      case NotionContentItemColorsEnum.GRAY:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Gray.light
          : bgColors.Gray.dark

      case NotionContentItemColorsEnum.BROWN:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Brown.light
          : bgColors.Brown.dark

      case NotionContentItemColorsEnum.ORANGE:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Orange.light
          : bgColors.Orange.dark

      case NotionContentItemColorsEnum.YELLOW:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Yellow.light
          : bgColors.Yellow.dark

      case NotionContentItemColorsEnum.GREEN:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Green.light
          : bgColors.Green.dark

      case NotionContentItemColorsEnum.BLUE:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Blue.light
          : bgColors.Blue.dark

      case NotionContentItemColorsEnum.PURPLE:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Purple.light
          : bgColors.Purple.dark

      case NotionContentItemColorsEnum.PINK:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Pink.light
          : bgColors.Pink.dark

      case NotionContentItemColorsEnum.RED:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Red.light
          : bgColors.Red.dark

      default:
        return theme.identifier === Theme.LIGHT
          ? bgColors.Default.light
          : bgColors.Default.dark
    }
  }
}
