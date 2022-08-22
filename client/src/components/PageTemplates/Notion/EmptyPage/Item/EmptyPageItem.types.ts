import { FC } from 'react'

export default interface EmptyPageItemProps {
  title: string
  StartSvg: FC
  onClickAction: (template: string) => void
}
