import React, { FC, memo, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import { FontTooltip } from 'components/ui/tooltips'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { TPageFont } from 'models/decor/fonts'
import PropTypes from './SwitchFontButton.types'
import * as Button from './SwitchFontButton.styles'

const SwitchFontButton: FC<PropTypes> = memo(({ _id, ...font }) => {
  const { updatePageSettingsModalState } = useActions()
  const [updatePage, { isSuccess, isError }] = useUpdatePageMutation()

  const ref = useRef<HTMLDivElement>(null)
  const isHovering = useHover(ref)

  const handleSwitchFont = () => {
    const body = { font: font.fontFamily as TPageFont }
    updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  return (
    <Button.Wrapper role='button' ref={ref} onClick={handleSwitchFont}>
      <Button.Container>
        <Button.Abbreviation {...font}>Ag</Button.Abbreviation>
        <Button.Title>{font.fontFamily}</Button.Title>
        {isHovering && (
          <FontTooltip reference={ref} font={font.fontFamily as TPageFont} />
        )}
      </Button.Container>
    </Button.Wrapper>
  )
})

export default SwitchFontButton
