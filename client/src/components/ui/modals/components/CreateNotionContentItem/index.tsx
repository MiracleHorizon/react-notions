import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import CreateNotionContentItemOption from 'components/ui/options/CreateNotionContentItem'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import handleScrollTop from 'utils/helpers/handleScrollTop'
import { NOTION_CONTENT_ITEM_TYPE_OPTIONS } from 'utils/constants/notionContentItems'
import Wrapper from './CreateNotionContentItemModal.styles'

const CreateNotionContentItemModal = () => {
  const { closeCreateNotionContentItemModal } = useActions()
  const { item, parentItemId, invokerRect } = useTypedSelector(
    s => s.modals.createNotionContentItem
  )
  const [isScrollOnTop, setScrollTop] = useState<boolean>(true)
  const [isScrollOnBottom, setScrollBottom] = useState<boolean>(false)

  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'rightBottom',
    invokerRect,
  })

  useEffect(() => {
    const handleScroll = () => {
      handleScrollTop({ node: ref, setScrollTop, setScrollBottom })
    }

    ref?.addEventListener('scroll', handleScroll)

    return () => ref?.removeEventListener('scroll', handleScroll)
  }, [ref])

  useOnCloseModal(ref, closeCreateNotionContentItemModal)

  return createPortal(
    <Wrapper
      ref={node => nodeRefHandler(node, rect, setRef)}
      isScrollOnTop={isScrollOnTop}
      isScrollOnBottom={isScrollOnBottom}
      {...coords}
    >
      {NOTION_CONTENT_ITEM_TYPE_OPTIONS.map(option => (
        <CreateNotionContentItemOption
          key={option.type}
          item={item}
          parentItemId={parentItemId}
          {...option}
        />
      ))}
    </Wrapper>,
    document.getElementById('root') as HTMLElement
  )
}

export default CreateNotionContentItemModal
