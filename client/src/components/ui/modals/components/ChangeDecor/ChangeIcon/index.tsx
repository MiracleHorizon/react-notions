import React, { useMemo, useRef, useState, Suspense, lazy } from 'react'

import ModalWrapper from 'components/ui/modals/index'
import CustomDecorLoader from 'components/ui/loaders/CustomDecorLoader'
import DecorModalNavbar from '../Navbar'
import EmojiLists from './Emoji'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import modalCoordsHandler from 'utils/coordsHandlers/modalCoordsHandler'
import Container from './ChangeIconModal.styles'

const CustomIconMenu = lazy(() => import('./Custom'))

const ChangeIconModal = () => {
  const { pageId, invokerRect } = useTypedSelector(state => state.modals.icon)
  const [activeCategory, setActiveCategory] = useState<string>('Emoji')
  const categories = useMemo(() => ['Emoji', 'Custom'], [])
  const { closeChangeIconModal } = useActions()

  const [ref, setRef] = useState<HTMLDivElement | null>(null)
  const rect = useRef<DOMRect | null>(null)
  const coords = useMemo(() => {
    return modalCoordsHandler(rect.current, invokerRect).centerBottom
  }, [rect.current, invokerRect])

  useOnCloseModal(ref, closeChangeIconModal)

  return (
    <ModalWrapper>
      <Container
        ref={node => {
          if (node !== null) rect.current = node.getBoundingClientRect()
          setRef(node)
        }}
        activeCategory={activeCategory}
        coords={coords}
      >
        <DecorModalNavbar
          _id={pageId}
          dest='icon'
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {activeCategory === 'Emoji' ? (
          <EmojiLists _id={pageId} />
        ) : (
          <Suspense fallback={<CustomDecorLoader size='lg' />}>
            <CustomIconMenu _id={pageId} />
          </Suspense>
        )}
      </Container>
    </ModalWrapper>
  )
}

export default ChangeIconModal
