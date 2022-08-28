import React, { FC, memo } from 'react'

import NotionHeadingItem from './Heading'
import NotionItemToggleWrapper from '../ToggleWrapper'
import NotionContentItem from '../index'
import useTypedSelector from 'hooks/useTypedSelector'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import PropTypes from '../NotionContentItem.types'

const NotionToggleHeadingItem: FC<PropTypes> = memo(({ item, page }) => {
  const dependencies = useTypedSelector(s =>
    NotionsSelector.selectContentItemDeps(s, item._id)
  )

  return (
    <NotionItemToggleWrapper
      {...item}
      data-selectable
      contentLength={item.dependencies.length}
      childrenTitle={<NotionHeadingItem item={item} page={page} />}
    >
      <>
        {dependencies.map(dependence => (
          <NotionContentItem
            key={dependence._id}
            item={dependence}
            page={page}
          />
        ))}
      </>
    </NotionItemToggleWrapper>
  )
})

export default NotionToggleHeadingItem
