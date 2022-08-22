import React, { FC, memo } from 'react'
import * as Avatar from './EmptyUserAvatar.styles'

const EmptyUserAvatar: FC<{ firstChar: string }> = memo(({ firstChar }) => (
  <Avatar.Container data-el='empty-avatar'>
    <Avatar.Title>{firstChar}</Avatar.Title>
  </Avatar.Container>
))

export default EmptyUserAvatar
