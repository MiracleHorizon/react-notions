import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from 'usehooks-ts'

import PagesToMoveList from './List'
import ModalWrapper from 'components/ui/modals/ModalWrapper'
import OutlineInput from 'components/ui/inputs/Outline'
import InputSearchLoader from 'components/ui/loaders/InputSearch'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition from 'hooks/useSetModalPosition'
import {
  useLazyGetPagesToMoveQuery,
  useLazySearchPagesToMoveQuery,
} from 'services/notions.api'
import { selectMovePageModalState } from 'store/slices/modals/modals.selectors'
import { selectUser } from 'store/slices/user/auth.selectors'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import IPage from 'models/page/IPage'
import * as Modal from './MovePageModal.styles'

const MovePageModal = () => {
  const { closeMovePageModal } = useActions()
  const { pageId, coords: pointerCoords } = useSelector(selectMovePageModalState)
  const user = useSelector(selectUser)

  const [getPagesToMove, { data, isLoading, isSuccess, isError }] = useLazyGetPagesToMoveQuery()
  const [
    searchPagesToMove,
    {
      data: searchData,
      isLoading: isSearchLoading,
      isSuccess: isSearchSuccess,
      isError: isSearchError,
    },
  ] = useLazySearchPagesToMoveQuery()

  const [pages, setPages] = useState<IPage[]>([])
  const { value, handleChangeValue } = useInput('')
  const debouncedValue = useDebounce(value, 200)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'pointer',
    pointerCoords,
  })

  useEffect(() => {
    // Получение всех страниц для перемещения, за исключением той,
    // у которой вызывается данное модальное окно
    if (debouncedValue === '') {
      getPagesToMove({
        authorId: user._id,
        excludePageId: pageId,
      })
    }

    // Поиск страниц для перемещения, за исключением той,
    // у которой вызывается данное модальное окно
    if (debouncedValue !== '') {
      searchPagesToMove({
        authorId: user._id,
        excludePageId: pageId,
        query: debouncedValue,
      })
    }
  }, [user._id, pageId, debouncedValue, getPagesToMove, searchPagesToMove])

  useEffect(() => {
    if (isSuccess && data && debouncedValue === '') {
      setPages(data)
    }

    if (isSearchSuccess && searchData && debouncedValue !== '') {
      setPages(searchData)
    }
  }, [isSuccess, isSearchSuccess, data, searchData, debouncedValue])

  useOnCloseModal(ref, closeMovePageModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        <Modal.Content>
          <Modal.InputContainer>
            <OutlineInput
              renderFocusable
              inputMode='text'
              placeholder='Move page to...'
              value={value}
              onChange={handleChangeValue}
            />
            {isSearchLoading && <InputSearchLoader />}
          </Modal.InputContainer>
          <PagesToMoveList _id={pageId} pages={pages} />
        </Modal.Content>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default MovePageModal
