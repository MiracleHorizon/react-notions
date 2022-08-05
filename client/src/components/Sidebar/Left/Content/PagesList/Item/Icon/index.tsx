import React, { FC, useRef, MouseEvent } from 'react'
import { useHover } from 'usehooks-ts'

import { ChangeIconTooltip } from 'components/ui/tooltips'
import { EmptyPageSvg, PageSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import { IPage } from 'models/page/IPage'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import * as Icon from './PageItemIcon.styles'

const PageItemIcon: FC<IPage> = ({ _id, iconUrl, content }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)
  const { openChangeIconModal } = useActions()

  const handleOpenIconModal = (e: MouseEvent) => {
    e.preventDefault()
    openChangeIconModal({
      coords: modalsCoordsHandler.icon(ref),
      pageId: _id,
    })
  }

  return (
    <Icon.Container ref={ref} onClick={handleOpenIconModal}>
      {iconUrl ? (
        <Icon.Image src={iconUrl} />
      ) : content.length === 0 ? (
        <EmptyPageSvg />
      ) : (
        <PageSvg />
      )}
      {isHovering && <ChangeIconTooltip reference={ref} />}
    </Icon.Container>
  )
}

export default PageItemIcon
