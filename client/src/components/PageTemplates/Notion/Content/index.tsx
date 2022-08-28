import React, { FC, memo, useMemo } from 'react'

import NotionContentItem from '../Items'
import pageContentSorter from 'utils/helpers/pageContentSorter'
import IPage from 'models/page/IPage'
import Content from './NotionContent.styles'

const NotionContent: FC<IPage & { creatingItem: boolean }> = memo(page => {
  const sortedContent = useMemo(() => pageContentSorter(page), [page])

  return (
    <Content font={page.font} smallText={page.smallText}>
      {sortedContent.map(item => (
        <NotionContentItem key={item._id} item={item} page={page} />
      ))}
    </Content>
  )
})

export default NotionContent
