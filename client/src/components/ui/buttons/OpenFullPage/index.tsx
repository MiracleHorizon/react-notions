import React, { memo, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useHover } from 'usehooks-ts'

import { OpenFullPageSvg } from 'components/ui/svg'
import { OpenFullPageTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Container from './OpenFullPageButton.styles'

const OpenFullPageButton = memo(({ _id }: { _id: string }) => {
  const { closeNotionTaskModal } = useActions()
  const navigate = useNavigate()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

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
      {isHovering && <OpenFullPageTooltip reference={ref} />}
    </Container>
  )
})

export default OpenFullPageButton
