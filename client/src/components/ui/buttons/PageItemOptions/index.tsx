import React, { MouseEvent, FC, memo } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { DotsSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import IPage from 'models/page/IPage'
import Button from './PageItemOptionsButton.styles'

const PageItemOptionsButton: FC<IPage> = memo(page => {
  const { openPageOptionsModal } = useActions()
  const { ref, isHovering } = useDebounceHovering(250)

  const handleOpenOptionsModal = (e: MouseEvent) => {
    e.preventDefault()
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  return (
    <Button
      ref={ref}
      role='button'
      data-btn='page-item-options'
      onClick={handleOpenOptionsModal}
      onContextMenu={handleOpenOptionsModal}
    >
      <DotsSvg />
      {isHovering && (
        <FilledTooltip
          title='Remove, rename, and more...'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={ref}
        />
      )}
    </Button>
  )
})

export default PageItemOptionsButton
