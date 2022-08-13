import React, { FC, useMemo } from 'react'

import NotionContentItem from '../Items'
import pageContentSorter from 'utils/helpers/pageContentSorter'
import IPage from 'models/page/IPage'
import Content from './NotionContent.styles'

const NotionContent: FC<IPage> = page => {
  const sortedContent = useMemo(() => pageContentSorter(page), [page.content]) // Лишний рендер

  return (
    <Content font={page.font}>
      {sortedContent.map(item => (
        <NotionContentItem key={item._id} {...item} />
      ))}
    </Content>
  )
}

export default NotionContent
