import { PageFonts, TPageFont } from 'models/decor/fonts'

export default function fontFamilyHandler(fontFamily: TPageFont): string {
  switch (fontFamily) {
    case 'Default':
      return PageFonts.DEFAULT
    case 'Serif':
      return PageFonts.SERIF
    case 'Mono':
      return PageFonts.MONO
    default:
      throw new Error('Ошибка выбора шрифта.')
  }
}
