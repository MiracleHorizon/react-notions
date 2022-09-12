import React, { FC, memo, MouseEvent } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { PageLinkIndicatorSvg, PageSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import handleImageUrl from 'utils/helpers/handleImageUrl'
import * as Icon from './NotionPageLinkItemIcon.styles'

const NotionPageLinkItemIcon: FC<{
  _id: string
  iconUrl: string | null
}> = memo(({ _id, iconUrl }) => {
  const { openChangeIconModal } = useActions()
  const { ref, isHovering } = useDebounceHovering(200)

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
      {isHovering && (
        <FilledTooltip
          title='Change icon'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={ref}
        />
      )}
    </Icon.IconWrapper>
  )
})

export default NotionPageLinkItemIcon
