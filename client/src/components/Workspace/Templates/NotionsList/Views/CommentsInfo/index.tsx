import React, { FC, memo } from 'react'
import { SpeechBubbleSvg } from 'components/ui/svg'
import * as Comments from './CommentsInfo.styles'

const CommentsInfo: FC<{ count: number; padding?: boolean }> = memo(
  ({ count, padding }) => (
    <Comments.Container padding={padding}>
      <SpeechBubbleSvg />
      <Comments.Count>{count}</Comments.Count>
    </Comments.Container>
  )
)

export default CommentsInfo
