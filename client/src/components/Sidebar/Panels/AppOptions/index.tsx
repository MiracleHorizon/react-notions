import React from 'react'

import OptionItem from 'components/ui/options/OptionItem'
import FilledTooltip from 'components/ui/tooltips/Filled'
import { LoupeSvg, GearSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import * as Panel from './AppOptionsPanel.styles'

const AppOptionsPanel = () => {
  const { openQuickSearchModal, openAppSettingsModal } = useActions()

  const {
    ref: quickSearchOptionRef,
    isHovering: isQuickSearchOptionHovering
  } = useDebounceHovering()
  const {
    ref: appSettingsOptionRef,
    isHovering: isAppSettingsOptionHovering
  } = useDebounceHovering()

  const handleOpenQuickSearchModal = () => openQuickSearchModal()

  const handleOpenAppSettingsModal = () => openAppSettingsModal()

  return (
    <Panel.Wrapper>
      <Panel.Container>
        <OptionItem
          title='Quick Search'
          StartSvg={LoupeSvg}
          reference={quickSearchOptionRef}
          onClickAction={handleOpenQuickSearchModal}
        />
        <OptionItem
          title='Settings & Themes'
          StartSvg={GearSvg}
          reference={appSettingsOptionRef}
          onClickAction={handleOpenAppSettingsModal}
        />
      </Panel.Container>
      {isQuickSearchOptionHovering && (
        <FilledTooltip
          title='Search and quickly jump to a page'
          desc='Ctrl+P'
          pos={ModalPosition.RIGHT_CENTER}
          invokerRef={quickSearchOptionRef}
        />
      )}
      {isAppSettingsOptionHovering && (
        <FilledTooltip
          title='Change theme, avatar, and more...'
          desc='Ctrl+O'
          pos={ModalPosition.RIGHT_CENTER}
          invokerRef={appSettingsOptionRef}
        />
      )}
    </Panel.Wrapper>
  )
}

export default AppOptionsPanel
