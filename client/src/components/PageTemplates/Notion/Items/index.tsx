import React, { FC, memo, useRef, useState } from 'react'
import { useHover } from 'usehooks-ts'

import NotionItemOptionButtons from './OptionButtons'
import NotionTextItem from './components/Text'
import NotionTodoItem from './components/Todo'
import NotionHeadingItem from './components/Heading'
import NotionToggleHeadingItem from './components/ToggleHeading'
import NotionQuoteItem from './components/Quote'
import NotionPageLinkItem from './components/PageLink'
import NotionWebBookmarkItem from './components/WebBookmark'
import NotionDividerItem from './components/Divider'
import DndHighlight from 'components/ui/DndHighlight'
import contentItemDatasetHandler from 'utils/helpers/contentItemDatasetHandler'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import PropTypes from './NotionContentItem.types'
import Wrapper from './NotionContentItem.styles'

const NotionContentItem: FC<PropTypes> = memo(props => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleItemType = () => {
    switch (props.item.type) {
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

      case NotionContentItemTypes.PAGE_LINK:
        return <NotionPageLinkItem {...props} />

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

  return (
    <Wrapper
      ref={ref}
      type={props.item.type}
      data-el='notion-item'
      data-item={contentItemDatasetHandler(props.item.type)}
    >
      <NotionItemOptionButtons
        item={props.item}
        page={props.page}
        isHovering={isHovering}
      />
      {handleItemType()}
    </Wrapper>
  )
})

export default NotionContentItem
