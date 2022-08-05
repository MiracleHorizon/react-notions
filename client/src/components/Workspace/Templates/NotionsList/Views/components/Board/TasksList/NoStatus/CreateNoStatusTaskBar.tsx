import React from 'react'

import CreateTaskBar from 'components/Workspace/Templates/NotionsList/Views/CreateTaskBar'
import useAuth from 'hooks/useAuth'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreatePageMutation } from 'store/slices/pages/pages.api'
import { Page } from 'models/page/Page'
import Container from '../Item/CreateTaskBar/BoardCreateTaskBar.styles'

const CreateNoStatusTaskBar = () => {
  const { page } = useTypedSelector(state => state.pages)
  const [createPage] = useCreatePageMutation()
  const { user } = useAuth()

  const handleCreateNoStatusPage = () => {
    if (!page || !user) return

    createPage({ ...Page.createNoStatusTask(page._id), author: user.uid })
  }

  return (
    <Container onClick={handleCreateNoStatusPage}>
      <CreateTaskBar />
    </Container>
  )
}

export default CreateNoStatusTaskBar
