import React, { FC, memo } from 'react'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { InboxSvg } from 'components/ui/svg'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import * as Title from './NoStatusTasksList.styles'

const NoStatusTasksListTitle: FC<{ hidden: boolean }> = memo(({ hidden }) => {
  const { ref, isHovering } = useDebounceHovering(150)

  return (
    <Title.Container ref={ref}>
      <InboxSvg />
      <Title.Text>No status</Title.Text>
      {isHovering && !hidden && (
        <FilledTooltip
          title='Any items with an empty Status property will go here. This group cannot be removed.'
          pos={ModalPosition.CENTER_TOP}
          invokerRef={ref}
        />
      )}
    </Title.Container>
  )
})

export default NoStatusTasksListTitle
