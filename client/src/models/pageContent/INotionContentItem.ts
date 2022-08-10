import { NotionContentItemTypes } from './NotionContentItemTypes'
import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'

// Чтобы уменьшить затраты времени на создание моделей и структур данных на
// стороне сервера было решено создать одну схема для всех типов контента страницы.
export default interface INotionContentItem {
  // Общее.
  readonly _id: string
  parentPageId: string
  parentItemId: string | null // ! parentItemId
  type: NotionContentItemTypes
  content: string
  color: NotionContentItemColorsEnum
  bgColor: NotionContentItemColorsEnum
  order: number
  // Toggle.
  expanded: boolean | null
  // dependencies: string[]
  // Todo.
  completed: boolean | null
  // Page url.
  iconUrl: string | null
  pageId: string | null
}
