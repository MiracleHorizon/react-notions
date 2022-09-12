import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import PlusButton from 'components/ui/buttons/Plus'
import FilledTooltip from 'components/ui/tooltips/Filled'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { useCreatePageMutation } from 'services/notions.api'
import { ModalPosition } from 'hooks/useSetModalPosition'
import { selectUser } from 'store/slices/user/auth.selectors'
import Page from 'models/page/Page'
import Button from './CreatePageButtonSidebar.styles'

const CreatePageButtonSidebar = () => {
  const [createPage, { data: page, isSuccess }] = useCreatePageMutation()
  const { ref, isHovering } = useDebounceHovering()
  const navigate = useNavigate()
  const user = useSelector(selectUser)

  const handleCreatePage = useCallback(() => {
    createPage({ ...Page.create(), author: user._id })
  }, [user, createPage])

  useEffect(() => {
    if (isSuccess && page) navigate(`/workspace/${page._id}`)
  }, [isSuccess, page, navigate])

  return (
    <Button ref={ref} role='button' data-btn='create-page-sb'>
      <PlusButton onClickAction={handleCreatePage} />
      {isHovering && (
        <FilledTooltip
          title='Add a page'
          desc='Here your regular pages.'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={ref}
        />
      )}
    </Button>
  )
}

export default CreatePageButtonSidebar
