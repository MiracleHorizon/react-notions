import React, { FC } from 'react'

import PageDecorButton from '../index'
import { CoverSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'
import GetRandom from 'utils/GetRandom'

const AddCoverButton: FC<{ _id: string }> = ({ _id }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleAddPageCover = () => {
    updatePage({ _id, body: { coverUrl: GetRandom.cover() } })
  }

  return (
    <PageDecorButton
      title='Add cover'
      StartSvg={CoverSvg}
      onClickAction={handleAddPageCover}
    />
  )
}

export default AddCoverButton
