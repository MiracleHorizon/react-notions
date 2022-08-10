import getRandomCover from './helpers/getRandomCover'
import getRandomIcon from './helpers/getRandomIcon'

export default function updatePageTemplateReducer(template: string) {
  switch (template) {
    case 'Empty with icon':
      return { iconUrl: getRandomIcon() }
    case 'Empty with cover':
      return { coverUrl: getRandomCover() }
    case 'Notions list':
      return { template: 'NotionsList' }
    default:
      throw new Error()
  }
}
