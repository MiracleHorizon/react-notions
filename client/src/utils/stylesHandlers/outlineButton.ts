import { OutlineButtonPropsStyles } from 'components/ui/buttons/Outline/OutlineButton.types'
import { ITheme, Theme } from 'themes/theme.model'

const grayColorStyles = {
  light: {
    color: '#000',
    borderColor: 'rgba(55, 53, 47, 0.16)',
    hoverColor: 'rgb(225, 225, 225)',
    activeColor: 'rgba(55, 53, 47, 0.16)',
  },
  dark: {
    color: 'rgba(255, 255, 255, 0.81)',
    borderColor: 'rgba(255, 255, 255, 0.13)',
    hoverColor: 'rgb(47, 47, 47)',
    activeColor: 'rgba(255, 255, 255, 0.03)',
  },
}

const redColorStyles = {
  light: {
    color: 'rgb(235, 87, 87)',
    borderColor: 'rgba(235, 87, 87, 0.5)',
    hoverColor: 'rgba(235, 87, 87, 0.1)',
    activeColor: 'rgba(235, 87, 87, 0.2)',
  },
  dark: {
    color: 'rgb(235, 87, 87)',
    borderColor: 'rgb(110, 54, 48)',
    hoverColor: 'rgba(235, 87, 87, 0.1)',
    activeColor: 'rgba(235, 87, 87, 0.2)',
  },
}

const outlineButtonStylesHandler = (
  color: 'red' | 'gray',
  theme: ITheme
): OutlineButtonPropsStyles => {
  switch (color) {
    case 'gray':
      return theme.identifier === Theme.LIGHT
        ? grayColorStyles.light
        : grayColorStyles.dark
    case 'red':
      return theme.identifier === Theme.LIGHT
        ? redColorStyles.light
        : redColorStyles.dark
    default:
      throw new Error('Ошибка установки цвета.')
  }
}

export default outlineButtonStylesHandler
