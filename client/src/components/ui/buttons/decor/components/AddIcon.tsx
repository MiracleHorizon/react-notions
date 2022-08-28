import React, { FC, useCallback } from 'react'

import PageDecorButton from 'components/ui/buttons/decor/index'
import { SmileySvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'services/notions.api'
import GetRandom from 'utils/GetRandom'

const AddIconButton: FC<{ _id: string }> = ({ _id }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleAddPageIcon = useCallback(() => {
    updatePage({ _id, body: { iconUrl: GetRandom.icon() } })
  }, [_id, updatePage])

  return (
    <PageDecorButton
      title='Add icon'
      StartSvg={SmileySvg}
      onClickAction={handleAddPageIcon}
    />
  )
}

export default AddIconButton
