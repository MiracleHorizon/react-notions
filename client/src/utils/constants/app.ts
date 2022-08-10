import { TPageFont } from 'models/decor/fonts'
import {
  BoardTemplateSvg,
  CalendarTemplateSvg,
  GalleryTemplateSvg,
  ListTemplateSvg,
  EmptyPageSvg,
  PageSvg,
} from 'components/ui/svg'

// Urls.
export const NOTION_LOGO_URL = 'https://www.notion.so/images/favicon.ico'
export const NASA_ARCHIVE_URL = 'https://www.flickr.com/photos/nasacommons/'
export const MET_MUSEUM_URL = 'https://www.metmuseum.org/art/collection'
export const SUPER_FAMOUS_URL = 'https://images.superfamous.com/36-Gradients'
export const WEBB_TELESCOPE_URL = 'https://webbtelescope.org/'

// Styles.
export const PAGE_FONTS: TPageFont[] = ['Default', 'Serif', 'Mono']

// Notions.
export const NOTIONS_LIST_VIEWS = [
  {
    title: 'Board',
    StartSvg: BoardTemplateSvg,
  },
  {
    title: 'Gallery',
    StartSvg: GalleryTemplateSvg,
  },
  {
    title: 'List',
    StartSvg: ListTemplateSvg,
  },
  {
    title: 'Calendar',
    StartSvg: CalendarTemplateSvg,
  },
]

export const UPDATE_PAGE_TEMPLATES = [
  {
    title: 'Empty page',
    StartSvg: EmptyPageSvg,
  },
  {
    title: 'Empty with icon',
    StartSvg: PageSvg,
  },
  {
    title: 'Empty with cover',
    StartSvg: PageSvg,
  },
]
