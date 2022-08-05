import React, { memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import OptionItem from 'components/ui/options/OptionItem'
import { QuickSearchTooltip, AppSettingsTooltip } from 'components/ui/tooltips'
import { LoupeSvg, GearSvg } from 'components/ui/svg'
import useActions from 'hooks/useActions'
import * as Panel from './AppOptionsPanel.styles'

const AppOptionsPanel = memo(() => {
  const { openQuickSearchModal, openAppSettingsModal } = useActions()

  const quickSearchRef = useRef<HTMLDivElement>(null)
  const isQuickSearchHovering = useHover(quickSearchRef)

  const appSettingsRef = useRef<HTMLDivElement>(null)
  const isAppSettingsHovering = useHover(appSettingsRef)

  const handleOpenQuickSearchModal = () => openQuickSearchModal()

  const handleOpenAppSettingsModal = () => openAppSettingsModal()

  return (
    <Panel.Wrapper>
      <Panel.Container>
        <OptionItem
          StartSvg={LoupeSvg}
          title='Quick Search'
          reference={quickSearchRef}
          onClickAction={handleOpenQuickSearchModal}
        />
        <OptionItem
          StartSvg={GearSvg}
          title='Settings & Themes'
          reference={appSettingsRef}
          onClickAction={handleOpenAppSettingsModal}
        />
      </Panel.Container>
      {isQuickSearchHovering && (
        <QuickSearchTooltip reference={quickSearchRef} />
      )}
      {isAppSettingsHovering && (
        <AppSettingsTooltip reference={appSettingsRef} />
      )}
    </Panel.Wrapper>
  )
})

export default AppOptionsPanel
