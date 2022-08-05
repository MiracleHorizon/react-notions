import React, { CSSProperties, memo, useRef } from 'react'
import { useImageOnLoad } from 'usehooks-ts'

import useActions from 'hooks/useActions'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import PropTypes from './PageIcon.types'
import * as Icon from './PageIcon.styles'

const PageIcon = memo(({ _id, iconUrl, coverUrl, template }: PropTypes) => {
  const ref = useRef<HTMLDivElement>(null)
  const { handleImageOnLoad, css } = useImageOnLoad()
  const { openChangeIconModal } = useActions()

  const handleOpenIconModal = () => {
    openChangeIconModal({
      coords: modalsCoordsHandler.icon(ref),
      pageId: _id,
    })
  }

  return (
    <Icon.Container
      ref={ref}
      template={template}
      coverUrl={coverUrl}
      onClick={handleOpenIconModal}
    >
      <Icon.Image
        src={iconUrl}
        onLoad={handleImageOnLoad}
        style={{ ...(css.fullSize as CSSProperties) }}
      />
    </Icon.Container>
  )
})

export default PageIcon
