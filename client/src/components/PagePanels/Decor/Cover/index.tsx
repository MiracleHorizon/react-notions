import React, { FC, useRef, useState } from 'react'
import { useHover } from 'usehooks-ts'

import CoverOptionsPanel from './CoverOptions - Checked'
import { DragCoverPositionTooltip } from 'components/ui/tooltips'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import PropTypes from './PageCover.types'
import * as Cover from './PageCover.styles'

const PageCover: FC<PropTypes> = ({
  _id,
  template,
  coverUrl,
  coverPosition,
  fullWidth,
  locked,
}) => {
  const [isRepositionEnabled, setRepositionEnabled] = useState<boolean>(false)
  const imgRef = useRef<HTMLImageElement>(null)
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
        draggable
        ref={imgRef}
        src={handleImageUrl(coverUrl)}
        imagePosition={coverPosition}
        alt='cover'
      />
      {!locked && (
        <CoverOptionsPanel
          _id={_id}
          fullWidth={fullWidth}
          isHovering={isHovering}
          isRepositionEnabled={isRepositionEnabled}
          setReposition={setRepositionEnabled}
          position={coverPosition}
        />
      )}
      {isRepositionEnabled && <DragCoverPositionTooltip />}
    </Cover.Wrapper>
  )
}

export default PageCover
