import React, { FC } from 'react'

import ToggleOptionButton from 'components/ui/buttons/ToggleOption'
import { ToggleSmallTextProps } from '../ToggleOption.types'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Option from '../ToggleOption.styles'

const ToggleSmallTextOption: FC<ToggleSmallTextProps> = ({
  _id,
  smallText,
}) => {
  const [updatePage] = useUpdatePageMutation()

  const handleToggleSmallText = () => {
    updatePage({ _id, body: { smallText: !smallText } })
  }

  return (
    <Option.Container onClick={handleToggleSmallText}>
      <Option.Title>Small text</Option.Title>
      <ToggleOptionButton isActive={smallText} />
    </Option.Container>
  )
}

export default ToggleSmallTextOption
