import React, { FC } from 'react'

import HeaderPageTitle from '../PageTitle'
import PageSettingsPanel from '../PageSettingsPanel'
import useTypedSelector from 'hooks/useTypedSelector'
import Container from './HeaderContent.styles'

const HeaderContent: FC<{ isSidebarOpen: boolean }> = ({ isSidebarOpen }) => {
  const { page } = useTypedSelector(s => s.notions)

  return (
    <Container isSidebarOpen={isSidebarOpen}>
      {page._id && (
        <>
          <HeaderPageTitle {...page} />
          <PageSettingsPanel {...page} />
        </>
      )}
    </Container>
  )
}

export default HeaderContent
