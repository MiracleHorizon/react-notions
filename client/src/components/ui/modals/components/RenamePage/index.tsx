import React, { FormEvent, useCallback, useEffect, useRef } from 'react'

import ModalWrapper from 'components/ui/modals'
import CommonInput from 'components/ui/inputs/Common'
import { EmptyPageSvg, PageSvg } from 'components/ui/svg'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import * as Modal from './RenamePageModal.styles'

const RenamePageModal = () => {
  const { page, coords } = useTypedSelector(state => state.modals.rename)
  const isIconModalOpen = useTypedSelector(state => state.modals.icon.isOpen)
  const { closeRenamePageModal, openChangeIconModal } = useActions()
  const { value, handleChangeValue } = useInput(page?.title!)
  const [updatedPage] = useUpdatePageMutation()

  const ref = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmitChanges = (e: FormEvent) => {
    if (!page) return
    e.preventDefault()

    updatedPage({ _id: page._id, body: { title: value } })
    closeRenamePageModal()
  }

  const handleOpenIconModal = useCallback(() => {
    if (!page) return

    openChangeIconModal({
      coords: modalsCoordsHandler.icon(ref),
      pageId: page._id,
    })
  }, [page, openChangeIconModal]) //*

  useEffect(() => inputRef.current?.select(), [])

  useCloseModal(ref, !isIconModalOpen ? closeRenamePageModal : null)

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <Modal.IconContainer onClick={handleOpenIconModal}>
          {page?.iconUrl ? (
            <Modal.Icon src={page.iconUrl} />
          ) : page?.content.length === 0 ? (
            <EmptyPageSvg />
          ) : (
            <PageSvg />
          )}
        </Modal.IconContainer>
        <Modal.Form onSubmit={handleSubmitChanges}>
          <CommonInput
            inputMode='text'
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
