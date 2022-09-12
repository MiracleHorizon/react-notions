import React, { FormEvent, useEffect, useRef } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import DefaultInput from 'components/ui/inputs/Default'
import SmallPageIcon from 'components/ui/SmallPageIcon'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition, { ModalPosition } from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { useUpdatePageMutation } from 'services/notions.api'
import * as Modal from './RenamePageModal.styles'

const RenamePageModal = () => {
  const { closeRenamePageModal, openChangeIconModal } = useActions()
  const [updatedPage] = useUpdatePageMutation()
  const {
    invokerRect,
    page: { _id, title, iconUrl, coverUrl, content },
  } = useTypedSelector(s => s.modals.rename)
  const isIconModalOpen = useTypedSelector(s => s.modals.icon.isOpen)
  const { value, handleChangeValue } = useInput(title)

  const inputRef = useRef<HTMLInputElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  const {
    rect,
    coords,
    ref: iconRef,
    setRef: setIconRef,
  } = useSetModalPosition({ pos: ModalPosition.RENAME, invokerRect })

  const handleSubmitChanges = (e: FormEvent) => {
    e.preventDefault()

    if (title !== value) {
      updatedPage({ _id, body: { title: value } })
      closeRenamePageModal()
    }
  }

  const handleOpenIconModal = () => {
    const invRect = iconRef?.getBoundingClientRect().toJSON()
    openChangeIconModal({ invokerRect: invRect, pageId: _id })
  }

  useEffect(() => inputRef.current?.select(), [])

  useOnCloseModal(ref.current, !isIconModalOpen ? closeRenamePageModal : null)

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <Modal.IconContainer
          ref={node => nodeRefHandler(node, rect, setIconRef)}
          onClick={handleOpenIconModal}
        >
          <SmallPageIcon
            iconUrl={iconUrl}
            coverUrl={coverUrl}
            content={content}
          />
        </Modal.IconContainer>
        <Modal.Form onSubmit={handleSubmitChanges}>
          <DefaultInput
            type='text'
            placeholder='Untitled'
            value={value}
            reference={inputRef}
            onChange={handleChangeValue}
          />
        </Modal.Form>
      </Modal.Container>
    </ModalWrapper>
  )
}

export default RenamePageModal
