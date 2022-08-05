import React, { FC } from 'react'

import GalleryItem from '../Item'
import PropTypes from './GalleryList.types'
import coverLinkHandler from 'helpers/coverLinkHandler'
import * as List from './GalleryList.styles'

const GalleryList: FC<PropTypes> = ({ _id, list: { title, content } }) => (
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
)

export default GalleryList
