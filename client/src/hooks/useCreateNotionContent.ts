import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'

import useActions from './useActions'
import useTypedSelector from './useTypedSelector'
import { useCreateItemMutation } from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import ICreatePageContentItemBody from 'models/api/pageContent/ICreatePageContentItemBody'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItem, {
  THeadingLevel,
} from 'models/pageContent/NotionContentItem'

interface Params {
  type: NotionContentItemTypes
  item: INotionContentItem
  parentItemId?: string
}

export default function useCreateNotionContent({
  type,
  item,
  parentItemId,
}: Params) {
  const { closeCreateNotionContentItemModal } = useActions()
  const { page } = useTypedSelector(s => s.notions)
  const [createNotionItem] = useCreateItemMutation()
  const user = useSelector(selectUser)
  let itemBody = useMemo(() => {
    return {} as ICreatePageContentItemBody
  }, [])

  const defaultParams = useMemo(() => {
    return {
      parentPageId: page._id,
      parentItemId,
      order: item.order + 1,
      author: user._id,
    }
  }, [page._id, user._id, parentItemId, item.order])

  switch (type) {
    case NotionContentItemTypes.TEXT:
      itemBody = NotionContentItem.createItem({
        type: NotionContentItemTypes.TEXT,
        ...defaultParams,
      })
      break

    case NotionContentItemTypes.H1: {
      const params = { hLevel: 1 as THeadingLevel, ...defaultParams }
      itemBody = NotionContentItem.createHeading(params)
      break
    }

    case NotionContentItemTypes.H2: {
      const params = { hLevel: 2 as THeadingLevel, ...defaultParams }
      itemBody = NotionContentItem.createHeading(params)
      break
    }

    case NotionContentItemTypes.H3: {
      const params = { hLevel: 3 as THeadingLevel, ...defaultParams }
      itemBody = NotionContentItem.createHeading(params)
      break
    }

    case NotionContentItemTypes.TGL_H1: {
      const params = { hLevel: 1 as THeadingLevel, ...defaultParams }
      itemBody = NotionContentItem.createToggleHeading(params)
      break
    }

    case NotionContentItemTypes.TGL_H2: {
      const params = { hLevel: 2 as THeadingLevel, ...defaultParams }
      itemBody = NotionContentItem.createToggleHeading(params)
      break
    }

    case NotionContentItemTypes.TGL_H3: {
      const params = { hLevel: 3 as THeadingLevel, ...defaultParams }
      itemBody = NotionContentItem.createToggleHeading(params)
      break
    }

    case NotionContentItemTypes.TODO:
      itemBody = NotionContentItem.createItem({
        type: NotionContentItemTypes.TODO,
        ...defaultParams,
      })
      break

    case NotionContentItemTypes.QUOTE: {
      itemBody = NotionContentItem.createItem({
        type: NotionContentItemTypes.QUOTE,
        ...defaultParams,
      })
      break
    }

    case NotionContentItemTypes.WEB_BOOKMARK:
      itemBody = NotionContentItem.createItem({
        type: NotionContentItemTypes.WEB_BOOKMARK,
        ...defaultParams,
      })
      break

    case NotionContentItemTypes.PAGE_LINK:
      itemBody = NotionContentItem.createItem({
        type: NotionContentItemTypes.PAGE_LINK,
        ...defaultParams,
      })
      break

    case NotionContentItemTypes.DIVIDER:
      itemBody = NotionContentItem.createItem({
        type: NotionContentItemTypes.DIVIDER,
        ...defaultParams,
      })
      break
  }

  return {
    handleCreate: useCallback(() => {
      closeCreateNotionContentItemModal()
      createNotionItem(itemBody)
    }, [itemBody, createNotionItem, closeCreateNotionContentItemModal]),
  }
}
