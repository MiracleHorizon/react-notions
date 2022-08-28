import { FC } from 'react'
import {
  IOutlineButtonColors,
  OutlineButtonColorsEnum,
} from 'models/decor/outlineButton'

export default interface OutlineButtonProps {
  title: string
  color: OutlineButtonColorsEnum
  onClickAction?: () => void
  StartSvg?: FC
  disabled?: boolean
  children?: JSX.Element
}

export interface OutlineButtonContainerProps extends IOutlineButtonColors {
  disabled?: boolean
}
