import React, { FC, useCallback } from 'react'

import PageDecorButton from '../index'
import { NotionsDescriptionSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'services/notions.api'
import { ToggleDescriptionButtonProps } from '../PageDecorButton.types'

const ToggleDescriptionButton: FC<ToggleDescriptionButtonProps> = ({
  _id,
  description,
  descriptionExpanded,
}) => {
  const [updatePage] = useUpdatePageMutation()

  const handleToggleDescription = useCallback(() => {
    updatePage({ _id, body: { descriptionExpanded: !descriptionExpanded } })
  }, [_id, descriptionExpanded, updatePage])

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
