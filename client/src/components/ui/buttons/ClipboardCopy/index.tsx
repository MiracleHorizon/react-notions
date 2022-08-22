import React, { FC, useRef } from 'react'
import { useCopyToClipboard, useHover } from 'usehooks-ts'

import { CopySvg } from 'components/ui/svg'
import { ClipboardCopyTooltip } from 'components/ui/tooltips'
import Button from './ClipboardCopyButton.styles'

const ClipboardCopyButton: FC<{ value: string }> = ({ value }) => {
  const [, copyTrigger] = useCopyToClipboard()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleCopy = () => copyTrigger(value)

  return (
    <Button ref={ref} role='button' data-btn='copy' onClick={handleCopy}>
      <CopySvg />
      {isHovering && <ClipboardCopyTooltip reference={ref} />}
    </Button>
  )
}

export default ClipboardCopyButton
