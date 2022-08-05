import React, { memo, useCallback, useMemo, useRef, useState } from 'react'
import Loadable from 'react-loadable'

import ModalWrapper from 'components/ui/modals/index'
import DecorModalNavbar from '../Navbar'
import CoversGallery from './Gallery'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import * as Modal from './ChangeCoverModal.styles'

const CoverUploader = Loadable({
  loader: () => import('./Upload'),
  loading: () => <>Loading...</>,
})

const CoverLink = Loadable({
  loader: () => import('./Link'),
  loading: () => <>Loading...</>,
})

const ChangeCoverModal = memo(() => {
  const categories = useMemo(() => ['Gallery', 'Upload', 'Link'], [])
  const [activeCategory, setActiveCategory] = useState<string>('Gallery')
  const { pageId, coords } = useTypedSelector(state => state.modals.cover)
  const { closeChangeCoverModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const categoryHandler = useCallback(() => {
    switch (activeCategory) {
      case 'Gallery':
        return <CoversGallery _id={pageId} />
      case 'Upload':
        return <CoverUploader _id={pageId} />
      case 'Link':
        return <CoverLink _id={pageId} />
      default:
        return <CoversGallery _id={pageId} />
    }
  }, [activeCategory, pageId])

  useCloseModal(ref, closeChangeCoverModal)

  return (
    <ModalWrapper>
      <Modal.Container ref={ref} {...coords}>
        <DecorModalNavbar
          _id={pageId}
          dest='cover'
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {categoryHandler()}
      </Modal.Container>
    </ModalWrapper>
  )
})

export default ChangeCoverModal
