import React, { memo } from 'react'
import { useNavigate } from 'react-router'

import FilledTooltip from 'components/ui/tooltips/Filled'
import { OpenFullPageSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import Container from './OpenFullPageButton.styles'

const OpenFullPageButton = memo(({ _id }: { _id: string }) => {
  const { closeNotionTaskModal } = useActions()
  const { ref, isHovering } = useDebounceHovering()
  const navigate = useNavigate()

  const handleOpenFullPage = () => {
    navigate(`/workspace/${_id}`)
    closeNotionTaskModal()
  }

  return (
    <Container
      ref={ref}
      role='button'
      data-btn='open-full-page'
      onClick={handleOpenFullPage}
    >
      <OpenFullPageSvg />
      {isHovering && (
        <FilledTooltip
          title='Open in full page'
          desc='Ctrl+↵'
          pos={ModalPosition.CENTER_TOP}
          invokerRef={ref}
        />
      )}
    </Container>
  )
})

export default OpenFullPageButton
