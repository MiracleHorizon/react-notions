import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg } from 'components/ui/svg'
import { CloseSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Button from './ToggleSidebarButton.styles'

const CloseSidebarButton: FC<{ isSidebarHovering: boolean }> = ({
  isSidebarHovering,
}) => {
  const { closeSidebar } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenSidebar = () => closeSidebar()

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='close-sb'
      dest='close'
      isHovering={isSidebarHovering}
      onClick={handleOpenSidebar}
    >
      <DoubleChevronSvg />
      {isHovering && <CloseSidebarTooltip reference={ref} />}
    </Button>
  )
}

export default CloseSidebarButton
