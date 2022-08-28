export interface ToggleSmallTextProps {
  smallText: boolean
  handleToggleSmallText: () => void
  selectedItem: string
  handleSelectItem: (item: string) => void
}

export interface ToggleFullWidthProps {
  fullWidth: boolean
  handleToggleFullWidth: () => void
  selectedItem: string
  handleSelectItem: (item: string) => void
}
