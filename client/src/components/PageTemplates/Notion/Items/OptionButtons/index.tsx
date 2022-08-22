import React, { FC, memo } from 'react'

import AddBlockBelowButton from 'components/ui/buttons/AddBlockBelow'
import DragNotionContentItemButton from 'components/ui/buttons/DragContentItem'
import PropTypes from './NotionItemOptionButtons.types'
import Container from './NotionItemOptionButtons.styles'

const NotionItemOptionButtons: FC<PropTypes> = memo(
  ({ _id, type, isHovering, order, page }) => (
    <Container type={type} isHovering={isHovering}>
      <AddBlockBelowButton
        order={order}
        pageId={page._id}
        pageLocked={page.locked}
      />
      <DragNotionContentItemButton _id={_id} type={type} page={page} />
    </Container>
  )
)

export default NotionItemOptionButtons
