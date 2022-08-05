import React, { FC } from 'react'
import * as Avatar from './EmptyUserAvatar.styles'

const EmptyUserAvatar: FC<{ firstChar: string }> = ({ firstChar }) => (
  <Avatar.Container>
    <Avatar.Title>{firstChar}</Avatar.Title>
  </Avatar.Container>
)

export default EmptyUserAvatar
