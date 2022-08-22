import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { ChevronDownRoundedSvg, ChevronUpRoundedSvg } from 'components/ui/svg'
import { SwitchTaskTooltip } from 'components/ui/tooltips'
import PropTypes from './SwitchTaskButton.types'
import * as Button from './SwitchTaskButton.styles'

const SwitchTaskButton: FC<PropTypes> = ({ dest, isActive, onClickAction }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  return (
    <Button.Wrapper
      ref={ref}
      role='button'
      data-btn='switch-task'
      isActive={isActive}
    >
      <Button.Container onClick={onClickAction}>
        {dest === 'prev' ? <ChevronUpRoundedSvg /> : <ChevronDownRoundedSvg />}
        {isHovering && <SwitchTaskTooltip reference={ref} dest={dest} />}
      </Button.Container>
    </Button.Wrapper>
  )
}

export default SwitchTaskButton
