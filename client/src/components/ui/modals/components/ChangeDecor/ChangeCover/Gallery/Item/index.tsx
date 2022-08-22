import React, { CSSProperties, FC, memo } from 'react'
import { useImageOnLoad } from 'usehooks-ts'

import { useUpdatePageMutation } from 'services/pages.api'
import * as Item from './GalleryItem.styles'

const GalleryItem: FC<{
  _id: string
  coverImg: string
}> = memo(({ _id, coverImg }) => {
  const [updatePage] = useUpdatePageMutation()
  const { handleImageOnLoad, css } = useImageOnLoad()

  const handleSelectCover = () => {
    updatePage({ _id, body: { coverUrl: coverImg } })
  }

  return (
    <Item.Wrapper>
      <Item.Container onClick={handleSelectCover}>
        <Item.Image
          style={{ ...(css.fullSize as CSSProperties) }}
          src={coverImg}
          onLoad={handleImageOnLoad}
          alt='Image'
        />
      </Item.Container>
    </Item.Wrapper>
  )
})

export default GalleryItem
