import React from 'react'
import { createPortal } from 'react-dom'

import CreateNotionContentItemOption from 'components/ui/options/CreateNotionContentItem'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useOnCloseModal from 'hooks/useOnCloseModal'
import useSetModalPosition from 'hooks/useSetModalPosition'
import nodeRefHandler from 'utils/helpers/nodeRefHandler'
import { NOTION_CONTENT_ITEM_TYPE_OPTIONS } from 'utils/constants/notionContentItems'
import Wrapper from './CreateNotionContentItemModal.styles'

const CreateNotionContentItemModal = () => {
  const { item, parentItemId, invokerRect } = useTypedSelector(
    state => state.modals.createNotionContentItem
  )
  const { closeCreateNotionContentItemModal } = useActions()
  const { ref, setRef, rect, coords } = useSetModalPosition({
    pos: 'centerTop',
    invokerRect,
  })

  useOnCloseModal(ref, closeCreateNotionContentItemModal)

  if (!item) return null

  return createPortal(
    <Wrapper ref={node => nodeRefHandler(node, rect, setRef)} {...coords}>
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
