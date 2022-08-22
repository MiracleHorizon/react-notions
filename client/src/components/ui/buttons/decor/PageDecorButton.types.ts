import { FC } from 'react'

export default interface PageDecorButtonProps {
  StartSvg: FC
  title: string
  onClickAction: () => void
}

export interface ToggleDescriptionButtonProps {
  _id: string
  description: string
  descriptionExpanded: boolean
}
