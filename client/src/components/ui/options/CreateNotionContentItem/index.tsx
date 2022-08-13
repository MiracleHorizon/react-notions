import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { ContentItemTypeTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import {
  useCreateItemMutation,
  useUpdateItemMutation,
} from 'store/slices/pages/pages.api'
import NotionContentItem from 'models/pageContent/NotionContentItem.class'
import PropTypes from './CreateNotionContentItemOption.types'
import * as Option from './CreateNotionContentItemOption.styles'

const CreateNotionContentItemOption: FC<PropTypes> = memo(
  ({ item, parentItemId, title, desc, imageUrl, type }) => {
    const { page } = useTypedSelector(state => state.pages)
    const { closeCreateNotionContentItemModal } = useActions()

    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const [createNotionItem] = useCreateItemMutation()
    const [updateNotionItem] = useUpdateItemMutation()

    const handleCreateNotionContentItem = () => {
      if (!page) return

      updateNotionItem(NotionContentItem.update(type, item._id))
      closeCreateNotionContentItemModal()
      // parentItemId
      //   ? createNotionItem(NotionContentItem.create(type, item._id, parentItemId))
      //   : updateNotionItem(NotionContentItem.update(type, item._id))
    }

    return (
      <Option.Wrapper ref={ref}>
        <Option.Container onClick={handleCreateNotionContentItem}>
          <Option.ImageContainer>
            <Option.Image src={imageUrl} />
          </Option.ImageContainer>
          <Option.TextContainer>
            <Option.Title>{title}</Option.Title>
            <Option.Description>{desc}</Option.Description>
          </Option.TextContainer>
        </Option.Container>
        {isHovering && <ContentItemTypeTooltip type={type} invokerRef={ref} />}
      </Option.Wrapper>
    )
  }
)

export default CreateNotionContentItemOption
