import IPage from '../../page/IPage'

export default interface IPagePaginationResponse {
  pages: IPage[]
  total: number
}
