import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import ModalWrapper from 'components/ui/modals/index'
import DecorModalNavbar from '../Navbar'
import EmojiLists from './Emoji'
import useActions from 'hooks/useActions'
import useCloseModal from 'hooks/useCloseModal'
import useTypedSelector from 'hooks/useTypedSelector'
import { Container } from './ChangeIconModal.styles'
import CustomIcon from './Custom'

const ChangeIconModal = () => {
  const { pageId, coords } = useTypedSelector(state => state.modals.icon)
  const [activeCategory, setActiveCategory] = useState<string>('Emoji')
  const categories = useMemo(() => ['Emoji', 'Custom'], [])
  const ref = useRef<HTMLDivElement>(null)
  const { closeChangeIconModal } = useActions()

  const categoryHandler = () => {
    switch (activeCategory) {
      case 'Emoji':
        return <EmojiLists _id={pageId} />
      case 'Custom':
        return <CustomIcon _id={pageId} />
      default:
        return <EmojiLists _id={pageId} />
    }
  }

  useCloseModal(ref, closeChangeIconModal)

  return (
    <ModalWrapper>
      <Container ref={ref} {...coords}>
        <DecorModalNavbar
          _id={pageId}
          dest='icon'
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {categoryHandler()}
      </Container>
    </ModalWrapper>
  )
}

export default ChangeIconModal
