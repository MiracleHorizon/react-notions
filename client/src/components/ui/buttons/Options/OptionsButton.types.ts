import { MouseEvent, RefObject } from 'react'
import { TButtonSize } from 'types'

export default interface OptionsButtonProps
  extends OptionsButtonContainerProps {
  onClickAction: (() => void) | ((e: MouseEvent) => void)
  reference?: RefObject<HTMLDivElement>
}

export interface OptionsButtonContainerProps {
  size: TButtonSize
  type: 'primary' | 'outlined'
}
