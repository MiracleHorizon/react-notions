import React, { useRef } from 'react'
import { useHover } from 'usehooks-ts'

import OptionItem from 'components/ui/options/OptionItem'
import { QuickSearchTooltip, AppSettingsTooltip } from 'components/ui/tooltips'
import { LoupeSvg, GearSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import * as Panel from './AppOptionsPanel.styles'

const AppOptionsPanel = () => {
  const { openQuickSearchModal, openAppSettingsModal } = useActions()
  const quickSearchOptionRef = useRef<HTMLDivElement>(null)
  const isQuickSearchOptionHovering = useHover(quickSearchOptionRef)

  const appSettingsOptionRef = useRef<HTMLDivElement>(null)
  const isAppSettingsOptionHovering = useHover(appSettingsOptionRef)

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
        <QuickSearchTooltip reference={quickSearchOptionRef} />
      )}
      {isAppSettingsOptionHovering && (
        <AppSettingsTooltip reference={appSettingsOptionRef} />
      )}
    </Panel.Wrapper>
  )
}

export default AppOptionsPanel
