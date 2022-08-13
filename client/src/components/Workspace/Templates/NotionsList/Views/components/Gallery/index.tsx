import React from 'react'
import { useSelector } from 'react-redux'

import GalleryItem from './Item'
import GalleryCreateTaskBar from './Item/CreateItemBar'
import { selectGalleryPages } from 'store/slices/pages/pages.selectors'
import Container from './GalleryView.styles'

const GalleryView = () => (
  <Container>
    {useSelector(selectGalleryPages).map(page => (
      <GalleryItem key={page._id} page={page} primary />
    ))}
    <GalleryCreateTaskBar />
  </Container>
)

export default GalleryView
