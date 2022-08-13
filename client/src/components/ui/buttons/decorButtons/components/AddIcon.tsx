import React, { FC } from 'react'

import PageDecorButton from 'components/ui/buttons/decorButtons'
import { SmileySvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import GetRandom from 'utils/GetRandom'

const AddIconButton: FC<{ _id: string }> = ({ _id }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleAddPageIcon = () =>
    updatePage({ _id, body: { iconUrl: GetRandom.icon() } })

  return (
    <PageDecorButton
      title='Add icon'
      StartSvg={SmileySvg}
      onClickAction={handleAddPageIcon}
    />
  )
}

export default AddIconButton
