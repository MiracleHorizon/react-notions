import React, { FC, MouseEvent, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { PageLinkIndicatorSvg, PageSvg } from 'components/ui/svg'
import { ChangeIconTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import PropTypes from './NotionPageUrlItemIcon.types'
import * as Icon from './NotionPageUrlItemIcon.styles'

const NotionPageUrlItemIcon: FC<PropTypes> = ({ _id, iconUrl }) => {
  const { openChangeIconModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenChangeIconModal = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    openChangeIconModal({
      invokerRect: ref.current?.getBoundingClientRect().toJSON(),
      pageId: _id,
    })
  }

  return (
    <Icon.IconWrapper>
      <Icon.IconContainer ref={ref} onClick={handleOpenChangeIconModal}>
        {iconUrl ? <Icon.Image src={iconUrl} /> : <PageSvg />}
      </Icon.IconContainer>
      <PageLinkIndicatorSvg />
      {isHovering && <ChangeIconTooltip reference={ref} />}
    </Icon.IconWrapper>
  )
}

export default NotionPageUrlItemIcon
