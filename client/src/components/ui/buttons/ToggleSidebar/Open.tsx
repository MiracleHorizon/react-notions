import React, { FC, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg, HamburgerMenuSvg } from 'components/ui/svg'
import { OpenSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Button from './ToggleSidebarButton.styles'

const OpenSidebarButton: FC<{ isHeaderHovering: boolean }> = ({
  isHeaderHovering,
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
      <CSSTransition in={true} unmountOnExit timeout={300}>
        {isHeaderHovering ? <DoubleChevronSvg /> : <HamburgerMenuSvg />}
      </CSSTransition>
      {/*{isHovering && <OpenSidebarTooltip reference={ref} />}*/}
    </Button>
  )
}

export default OpenSidebarButton
