import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { ChevronDownRoundedSvg, ChevronUpRoundedSvg } from 'components/ui/svg'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import PropTypes from './SwitchTaskButton.types'
import * as Button from './SwitchTaskButton.styles'

const SwitchTaskButton: FC<PropTypes> = ({ dest, isActive, onClickAction }) => {
  const { ref, isHovering } = useDebounceHovering(250)

  return (
    <Button.Wrapper
      ref={ref}
      role='button'
      data-btn='switch-task'
      isActive={isActive}
    >
      <Button.Container onClick={onClickAction}>
        {dest === 'prev' ? <ChevronUpRoundedSvg /> : <ChevronDownRoundedSvg />}
        {isHovering && (
          <FilledTooltip
            title={`${dest === 'prev' ? 'Previous' : 'Next'} page`}
            desc={`Alt+${dest === 'prev' ? 'K' : 'J'}`}
            pos={ModalPosition.CENTER_TOP}
            invokerRef={ref}
          />
        )}
      </Button.Container>
    </Button.Wrapper>
  )
}

export default SwitchTaskButton
