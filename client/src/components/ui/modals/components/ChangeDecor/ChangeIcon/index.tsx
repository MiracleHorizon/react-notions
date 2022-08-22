import React, { useState, useMemo, lazy, Suspense } from 'react'

import ModalWrapper from 'components/ui/modals/ModalWrapper'
import CustomDecorLoader from 'components/ui/loaders/CustomDecor'
import DecorModalNavbar from '../Navbar'
import EmojiLists from './Emoji'
import useActions from 'hooks/useActions'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import Container from './ChangeIconModal.styles'

const CustomIconMenu = lazy(() => import('./Custom'))

const ChangeIconModal = () => {
  const { closeChangeIconModal } = useActions()
  const categories = useMemo(() => ['Emoji', 'Custom'], [])
  const [activeCategory, setActiveCategory] = useState<string>('Emoji')
  const { pageId, invokerRect } = useTypedSelector(s => s.modals.icon)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerBottom',
    invokerRect,
  })

  useOnCloseModal(ref, () => {
    closeChangeIconModal()
    setActiveCategory('Emoji')
  })

  return (
    <ModalWrapper>
      <Container
        ref={node => nodeRefHandler(node, rect, setRef)}
        coords={coords}
        activeCategory={activeCategory}
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
