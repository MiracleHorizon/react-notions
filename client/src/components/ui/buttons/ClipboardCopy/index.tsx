import React, { FC } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { CopySvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import Button from './ClipboardCopyButton.styles'

const ClipboardCopyButton: FC<{ value: string }> = ({ value }) => {
  const { showClipboardCopyTooltip } = useActions()
  const { ref, isHovering } = useDebounceHovering()
  const { isActive } = useTypedSelector(s => s.alerts.clipboardCopyTooltip)
  const [, copyTrigger] = useCopyToClipboard()

  const handleCopy = () => {
    copyTrigger(value).then(() => {
      if (!isActive) {
        showClipboardCopyTooltip({ kind: 'property' })
      }
    })
  }

  return (
    <Button ref={ref} role='button' data-btn='copy' onClick={handleCopy}>
      <CopySvg />
      {isHovering && (
        <FilledTooltip
          title='Copy to clipboard'
          pos={ModalPosition.CENTER_TOP}
          invokerRef={ref}
        />
      )}
    </Button>
  )
}

export default ClipboardCopyButton
