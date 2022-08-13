import React, { FC } from 'react'

import ToggleOptionButton from 'components/ui/buttons/ToggleOption'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { ToggleFullWidthProps } from '../ToggleOption.types'
import * as Option from '../ToggleOption.styles'

const ToggleFullWidthOption: FC<ToggleFullWidthProps> = ({
  _id,
  fullWidth,
}) => {
  const { updatePageSettingsModalState } = useActions()
  const [updatePage] = useUpdatePageMutation()

  const handleToggleFullWidth = async () => {
    const body = { fullWidth: !fullWidth }
    await updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  return (
    <Option.Container onClick={handleToggleFullWidth}>
      <Option.Title>Full width</Option.Title>
      <ToggleOptionButton isActive={fullWidth} />
    </Option.Container>
  )
}

export default ToggleFullWidthOption
