import ITheme from 'themes/theme.model'

export default interface TasksListModalColorsProps {
  _id: string
  theme: ITheme
  template: 'default' | 'taskModal'
  activeColor: string
  selectedItem: string
  handleSelectItem: (item: string) => void
}
