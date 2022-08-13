import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDebounce } from 'usehooks-ts'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import MovePageItem from 'components/ui/modals/components/MovePage/Item'
import OutlineInput from 'components/ui/inputs/Outline'
import MoveToCommonPagesOption from 'components/ui/options/MovePage/MoveToCommonPages'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import getFilteredPages from 'utils/helpers/getFilteredPages'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { selectMovablePages } from 'store/slices/pages/pages.selectors'
import IPage from 'models/page/IPage'
import * as Modal from './MovePageModal.styles'

const MovePageModal = () => {
  const { pageId, coords: pointerCoords } = useTypedSelector(
    state => state.modals.movePage
  )
  // const pages = useTypedSelector(state => selectMovablePages(state, pageId))
  const { pages } = useTypedSelector(state => state.pages) //! MOCK
  const { closeMovePageModal } = useActions()

  const [filteredPages, setFilteredPage] = useState<IPage[]>(pages)
  const { value, handleChangeValue } = useInput('')
  const debouncedValue = useDebounce(value, 200)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'pointer',
    pointerCoords,
  }) // useMemo ?

  useOnCloseModal(ref, closeMovePageModal)

  useEffect(() => {
    setFilteredPage(getFilteredPages(pages, debouncedValue))
  }, [debouncedValue])

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
        <Modal.Content>
          <Modal.InputContainer>
            <OutlineInput
              renderFocusable
              inputMode='text'
              placeholder='Move page to...'
              value={value}
              onChange={handleChangeValue}
            />
          </Modal.InputContainer>
          <Modal.List>
            <MoveToCommonPagesOption _id={pageId} />
            {filteredPages.length > 0 ? (
              filteredPages.map(page => (
                <MovePageItem key={page._id} pageId={pageId} {...page} />
              ))
            ) : (
              <>No results</>
            )}
          </Modal.List>
        </Modal.Content>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default MovePageModal
