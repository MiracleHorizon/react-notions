import React, { FC, useRef } from 'react'
import { useCopyToClipboard, useHover } from 'usehooks-ts'

import { CopySvg } from 'components/ui/svg'
import { ClipboardCopyTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import Button from './ClipboardCopyButton.styles'

const ClipboardCopyButton: FC<{ value: string }> = ({ value }) => {
  const { showClipboardCopyTooltip } = useActions()
  const { isActive } = useTypedSelector(s => s.alerts.clipboardCopyTooltip)
  const [, copyTrigger] = useCopyToClipboard()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleCopy = () => {
    copyTrigger(value).then(() => {
      if (!isActive) showClipboardCopyTooltip()
    })
  }

  return (
    <Button ref={ref} role='button' data-btn='copy' onClick={handleCopy}>
      <CopySvg />
      {isHovering && <ClipboardCopyTooltip reference={ref} />}
    </Button>
  )
}

export default ClipboardCopyButton
