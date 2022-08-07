export default interface SwitchTaskButtonProps {
  dest: 'next' | 'prev'
  isActive: boolean
  onClickAction: () => void
}
