import React, { FC, useMemo } from 'react'

import ChangePasswordFormLabel from './Label'
import PropTypes, {
  SubmitChangePasswordFormParams,
} from './ChangePasswordForm.types'
import * as Form from './ChangePasswordForm.styles'

const ChangePasswordForm: FC<PropTypes> = ({ onSubmit, ...inputParams }) => {
  const fields = useMemo(
    () => [
      {
        title: 'Old Password',
        placeholder: 'Enter old password...',
        name: 'oldPass',
      },
      {
        title: 'New password',
        placeholder: 'Enter new password...',
        name: 'newPass',
      },
      {
        title: 'Repeat password',
        placeholder: 'Repeat new password...',
        name: 'newPassRepeat',
      },
    ],
    []
  )

  return (
    <Form.Form onSubmit={onSubmit}>
      {fields.map(field => (
        <ChangePasswordFormLabel
          key={field.name}
          isEmpty={
            inputParams.watch(
              field.name as keyof SubmitChangePasswordFormParams
            ) === ''
          }
          {...field}
          {...inputParams}
        />
      ))}
      <input type='submit' />
    </Form.Form>
  )
}

export default ChangePasswordForm
