import React, { FC, memo, useRef, useState } from 'react'
import { useHover } from 'usehooks-ts'

import NotionItemOptionButtons from './OptionButtons - Checked'
import NotionTextItem from './components - Checked/Text'
import NotionTodoItem from './components - Checked/Todo'
import NotionHeadingItem from './components - Checked/Heading'
import NotionToggleHeadingItem from './components - Checked/ToggleHeading'
import NotionQuoteItem from './components - Checked/Quote'
import NotionPageUrlItem from './components - Checked/PageLink'
import NotionWebBookmarkItem from './components - Checked/WebBookmark'
import NotionDividerItem from './components - Checked/Divider'
import DndHighlight from 'components/ui/DndHighlight'
import contentItemDatasetHandler from 'utils/helpers/contentItemDatasetHandler'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import PropTypes from './NotionContentItem.types'
import Wrapper from './NotionContentItem.styles'

const NotionContentItem: FC<PropTypes> = memo(props => {
  const {
    item: { _id, type, order },
  } = props
  const [dragStart, setDragStart] = useState<boolean>(false)
  const [dragOver, setDragOver] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleItemType = () => {
    switch (type) {
      case NotionContentItemTypes.TEXT:
        return <NotionTextItem {...props} />

      case NotionContentItemTypes.TODO:
        return <NotionTodoItem {...props} />

      case NotionContentItemTypes.H1:
        return <NotionHeadingItem {...props} />

      case NotionContentItemTypes.H2:
        return <NotionHeadingItem {...props} />

      case NotionContentItemTypes.H3:
        return <NotionHeadingItem {...props} />

      case NotionContentItemTypes.TGL_H1:
        return <NotionToggleHeadingItem {...props} />

      case NotionContentItemTypes.TGL_H2:
        return <NotionToggleHeadingItem {...props} />

      case NotionContentItemTypes.TGL_H3:
        return <NotionToggleHeadingItem {...props} />

      case NotionContentItemTypes.PAGE_URL:
        return <NotionPageUrlItem {...props} />

      case NotionContentItemTypes.QUOTE:
        return <NotionQuoteItem {...props} />

      case NotionContentItemTypes.WEB_BOOKMARK:
        return <NotionWebBookmarkItem {...props} />

      case NotionContentItemTypes.DIVIDER:
        return <NotionDividerItem />

      default: {
        throw new Error()
      }
    }
  }

  const handleDragStart = (e: any) => {
    e.preventDefault()
    console.log('drag start')
  }

  const handleDragEnd = (e: any) => {
    e.preventDefault()
    const dataset = e.target.dataset

    if ((dataset.el || dataset.selectable) && dragOver) {
      setDragOver(false)
    }
  }

  const handleDragOver = (e: any) => {
    e.preventDefault()
    const dataset = e.target.dataset

    if ((dataset.el || dataset.selectable) && !dragOver) {
      setDragOver(true)
    }
  }

  const handleDragLeave = (e: any) => {
    e.preventDefault()
    const dataset = e.target.dataset

    if ((dataset.el || !dataset.selectable) && dragOver) {
      setDragOver(false)
    }
  }

  return (
    <Wrapper
      draggable
      ref={ref}
      type={type}
      data-el='notion-item'
      data-item={contentItemDatasetHandler(type)}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
      onDragLeave={handleDragLeave}
    >
      <NotionItemOptionButtons
        _id={_id}
        order={order}
        type={type}
        isHovering={isHovering}
        page={props.page}
      />
      {handleItemType()}
      {dragOver && <DndHighlight />}
    </Wrapper>
  )
})

export default NotionContentItem
