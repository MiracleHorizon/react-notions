import React, { FC, useRef, useState } from 'react'
import { useEventListener } from 'usehooks-ts'

import GalleryList from './List'
import { COVERS_GALLERY_LISTS } from 'utils/constants/decor'
import Wrapper from './CoverGallery.styles'
import handleScrollTop from 'utils/helpers/handleScrollTop'

const CoversGallery: FC<{ _id: string }> = ({ _id }) => {
  const [isOnBottom, setOnBottom] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  useEventListener(
    'scroll',
    () => handleScrollTop({ node: ref.current, setOnBottom }),
    ref
  )

  return (
    <Wrapper ref={ref} isOnBottom={isOnBottom}>
      {COVERS_GALLERY_LISTS.map(list => (
        <GalleryList key={list.title} _id={_id} list={list} />
      ))}
    </Wrapper>
  )
}

export default CoversGallery
