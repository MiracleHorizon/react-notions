import React, { FC, memo } from 'react'

import ToggleOptionButton from 'components/ui/buttons/ToggleOption'
import useActions from 'hooks/useActions'
import { useUpdatePageMutation } from 'services/pages.api'
import { ToggleSmallTextProps } from '../ToggleOption.types'
import * as Option from '../ToggleOption.styles'

const ToggleSmallTextOption: FC<ToggleSmallTextProps> = memo(
  ({ _id, smallText }) => {
    const { updatePageSettingsModalState } = useActions()
    const [updatePage] = useUpdatePageMutation()

    const handleToggleSmallText = () => {
      const body = { smallText: !smallText }
      updatePage({ _id, body })
      updatePageSettingsModalState(body)
    }

    return (
      <Option.Container onClick={handleToggleSmallText}>
        <Option.Title>Small text</Option.Title>
        <ToggleOptionButton isActive={smallText} />
      </Option.Container>
    )
  }
)

export default ToggleSmallTextOption
