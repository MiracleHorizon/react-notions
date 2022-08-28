import React, { FC } from 'react'

import UserPanel from './User'
import AppOptionsPanel from './AppOptions'
import SidebarContent from '../Content'
import CreateNewPagePanel from './CreateNewPage'

const SidebarPanels: FC<{ isHovering: boolean }> = ({ isHovering }) => (
  <>
    <UserPanel isHovering={isHovering} />
    <AppOptionsPanel />
    <SidebarContent isHovering={isHovering} />
    <CreateNewPagePanel />
  </>
)

export default SidebarPanels
