import React, { FormEvent, useEffect, useMemo, useRef, useState } from 'react'

import ModalWrapper from 'components/ui/modals'
import CommonInput from 'components/ui/inputs/Common'
import { EmptyPageSvg, PageSvg } from 'components/ui/svg'
import useInput from 'hooks/useInput'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import ModalsCoordsHandler from 'utils/coordsHandlers/modals'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Modal from './RenamePageModal.styles'

const RenamePageModal = () => {
  const isIconModalOpen = useTypedSelector(state => state.modals.icon.isOpen)
  const { page, invokerRect } = useTypedSelector(state => state.modals.rename)
  const { value, handleChangeValue } = useInput(page?.title ? page.title : '')
  const { closeRenamePageModal, openChangeIconModal } = useActions()
  const [updatedPage] = useUpdatePageMutation()

  const inputRef = useRef<HTMLInputElement>(null)
  const ref = useRef<HTMLDivElement>(null)

  const [iconRef, setIconRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)
  const coords = useMemo(() => {
    return ModalsCoordsHandler.rename(rect.current, invokerRect)
  }, [rect.current, invokerRect])

  const handleSubmitChanges = (e: FormEvent) => {
    if (!page) return
    e.preventDefault()

    updatedPage({ _id: page._id, body: { title: value } })
    closeRenamePageModal()
  }

  const handleOpenIconModal = () => {
    if (!page) return

    openChangeIconModal({
      invokerRect: iconRef?.getBoundingClientRect().toJSON(),
      pageId: page._id,
    })
  }

  useEffect(() => inputRef.current?.select(), [])

  useOnCloseModal(ref.current, !isIconModalOpen ? closeRenamePageModal : null)

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <Modal.IconContainer
          ref={node => {
            setIconRef(node)
            if (node !== null) rect.current = node.getBoundingClientRect()
          }}
          onClick={handleOpenIconModal}
        >
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
