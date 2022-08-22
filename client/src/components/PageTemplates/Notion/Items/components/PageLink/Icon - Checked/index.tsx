import React, { FC, memo, MouseEvent, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { PageLinkIndicatorSvg, PageSvg } from 'components/ui/svg'
import { ChangeIconTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Icon from './NotionPageUrlItemIcon.styles'

const NotionPageLinkItemIcon: FC<{
  _id: string
  iconUrl: string | null
}> = memo(({ _id, iconUrl }) => {
  const { openChangeIconModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleOpenChangeIconModal = (e: MouseEvent) => {
    e.stopPropagation()

    const invokerRect = ref.current?.getBoundingClientRect().toJSON()
    openChangeIconModal({ invokerRect, pageId: _id })
  }

  return (
    <Icon.IconWrapper>
      <Icon.IconContainer ref={ref} onClick={handleOpenChangeIconModal}>
        {iconUrl ? (
          <Icon.Image src={handleImageUrl(iconUrl)} alt='icon' />
        ) : (
          <PageSvg />
        )}
      </Icon.IconContainer>
      <PageLinkIndicatorSvg />
      {isHovering && <ChangeIconTooltip reference={ref} />}
    </Icon.IconWrapper>
  )
})

export default NotionPageLinkItemIcon
