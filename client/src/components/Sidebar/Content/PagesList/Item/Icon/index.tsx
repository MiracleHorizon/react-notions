import React, { FC, useRef, MouseEvent, memo, useCallback } from 'react'
import { useHover } from 'usehooks-ts'

import SmallPageIcon from 'components/ui/SmallPageIcon - Checked'
import { ChangeIconTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import IPage from 'models/page/IPage'
import Container from './PageItemIcon.styles'

const PageItemIcon: FC<IPage> = memo(
  ({ _id, iconUrl, coverUrl, content, locked }) => {
    const { openChangeIconModal } = useActions()
    const ref = useRef<HTMLDivElement>(null)
    const isHovering = useHover(ref)

    const handleOpenIconModal = useCallback(
      (e: MouseEvent) => {
        e.preventDefault()

        const invokerRect = ref.current?.getBoundingClientRect().toJSON()
        openChangeIconModal({ invokerRect, pageId: _id })
      },
      [_id, openChangeIconModal]
    )

    return (
      <Container ref={ref} locked={locked} onClick={handleOpenIconModal}>
        <SmallPageIcon
          iconUrl={iconUrl}
          coverUrl={coverUrl}
          content={content}
        />
        {isHovering && <ChangeIconTooltip reference={ref} />}
      </Container>
    )
  }
)

export default PageItemIcon
