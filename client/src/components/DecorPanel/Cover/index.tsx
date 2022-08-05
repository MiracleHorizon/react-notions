import React, { FC, memo, useRef, useState } from 'react'
import { useHover } from 'usehooks-ts'

import CoverOptionsPanel from './CoverOptions'
import PropTypes from './PageCover.types'
import * as Cover from './PageCover.styles'

// Появление с анимацией.

const PageCover: FC<PropTypes> = memo(
  ({ _id, template, coverUrl, coverPosition }) => {
    const [isRepositionEnabled, setReposition] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    return (
      <Cover.Wrapper
        ref={ref}
        template={template}
        isRepositionEnabled={isRepositionEnabled}
      >
        <Cover.Image src={coverUrl} imagePosition={coverPosition} />
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
