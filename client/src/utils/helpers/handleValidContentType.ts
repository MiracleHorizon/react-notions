import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'

const handleValidContentType = (type: NotionContentItemTypes): boolean =>
  type === NotionContentItemTypes.NUM_LIST ||
  type === NotionContentItemTypes.TGL_LIST ||
  type === NotionContentItemTypes.BULL_LIST ||
  type === NotionContentItemTypes.IMAGE ||
  type === NotionContentItemTypes.VIDEO

export default handleValidContentType
