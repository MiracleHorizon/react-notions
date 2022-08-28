import React, { FC, memo } from 'react'

import AddBlockBelowButton from 'components/ui/buttons/AddBlockBelow'
import DragNotionContentItemButton from 'components/ui/buttons/DragContentItem'
import PropTypes from './NotionItemOptionButtons.types'
import Container from './NotionItemOptionButtons.styles'

const NotionItemOptionButtons: FC<PropTypes> = memo(
  ({ isHovering, page, item }) => (
    <Container type={item.type} isHovering={isHovering}>
      <AddBlockBelowButton
        order={item.order}
        pageId={page._id}
        pageLocked={page.locked}
      />
      <DragNotionContentItemButton item={item} page={page} />
    </Container>
  )
)

export default NotionItemOptionButtons
