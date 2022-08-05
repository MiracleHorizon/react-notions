export type TToggleButtonDest = 'lOpen' | 'lClose' | 'rClose'

export interface ButtonContainerProps {
  dest: TToggleButtonDest
  isHovering: boolean
}
