import React, { FC } from 'react'

import GalleryList from './List'
import { COVERS_GALLERY_LISTS } from 'utils/constants/decor'
import Wrapper from './CoverGallery.styles'

const CoversGallery: FC<{ _id: string }> = ({ _id }) => (
  <Wrapper>
    {COVERS_GALLERY_LISTS.map(list => (
      <GalleryList key={list.title} _id={_id} list={list} />
    ))}
  </Wrapper>
)

export default CoversGallery
