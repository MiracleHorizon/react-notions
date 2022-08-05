import React from 'react'

import GalleryItem from './Item'
import GalleryCreateTaskBar from './Item/CreateItemBar'
import useTypedSelector from 'hooks/useTypedSelector'
import Container from './GalleryView.styles'

const GalleryView = () => {
  const currentPage = useTypedSelector(state => state.pages.page)
  const pages = useTypedSelector(state =>
    state.pages.pages.filter(
      page => page.parentPageId === currentPage?._id && page.status !== null
    )
  )

  return (
    <Container>
      {pages.map(page => (
        <GalleryItem key={page._id} page={page} primary />
      ))}
      <GalleryCreateTaskBar />
    </Container>
  )
}

export default GalleryView
