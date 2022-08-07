import React, { FC, useRef } from 'react'
import { useCopyToClipboard, useHover } from 'usehooks-ts'

import { CopySvg } from 'components/ui/svg'
import { ClipboardCopyTooltip } from 'components/ui/tooltips'
import Container from './ClipboardCopyButton.styles'

const ClipboardCopyButton: FC<{ value: string }> = ({ value }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)
  const [, handleCopy] = useCopyToClipboard()

  return (
    <Container
      ref={ref}
      role='button'
      data-btn='copy'
      onClick={() => handleCopy(value)}
    >
      <CopySvg />
      {isHovering && <ClipboardCopyTooltip reference={ref} />}
    </Container>
  )
}

export default ClipboardCopyButton
