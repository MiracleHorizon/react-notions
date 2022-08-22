import React, { FC, useRef } from 'react'

import { BookSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import PropTypes from '../../NotionContentItem.types'
import * as Item from './NotionWebBookmarkItem.styles'

const NotionWebBookmarkItem: FC<PropTypes> = ({
  item: { _id, content },
  page,
}) => {
  const { openCreateWebBookmarkModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isEmpty = content === ''

  const handleOpenCreateWebBookmarkModal = () => {
    if (!isEmpty) return

    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openCreateWebBookmarkModal({ invokerRect, _id })
  }

  return (
    <Item.Container
      data-selectable
      ref={ref}
      isEmpty={isEmpty}
      onClick={handleOpenCreateWebBookmarkModal}
    >
      {isEmpty ? (
        <>
          <Item.IconContainer>
            <BookSvg />
          </Item.IconContainer>
          <Item.Title>Add a web bookmark</Item.Title>
        </>
      ) : (
        <Item.UrlContainer href={content} target='_blank'>
          <Item.DomainTitle>
            {isEmpty ? '' : new URL(content).hostname}
          </Item.DomainTitle>
          <Item.UrlTitle>{content}</Item.UrlTitle>
        </Item.UrlContainer>
      )}
    </Item.Container>
  )
}

export default NotionWebBookmarkItem
