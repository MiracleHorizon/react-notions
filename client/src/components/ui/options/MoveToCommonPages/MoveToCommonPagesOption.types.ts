import { ISelectItemParams } from 'types'

export default interface MoveToCommonPagesOptionProps
  extends ISelectItemParams<string> {
  handleMovePage: () => void
}
