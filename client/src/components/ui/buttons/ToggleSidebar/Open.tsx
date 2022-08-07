import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg, HamburgerMenuSvg } from 'components/ui/svg'
import { OpenSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Container from './ToggleSidebarButton.styles'

const OpenSidebarButton: FC<{ isHeaderHovering: boolean }> = memo(
  ({ isHeaderHovering }) => {
    const { openSidebar } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const handleOpenSidebar = () => openSidebar()

    return (
      <Container
        ref={ref}
        role='button'
        dest='open'
        data-btn='lSbOpen'
        isHovering={true}
        onClick={handleOpenSidebar}
      >
        {isHeaderHovering ? <DoubleChevronSvg /> : <HamburgerMenuSvg />}
        {/*{isHovering && <OpenSidebarTooltip reference={ref} />}*/}
      </Container>
    )
  }
)

export default OpenSidebarButton
