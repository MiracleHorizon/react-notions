import React, { FC, memo } from 'react'

import GalleryItem from '../Item'
import coverLinkHandler from 'utils/helpers/coverLinkHandler'
import { IGalleryList } from 'utils/constants/decor'
import * as List from './GalleryList.styles'

const GalleryList: FC<{
  _id: string
  list: IGalleryList
}> = memo(({ _id, list: { title, content } }) => (
  <List.Wrapper>
    <List.TitleContainer>
      <List.Title>{title}</List.Title>
      <List.Link href={coverLinkHandler(title)} target='_blank' />
    </List.TitleContainer>
    <List.Content>
      {content.map(({ coverImg }) => (
        <GalleryItem key={coverImg} _id={_id} coverImg={coverImg} />
      ))}
    </List.Content>
  </List.Wrapper>
))

export default GalleryList
