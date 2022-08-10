import {
  SUPER_FAMOUS_URL,
  NASA_ARCHIVE_URL,
  WEBB_TELESCOPE_URL,
  MET_MUSEUM_URL,
} from 'utils/constants/app'

export default function coverLinkHandler(listTitle: string): string {
  switch (listTitle) {
    case 'Color & Gradient':
      return SUPER_FAMOUS_URL
    case 'NASA Archive':
      return NASA_ARCHIVE_URL
    case 'James Webb Telescope':
      return WEBB_TELESCOPE_URL
    default:
      return MET_MUSEUM_URL
  }
}
