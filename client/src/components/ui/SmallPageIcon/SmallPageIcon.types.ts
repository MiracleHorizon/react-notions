import INotionContentItem from 'models/pageContent/INotionContentItem'

export default interface SmallPageIconProps {
  iconUrl: string | null
  coverUrl: string | null
  content: INotionContentItem[]
}
