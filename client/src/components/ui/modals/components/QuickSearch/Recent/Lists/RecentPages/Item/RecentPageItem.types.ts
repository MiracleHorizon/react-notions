import { ISelectItemParams } from 'hooks/useSelectItem'
import IPage from 'models/page/IPage'

export default interface RecentPageItemProps extends ISelectItemParams<string> {
  page: IPage
  isSelected: boolean
}
