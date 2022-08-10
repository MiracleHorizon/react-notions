import React, { Component } from 'react'

import NotionItemOptionButtons from './OptionButtons'
import NotionTextItem from './components/Text'
import NotionTodoItem from './components/Todo'
import NotionHeadingItem from './components/Heading'
import NotionToggleHeadingItem from './components/ToggleHeading'
import NotionQuoteItem from './components/Quote'
import NotionPageUrlItem from './components/PageUrl'
import NotionDividerItem from './components/Divider'
import NotionWebBookmarkItem from './components/WebBookmark'

import contentItemDatasetHandler from 'utils/helpers/contentItemDatasetHandler'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'
import Wrapper from './NotionContentItem.styles'

export default class NotionContentItem extends Component<INotionContentItem> {
  constructor(props: INotionContentItem) {
    super(props)
  }

  handleItemType(): JSX.Element {
    switch (this.props.type) {
      case NotionContentItemTypes.TEXT:
        return <NotionTextItem {...this.props} />

      case NotionContentItemTypes.TODO:
        return <NotionTodoItem {...this.props} />

      case NotionContentItemTypes.H1:
        return <NotionHeadingItem {...this.props} />

      case NotionContentItemTypes.H2:
        return <NotionHeadingItem {...this.props} />

      case NotionContentItemTypes.H3:
        return <NotionHeadingItem {...this.props} />

      case NotionContentItemTypes.TGL_H1:
        return <NotionToggleHeadingItem {...this.props} />

      case NotionContentItemTypes.TGL_H2:
        return <NotionToggleHeadingItem {...this.props} />

      case NotionContentItemTypes.TGL_H3:
        return <NotionToggleHeadingItem {...this.props} />

      case NotionContentItemTypes.PAGE_URL:
        return <NotionPageUrlItem {...this.props} />

      case NotionContentItemTypes.QUOTE:
        return <NotionQuoteItem {...this.props} />

      case NotionContentItemTypes.WEB_BOOKMARK:
        return <NotionWebBookmarkItem {...this.props} />

      case NotionContentItemTypes.DIVIDER:
        return <NotionDividerItem />

      default: {
        throw new Error()
      }
    }
  }

  render() {
    return (
      <Wrapper
        data-el='notion-item'
        data-item={contentItemDatasetHandler(this.props.type)}
        type={this.props.type}
      >
        <NotionItemOptionButtons
          _id={this.props._id}
          order={this.props.order}
          type={this.props.type}
        />
        {this.handleItemType()}
      </Wrapper>
    )
  }
}
