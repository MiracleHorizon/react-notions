import React from 'react'

import CreateTaskBar from '../../../CreateTaskBar'
import useAuth from 'hooks/useAuth'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreatePageMutation } from 'store/slices/pages/pages.api'
import Page from 'models/page/Page'
import { Wrapper } from './GalleryItem.styles'

const GalleryCreateTaskBar = () => {
  const { page } = useTypedSelector(state => state.pages)
  const [createPage] = useCreatePageMutation()
  const { user } = useAuth()

  const handleCreateNewPage = () => {
    if (!page || !user) return

    createPage({ ...Page.createNoStatusTask(page._id), author: user.uid })
  }

  return (
    <Wrapper primary={false} onClick={handleCreateNewPage}>
      <CreateTaskBar />
    </Wrapper>
  )
}

export default GalleryCreateTaskBar
