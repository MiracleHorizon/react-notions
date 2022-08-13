import INotionContentItem from 'models/pageContent/INotionContentItem'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'

const handlePageContent = (content: INotionContentItem[]): boolean => {
  const lastContentItem = [...content].pop()

  if (!lastContentItem) return false

  return (
    (content.length !== 0 && lastContentItem.content !== '') ||
    lastContentItem.type === NotionContentItemTypes.WEB_BOOKMARK ||
    lastContentItem.type === NotionContentItemTypes.DIVIDER
  )
}

export default handlePageContent
