import React, { FC, MouseEvent, memo, useCallback } from 'react'

import SmallPageIcon from 'components/ui/SmallPageIcon'
import FilledTooltip from 'components/ui/tooltips/Filled'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import IPage from 'models/page/IPage'
import Container from './PageItemIcon.styles'

const PageItemIcon: FC<IPage> = memo(
  ({ _id, iconUrl, coverUrl, content, locked }) => {
    const { openChangeIconModal } = useActions()
    const { ref, isHovering } = useDebounceHovering(200)

    const handleOpenIconModal = useCallback(
      (e: MouseEvent) => {
        e.preventDefault()

        const invokerRect = ref.current?.getBoundingClientRect().toJSON()
        openChangeIconModal({ invokerRect, pageId: _id })
      },
      [_id, ref, openChangeIconModal]
    )

    return (
      <Container ref={ref} locked={locked} onClick={handleOpenIconModal}>
        <SmallPageIcon
          iconUrl={iconUrl}
          coverUrl={coverUrl}
          content={content}
        />
        {isHovering && (
          <FilledTooltip
            title='Change icon'
            pos={ModalPosition.CENTER_BOTTOM}
            invokerRef={ref}
          />
        )}
      </Container>
    )
  }
)

export default PageItemIcon
