import React, { FC, memo, useCallback } from 'react'

import ToggleButton from 'components/ui/buttons/Toggle'
import EmptyToggleBlock from './Empty - Checked'
import { useUpdateItemMutation } from 'services/pages.api'
import PropTypes from './NotionItemToggleWrapper.types'
import * as Item from './NotionItemToggleWrapper.styles'

const NotionItemToggleWrapper: FC<PropTypes> = memo(
  ({
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
    }, [_id, expanded, updateContentItem])

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
)

export default NotionItemToggleWrapper
