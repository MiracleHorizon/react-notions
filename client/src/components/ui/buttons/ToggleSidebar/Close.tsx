import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { DoubleChevronSvg } from 'components/ui/svg'
import { CloseSidebarTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import { Wrapper } from './ToggleSidebarButton.styles'

const CloseSidebarButton: FC<{ isSidebarHovering: boolean }> = memo(
  ({ isSidebarHovering }) => {
    const { closeSidebar } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const handleOpenSidebar = () => closeSidebar()

    return (
      <Wrapper
        ref={ref}
        role='button'
        dest='close'
        isHovering={isSidebarHovering}
        onClick={handleOpenSidebar}
      >
        <DoubleChevronSvg />
        {isHovering && <CloseSidebarTooltip reference={ref} />}
      </Wrapper>
    )
  }
)

export default CloseSidebarButton
