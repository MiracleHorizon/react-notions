import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  lazy,
  Suspense,
} from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import OutlineInput from 'components/ui/inputs - Checked/Outline'
import EmptyPagesTrash from './Empty'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectUser } from 'store/slices/auth/auth.selectors'
import IPage from 'models/page/IPage'
import {
  useLazyGetDeletedPagesQuery,
  useLazySearchDeletedPagesQuery,
} from 'services/pages.api'
import * as Modal from './PagesTrashModal.styles'

const DeletedPagesList = lazy(() => import('./List'))

const PagesTrashModal = () => {
  const { closePagesTrashModal } = useActions()
  const user = useSelector(selectUser)
  const isAlertOpen = useTypedSelector(s => s.alerts.deletePage.isOpen)
  const sbWidth = useTypedSelector(s => s.app.sidebar.width)
  const ref = useRef<HTMLDivElement>(null)

  const [pages, setPages] = useState<IPage[]>([])

  // Получение всех страниц из корзины.
  const [
    getDeletedPages,
    { data: deletedPages, isLoading, isSuccess, isError },
  ] = useLazyGetDeletedPagesQuery()

  // Получение отфильтрованных страниц.
  const [
    searchDeletedPages,
    {
      data: searchData,
      isLoading: isSearchLoading,
      isSuccess: isSearchSuccess,
      isError: isSearchError,
    },
  ] = useLazySearchDeletedPagesQuery()

  const { value, handleChangeValue, handleClearValue } = useInput('')
  const debouncedValue = useDebounce(value, 250)

  const handleClickOutside = useCallback(() => {
    if (!isAlertOpen) closePagesTrashModal()
  }, [isAlertOpen, closePagesTrashModal])

  useEffect(() => {
    if (debouncedValue === '') {
      getDeletedPages(user._id)
    }

    if (debouncedValue !== '') {
      searchDeletedPages({
        author: user._id,
        query: debouncedValue,
      })
    }
  }, [user._id, debouncedValue, getDeletedPages, searchDeletedPages])

  useEffect(() => {
    if (isSuccess && deletedPages && debouncedValue === '') {
      setPages(deletedPages)
    }

    if (isSearchSuccess && searchData && debouncedValue !== '') {
      setPages(searchData)
    }
  }, [isSuccess, isSearchSuccess, deletedPages, searchData, debouncedValue])

  useCloseModal(ref, handleClickOutside)

  return (
    <ModalWrapper>
      <Modal.Container sbWidth={sbWidth} ref={ref}>
        <Modal.InputContainer>
          <OutlineInput
            renderFocusable
            inputMode='text'
            placeholder='Filter by page title...'
            value={value}
            onChange={handleChangeValue}
            onClear={handleClearValue}
          />
        </Modal.InputContainer>
        <Suspense fallback={<EmptyPagesTrash />}>
          {pages.length > 0 && <DeletedPagesList pages={pages} />}
          {(pages.length === 0 || isError || isSearchError) && (
            <EmptyPagesTrash />
          )}
        </Suspense>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PagesTrashModal
