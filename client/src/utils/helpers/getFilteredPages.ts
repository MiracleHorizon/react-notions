import IPage from 'models/page/IPage'

const getFilteredPages = (pages: IPage[], inputValue: string): IPage[] =>
  pages.filter(page =>
    page.title.toLowerCase().includes(inputValue.toLowerCase())
  )

export default getFilteredPages
