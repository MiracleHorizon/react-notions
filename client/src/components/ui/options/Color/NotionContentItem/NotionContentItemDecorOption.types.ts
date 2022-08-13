import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'

export default interface NotionContentItemDecorOptionProps {
  itemId: string
  title: string
  decor: NotionContentItemColorsEnum
  dest: 'color' | 'bg'
}
