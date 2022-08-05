import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg, HamburgerMenuSvg } from 'components/ui/svg'
import { OpenSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Container from '../ToggleSidebarButton.styles'

const OpenLeftSidebarButton: FC<{ isHeaderHovering: boolean }> = memo(
  ({ isHeaderHovering }) => {
    const { openLeftSidebar } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const handleOpenLeftSidebar = () => openLeftSidebar()

    return (
      <Container
        ref={ref}
        role='button'
        dest='lOpen'
        data-btn='lSbOpen'
        isHovering={true}
        onClick={handleOpenLeftSidebar}
      >
        {isHeaderHovering ? (
          <>
            <DoubleChevronSvg />
          </>
        ) : (
          <HamburgerMenuSvg />
        )}
        {/*{isHovering && <OpenSidebarTooltip reference={ref} />}*/}
      </Container>
    )
  }
)

export default OpenLeftSidebarButton
