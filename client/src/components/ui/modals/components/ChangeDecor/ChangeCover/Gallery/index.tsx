import React, { FC } from 'react'

import GalleryList from './List'
import { galleryLists } from 'store/slices/decor'
import Wrapper from './CoverGallery.styles'

const CoversGallery: FC<{ _id: string }> = ({ _id }) => (
  <Wrapper>
    {galleryLists.map(list => (
      <GalleryList key={list.title} _id={_id} list={list} />
    ))}
  </Wrapper>
)

export default CoversGallery
