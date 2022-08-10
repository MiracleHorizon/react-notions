import React, { FC, useRef, useState } from 'react'

import CreateWebBookmarkModal from 'components/ui/modals/components/CreateWebBookmark'
import { BookSvg } from 'components/ui/svg'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import * as Item from './NotionWebBookmarkItem.styles'

const NotionWebBookmarkItem: FC<INotionContentItem> = ({ _id, content }) => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)
  const isEmpty = content === ''

  const handleOpenCreateWebBookmarkModal = () => isEmpty && setModalOpen(true)

  const handleCloseCreateWebBookmarkModal = () => setModalOpen(false)

  return (
    <Item.Container
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
      {isModalOpen && (
        <CreateWebBookmarkModal
          itemId={_id}
          invokerRect={ref.current?.getBoundingClientRect().toJSON()}
          handleCloseModal={handleCloseCreateWebBookmarkModal}
        />
      )}
    </Item.Container>
  )
}

export default NotionWebBookmarkItem
