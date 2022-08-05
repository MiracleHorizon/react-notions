import React, { FC } from 'react'

import PageDecorButton from '../index'
import { NotionsDescriptionSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import { ToggleDescriptionButtonProps } from '../PageDecorButton.types'

const ToggleDescriptionButton: FC<ToggleDescriptionButtonProps> = ({
  _id,
  description,
  descriptionExpanded,
}) => {
  const [updatePage] = useUpdatePageMutation()

  const handleToggleDescription = () => {
    updatePage({ _id, body: { descriptionExpanded: !descriptionExpanded } })
  }

  return (
    <PageDecorButton
      StartSvg={NotionsDescriptionSvg}
      title={`${
        descriptionExpanded ? 'Hide' : description === '' ? 'Add' : 'Show'
      } description`}
      onClickAction={handleToggleDescription}
    />
  )
}

export default ToggleDescriptionButton
