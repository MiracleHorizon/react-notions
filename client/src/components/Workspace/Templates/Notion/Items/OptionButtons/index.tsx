import React, { FC } from 'react'

import AddBlockBelowButton from 'components/ui/buttons/AddBlockBelow'
import DragNotionContentItemButton from 'components/ui/buttons/DragContentItem'
import PropTypes from './NotionItemOptionButtons.types'
import Container from './NotionItemOptionButtons.styles'

const NotionItemOptionButtons: FC<PropTypes> = ({ _id, order, type }) => (
  <Container type={type}>
    <AddBlockBelowButton order={order} />
    <DragNotionContentItemButton _id={_id} />
  </Container>
)

export default NotionItemOptionButtons
