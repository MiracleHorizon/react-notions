import React, { FC } from 'react'

import UserPanel from './User - Checked'
import AppOptionsPanel from './AppOptions - Checked'
import SidebarContent from '../Content'
import CreateNewPagePanel from './CreateNewPage - Checked'

const SidebarPanels: FC<{ isHovering: boolean }> = ({ isHovering }) => (
  <>
    <UserPanel isHovering={isHovering} />
    <AppOptionsPanel />
    <SidebarContent isHovering={isHovering} />
    <CreateNewPagePanel />
  </>
)

export default SidebarPanels
