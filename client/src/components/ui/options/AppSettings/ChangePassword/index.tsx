import React from 'react'

import Divider from 'components/ui/Divider'
import ChangePasswordButton from 'components/ui/buttons/ChangePassword'
import * as Option from './ChangePasswordOption.styles'

const ChangePasswordOption = () => (
  <>
    <Divider />
    <Option.Wrapper>
      <Option.Container>
        <Option.Title>Password</Option.Title>
        <Option.Description>
          You can change your password here.
        </Option.Description>
      </Option.Container>
      <ChangePasswordButton />
    </Option.Wrapper>
  </>
)

export default ChangePasswordOption
