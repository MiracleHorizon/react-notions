import React, { CSSProperties, FC, memo, useRef } from 'react'
import { useHover, useImageOnLoad } from 'usehooks-ts'

import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import PropTypes from './GalleryItem.types'
import * as Item from './GalleryItem.styles'

const GalleryItem: FC<PropTypes> = memo(({ _id, coverImg }) => {
  const [updatePage] = useUpdatePageMutation()
  const { handleImageOnLoad, css } = useImageOnLoad()
  const ref = useRef<HTMLDivElement>(null)
  // const isHovering = useHover(ref)

  const handleSelectCover = () => {
    updatePage({ _id, body: { coverUrl: coverImg } })
  }

  return (
    <Item.Wrapper>
      <Item.Container ref={ref} onClick={handleSelectCover}>
        <Item.Image
          style={{ ...(css.fullSize as CSSProperties) }}
          src={coverImg}
          alt='Image'
          onLoad={handleImageOnLoad}
        />
      </Item.Container>
      {/*{isHovering && <></>}*/}
    </Item.Wrapper>
  )
})

export default GalleryItem
