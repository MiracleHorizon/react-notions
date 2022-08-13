import React, { CSSProperties, memo, useRef } from 'react'

import useActions from 'hooks/useActions'
import useImageOnLoad from 'hooks/useImageOnLoad'
import PropTypes from './PageIcon.types'
import * as Icon from './PageIcon.styles'

const PageIcon = memo(({ _id, iconUrl, coverUrl, template }: PropTypes) => {
  const ref = useRef<HTMLDivElement>(null)
  // const { handleImageOnLoad, css } = useImageOnLoad()
  const { openChangeIconModal } = useActions()

  const handleOpenIconModal = () => {
    openChangeIconModal({
      invokerRect: ref.current?.getBoundingClientRect().toJSON(),
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
        // onLoad={handleImageOnLoad}
        // style={{ ...(css.loadOpacity as CSSProperties) }}
      />
    </Icon.Container>
  )
})

export default PageIcon
