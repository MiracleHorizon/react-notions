import { FC } from 'react'

export default interface OutlineButtonProps {
  title: string
  color: 'red' | 'gray'
  onClickAction: () => void
  StartSvg?: FC
  disabled?: boolean
}

export interface OutlineButtonPropsStyles {
  color: string
  borderColor: string
  hoverColor: string
  activeColor: string
}

export interface OutlineButtonContainerProps extends OutlineButtonPropsStyles {
  disabled?: boolean
}
