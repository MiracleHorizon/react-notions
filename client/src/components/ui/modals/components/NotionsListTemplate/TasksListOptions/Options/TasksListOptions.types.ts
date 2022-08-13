export default interface TasksListOptionsProps {
  hidden: boolean | null
  color: string
  template: 'default' | 'taskModal'
  selectedItem: string
  handleSelectItem: (item: string) => void
}
