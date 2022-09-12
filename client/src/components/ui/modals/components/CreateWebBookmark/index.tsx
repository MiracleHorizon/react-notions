import React from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import OutlineInput from 'components/ui/inputs/Outline'
import FilledButton from 'components/ui/buttons/Filled'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import { useUpdateItemMutation } from 'services/notions.api'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import * as Modal from './CreateWebBookmarkModal.styles'

const CreateWebBookmarkModal = () => {
  const { closeCreateWebBookmarkModal } = useActions()
  const [updateContentItem] = useUpdateItemMutation()
  const { _id, invokerRect } = useTypedSelector(s => s.modals.webBookmark)
  const { value, handleChangeValue, handleClearValue } = useInput('')

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: ModalPosition.CENTER_BOTTOM,
    invokerRect,
  })

  const handleSubmitCreate = () => {
    updateContentItem({ _id, body: { content: value } })
    closeCreateWebBookmarkModal()
  }

  useOnCloseModal(ref, closeCreateWebBookmarkModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
        <OutlineInput
          renderFocusable
          type='url'
          placeholder='Paste in https://...'
          value={value}
          onChange={handleChangeValue}
          onClear={handleClearValue}
        />
        <FilledButton
          title='Create bookmark'
          onClickAction={handleSubmitCreate}
        />
        <Modal.TooltipTitle>
          Create a visual bookmark from a link.
        </Modal.TooltipTitle>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default CreateWebBookmarkModal
