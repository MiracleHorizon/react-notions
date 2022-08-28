import React, { FC, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { UndoSvg } from 'components/ui/svg'
import { RestorePageTooltip } from 'components/ui/tooltips'
import { useRestorePageMutation } from 'services/notions.api'
import Container from './RestorePageButton.styles'

const RestorePageButton: FC<{ _id: string }> = ({ _id }) => {
  const [restorePage] = useRestorePageMutation()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleRestorePage = () => restorePage(_id)

  return (
    <Container ref={ref} role='button' data-btn='restore' onClick={handleRestorePage}>
      <UndoSvg />
      {isHovering && <RestorePageTooltip reference={ref} />}
    </Container>
  )
}

export default RestorePageButton
