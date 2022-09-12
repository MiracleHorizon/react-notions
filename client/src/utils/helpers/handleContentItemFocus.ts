import INotionContentItem from 'models/pageContent/INotionContentItem'
import IPage from 'models/page/IPage'
import { RefObject } from 'react'

interface Params {
  item: INotionContentItem
  page: IPage
  ref: RefObject<HTMLDivElement | null>
  contentRef: RefObject<HTMLDivElement> | null
}

export default function handleContentItemFocus({
  item,
  page,
  ref,
  contentRef,
}: Params) {
  if (!ref.current || !contentRef?.current) return

  const nodeRect = ref.current.getBoundingClientRect()
  const isLastOrder = item.order + 1 === page.content.length
  const isOnScreen = nodeRect.top < contentRef.current.clientHeight

  if (isLastOrder && isOnScreen && item.content === '') {
    ref.current.focus()
  }
}
