import React, { FC, memo, MouseEvent, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'

import CreateNewPageButton from 'components/ui/buttons/CreateNewPage'
import PageItemOptionsButton from 'components/ui/buttons/PageItemOptions'
import {
  useCreatePageMutation,
  useUpdatePageMutation,
} from 'services/notions.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import Page from 'models/page/Page'
import IPage from 'models/page/IPage'
import Container, { appearDuration } from './PageItemOptions.styles'

const PageItemOptions: FC<IPage & { isHovering: boolean }> = memo(
  ({ isHovering, ...page }) => {
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
      <CSSTransition
        in={isHovering}
        timeout={appearDuration}
        classNames='default'
        unmountOnExit
      >
        <Container>
          <PageItemOptionsButton {...page} />
          <CreateNewPageButton onClickAction={handleCreateDependentPage} />
        </Container>
      </CSSTransition>
    )
  }
)
export default PageItemOptions
