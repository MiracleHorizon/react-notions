import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals'
import MovePageItem from 'components/ui/modals/components/MovePage/Item'
import OutlineInput from 'components/ui/inputs/Outline'
import MoveToCommonPagesOption from 'components/ui/options/MovePage/MoveToCommonPages'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import { selectMovablePages } from 'store/slices/pages/pages.selectors'
import * as Modal from './MovePageModal.styles'

const MovePageModal = () => {
  const pages = useTypedSelector(state => selectMovablePages(state, pageId))
  const { pageId, coords } = useTypedSelector(state => state.modals.movePage)
  const { value, handleChangeValue } = useInput('')
  const { closeMovePageModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, closeMovePageModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
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
            {pages.map(page => (
              <MovePageItem key={page._id} pageId={pageId} {...page} />
            ))}
          </Modal.List>
        </Modal.Content>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default MovePageModal
