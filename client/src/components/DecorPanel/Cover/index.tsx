import React, { CSSProperties, FC, memo, useRef, useState } from 'react'
import { useHover } from 'usehooks-ts'

import CoverOptionsPanel from './CoverOptions'
import useImageOnLoad from 'hooks/useImageOnLoad'
import PropTypes from './PageCover.types'
import * as Cover from './PageCover.styles'

const PageCover: FC<PropTypes> = memo(
  ({ _id, template, coverUrl, coverPosition }) => {
    const [isRepositionEnabled, setReposition] = useState<boolean>(false)
    const { handleImageOnLoad, css } = useImageOnLoad()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    return (
      <Cover.Wrapper
        data-el='cover'
        ref={ref}
        template={template}
        isRepositionEnabled={isRepositionEnabled}
      >
        <Cover.Image
          src={coverUrl}
          imagePosition={coverPosition}
          style={{ ...(css.loadOpacity as CSSProperties) }}
          onLoad={handleImageOnLoad}
        />
        <CoverOptionsPanel
          _id={_id}
          isHovering={isHovering}
          isRepositionEnabled={isRepositionEnabled}
          setReposition={setReposition}
        />
      </Cover.Wrapper>
    )
  }
)

export default PageCover
