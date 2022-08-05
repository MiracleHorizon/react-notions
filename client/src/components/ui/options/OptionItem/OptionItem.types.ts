import { FC } from 'react'
import { IVoidClick, TDivRef } from 'types'

export default interface OptionItemProps extends IVoidClick{
  StartSvg: FC
  title: string
  reference?: TDivRef
  margY?: boolean
}
