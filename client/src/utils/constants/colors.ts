import INotionContentItemColors from 'models/decor/INotionContentItemColors'
import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'

export const TASKS_LIST_TITLE_COLORS = {
  lightGray: {
    title: 'Light gray',
    dark: 'rgb(55, 55, 55)',
    light: 'rgba(227, 226, 224, 0.5)',
  },
  gray: {
    title: 'Gray',
    dark: 'rgb(90, 90, 90)',
    light: 'rgb(227, 226, 224)',
  },
  brown: {
    title: 'Brown',
    dark: 'rgb(96, 59, 44)',
    light: 'rgb(238, 224, 218)',
  },
  orange: {
    title: 'Orange',
    dark: 'rgb(133, 76, 29)',
    light: 'rgb(250, 222, 201)',
  },
  yellow: {
    title: 'Yellow',
    dark: 'rgb(137, 99, 42)',
    light: 'rgb(253, 236, 200)',
  },
  green: {
    title: 'Green',
    dark: 'rgb(43, 89, 63)',
    light: 'rgb(219, 237, 219)',
  },
  blue: {
    title: 'Blue',
    dark: 'rgb(40, 69, 108)',
    light: 'rgb(211, 229, 239)',
  },
  purple: {
    title: 'Purple',
    dark: 'rgb(73, 47, 100)',
    light: 'rgb(232, 222, 238)',
  },
  pink: {
    title: 'Pink',
    dark: 'rgb(105, 49, 76)',
    light: 'rgb(245, 224, 233)',
  },
  red: {
    title: 'Red',
    dark: 'rgb(110, 54, 48)',
    light: 'rgb(255, 226, 221)',
  },
}

export const NOTION_CONTENT_ITEM_COLORS: INotionContentItemColors = {
  colors: {
    Default: {
      light: 'rgb(55, 53, 47)',
      dark: 'rgba(255, 255, 255, 0.81)',
    },
    Gray: {
      light: 'rgb(120, 119, 116)',
      dark: 'rgb(155, 155, 155)',
    },
    Brown: {
      light: 'rgb(159, 107, 83)',
      dark: 'rgb(186, 133, 111)',
    },
    Orange: {
      light: 'rgb(217, 115, 13)',
      dark: 'rgb(199, 125, 72)',
    },
    Yellow: {
      light: 'rgb(203, 145, 47)',
      dark: 'rgb(202, 152, 73)',
    },
    Green: {
      light: 'rgb(68, 131, 97)',
      dark: 'rgb(82, 158, 114)',
    },
    Blue: {
      light: 'rgb(51, 126, 169)',
      dark: 'rgb(94, 135, 201)',
    },
    Purple: {
      light: 'rgb(144, 101, 176)',
      dark: 'rgb(157, 104, 211)',
    },
    Pink: {
      light: 'rgb(193, 76, 138)',
      dark: 'rgb(209, 87, 150)',
    },
    Red: {
      light: 'rgb(212, 76, 71)',
      dark: 'rgb(223, 84, 82)',
    },
  },
  bgColors: {
    Default: {
      light: 'transparent',
      dark: 'transparent',
    },
    Gray: {
      light: 'rgb(241, 241, 239)',
      dark: 'rgb(47, 47, 47)',
    },
    Brown: {
      light: 'rgb(244, 238, 238)',
      dark: 'rgb(74, 50, 40)',
    },
    Orange: {
      light: 'rgb(251, 236, 221)',
      dark: 'rgb(92, 59, 35)',
    },
    Yellow: {
      light: 'rgb(251, 243, 219)',
      dark: 'rgb(86, 67, 40)',
    },
    Green: {
      light: 'rgb(237, 243, 236)',
      dark: 'rgb(36, 61, 48)',
    },
    Blue: {
      light: 'rgb(231, 243, 248)',
      dark: 'rgb(20, 58, 78)',
    },
    Purple: {
      light: 'rgba(244, 240, 247, 0.8)',
      dark: 'rgb(60, 45, 73)',
    },
    Pink: {
      light: 'rgba(249, 238, 243, 0.8)',
      dark: 'rgb(78, 44, 60)',
    },
    Red: {
      light: 'rgb(253, 235, 236)',
      dark: 'rgb(82, 46, 42)',
    },
  },
}

export const NOTION_CONTENT_ITEM_DECOR_COLORS = {
  default: {
    title: 'Default',
    decor: NotionContentItemColorsEnum.DEFAULT,
  },
  gray: {
    title: 'Gray',
    decor: NotionContentItemColorsEnum.GRAY,
  },
  brown: {
    title: 'Brown',
    decor: NotionContentItemColorsEnum.BROWN,
  },
  orange: {
    title: 'Orange',
    decor: NotionContentItemColorsEnum.ORANGE,
  },
  yellow: {
    title: 'Yellow',
    decor: NotionContentItemColorsEnum.YELLOW,
  },
  green: {
    title: 'Green',
    decor: NotionContentItemColorsEnum.GREEN,
  },
  blue: {
    title: 'Blue',
    decor: NotionContentItemColorsEnum.BLUE,
  },
  purple: {
    title: 'Purple',
    decor: NotionContentItemColorsEnum.PURPLE,
  },
  pink: {
    title: 'Pink',
    decor: NotionContentItemColorsEnum.PINK,
  },
  red: {
    title: 'Red',
    decor: NotionContentItemColorsEnum.RED,
  },
}
