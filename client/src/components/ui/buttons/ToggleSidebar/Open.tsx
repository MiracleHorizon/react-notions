import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg, HamburgerMenuSvg } from 'components/ui/svg'
import { OpenSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Button from './ToggleSidebarButton.styles'

const OpenSidebarButton: FC<{ isParentHovering: boolean }> = ({
  isParentHovering,
}) => {
  const { openSidebar } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenSidebar = () => openSidebar()

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='open-sb'
      dest='open'
      isHovering={true}
      onClick={handleOpenSidebar}
    >
      {isParentHovering ? <DoubleChevronSvg /> : <HamburgerMenuSvg />}
      {isHovering && <OpenSidebarTooltip reference={ref} />}
    </Button>
  )
}

export default OpenSidebarButton
