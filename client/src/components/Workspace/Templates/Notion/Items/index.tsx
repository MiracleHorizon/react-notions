import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import NotionItemOptionButtons from './OptionButtons'
import NotionTextItem from './components/Text'
import NotionTodoItem from './components/Todo'
import NotionHeadingItem from './components/Heading'
import NotionToggleHeadingItem from './components/ToggleHeading'
import NotionQuoteItem from './components/Quote'
import NotionPageUrlItem from './components/PageUrl'
import NotionWebBookmarkItem from './components/WebBookmark'
import NotionDividerItem from './components/Divider'
import contentItemDatasetHandler from 'utils/helpers/contentItemDatasetHandler'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import Wrapper from './NotionContentItem.styles'

const NotionContentItem: FC<INotionContentItem> = item => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleItemType = () => {
    switch (item.type) {
      case NotionContentItemTypes.TEXT:
        return <NotionTextItem {...item} />

      case NotionContentItemTypes.TODO:
        return <NotionTodoItem {...item} />

      case NotionContentItemTypes.H1:
        return <NotionHeadingItem {...item} />

      case NotionContentItemTypes.H2:
        return <NotionHeadingItem {...item} />

      case NotionContentItemTypes.H3:
        return <NotionHeadingItem {...item} />

      case NotionContentItemTypes.TGL_H1:
        return <NotionToggleHeadingItem {...item} />

      case NotionContentItemTypes.TGL_H2:
        return <NotionToggleHeadingItem {...item} />

      case NotionContentItemTypes.TGL_H3:
        return <NotionToggleHeadingItem {...item} />

      case NotionContentItemTypes.PAGE_URL:
        return <NotionPageUrlItem {...item} />

      case NotionContentItemTypes.QUOTE:
        return <NotionQuoteItem {...item} />

      case NotionContentItemTypes.WEB_BOOKMARK:
        return <NotionWebBookmarkItem {...item} />

      case NotionContentItemTypes.DIVIDER:
        return <NotionDividerItem />

      default: {
        throw new Error()
      }
    }
  }

  return (
    <Wrapper
      data-el='notion-item'
      data-item={contentItemDatasetHandler(item.type)}
      type={item.type}
      ref={ref}
    >
      <NotionItemOptionButtons
        _id={item._id}
        order={item.order}
        type={item.type}
        isHovering={isHovering}
      />
      {handleItemType()}
    </Wrapper>
  )
}

export default NotionContentItem
