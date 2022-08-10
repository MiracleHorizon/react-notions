import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'

export default interface ToggleTodoButtonProps {
  isActive: boolean
  toggleActive: () => void
  squareColor: NotionContentItemColorsEnum
}
