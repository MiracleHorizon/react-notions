import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'

const OPTION_BUTTON_HEIGHT = 24

export default function NotionItemOptionButtonOffsetHandler(
  type: NotionContentItemTypes
): number {
  switch (type) {
    case NotionContentItemTypes.QUOTE:
      return (36 - OPTION_BUTTON_HEIGHT) / 2
    case NotionContentItemTypes.H1:
      return (46 - OPTION_BUTTON_HEIGHT) / 2
    case NotionContentItemTypes.H2:
      return (38 - OPTION_BUTTON_HEIGHT) / 2
    case NotionContentItemTypes.H3:
      return (32 - OPTION_BUTTON_HEIGHT) / 2
    case NotionContentItemTypes.TGL_H1:
      return (46 - OPTION_BUTTON_HEIGHT) / 2
    case NotionContentItemTypes.TGL_H2:
      return (38 - OPTION_BUTTON_HEIGHT) / 2
    case NotionContentItemTypes.TGL_H3:
      return (32 - OPTION_BUTTON_HEIGHT) / 2
    case NotionContentItemTypes.DIVIDER:
      return 0
    case NotionContentItemTypes.WEB_BOOKMARK:
      return 4
    default:
      return (30 - OPTION_BUTTON_HEIGHT) / 2
  }
}
