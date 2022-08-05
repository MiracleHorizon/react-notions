import React, { useRef } from 'react'

import ModalWrapper from 'components/ui/modals'
import ChangesBar from 'components/ui/ChangesBar'
import PageOptionsList from './OptionsList'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './PageOptionsModal.styles'

const PageOptionsModal = () => {
  const { page, coords } = useTypedSelector(state => state.modals.pageOptions)
  const { closePageOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  useCloseModal(ref, closePageOptionsModal)

  if (!page) return null

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <PageOptionsList page={page} coords={coords} />
        <ChangesBar author={page.author} updatedAt={page.updatedAt} />
      </Modal.Container>
    </ModalWrapper>
  )
}

export default PageOptionsModal

// useEffect(() => {
//   setLocked(true)
//   const [locked, setLocked] = useLockedBody()
//
//   return setLocked(false)
// }, [setLocked])
