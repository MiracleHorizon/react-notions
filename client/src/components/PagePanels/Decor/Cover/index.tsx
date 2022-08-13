import React, { FC, memo, useRef, useState, MouseEvent } from 'react'
import { useHover } from 'usehooks-ts'

import CoverOptionsPanel from './CoverOptions'
import { DragCoverPositionTooltip } from 'components/ui/tooltips'
import PropTypes from './PageCover.types'
import * as Cover from './PageCover.styles'

const PageCover: FC<PropTypes> = memo(
  ({ _id, template, coverUrl, coverPosition, fullWidth }) => {
    const [isRepositionEnabled, setRepositionEnabled] = useState<boolean>(false)
    const [reposition, setStartReposition] = useState<boolean>(false)
    const [covPosition, setCoverPosition] = useState<number>(coverPosition)
    const imgRef = useRef<HTMLImageElement>(null)
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const startPos = useRef<number>(0)
    const endPos = useRef<number>(0)

    const handleMouseDown = (e: MouseEvent) => {
      if (!isRepositionEnabled) return

      setStartReposition(true)
      startPos.current = e.clientY
    }

    const handleMouseMove = (e: MouseEvent) => {
      const coverRect = ref.current?.getBoundingClientRect()
      if (!isRepositionEnabled || !reposition || !coverRect) return

      if (e.clientY >= coverRect.bottom || e.clientY <= coverRect.top) {
        setStartReposition(false)
      }

      // console.log(covPosition + (startPos.current - e.clientY) / 10)
      if (covPosition < 0) setCoverPosition(0)
      if (covPosition > 100) setCoverPosition(100)

      // if (covPosition >= 0 && covPosition <= 100) {
      //   setCoverPosition(covPosition + (startPos.current - e.clientY) / 10)
      // }
    }

    const handleMouseUp = (e: MouseEvent) => {
      if (!isRepositionEnabled) return

      setStartReposition(false)
      endPos.current = e.clientY
    }

    return (
      <Cover.Wrapper
        data-el='cover'
        ref={ref}
        template={template}
        isRepositionEnabled={isRepositionEnabled}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <Cover.Image
          src={coverUrl}
          ref={imgRef}
          draggable
          imagePosition={covPosition}
        />
        <CoverOptionsPanel
          _id={_id}
          fullWidth={fullWidth}
          isHovering={isHovering}
          isRepositionEnabled={isRepositionEnabled}
          setReposition={setRepositionEnabled}
          position={covPosition}
        />
        {isRepositionEnabled && <DragCoverPositionTooltip />}
      </Cover.Wrapper>
    )
  }
)

export default PageCover
