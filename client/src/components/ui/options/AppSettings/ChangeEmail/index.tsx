import React from 'react'
import { useSelector } from 'react-redux'

import { selectUser } from 'store/slices/auth/auth.selectors'
import * as Option from './ChangeEmailOption.styles'

const ChangeEmailOption = () => (
  <Option.Wrapper>
    <Option.Container>
      <Option.Title>Email</Option.Title>
      <Option.Email>{useSelector(selectUser).email}</Option.Email>
    </Option.Container>
  </Option.Wrapper>
)

export default ChangeEmailOption
