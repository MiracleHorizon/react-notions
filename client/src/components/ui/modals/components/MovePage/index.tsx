import React, { useCallback, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDebounce } from 'usehooks-ts'

import PagesToMoveList from './List'
import ModalWrapper from 'components/ui/modals/ModalWrapper'
import OutlineInput from 'components/ui/inputs/Outline'
import InputSearchLoader from 'components/ui/loaders/InputSearch'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import useFetchPagination from 'hooks/useFetchPagination'
import { selectMovePageModalState } from 'store/slices/modals/modals.selectors'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import { FetchKind } from 'hooks/useFetchPagination/types'
import * as Modal from './MovePageModal.styles'

const MovePageModal = () => {
  const { closeMovePageModal } = useActions()
  const [isScrollOnTop, setScrollTop] = useState<boolean>(true)
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)
  const { pageId, coords: pointerCoords } = useSelector(selectMovePageModalState)
  const { value, handleChangeValue } = useInput('')
  const debouncedValue = useDebounce(value, 200)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.POINTER,
    pointerCoords,
  })

  const handleScrollOffset = useCallback(() => {
    if (ref) handleScrollTop({ node: ref, setScrollTop, setScrollBottom })
  }, [ref])

  const paginationParams = useMemo(() => ({
    kind: FetchKind.MOVE_PAGE,
    handleScrollOffset,
    excludePageId: pageId,
    debouncedValue,
    offsetValue: 10,
    node: ref,
  }), [ref, pageId, debouncedValue, handleScrollOffset])
  const { pages, isLoading } = useFetchPagination(paginationParams)

  useOnCloseModal(ref, closeMovePageModal)

  return (
    <ModalWrapper>
      <Modal.Container
        {...coords}
        ref={node => nodeRefHandler(node, rect, setRef)}
        isScrollOnTop={isScrollOnTop}
        isScrollOnBottom={isScrollOnBottom}
      >
        <Modal.Content>
          <Modal.InputContainer>
            <OutlineInput
              renderFocusable
              type='text'
              placeholder='Move page to...'
              value={value}
              onChange={handleChangeValue}
            />
            {isLoading && <InputSearchLoader />}
          </Modal.InputContainer>
          {pages && <PagesToMoveList _id={pageId} pages={pages} />}
        </Modal.Content>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default MovePageModal
