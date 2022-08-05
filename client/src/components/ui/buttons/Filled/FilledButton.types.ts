import { FC } from 'react'
import { IVoidClick } from 'types'

export default interface FilledButtonProps extends IVoidClick {
  title: string
  EndSvg?: FC
}
