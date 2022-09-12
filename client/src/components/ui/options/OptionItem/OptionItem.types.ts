import { FC, RefObject } from 'react'
import { IVoidClick, TDivRef } from 'types'

export default interface OptionItemProps extends IVoidClick {
  title: string
  StartSvg: FC
  EndSvg?: FC
  reference?: TDivRef
  margY?: boolean
  onMouseOverAction?: () => void
  isSelected?: boolean
  handleSelectItem?: (item: string) => void
  hotkeyTitle?: string
}

export interface ItemProps extends IVoidClick {
  selectedItem: string
  handleSelectItem: (item: string) => void
  favorite?: boolean
  locked?: boolean
  status?: string | null
  reference?: RefObject<HTMLDivElement>
}
