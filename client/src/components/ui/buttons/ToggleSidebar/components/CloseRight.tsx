import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg } from 'components/ui/svg'
import { CloseSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Container from '../ToggleSidebarButton.styles'

const CloseRightSidebarButton: FC<{ isSidebarHovering: boolean }> = memo(
  ({ isSidebarHovering }) => {
    const { closeRightSidebar } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const handleOpenLeftSidebar = () => closeRightSidebar()

    return (
      <Container
        role='button'
        dest='rClose'
        ref={ref}
        isHovering={isSidebarHovering}
        onClick={handleOpenLeftSidebar}
      >
        <DoubleChevronSvg />
        {isHovering && <CloseSidebarTooltip location='right' reference={ref} />}
      </Container>
    )
  }
)

export default CloseRightSidebarButton
