import React from 'react'

import { CommentsSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import Container from '../HeaderActionButton.styles'

// Попробовать классовый компонент :)

const ToggleRightSidebarButton = () => {
  const { isOpen } = useTypedSelector(state => state.app.rightSidebar)
  const { toggleRightSidebar } = useActions()

  const handleToggleSidebar = () => toggleRightSidebar()

  return (
    <Container role='button' isOpen={isOpen} onClick={handleToggleSidebar}>
      <CommentsSvg />
    </Container>
  )
}

export default ToggleRightSidebarButton
