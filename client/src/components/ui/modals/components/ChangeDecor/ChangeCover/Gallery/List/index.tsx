import React, { FC, memo } from 'react'

import GalleryItem from '../Item'
import coverLinkHandler from 'utils/helpers/coverLinkHandler'
import IDecorList from 'models/decor/IDecorList'
import * as List from './GalleryList.styles'

const GalleryList: FC<{ _id: string; list: IDecorList }> = memo(
  ({ _id, list: { title, content } }) => (
    <List.Wrapper>
      <List.TitleContainer>
        <List.Title>{title}</List.Title>
        <List.Link href={coverLinkHandler(title)} target='_blank' />
      </List.TitleContainer>
      <List.Content>
        {content.map(item => (
          <GalleryItem key={item.imgUrl} pageId={_id} {...item} />
        ))}
      </List.Content>
    </List.Wrapper>
  )
)

export default GalleryList
