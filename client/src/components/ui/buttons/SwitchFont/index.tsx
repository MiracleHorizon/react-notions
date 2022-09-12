import React, { FC, memo } from 'react'

import useActions from 'hooks/useActions'
import FilledTooltip from 'components/ui/tooltips/Filled'
import useDebounceHovering from 'hooks/useDebounceHovering'
import { useUpdatePageMutation } from 'services/notions.api'
import { ModalPosition } from 'hooks/useSetModalPosition'
import { TPageFont } from 'models/decor/fonts'
import PropTypes from './SwitchFontButton.types'
import handleFontTooltipTitle from 'utils/helpers/handleFontTooltipTitle'
import * as Button from './SwitchFontButton.styles'

const SwitchFontButton: FC<PropTypes> = memo(({ _id, ...font }) => {
  const { updatePageSettingsModalState } = useActions()
  const { ref, isHovering } = useDebounceHovering(200)
  const [updatePage] = useUpdatePageMutation()

  const handleSwitchFont = () => {
    const body = { font: font.fontFamily as TPageFont }
    updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  return (
    <Button.Wrapper
      ref={ref}
      role='button'
      data-btn='switch-font'
      onClick={handleSwitchFont}
    >
      <Button.Container>
        <Button.Abbreviation {...font}>Ag</Button.Abbreviation>
        <Button.Title>{font.fontFamily}</Button.Title>
        {isHovering && (
          <FilledTooltip
            title={handleFontTooltipTitle(font.fontFamily as TPageFont)}
            pos={ModalPosition.CENTER_BOTTOM}
            invokerRef={ref}
          />
        )}
      </Button.Container>
    </Button.Wrapper>
  )
})

export default SwitchFontButton
