import IPage from 'models/page/IPage'

export default interface RecentListProps {
  title: string
  items: IPage[] // |
  selectedItem: string
  handleSelectItem: (item: string) => void
}
