import React from 'react'
import { useSelector } from 'react-redux'

import GalleryItem from './Item'
import GalleryCreateTaskBar from './Item/GalleryCreateTaskBar'
import { NotionsSelector } from 'store/slices/notions/notions.selectors'
import View from './GalleryView.styles'

const GalleryView = () => (
  <View>
    {useSelector(NotionsSelector.selectGalleryPages).map(page => (
      <GalleryItem key={page._id} page={page} primary />
    ))}
    <GalleryCreateTaskBar />
  </View>
)

export default GalleryView
