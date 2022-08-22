import IPage from 'models/page/IPage'

const getFilteredPages = (pages: IPage[], inputValue: string): IPage[] => {
  const value = inputValue.toLowerCase()
  return pages.filter(page => page.title.toLowerCase().includes(value))
}

export default getFilteredPages
