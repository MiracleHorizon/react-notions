import React, { FC, memo } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import PropTypes from './PagesListTitle.types'
import * as Title from './PagesListTitle.styles'

const PagesListTitle: FC<PropTypes> = memo(
  ({ title, isOpen, onClickAction }) => {
    const { ref, isHovering } = useDebounceHovering()
    const tooltipTitle = title === 'Common'
        ? 'Here your regular pages.'
        : 'Pages you have favorite.'

    return (
      <Title.Container ref={ref} onClick={onClickAction}>
        <Title.Text>{title}</Title.Text>
        {isHovering && (
          <FilledTooltip
            title={`Click to ${isOpen ? 'hide' : 'show'} section`}
            desc={tooltipTitle}
            pos={ModalPosition.CENTER_TOP}
            invokerRef={ref}
          />
        )}
      </Title.Container>
    )
  }
)

export default PagesListTitle
