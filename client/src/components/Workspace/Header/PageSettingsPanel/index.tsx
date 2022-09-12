import React, { FC, memo,  } from 'react'

import ToggleFavoriteButton from 'components/ui/buttons/ToggleFavorite'
import OptionsButton from 'components/ui/buttons/Options'
import FilledTooltip from 'components/ui/tooltips/Filled'
import useActions from 'hooks/useActions'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { ModalPosition } from 'hooks/useSetModalPosition'
import IPage from 'models/page/IPage'
import Container from './PageSettingsPanel.styles'

const PageSettingsPanel: FC<IPage> = memo(page => {
  const { openPageSettingsModal } = useActions()
  const {
    ref: optionsButtonRef,
    isHovering: isOptionsButtonHovering
  } = useDebounceHovering()

  const handleOpenPageSettingsModal = () => {
    const invokerRect = optionsButtonRef.current
      ?.getBoundingClientRect()
      .toJSON()
    openPageSettingsModal({ invokerRect, page })
  }

  return (
    <Container data-el='settings-panel'>
      <ToggleFavoriteButton {...page} />
      <OptionsButton
        size='large'
        type='primary'
        isHovering={true}
        reference={optionsButtonRef}
        onClickAction={handleOpenPageSettingsModal}
      />
      {isOptionsButtonHovering && (
        <FilledTooltip
          title='Styles, delete, and more...'
          pos={ModalPosition.CENTER_BOTTOM}
          invokerRef={optionsButtonRef}
        />
      )}
    </Container>
  )
})

export default PageSettingsPanel
