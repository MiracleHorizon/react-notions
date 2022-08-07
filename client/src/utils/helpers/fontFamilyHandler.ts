import { PageFont, TPageFont } from 'models/decor/fonts'

export default function fontFamilyHandler(fontFamily: TPageFont): string {
  switch (fontFamily) {
    case 'Default':
      return PageFont.DEFAULT
    case 'Serif':
      return PageFont.SERIF
    case 'Mono':
      return PageFont.MONO
    default:
      throw new Error('Ошибка выбора шрифта.')
  }
}
