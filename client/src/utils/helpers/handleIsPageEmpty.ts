import IPage from 'models/page/IPage'

export default function handleIsPageEmpty(page: IPage | null): boolean {
  if (!page) return false

  return !page.iconUrl && !page.coverUrl && page.content.length === 0
}
