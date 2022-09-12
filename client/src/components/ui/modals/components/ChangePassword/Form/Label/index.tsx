import React, { FC, memo, useEffect } from 'react'

import OutlineInput from 'components/ui/inputs/Outline'
import PropTypes from './ChangePasswordFormLabel.types'
import Label from './ChangePasswordFormLabel.styles'
import changePasswordFormValidator, {
  TPasswordChange,
} from 'utils/formValidation/changePasswordFormValidator'

const ChangePasswordFormLabel: FC<PropTypes> = memo(
  ({ title, resetField, register, ...inputParams }) => {
    const { name, watch, setFocus } = inputParams
    const validationOptions = changePasswordFormValidator(name as TPasswordChange)

    const reg = register(name, {
      ...validationOptions[`${name as keyof typeof validationOptions}`],
      validate: value => {
        if (name === 'newPassRepeat') {
          return value === watch('newPass') || 'Your passwords do not match.'
        }
      },
    })

    const handleClearField = () => resetField(name)

    useEffect(() => {
      if (name === 'oldPass') {
        setFocus('oldPass', { shouldSelect: true })
      }
    }, [name, setFocus])

    return (
      <>
        <Label>{title}</Label>
        <OutlineInput
          {...inputParams}
          type='password'
          register={reg}
          onChange={handleClearField}
          onClear={handleClearField}
        />
      </>
    )
  }
)

export default ChangePasswordFormLabel
