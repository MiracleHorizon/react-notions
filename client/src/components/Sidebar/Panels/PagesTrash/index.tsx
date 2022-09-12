import React, { memo } from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import FilledTooltip from 'components/ui/tooltips/Filled'
import { TrashSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import Container from './PagesTrashPanel.styles'

const PagesTrashPanel = memo(() => {
  const { openPagesTrashModal } = useActions()
  const { ref, isHovering } = useDebounceHovering()

  const handleOpenPagesTrashModal = () => openPagesTrashModal()

  return (
    <Container>
      <OptionItem
        title='Trash'
        reference={ref}
        StartSvg={TrashSvg}
        onClickAction={handleOpenPagesTrashModal}
      />
      {isHovering && (
        <FilledTooltip
          title='Restore deleted pages.'
          pos={ModalPosition.RIGHT_CENTER}
          invokerRef={ref}
        />
      )}
    </Container>
  )
})

export default PagesTrashPanel
