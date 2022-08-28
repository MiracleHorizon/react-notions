import React from 'react'
import { useSelector } from 'react-redux'

import { selectUser } from 'store/slices/user/auth.selectors'
import * as Option from './ChangeEmailOption.styles'
import ChangeEmailButton from '../../../buttons/ChangeEmail'

const ChangeEmailOption = () => (
  <Option.Wrapper>
    <Option.Title>Email</Option.Title>
    <Option.Container>
      <Option.Email>{useSelector(selectUser).email}</Option.Email>
      <ChangeEmailButton/>
    </Option.Container>
  </Option.Wrapper>
)

export default ChangeEmailOption
