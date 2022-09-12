import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { PlusSvg } from 'components/ui/svg'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import PropTypes from './CreateNewPageButton.types'
import Button from './CreateNewPageButton.styles'

const CreateNewPageButton: FC<PropTypes> = ({
  coords,
  absolute,
  onClickAction,
}) => {
  const { ref, isHovering } = useDebounceHovering(250)

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='create-page'
      absolute={absolute}
      onClick={onClickAction}
      coords={coords}
    >
      <PlusSvg />
      {isHovering && (
        <FilledTooltip
          title='Quickly add a page inside'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={ref}
        />
      )}
    </Button>
  )
}
export default CreateNewPageButton
