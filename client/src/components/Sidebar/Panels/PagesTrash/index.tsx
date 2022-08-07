import React, { memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import OptionItem from 'components/ui/options/OptionItem'
import { PagesTrashTooltip } from 'components/ui/tooltips'
import { TrashSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import Container from './PagesTrashPanel.styles'

const PagesTrashPanel = memo(() => {
  const { openPagesTrashModal } = useActions()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenPagesTrash = () => openPagesTrashModal()

  return (
    <Container>
      <OptionItem
        title='Trash'
        reference={ref}
        StartSvg={TrashSvg}
        onClickAction={handleOpenPagesTrash}
      />
      {isHovering && <PagesTrashTooltip reference={ref} />}
    </Container>
  )
})

export default PagesTrashPanel
