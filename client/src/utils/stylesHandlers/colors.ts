import { ITheme, Theme } from 'themes/theme.model'
import { TasksListTitleColor, tasksListTitleColors } from 'models/decor/colors'

class ColorsHandler {
  tasksListTitle(color: TasksListTitleColor, theme: ITheme): string {
    const colors = tasksListTitleColors

    switch (color) {
      case TasksListTitleColor.LIGHT_GRAY:
        return theme.identifier === Theme.LIGHT
          ? colors.lightGray.light
          : colors.lightGray.dark
      case TasksListTitleColor.GRAY:
        return theme.identifier === Theme.LIGHT
          ? colors.gray.light
          : colors.gray.dark
      case TasksListTitleColor.BROWN:
        return theme.identifier === Theme.LIGHT
          ? colors.brown.light
          : colors.brown.dark
      case TasksListTitleColor.ORANGE:
        return theme.identifier === Theme.LIGHT
          ? colors.orange.light
          : colors.orange.dark
      case TasksListTitleColor.YELLOW:
        return theme.identifier === Theme.LIGHT
          ? colors.yellow.light
          : colors.yellow.dark
      case TasksListTitleColor.GREEN:
        return theme.identifier === Theme.LIGHT
          ? colors.green.light
          : colors.green.dark
      case TasksListTitleColor.BLUE:
        return theme.identifier === Theme.LIGHT
          ? colors.blue.light
          : colors.blue.dark
      case TasksListTitleColor.PURPLE:
        return theme.identifier === Theme.LIGHT
          ? colors.purple.light
          : colors.purple.dark
      case TasksListTitleColor.PINK:
        return theme.identifier === Theme.LIGHT
          ? colors.pink.light
          : colors.pink.dark
      case TasksListTitleColor.RED:
        return theme.identifier === Theme.LIGHT
          ? colors.red.light
          : colors.red.dark
      default:
        throw new Error('Ошибка обработки цвета')
    }
  }
}

const colorsHandler = new ColorsHandler()

export default colorsHandler
