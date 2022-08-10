import { FC } from 'react'
import {
  IOutlineButtonColors,
  OutlineButtonColorsEnum,
} from 'models/decor/outlineButton/outlineButton.models'

export default interface OutlineButtonProps {
  title: string
  color: OutlineButtonColorsEnum
  onClickAction: () => void
  StartSvg?: FC
  disabled?: boolean
}

export interface OutlineButtonContainerProps extends IOutlineButtonColors {
  disabled?: boolean
}
