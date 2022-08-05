import { MouseEvent } from 'react'
import { TButtonSize } from 'types'

export interface OptionsButtonContainerProps {
  size: TButtonSize
  type: 'primary' | 'outlined'
}

export default interface OptionsButtonProps
  extends OptionsButtonContainerProps {
  onClickAction: (() => void) | ((e: MouseEvent) => void)
}