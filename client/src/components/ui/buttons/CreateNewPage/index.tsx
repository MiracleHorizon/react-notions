import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { CreateDepPageTooltip } from 'components/ui/tooltips'
import { PlusSvg } from 'components/ui/svg'
import PropTypes from './CreateNewPageButton.types'
import Button from './CreateNewPageButton.styles'

const CreateNewPageButton: FC<PropTypes> = ({
  coords,
  absolute,
  onClickAction,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

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
      {isHovering && <CreateDepPageTooltip reference={ref} />}
    </Button>
  )
}
export default CreateNewPageButton
