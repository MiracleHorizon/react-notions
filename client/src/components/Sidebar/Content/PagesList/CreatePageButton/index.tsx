import React, { useCallback, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import PlusButton from 'components/ui/buttons/Plus'
import { CreatePageTooltipSidebar } from 'components/ui/tooltips'
import useAuth from 'hooks/useAuth'
import { useCreatePageMutation } from 'store/slices/pages/pages.api'
import Page from 'models/page/Page'
import Wrapper from './CreatePageButtonSidebar.styles'

const CreatePageButtonSidebar = () => {
  const [createPage] = useCreatePageMutation()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)
  const { user } = useAuth()

  const handleCreatePage = useCallback(() => {
    if (user) createPage({ ...Page.create(), author: user.uid })
  }, [user, createPage])

  return (
    <Wrapper ref={ref}>
      <PlusButton onClickAction={handleCreatePage} />
      {isHovering && <CreatePageTooltipSidebar reference={ref} />}
    </Wrapper>
  )
}

export default CreatePageButtonSidebar
