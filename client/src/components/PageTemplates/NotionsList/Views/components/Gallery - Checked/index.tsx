import React from 'react'
import { useSelector } from 'react-redux'

import GalleryItem from './Item - Checked'
import GalleryCreateTaskBar from './Item - Checked/GalleryCreateTaskBar'
import { selectGalleryPages } from 'store/slices/pages/pages.selectors'
import View from './GalleryView.styles'

const GalleryView = () => (
  <View>
    {useSelector(selectGalleryPages).map(page => (
      <GalleryItem key={page._id} page={page} primary />
    ))}
    <GalleryCreateTaskBar />
  </View>
)

export default GalleryView
