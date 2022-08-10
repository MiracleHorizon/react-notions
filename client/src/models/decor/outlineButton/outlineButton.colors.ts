import { IOutlineButtonStyles } from 'models/decor/outlineButton/outlineButton.models'

export const grayOutlineButtonStyles: IOutlineButtonStyles = {
  light: {
    color: '#000',
    brColor: 'rgba(55, 53, 47, 0.16)',
    hover: 'rgb(225, 225, 225)',
    active: 'rgba(55, 53, 47, 0.16)',
  },
  dark: {
    color: 'rgba(255, 255, 255, 0.81)',
    brColor: 'rgba(255, 255, 255, 0.13)',
    hover: 'rgb(47, 47, 47)',
    active: 'rgba(255, 255, 255, 0.03)',
  },
}

export const redOutlineButtonStyles: IOutlineButtonStyles = {
  light: {
    color: 'rgb(235, 87, 87)',
    brColor: 'rgba(235, 87, 87, 0.5)',
    hover: 'rgba(235, 87, 87, 0.1)',
    active: 'rgba(235, 87, 87, 0.2)',
  },
  dark: {
    color: 'rgb(235, 87, 87)',
    brColor: 'rgb(110, 54, 48)',
    hover: 'rgba(235, 87, 87, 0.1)',
    active: 'rgba(235, 87, 87, 0.2)',
  },
}
