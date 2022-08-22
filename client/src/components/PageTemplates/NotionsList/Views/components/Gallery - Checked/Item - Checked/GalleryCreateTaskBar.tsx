import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import CreateTaskBar from 'components/PageTemplates - Checked/NotionsList  - Checked/Views - Checked/CreateTaskBar - Checked'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreatePageMutation } from 'services/pages.api'
import { selectUser } from 'store/slices/auth/auth.selectors'
import Page from 'models/page/Page'
import { Wrapper } from './GalleryItem.styles'

const GalleryCreateTaskBar = () => {
  const { page } = useTypedSelector(s => s.pages)
  const [createPage, { isSuccess, data: createdPage }] = useCreatePageMutation()
  const [, setSearchParams] = useSearchParams()
  const user = useSelector(selectUser)

  const handleCreateNewPage = () => {
    if (!page) return
    createPage({ ...Page.createNoStatusTask(page._id), author: user._id })
  }

  useEffect(() => {
    if (isSuccess && createdPage) setSearchParams({ p: createdPage._id })
  }, [isSuccess, createdPage, setSearchParams])

  return (
    <Wrapper primary={false} onClick={handleCreateNewPage}>
      <CreateTaskBar />
    </Wrapper>
  )
}

export default GalleryCreateTaskBar
