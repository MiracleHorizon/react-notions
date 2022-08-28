import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItemDatasets from 'models/pageContent/NotionContentItemDatasets'

export default function contentItemDatasetHandler(
  type: NotionContentItemTypes
): string {
  switch (type) {
    case NotionContentItemTypes.TEXT:
      return NotionContentItemDatasets.TEXT

    case NotionContentItemTypes.TODO:
      return NotionContentItemDatasets.TODO

    case NotionContentItemTypes.H1:
      return NotionContentItemDatasets.H1

    case NotionContentItemTypes.H2:
      return NotionContentItemDatasets.H2

    case NotionContentItemTypes.H3:
      return NotionContentItemDatasets.H3

    case NotionContentItemTypes.TGL_H1:
      return NotionContentItemDatasets.TGL_H1

    case NotionContentItemTypes.TGL_H2:
      return NotionContentItemDatasets.TGL_H2

    case NotionContentItemTypes.TGL_H3:
      return NotionContentItemDatasets.TGL_H3

    case NotionContentItemTypes.QUOTE:
      return NotionContentItemDatasets.QUOTE

    case NotionContentItemTypes.PAGE_LINK:
      return NotionContentItemDatasets.PAGE_LINK

    case NotionContentItemTypes.WEB_BOOKMARK:
      return NotionContentItemDatasets.WEB_BOOKMARK

    case NotionContentItemTypes.DIVIDER:
      return NotionContentItemDatasets.DIVIDER

    default:
      throw new Error()
  }
}
