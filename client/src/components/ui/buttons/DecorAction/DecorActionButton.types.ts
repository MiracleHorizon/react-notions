import { FC } from 'react'
import { IVoidClick } from 'types'

export default interface DecorActionButtonProps extends IVoidClick {
  title: 'Remove' | 'Random'
  StartSvg?: FC
}
