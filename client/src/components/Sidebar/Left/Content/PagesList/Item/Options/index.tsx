import React, { FC, MouseEvent, useCallback } from 'react'

import CreateNewPageButton from 'components/ui/buttons/CreateNewPage'
import PageItemOptionsButton from 'components/ui/buttons/PageItemOptions'
import useAuth from 'hooks/useAuth'
import {
  useCreatePageMutation,
  useUpdatePageMutation,
} from 'store/slices/pages/pages.api'
import { Page } from 'models/page/Page'
import { IPage } from 'models/page/IPage'
import Container from './PageItemOptions.styles'

const PageItemOptions: FC<IPage> = page => {
  const { _id, expanded } = page
  const [updatePage] = useUpdatePageMutation()
  const [createPage] = useCreatePageMutation()
  const { user } = useAuth()

  const handleCreateDependentPage = useCallback(
    async (e: MouseEvent) => {
      e.preventDefault()
      if (!user) return

      await createPage({ ...Page.createDependence(_id), author: user.uid })
      if (!expanded) await updatePage({ _id, body: { expanded: true } })
    },
    [_id, expanded, user, updatePage, createPage]
  )

  return (
    <Container>
      <PageItemOptionsButton {...page} />
      <CreateNewPageButton onClickAction={handleCreateDependentPage} />
    </Container>
  )
}

export default PageItemOptions
