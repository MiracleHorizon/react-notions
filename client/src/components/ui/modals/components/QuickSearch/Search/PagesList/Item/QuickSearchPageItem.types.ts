import { ISelectItemParams } from 'types'
import IPage from 'models/page/IPage'

export default interface QuickSearchPageItemProps
  extends ISelectItemParams<string> {
  page: IPage
  handleSelectPage: () => void
  parentNode: HTMLDivElement | null
}
