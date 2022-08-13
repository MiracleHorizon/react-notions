import React, { FC, memo } from 'react'

import NotionHeadingItem from './Heading'
import NotionItemToggleWrapper from '../ToggleWrapper'
import NotionContentItem from '../index'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectContentItemDeps } from 'store/slices/pages/pages.selectors'
import INotionContentItem from 'models/pageContent/INotionContentItem'

const NotionToggleHeadingItem: FC<INotionContentItem> = memo(item => {
  const deps = useTypedSelector(state => selectContentItemDeps(state, item._id))

  return (
    <NotionItemToggleWrapper
      {...item}
      contentLength={item.dependencies.length}
      childrenTitle={<NotionHeadingItem {...item} />}
    >
      <>
        {deps.map(itm => (
          <NotionContentItem key={itm._id} {...itm} />
        ))}
      </>
    </NotionItemToggleWrapper>
  )
})

export default NotionToggleHeadingItem
