import React, { useRef, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { useEventListener } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import DefaultLoader from 'components/ui/loaders/Default'
import NotionTaskHeader from './Header'
import NotionTaskContent from './Content'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import {
  useLazyGetOnePageQuery,
  useUpdatePageMutation,
} from 'services/pages.api'
import { selectNotionTaskClosable } from 'store/slices/modals/modals.selectors'
import IPage from 'models/page/IPage'
import Wrapper from './NotionTask.styles'

const NotionTask = () => {
  const { closeNotionTaskModal } = useActions()
  const [page, setPage] = useState<IPage | null>(null)
  const [updatePage] = useUpdatePageMutation()
  const isClosable = useSelector(selectNotionTaskClosable)
  const ref = useRef<HTMLDivElement>(null)

  const [getTaskPage, { data, isLoading, isSuccess, isError }] = useLazyGetOnePageQuery()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleCloseModal = () => {
    setSearchParams('')
    if (isClosable) closeNotionTaskModal()
  }

  const handleKeydown = async (e: KeyboardEvent) => {
    if (!page) return

    const { _id, favorite } = page

    if (e.code === 'Enter' && e.ctrlKey) {
      navigate(`/workspace/${_id}`)
      closeNotionTaskModal()
    }

    if (e.code === 'KeyF' && e.ctrlKey && e.altKey && e.shiftKey) {
      const body = {
        parentPageId: null,
        parentListId: null,
        status: null,
        favorite: !favorite,
      }

      await updatePage({ _id, body })
      navigate(`/workspace/${_id}`)
      setSearchParams('')
    }
  }

  useEffect(() => {
    const pageParams = searchParams.get('p')
    if (pageParams) getTaskPage(pageParams)
  }, [searchParams, getTaskPage])

  useEffect(() => {
    if (isSuccess && data) setPage(data)
    if (isError) setSearchParams('')
  }, [isSuccess, isError, data, setSearchParams])

  useCloseModal(ref, isClosable ? handleCloseModal : null)

  useEventListener('keydown', handleKeydown)

  return (
    <ModalWrapper inset>
      <Wrapper ref={ref}>
        {isSuccess && page && (
          <>
            <NotionTaskHeader {...page} />
            <NotionTaskContent {...page} />
          </>
        )}
        {isLoading && <DefaultLoader />}
      </Wrapper>
    </ModalWrapper>
  )
}

export default NotionTask
