import GetRandom from '../GetRandom'
import { TPageFont } from 'models/decor/fonts'

export default function handleUpdatePageTemplate(template: string) {
  switch (template) {
    case 'Empty with icon':
      return { iconUrl: GetRandom.icon() }
    case 'Empty with cover':
      return { coverUrl: GetRandom.cover() }
    case 'Notions database':
      return { template: 'NotionsDatabase', font: 'Default' as TPageFont }
    default:
      throw new Error()
  }
}
