import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { DoubleChevronSvg, HamburgerMenuSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import Button from './ToggleSidebarButton.styles'

const OpenSidebarButton: FC<{ isParentHovering: boolean }> = ({
  isParentHovering,
}) => {
  const { openSidebar } = useActions()
  const { ref, isHovering } = useDebounceHovering()

  const handleOpenSidebar = () => openSidebar()

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='open-sb'
      dest='open'
      isSidebarHovering={true}
      onClick={handleOpenSidebar}
    >
      {isParentHovering ? <DoubleChevronSvg /> : <HamburgerMenuSvg />}
      {isHovering && (
        <FilledTooltip
          title='Lock sidebar open'
          desc='Ctrl+\'
          pos={ModalPosition.RIGHT_TOP}
          invokerRef={ref}
        />
      )}
    </Button>
  )
}

export default OpenSidebarButton
