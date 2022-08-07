import React, { FC } from 'react'

import {
  ToggleSmallTextOption,
  ToggleFullWidthOption,
} from 'components/ui/options/ToggleOption'
import Divider from 'components/ui/Divider'
import IPage from 'models/page/IPage'

const ToggleOptionsList: FC<IPage> = ({ _id, smallText, fullWidth }) => (
  <>
    <Divider />
    <ToggleSmallTextOption _id={_id} smallText={smallText} />
    <ToggleFullWidthOption _id={_id} fullWidth={fullWidth} />
    <Divider />
  </>
)

export default ToggleOptionsList
