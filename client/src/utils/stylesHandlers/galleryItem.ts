import ITheme, { Theme } from 'themes/theme.model'

const galleryItemStylesHandler = (primary: boolean, theme: ITheme): string => {
  if (primary) {
    return theme.identifier === Theme.DARK
      ? 'rgb(15 15 15 / 20%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 2px 4px'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px'
  } else {
    return theme.identifier === Theme.DARK
      ? 'rgb(255 255 255 / 13%) 0 0 0 1px inset'
      : 'rgb(55 53 47 / 9%) 0 0 0 1px inset'
  }
}

export default galleryItemStylesHandler
