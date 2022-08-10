import ITheme, { Theme } from 'themes/theme.model'

const galleryItemStylesHandler = (primary: boolean, theme: ITheme): string => {
  const primaryStyleColor = `rgb(15 15 15 / ${
    theme.identifier === Theme.LIGHT ? 10 : 20
  }%)`

  const secondaryStyleColor =
    theme.identifier === Theme.LIGHT
      ? 'rgb(55 53 47 / 9%)'
      : 'rgb(255 255 255 / 13%)'

  return primary
    ? `${primaryStyleColor} 0 0 0 1px, ${primaryStyleColor} 0 2px 4px`
    : `${secondaryStyleColor} 0 0 0 1px inset`
}

export default galleryItemStylesHandler
