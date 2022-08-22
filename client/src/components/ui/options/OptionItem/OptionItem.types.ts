import { FC } from 'react'
import { IVoidClick, TDivRef } from 'types'

export default interface OptionItemProps extends IVoidClick {
  title: string
  StartSvg: FC
  EndSvg?: FC
  reference?: TDivRef
  margY?: boolean
  onMouseOverAction?: () => void
  isSelected?: boolean
}
