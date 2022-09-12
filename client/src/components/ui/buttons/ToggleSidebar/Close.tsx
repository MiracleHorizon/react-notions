import React, { FC } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { DoubleChevronSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import Button from './ToggleSidebarButton.styles'

const CloseSidebarButton: FC<{ isSidebarHovering: boolean }> = ({
  isSidebarHovering,
}) => {
  const { closeSidebar } = useActions()
  const { ref, isHovering } = useDebounceHovering()

  const handleOpenSidebar = () => closeSidebar()

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='close-sb'
      dest='close'
      isSidebarHovering={isSidebarHovering}
      onClick={handleOpenSidebar}
    >
      <DoubleChevronSvg />
      {isHovering && (
        <FilledTooltip
          title='Close sidebar'
          desc='Ctrl+\'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={ref}
        />
      )}
    </Button>
  )
}

export default CloseSidebarButton
