import React, { memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { NoStatusListTooltip } from 'components/ui/tooltips'
import { InboxSvg } from 'components/ui/svg'
import * as Title from './NoStatusTasksList.styles'

const NoStatusTasksListTitle = memo(() => {
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  return (
    <Title.Container ref={ref}>
      <InboxSvg />
      <Title.Text>No status</Title.Text>
      {/*{isHovering && <NoStatusListTooltip reference={ref} />}*/}
    </Title.Container>
  )
})

export default NoStatusTasksListTitle
