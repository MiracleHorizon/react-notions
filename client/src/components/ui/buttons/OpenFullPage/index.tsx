import React, { FC, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useHover } from 'usehooks-ts'

import { OpenFullPageSvg } from 'components/ui/svg'
import { OpenFullPageTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import Container from './OpenFullPageButton.styles'

const OpenFullPageButton: FC<{ _id: string }> = ({ _id }) => {
  const { closeNotionTaskModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)
  const navigate = useNavigate()

  const handleOpenFullPage = () => {
    navigate(`/workspace/${_id}`)
    closeNotionTaskModal()
  }

  return (
    <Container role='button' ref={ref} onClick={handleOpenFullPage}>
      <OpenFullPageSvg />
      {isHovering && <OpenFullPageTooltip reference={ref} />}
    </Container>
  )
}

export default OpenFullPageButton
