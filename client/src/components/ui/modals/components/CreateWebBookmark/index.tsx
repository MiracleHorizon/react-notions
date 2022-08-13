import React, { FC } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import OutlineInput from 'components/ui/inputs/Outline'
import FilledButton from 'components/ui/buttons/Filled'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import { useUpdateItemMutation } from 'store/slices/pages/pages.api'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import * as Modal from './CreateWebBookmarkModal.styles'

const CreateWebBookmarkModal = () => {
  const { _id, invokerRect } = useTypedSelector(
    state => state.modals.webBookmark
  )
  const [updateContentItem] = useUpdateItemMutation()
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const { closeCreateWebBookmarkModal } = useActions()

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?

  const handleSubmitCreate = () => {
    updateContentItem({ _id, body: { content: value } })
    closeCreateWebBookmarkModal()
  }

  useOnCloseModal(ref, closeCreateWebBookmarkModal)

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        {...coords}
      >
        <OutlineInput
          renderFocusable
          inputMode='url'
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
