import React, { useRef, MouseEvent, FC } from 'react'
import { useHover } from 'usehooks-ts'

import { PageOptionsTooltip } from 'components/ui/tooltips'
import { DotsSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import setCoordsByPointer from 'utils/helpers/setCoordsByPointer'
import IPage from 'models/page/IPage'
import Container from './PageItemOptionsButton.styles'

const PageItemOptionsButton: FC<IPage> = page => {
  const { openPageOptionsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenOptionsModal = (e: MouseEvent) => {
    e.preventDefault()
    openPageOptionsModal({ coords: setCoordsByPointer(e), page })
  }

  return (
    <Container
      ref={ref}
      role='button'
      onClick={handleOpenOptionsModal}
      onContextMenu={handleOpenOptionsModal}
    >
      <DotsSvg />
      {isHovering && <PageOptionsTooltip reference={ref} />}
    </Container>
  )
}

export default PageItemOptionsButton
