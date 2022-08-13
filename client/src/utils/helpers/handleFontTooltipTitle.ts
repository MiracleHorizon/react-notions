import { TPageFont } from 'models/decor/fonts'

export default function handleFontTooltipTitle(font: TPageFont): string {
  switch (font) {
    case 'Default':
      return 'The default sans-serif workhorse'
    case 'Serif':
      return 'Good for publishing'
    case 'Mono':
      return 'Good for drafting and notes'
    default:
      throw new Error()
  }
}
