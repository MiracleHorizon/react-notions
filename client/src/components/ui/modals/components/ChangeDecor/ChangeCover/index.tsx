import React, { memo, useState, lazy, Suspense } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import CustomDecorLoader from 'components/ui/loaders/CustomDecor'
import DecorModalNavbar from '../Navbar'
import CoversGallery from './Gallery'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import nodeRefHandler from 'utils/nodeRefHandler'
import useSetModalPosition from 'hooks/useSetModalPosition'
import * as Modal from './ChangeCoverModal.styles'

const CoverUploader = lazy(() => import('./Upload'))
const CoverLink = lazy(() => import('./Link'))

const categories = ['Gallery', 'Upload', 'Link'] // В константы.

const ChangeCoverModal = memo(() => {
  const [activeCategory, setActiveCategory] = useState<string>('Gallery')
  const { pageId, invokerRect } = useTypedSelector(state => state.modals.cover)
  const { closeChangeCoverModal } = useActions()

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?

  useOnCloseModal(ref, closeChangeCoverModal)

  return (
    <ModalWrapper>
      <Modal.Container
        ref={node => nodeRefHandler(node, rect, setRef)}
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
