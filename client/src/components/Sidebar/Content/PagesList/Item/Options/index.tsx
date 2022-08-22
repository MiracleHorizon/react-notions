import React, { FC, MouseEvent, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'

import CreateNewPageButton from 'components/ui/buttons/CreateNewPage'
import PageItemOptionsButton from 'components/ui/buttons/PageItemOptions'
import {
  useCreatePageMutation,
  useUpdatePageMutation,
} from 'services/pages.api'
import { selectUser } from 'store/slices/auth/auth.selectors'
import Page from 'models/page/Page'
import IPage from 'models/page/IPage'
import Container from './PageItemOptions.styles'

const PageItemOptions: FC<IPage> = page => {
  const { _id, expanded } = page
  const [updatePage] = useUpdatePageMutation()
  const [createPage, { data: createData, isSuccess: isCreatingSuccess }] = useCreatePageMutation()
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  const handleCreateDependentPage = useCallback(
    async (e: MouseEvent) => {
      e.preventDefault()

      await createPage({ ...Page.createDependence(_id), author: user._id })
      if (!expanded) updatePage({ _id, body: { expanded: true } })
    },
    [_id, expanded, user._id, updatePage, createPage]
  )

  useEffect(() => {
    if (isCreatingSuccess && createData) {
      navigate(`/workspace/${createData._id}`)
    }
  }, [isCreatingSuccess, createData, navigate])

  return (
    <Container>
      <PageItemOptionsButton {...page} />
      <CreateNewPageButton onClickAction={handleCreateDependentPage} />
    </Container>
  )
}

export default PageItemOptions
