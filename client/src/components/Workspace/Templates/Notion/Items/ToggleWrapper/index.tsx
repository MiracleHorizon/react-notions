import React, { FC, useCallback } from 'react'

import ToggleButton from 'components/ui/buttons/Toggle'
import EmptyToggleBlock from './Empty'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import PropTypes from './NotionItemToggleWrapper.types'
import * as Item from './NotionItemToggleWrapper.styles'

const NotionItemToggleWrapper: FC<PropTypes> = ({
  _id,
  type,
  expanded,
  bgColor,
  contentLength,
  childrenTitle,
  children,
}) => {
  const [updateContentItem] = useUpdateItemMutation()

  const handleToggleExpanded = useCallback(() => {
    if (expanded === null) return
    updateContentItem({ _id, body: { expanded: !expanded } })
  }, [_id, expanded])

  if (expanded === null) return null

  return (
    <Item.Wrapper bgColor={bgColor}>
      <Item.TitleContainer>
        <Item.ToggleContainer
          type={type}
          contentLength={contentLength}
          onClick={handleToggleExpanded}
        >
          <ToggleButton
            expanded={expanded}
            handleToggleExpanded={handleToggleExpanded}
          />
        </Item.ToggleContainer>
        {childrenTitle}
      </Item.TitleContainer>
      <Item.Content>
        {expanded &&
          (contentLength === 0 ? <EmptyToggleBlock _id={_id} /> : children)}
      </Item.Content>
    </Item.Wrapper>
  )
}

export default NotionItemToggleWrapper
