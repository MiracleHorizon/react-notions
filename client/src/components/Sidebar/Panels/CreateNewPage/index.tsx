import React, { memo } from 'react'

import PlusButton from 'components/ui/buttons/Plus'
import useAuth from 'hooks/useAuth'
import { useCreatePageMutation } from 'store/slices/pages/pages.api'
import Page from 'models/page/Page'
import * as Panel from './CreateNewPagePanel.styles'

const CreateNewPagePanel = memo(() => {
  const [createPage] = useCreatePageMutation()
  const { user } = useAuth()

  const handleCreateNewPage = () => {
    if (user) createPage({ ...Page.create(), author: user.uid })
  }

  return (
    <Panel.Wrapper onClick={handleCreateNewPage}>
      <PlusButton />
      <Panel.Title>New page</Panel.Title>
    </Panel.Wrapper>
  )
})

export default CreateNewPagePanel
