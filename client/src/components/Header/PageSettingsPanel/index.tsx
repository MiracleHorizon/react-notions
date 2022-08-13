import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import ToggleFavoriteButton from 'components/ui/buttons/ToggleFavorite'
import OptionsButton from 'components/ui/buttons/Options'
import { PageSettingsTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import IPage from 'models/page/IPage'
import Container from './PageSettingsPanel.styles'

const PageSettingsPanel: FC<IPage> = memo(page => {
  const { openPageSettingsModal } = useActions()
  const optionsBtnRef = useRef<HTMLDivElement>(null)
  const isOptionsButtonHovering = useHover(optionsBtnRef)

  const handleOpenPageSettingsModal = () => {
    const invokerRect = optionsBtnRef.current?.getBoundingClientRect().toJSON()
    openPageSettingsModal({ invokerRect, page })
  }

  return (
    <Container data-el='sgs-panel'>
      <ToggleFavoriteButton {...page} />
      <OptionsButton
        size='large'
        type='primary'
        reference={optionsBtnRef}
        onClickAction={handleOpenPageSettingsModal}
      />
      {isOptionsButtonHovering && (
        <PageSettingsTooltip reference={optionsBtnRef} />
      )}
    </Container>
  )
})

export default PageSettingsPanel
