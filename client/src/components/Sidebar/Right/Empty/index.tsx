import React from 'react'
import { useSelector } from 'react-redux'

import { EmptyCommentsSvg } from 'components/ui/svg'
import { selectActiveCommentsFilter } from 'store/slices/app'
import * as Empty from './EmptyRightSidebar.styles'

const EmptyRightSidebar = () => {
  const title = useSelector(selectActiveCommentsFilter)

  return (
    <Empty.Container>
      <EmptyCommentsSvg />
      <Empty.Title>No {title.toLowerCase()} comments yet</Empty.Title>
      <Empty.Description>
        {title} comments on this page will appear here
      </Empty.Description>
    </Empty.Container>
  )
}

export default EmptyRightSidebar
