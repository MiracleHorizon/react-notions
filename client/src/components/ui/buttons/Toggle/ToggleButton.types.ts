import { MouseEvent } from 'react'

export default interface ToggleButtonProps {
  expanded: boolean
  handleToggleExpanded: (() => void) | ((e: MouseEvent) => void)
}
