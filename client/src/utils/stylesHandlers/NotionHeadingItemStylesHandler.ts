import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'

const NOTION_ITEM_HEADING_STYLES = {
  h1: {
    container: {
      containerHeight: '46px',
      marginBottom: '10px',
    },
    content: {
      height: '40px',
      fontSize: '30px',
    },
  },
  h2: {
    container: {
      containerHeight: '38px',
      marginBottom: '8px',
    },
    content: {
      height: '32px',
      fontSize: '24px',
    },
  },
  h3: {
    container: {
      containerHeight: '32px',
      marginBottom: '5px',
    },
    content: {
      height: '26px',
      fontSize: '19px',
    },
  },
  tglH1: {
    container: {
      containerHeight: '46px',
      marginBottom: '0px',
    },
  },
  tglH2: {
    container: {
      containerHeight: '38px',
      marginBottom: '0px',
    },
  },
  tglH3: {
    container: {
      containerHeight: '32px',
      marginBottom: '0px',
    },
  },
}

export default class NotionHeadingItemStylesHandler {
  static getContainerStyles(headingLevel: NotionContentItemTypes) {
    switch (headingLevel) {
      case NotionContentItemTypes.H1:
        return NOTION_ITEM_HEADING_STYLES.h1.container

      case NotionContentItemTypes.H2:
        return NOTION_ITEM_HEADING_STYLES.h2.container

      case NotionContentItemTypes.H3:
        return NOTION_ITEM_HEADING_STYLES.h3.container

      case NotionContentItemTypes.TGL_H1:
        return NOTION_ITEM_HEADING_STYLES.tglH1.container

      case NotionContentItemTypes.TGL_H2:
        return NOTION_ITEM_HEADING_STYLES.tglH2.container

      case NotionContentItemTypes.TGL_H3:
        return NOTION_ITEM_HEADING_STYLES.tglH3.container

      default:
        return NOTION_ITEM_HEADING_STYLES.h1.container
    }
  }

  static getContentStyles(headingLevel: NotionContentItemTypes) {
    switch (headingLevel) {
      case NotionContentItemTypes.H1:
        return NOTION_ITEM_HEADING_STYLES.h1.content

      case NotionContentItemTypes.H2:
        return NOTION_ITEM_HEADING_STYLES.h2.content

      case NotionContentItemTypes.H3:
        return NOTION_ITEM_HEADING_STYLES.h3.content

      case NotionContentItemTypes.TGL_H1:
        return NOTION_ITEM_HEADING_STYLES.h1.content

      case NotionContentItemTypes.TGL_H2:
        return NOTION_ITEM_HEADING_STYLES.h2.content

      case NotionContentItemTypes.TGL_H3:
        return NOTION_ITEM_HEADING_STYLES.h3.content

      default:
        return NOTION_ITEM_HEADING_STYLES.h1.content
    }
  }

  static getPlaceHolder(headingLevel: NotionContentItemTypes): string {
    switch (headingLevel) {
      case NotionContentItemTypes.H1:
        return 'Heading 1'

      case NotionContentItemTypes.H2:
        return 'Heading 2'

      case NotionContentItemTypes.H3:
        return 'Heading 3'

      case NotionContentItemTypes.TGL_H1:
        return 'Heading 1'

      case NotionContentItemTypes.TGL_H2:
        return 'Heading 2'

      case NotionContentItemTypes.TGL_H3:
        return 'Heading 3'

      default:
        return 'Heading 1'
    }
  }
}