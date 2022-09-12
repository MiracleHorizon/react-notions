import React, { FC, memo, useCallback } from 'react'
import { useSelector } from 'react-redux'

import { useCreateItemMutation } from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import handlePageContent from 'utils/helpers/handlePageContent'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItem from 'models/pageContent/NotionContentItem'
import IPage from 'models/page/IPage'
import { SetState } from 'types'
import Bar from './CreateNotionItemBar.styles'

const CreateNotionItemBar: FC<IPage & { setCreatingItem: SetState<boolean> }> =
  memo(({ _id, content, locked }) => {
    const [createNotionItem] = useCreateItemMutation()
    const user = useSelector(selectUser)

    const handleCreateDefaultNotionItem = useCallback(() => {
      if (locked) return

      const body = {
        type: NotionContentItemTypes.TEXT,
        parentPageId: _id,
        author: user._id,
        order: content.length,
      }

      if (content.length === 0) {
        createNotionItem(NotionContentItem.createItem(body))
      }

      if (handlePageContent(content)) {
        createNotionItem(NotionContentItem.createItem(body))
      }
    }, [locked, content, _id, user._id, createNotionItem])

    return <Bar onClick={handleCreateDefaultNotionItem} />
  })

export default CreateNotionItemBar
