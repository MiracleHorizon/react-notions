import React, { FC } from 'react'

import { useCreateItemMutation } from 'store/slices/pages/pages.api'
import handlePageContent from 'utils/helpers/handlePageContent'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import IPage from 'models/page/IPage'
import Bar from './CreateNotionItemBar.styles'

const CreateNotionItemBar: FC<IPage> = ({ _id, content }) => {
  const [createNotionItem] = useCreateItemMutation()

  const handleCreateDefaultNotionItem = () => {
    if (handlePageContent(content)) {
      createNotionItem(NotionContentItem.createText(_id))
    }

    if (content.length === 0) {
      createNotionItem(NotionContentItem.createText(_id))
    }
  }

  return <Bar onClick={handleCreateDefaultNotionItem} />
}

export default CreateNotionItemBar
