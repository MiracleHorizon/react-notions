import React, { FC, useCallback } from 'react'

import PageDecorButton from '../index'
import { CoverSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'services/notions.api'
import GetRandom from 'utils/GetRandom'

const AddCoverButton: FC<{ _id: string }> = ({ _id }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleAddPageCover = useCallback(() => {
    updatePage({ _id, body: { coverUrl: GetRandom.cover() } })
  }, [_id, updatePage])

  return (
    <PageDecorButton
      title='Add cover'
      StartSvg={CoverSvg}
      onClickAction={handleAddPageCover}
    />
  )
}

export default AddCoverButton
