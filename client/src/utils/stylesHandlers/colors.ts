import ITheme, { Theme } from 'themes/theme.model'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import { TASKS_LIST_TITLE_COLORS } from 'utils/constants/colors'

export default class ColorsHandler {
  static tasksListTitle(
    color: TasksListTitleColorsEnum,
    theme: ITheme
  ): string {
    const colors = TASKS_LIST_TITLE_COLORS

    switch (color) {
      case TasksListTitleColorsEnum.LIGHT_GRAY:
        return theme.identifier === Theme.LIGHT
          ? colors.lightGray.light
          : colors.lightGray.dark
      case TasksListTitleColorsEnum.GRAY:
        return theme.identifier === Theme.LIGHT
          ? colors.gray.light
          : colors.gray.dark
      case TasksListTitleColorsEnum.BROWN:
        return theme.identifier === Theme.LIGHT
          ? colors.brown.light
          : colors.brown.dark
      case TasksListTitleColorsEnum.ORANGE:
        return theme.identifier === Theme.LIGHT
          ? colors.orange.light
          : colors.orange.dark
      case TasksListTitleColorsEnum.YELLOW:
        return theme.identifier === Theme.LIGHT
          ? colors.yellow.light
          : colors.yellow.dark
      case TasksListTitleColorsEnum.GREEN:
        return theme.identifier === Theme.LIGHT
          ? colors.green.light
          : colors.green.dark
      case TasksListTitleColorsEnum.BLUE:
        return theme.identifier === Theme.LIGHT
          ? colors.blue.light
          : colors.blue.dark
      case TasksListTitleColorsEnum.PURPLE:
        return theme.identifier === Theme.LIGHT
          ? colors.purple.light
          : colors.purple.dark
      case TasksListTitleColorsEnum.PINK:
        return theme.identifier === Theme.LIGHT
          ? colors.pink.light
          : colors.pink.dark
      case TasksListTitleColorsEnum.RED:
        return theme.identifier === Theme.LIGHT
          ? colors.red.light
          : colors.red.dark
      default:
        throw new Error('Ошибка обработки цвета')
    }
  }

  static notionContentITem(color: string, theme: ITheme): string {
    return ''
  }
}
