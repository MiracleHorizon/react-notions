import React, { FC } from 'react'

import CreateTaskBar from 'components/Workspace/Templates/NotionsList/Views/CreateTaskBar'
import useAuth from 'hooks/useAuth'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreatePageMutation } from 'store/slices/pages/pages.api'
import Page from 'models/page/Page'
import Container from './BoardCreateTaskBar.styles'

const BoardCreateTaskBar: FC<{ listId: string }> = ({ listId }) => {
  const { user } = useAuth()
  const { page } = useTypedSelector(state => state.pages)
  const [createPage] = useCreatePageMutation()

  const handleCreatePage = () => {
    if (!page || !user) return
    createPage({ ...Page.createTask(page._id, listId), author: user.uid })
  }

  return (
    <Container onClick={handleCreatePage}>
      <CreateTaskBar />
    </Container>
  )
}

export default BoardCreateTaskBar
