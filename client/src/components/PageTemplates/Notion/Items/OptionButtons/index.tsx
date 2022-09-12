import React, { FC, memo } from 'react'
import { CSSTransition } from 'react-transition-group'

import AddBlockBelowButton from 'components/ui/buttons/AddBlockBelow'
import DragNotionContentItemButton from 'components/ui/buttons/DragContentItem'
import PropTypes from './NotionItemOptionButtons.types'
import Container, { appearDuration } from './NotionItemOptionButtons.styles'

const NotionItemOptionButtons: FC<PropTypes> = memo(
  ({ isHovering, page, item }) => (
    <CSSTransition
      in={isHovering}
      timeout={appearDuration}
      classNames='default'
      unmountOnExit
    >
      <Container type={item.type}>
        <AddBlockBelowButton
          order={item.order}
          pageId={page._id}
          pageLocked={page.locked}
        />
        <DragNotionContentItemButton item={item} page={page} />
      </Container>
    </CSSTransition>
  )
)

export default NotionItemOptionButtons
