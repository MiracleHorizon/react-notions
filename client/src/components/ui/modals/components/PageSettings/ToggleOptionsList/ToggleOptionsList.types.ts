import IPage from 'models/page/IPage'

export default interface ToggleOptionsListProps {
  page: IPage
  selectedItem: string
  handleSelectItem: (item: string) => void
  handleToggleFullWidth: () => void
  handleToggleSmallText: () => void
}
