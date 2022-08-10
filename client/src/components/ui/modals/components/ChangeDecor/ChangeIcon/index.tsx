import React, { useMemo, useState, Suspense, lazy } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import CustomDecorLoader from 'components/ui/loaders/CustomDecor'
import DecorModalNavbar from '../Navbar'
import EmojiLists from './Emoji'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/nodeRefHandler'
import Container from './ChangeIconModal.styles'

const CustomIconMenu = lazy(() => import('./Custom'))

const categories = ['Emoji', 'Custom'] // В константы

const ChangeIconModal = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Emoji')
  const { pageId, invokerRect } = useTypedSelector(state => state.modals.icon)
  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  }) // useMemo ?
  const { closeChangeIconModal } = useActions()

  useOnCloseModal(ref, closeChangeIconModal)

  return (
    <ModalWrapper>
      <Container
        ref={node => nodeRefHandler(node, rect, setRef)}
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
