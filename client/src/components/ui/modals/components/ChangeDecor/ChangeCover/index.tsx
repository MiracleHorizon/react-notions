import React, { memo, useMemo, useRef, useState, lazy, Suspense } from 'react'

import ModalWrapper from 'components/ui/modals'
import CustomDecorLoader from 'components/ui/loaders/CustomDecorLoader'
import DecorModalNavbar from '../Navbar'
import CoversGallery from './Gallery'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import ModalsCoordsHandler from 'utils/coordsHandlers/modalCoordsHandler'
import * as Modal from './ChangeCoverModal.styles'
import modalCoordsHandler from 'utils/coordsHandlers/modalCoordsHandler'

const CoverUploader = lazy(() => import('./Upload'))
const CoverLink = lazy(() => import('./Link'))

const ChangeCoverModal = memo(() => {
  const categories = useMemo(() => ['Gallery', 'Upload', 'Link'], [])
  const [activeCategory, setActiveCategory] = useState<string>('Gallery')
  const { pageId, invokerRect } = useTypedSelector(state => state.modals.cover)
  const { closeChangeCoverModal } = useActions()

  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)
  const coords = useMemo(() => {
    return modalCoordsHandler(rect.current, invokerRect).centerBottom
  }, [rect.current, invokerRect])

  useOnCloseModal(ref, closeChangeCoverModal)

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => {
          if (node !== null) rect.current = node.getBoundingClientRect()
          setRef(node)
        }}
        activeCategory={activeCategory}
        coords={coords}
      >
        <DecorModalNavbar
          _id={pageId}
          dest='cover'
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {activeCategory === 'Gallery' && <CoversGallery _id={pageId} />}
        <Suspense fallback={<CustomDecorLoader size='md' />}>
          {activeCategory === 'Upload' && <CoverUploader _id={pageId} />}
          {activeCategory === 'Link' && <CoverLink _id={pageId} />}
        </Suspense>
      </Modal.Container>
    </ModalWrapper>
  )
})

export default ChangeCoverModal
