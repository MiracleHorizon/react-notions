import React, { FC } from 'react'

import NotionHeadingItem from '../Heading'
import NotionItemToggleWrapper from '../../ToggleWrapper'
import NotionContentItem from '../../index'
import INotionContentItem from 'models/pageContent/INotionContentItem'

import { NotionContentItemTypes } from 'models/pageContent/NotionContentItemTypes'
import { NotionContentItemColorsEnum } from 'models/decor/NotionContentItemColorsEnum'

const items = [
  {
    _id: 'qwe8',
    parentPageId: 'page._id',
    parentItemId: null,
    type: NotionContentItemTypes.PAGE_URL,
    content: 'NestJS',
    color: NotionContentItemColorsEnum.DEFAULT,
    bgColor: NotionContentItemColorsEnum.DEFAULT,
    expanded: null,
    completed: null,
    pageId: '62ec23fe484c71a7bbcf09de',
    iconUrl: 'https://docs.nestjs.com/assets/logo-small.svg',
    order: 0,
  },
  {
    _id: 'qwe9',
    parentPageId: 'page._id',
    parentItemId: null,
    type: NotionContentItemTypes.PAGE_URL,
    content: 'Vue 3',
    color: NotionContentItemColorsEnum.DEFAULT,
    bgColor: NotionContentItemColorsEnum.DEFAULT,
    expanded: null,
    completed: null,
    order: 1,
    pageId: '62edce5e2ce8b618716e0036',
    iconUrl: 'https://vuejs.org/images/logo.png',
  },
]

const NotionToggleHeadingItem: FC<INotionContentItem> = item => {
  return (
    <NotionItemToggleWrapper
      {...item}
      contentLength={item.content.length} // ! Не content, a dependencies!!!!
      childrenTitle={<NotionHeadingItem {...item} />}
    >
      <>
        {items.map(itm => (
          <NotionContentItem key={itm._id} {...itm} />
        ))}
      </>
    </NotionItemToggleWrapper>
  )
}

export default NotionToggleHeadingItem
