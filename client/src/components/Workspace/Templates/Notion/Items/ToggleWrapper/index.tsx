import React, { FC, useCallback, useState } from 'react'

import ToggleButton from 'components/ui/buttons/Toggle'
import PropTypes from './NotionItemToggleWrapper.types'
import * as Item from './NotionItemToggleWrapper.styles'

const NotionItemToggleWrapper: FC<PropTypes> = ({
  _id,
  type,
  // expanded
  bgColor,
  contentLength,
  childrenTitle,
  children,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false)
  // const [updateContentItem] = use...

  const handleToggleExpanded = useCallback(() => {
    setExpanded(!expanded)
    // updateContentItem({ _id, body: { expanded: !expanded } })
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
      {expanded && children}
    </Item.Wrapper>
  )
}

export default NotionItemToggleWrapper
