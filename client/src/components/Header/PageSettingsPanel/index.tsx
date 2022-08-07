import React, { FC, memo, useRef } from 'react'

import ToggleFavoriteButton from 'components/ui/buttons/ToggleFavorite'
import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import IPage from 'models/page/IPage'
import Container from './PageSettingsPanel.styles'

const PageSettingsPanel: FC<IPage> = memo(page => {
  const { openPageSettingsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenPageSettingsModal = () => {
    openPageSettingsModal({
      invokerRect: ref.current?.getBoundingClientRect().toJSON(),
      page,
    })
  }

  return (
    <Container ref={ref} data-el='sgs-panel'>
      <ToggleFavoriteButton {...page} />
      <OptionsButton
        size='large'
        type='primary'
        onClickAction={handleOpenPageSettingsModal}
      />
    </Container>
  )
})

export default PageSettingsPanel
