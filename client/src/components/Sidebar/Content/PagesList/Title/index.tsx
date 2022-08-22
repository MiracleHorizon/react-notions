import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { PagesListTitleTooltip } from 'components/ui/tooltips'
import PropTypes from './PagesListTitle.types'
import * as Title from './PagesListTitle.styles'

const PagesListTitle: FC<PropTypes> = memo(
  ({ title, isOpen, onClickAction }) => {
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    return (
      <Title.Container ref={ref} onClick={onClickAction}>
        <Title.Text>{title}</Title.Text>
        {isHovering && (
          <PagesListTitleTooltip
            title={title}
            isOpen={isOpen}
            reference={ref}
          />
        )}
      </Title.Container>
    )
  }
)

export default PagesListTitle
