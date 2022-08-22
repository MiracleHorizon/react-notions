import React, { useCallback, useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useHover } from 'usehooks-ts'

import PlusButton from 'components/ui/buttons/Plus'
import { CreatePageTooltipSidebar } from 'components/ui/tooltips'
import { useCreatePageMutation } from 'services/pages.api'
import { selectUser } from 'store/slices/auth/auth.selectors'
import Page from 'models/page/Page'
import Button from './CreatePageButtonSidebar.styles'

const CreatePageButtonSidebar = () => {
  const [createPage, { data: page, isSuccess }] = useCreatePageMutation()
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleCreatePage = useCallback(() => {
    createPage({ ...Page.create(), author: user._id })
  }, [user, createPage])

  useEffect(() => {
    if (isSuccess && page) navigate(`/workspace/${page._id}`)
  }, [isSuccess, page, navigate])

  return (
    <Button ref={ref} role='button' data-btn='create-page-sb'>
      <PlusButton onClickAction={handleCreatePage} />
      {isHovering && <CreatePageTooltipSidebar reference={ref} />}
    </Button>
  )
}

export default CreatePageButtonSidebar
