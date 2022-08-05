import React, { FC } from 'react'

import UserPanel from './User'
import AppOptionsPanel from './AppOptions'
import LeftSidebarContent from '../Content'
import PagesTrashPanel from './PagesTrash'
import CreateNewPagePanel from './CreateNewPage'

const LeftSidebarPanels: FC<{ isHovering: boolean }> = ({ isHovering }) => (
  <>
    <UserPanel isHovering={isHovering} />
    <AppOptionsPanel />
    <LeftSidebarContent isHovering={isHovering} />
    <PagesTrashPanel />
    <CreateNewPagePanel />
  </>
)

export default LeftSidebarPanels
