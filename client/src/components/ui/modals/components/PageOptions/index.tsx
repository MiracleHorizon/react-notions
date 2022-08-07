import React, { useMemo, useRef, useState } from 'react'

import ModalWrapper from 'components/ui/modals'
import ChangesBar from 'components/ui/ChangesBar'
import PageOptionsList from './OptionsList'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import modalCoordsByPointerHandler from 'utils/coordsHandlers/modalCoordsByPointerHandler'
import * as Modal from './PageOptionsModal.styles'

const PageOptionsModal = () => {
  const { page, coords } = useTypedSelector(state => state.modals.pageOptions)
  const { closePageOptionsModal } = useActions()

  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)
  const handledCoords = useMemo(() => {
    return modalCoordsByPointerHandler(coords, rect.current)
  }, [rect.current])

  useOnCloseModal(ref, closePageOptionsModal)

  if (!page) return null

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => {
          setRef(node)
          if (node !== null) rect.current = node.getBoundingClientRect()
        }}
        {...handledCoords}
      >
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
