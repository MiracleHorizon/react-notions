import { TButtonSize } from 'types'

export const buttonSizesHandler = (size: TButtonSize): string => {
  let width = 24,
    height = 24

  switch (size) {
    case 'small':
      width = 18
      height = 18
      break
    case 'medium':
      width = 24
      height = 24
      break
    case 'large':
      width = 28
      height = 28
      break
  }

  return `
    width: ${width}px;
    height: ${height}px
  `
}
