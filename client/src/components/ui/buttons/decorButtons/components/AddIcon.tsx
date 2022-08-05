import React, { FC } from 'react'

import PageDecorButton from '../index'
import { SmileySvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'

const AddIconButton: FC<{ _id: string }> = ({ _id }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleAddPageIcon = () => updatePage({ _id, body: { iconUrl: '✅' } })

  return (
    <PageDecorButton
      title='Add icon'
      StartSvg={SmileySvg}
      onClickAction={handleAddPageIcon}
    />
  )
}

export default AddIconButton
