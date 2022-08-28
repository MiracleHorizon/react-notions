import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import OpenSidebarButton from 'components/ui/buttons/ToggleSidebar/Open'
import Container from './OpenSidebarBar.styles'

const OpenSidebarBar = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  return (
    <Container ref={ref}>
      <OpenSidebarButton isParentHovering={isHovering} />
    </Container>
  )
}

export default OpenSidebarBar
