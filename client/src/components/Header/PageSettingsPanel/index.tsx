import React, { FC, memo, useRef } from 'react'

import {
  ToggleRightSidebarButton,
  ToggleFavoriteButton,
} from 'components/ui/buttons/HeaderAction'
import OptionsButton from 'components/ui/buttons/Options'
import useActions from 'hooks/useActions'
import { IPage } from 'models/page/IPage'
import { modalsCoordsHandler } from 'utils/coordsHandlers/modals'
import Container from './PageSettingsPanel.styles'

const PageSettingsPanel: FC<IPage> = memo(page => {
  const { openPageSettingsModal } = useActions()
  const ref = useRef<HTMLDivElement>(null)

  const handleOpenPageSettingsModal = () => {
    openPageSettingsModal({
      coords: modalsCoordsHandler.pageSettings(ref),
      page,
    })
  }

  return (
    <Container ref={ref}>
      {page.template === 'Notion' && <ToggleRightSidebarButton />}
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
