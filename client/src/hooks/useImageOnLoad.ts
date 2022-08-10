import { CSSProperties, useState } from 'react'

interface ImageStyle {
  loadOpacity: CSSProperties
  fullSize: CSSProperties
}

interface ImageOnLoadType {
  handleImageOnLoad: () => void
  css: ImageStyle
}

export default function useImageOnLoad(): ImageOnLoadType {
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const handleImageOnLoad = () => setIsLoaded(true)

  const css: ImageStyle = {
    fullSize: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 500ms ease-in 0ms',
    },
    loadOpacity: {
      opacity: isLoaded ? 1 : 0,
      transition: 'opacity 200ms ease-in 0ms',
    },
  }

  return { handleImageOnLoad, css }
}
