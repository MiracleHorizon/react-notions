import React, { FC } from 'react'

import ToggleOptionButton from 'components/ui/buttons/ToggleOption'
import { ToggleFullWidthProps } from '../ToggleOption.types'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import * as Option from '../ToggleOption.styles'

const ToggleFullWidthOption: FC<ToggleFullWidthProps> = ({
  _id,
  fullWidth,
}) => {
  const [updatePage] = useUpdatePageMutation()

  const handleToggleFullWidth = async () => {
    await updatePage({ _id, body: { fullWidth: !fullWidth } })
  }

  return (
    <Option.Container onClick={handleToggleFullWidth}>
      <Option.Title>Full width</Option.Title>
      <ToggleOptionButton isActive={fullWidth} />
    </Option.Container>
  )
}

export default ToggleFullWidthOption
