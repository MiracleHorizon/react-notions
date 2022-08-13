import IPage from 'models/page/IPage'
import INotionContentItem from 'models/pageContent/INotionContentItem'

export default function pageContentSorter(
  page: IPage | null
): INotionContentItem[] {
  return page
    ? [...page.content]
        .filter(item => item.parentItemId === null)
        .sort((a, b) => a.order - b.order)
    : []
}
