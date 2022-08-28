import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import CreateTaskBar from 'components/PageTemplates/NotionsDatabase/Views/CreateTaskBar'
import useTypedSelector from 'hooks/useTypedSelector'
import { useCreatePageMutation } from 'services/notions.api'
import { TasksListsSelector } from 'store/slices/tasksLists/tasksLists.selectors'
import { selectUser } from 'store/slices/user/auth.selectors'
import Page from 'models/page/Page'
import { Wrapper } from './GalleryItem.styles'

const GalleryCreateTaskBar = () => {
  const { page } = useTypedSelector(s => s.notions)
  const [createPage, { data: createdPage, isSuccess }] = useCreatePageMutation()
  const noStatusList = useSelector(TasksListsSelector.selectNoStatusList)
  const [, setSearchParams] = useSearchParams()
  const user = useSelector(selectUser)

  const handleCreateTask = () => {
    if (noStatusList) {
      const body = Page.createTask(page._id, noStatusList._id)
      createPage({ ...body, author: user._id })
    }
  }

  useEffect(() => {
    if (isSuccess && createdPage) {
      setSearchParams({ p: createdPage._id })
    }
  }, [isSuccess, createdPage, setSearchParams])

  return (
    <Wrapper primary={false} onClick={handleCreateTask}>
      <CreateTaskBar />
    </Wrapper>
  )
}

export default GalleryCreateTaskBar
