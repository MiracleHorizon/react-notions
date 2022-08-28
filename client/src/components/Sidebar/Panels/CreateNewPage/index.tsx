import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import PlusButton from 'components/ui/buttons/Plus'
import { useCreatePageMutation } from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import Page from 'models/page/Page'
import * as Panel from './CreateNewPagePanel.styles'

const CreateNewPagePanel = () => {
  const [createPage, { data: page, isSuccess }] = useCreatePageMutation()
  const user = useSelector(selectUser)
  const navigate = useNavigate()

  const handleCreateNewPage = () => {
    createPage({ ...Page.create(), author: user._id })
  }

  useEffect(() => {
    if (isSuccess && page) navigate(`/workspace/${page._id}`)
  }, [isSuccess, page, navigate])

  return (
    <Panel.Wrapper onClick={handleCreateNewPage}>
      <PlusButton />
      <Panel.Title>New page</Panel.Title>
    </Panel.Wrapper>
  )
}

export default CreateNewPagePanel
