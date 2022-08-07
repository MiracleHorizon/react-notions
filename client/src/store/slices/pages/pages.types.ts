import IPage from 'models/page/IPage'

export default interface PagesState {
  pages: IPage[]
  noStatusPages: IPage[]
  page: IPage | null
}
