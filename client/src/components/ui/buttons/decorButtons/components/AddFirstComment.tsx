import React, { FC } from 'react'

import PageDecorButton from '../index'
import { CommentSvg } from 'components/ui/svg'
import { useUpdatePageMutation } from 'store/slices/pages/pages.api'

const AddFirstCommentButton: FC<{ _id: string }> = ({ _id }) => {
  const [updatePage] = useUpdatePageMutation()

  const handleAddFirstComment = () => {
    updatePage({ _id, body: { comments: [] } })
  }

  return (
    <PageDecorButton
      title='Add comment'
      StartSvg={CommentSvg}
      onClickAction={handleAddFirstComment}
    />
  )
}

export default AddFirstCommentButton
