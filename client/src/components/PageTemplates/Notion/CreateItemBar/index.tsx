import React, { FC, memo, useCallback } from 'react'

import { useCreateItemMutation } from 'services/pages.api'
import handlePageContent from 'utils/helpers/handlePageContent'
import { SetState } from 'types'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import IPage from 'models/page/IPage'
import Bar from './CreateNotionItemBar.styles'

const CreateNotionItemBar: FC<IPage & { setCreatingItem: SetState<boolean> }> =
  memo(({ _id, content, locked }) => {
    const [createNotionItem] = useCreateItemMutation()

    const handleCreateDefaultNotionItem = useCallback(() => {
      if (locked) return

      if (content.length === 0) {
        createNotionItem(NotionContentItem.createText(_id))
      }

      if (handlePageContent(content)) {
        createNotionItem(NotionContentItem.createText(_id))
      }
    }, [locked, content, _id, createNotionItem])

    return <Bar onClick={handleCreateDefaultNotionItem} />
  })

export default CreateNotionItemBar
