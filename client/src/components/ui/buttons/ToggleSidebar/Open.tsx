import React, { FC, memo, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg, HamburgerMenuSvg } from 'components/ui/svg'
import { OpenSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import * as Button from './ToggleSidebarButton.styles'

const OpenSidebarButton: FC<{ isHeaderHovering: boolean }> = memo(
  ({ isHeaderHovering }) => {
    const { openSidebar } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    // const isHovering = useHover(ref)

    const handleOpenSidebar = () => openSidebar()

    return (
      <Button.Wrapper
        ref={ref}
        role='button'
        dest='open'
        data-btn='sbOpen'
        isHovering={true}
        onClick={handleOpenSidebar}
      >
        <CSSTransition in={true} unmountOnExit timeout={300}>
          <Button.Container>
            {isHeaderHovering ? <DoubleChevronSvg /> : <HamburgerMenuSvg />}
          </Button.Container>
        </CSSTransition>
        {/*{isHovering && <OpenSidebarTooltip reference={ref} />}*/}
      </Button.Wrapper>
    )
  }
)

export default OpenSidebarButton
