import React, { FC, memo } from 'react'

import ModalTitle from 'components/ui/modals/ModalTitle'
import SwitchFontButton from 'components/ui/buttons/SwitchFont'
import { PAGE_FONTS } from 'utils/constants/app'
import IPage from 'models/page/IPage'
import * as Panel from './SwitchFontPanel.styles'

const SwitchFontPanel: FC<IPage> = memo(({ _id, font }) => (
  <Panel.Container>
    <ModalTitle upCase title='Style' />
    <Panel.List>
      {PAGE_FONTS.map(fontFamily => (
        <SwitchFontButton
          key={fontFamily}
          _id={_id}
          fontFamily={fontFamily}
          isSelected={fontFamily === font}
        />
      ))}
    </Panel.List>
  </Panel.Container>
))

export default SwitchFontPanel
