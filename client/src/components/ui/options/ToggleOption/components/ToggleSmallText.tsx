import React, { FC } from 'react'

import ToggleOptionButton from 'components/ui/buttons/ToggleOption'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { ToggleSmallTextProps } from '../ToggleOption.types'
import * as Option from '../ToggleOption.styles'

const ToggleSmallTextOption: FC<ToggleSmallTextProps> = ({
  _id,
  smallText,
}) => {
  const { updatePageSettingsModalState } = useActions()
  const [updatePage] = useUpdatePageMutation()

  const handleToggleSmallText = async () => {
    const body = { smallText: !smallText }
    await updatePage({ _id, body })
    updatePageSettingsModalState(body)
  }

  return (
    <Option.Container onClick={handleToggleSmallText}>
      <Option.Title>Small text</Option.Title>
      <ToggleOptionButton isActive={smallText} />
    </Option.Container>
  )
}

export default ToggleSmallTextOption
