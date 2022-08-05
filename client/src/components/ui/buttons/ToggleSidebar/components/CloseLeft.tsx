import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg } from 'components/ui/svg'
import { CloseSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Container from '../ToggleSidebarButton.styles'

const CloseLeftSidebarButton: FC<{ isSidebarHovering: boolean }> = memo(
  ({ isSidebarHovering }) => {
    const { closeLeftSidebar } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const handleOpenLeftSidebar = () => closeLeftSidebar()

    return (
      <Container
        role='button'
        dest='lClose'
        ref={ref}
        isHovering={isSidebarHovering}
        onClick={handleOpenLeftSidebar}
      >
        <DoubleChevronSvg />
        {isHovering && <CloseSidebarTooltip location='left' reference={ref} />}
      </Container>
    )
  }
)

export default CloseLeftSidebarButton
