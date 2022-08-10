import React, { FC } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import OutlineInput from 'components/ui/inputs/Outline'
import FilledButton from 'components/ui/buttons/Filled'
import useInput from 'hooks/useInput'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/nodeRefHandler'
import PropTypes from './CreateWebBookmarkModal.types'
import * as Modal from './CreateWebBookmarkModal.styles'

const CreateWebBookmarkModal: FC<PropTypes> = ({
  itemId,
  invokerRect,
  handleCloseModal,
}) => {
  // const [updateContentItem] = use...
  const { value, handleChangeValue, handleClearValue } = useInput('')
  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?

  const handleSubmitCreate = () => {
    console.log()
  }

  useOnCloseModal(ref, handleCloseModal)

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
