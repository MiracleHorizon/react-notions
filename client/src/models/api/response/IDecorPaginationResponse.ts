import IDecorList from 'models/decor/IDecorList'

export default interface IDecorPaginationResponse {
  lists: IDecorList[]
  total: number
}
