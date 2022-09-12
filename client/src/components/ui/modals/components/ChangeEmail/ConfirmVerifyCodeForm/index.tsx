import React, { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import FilledButton from 'components/ui/buttons/Filled'
import OutlineInput from 'components/ui/inputs/Outline'
import DefaultRedError from 'components/ui/errors/DefaultRed'
import { useVerifyChangeEmailCodeMutation } from 'services/user.api'
import { selectUser } from 'store/slices/user/auth.selectors'
import FormValidator from 'utils/formValidation/FormValidator'
import { DEFAULT_FORM_OPTIONS } from 'utils/constants/forms'
import IErrorResponseData from 'models/api/response/IErrorResponseData'
import Form from './ChangeEmailConfirmVerifyCode.styles'

const ConfirmChangeEmailVerifyCodeForm: FC<{
  email: string
  handleCloseModal: () => void
}> = ({ email, handleCloseModal }) => {
  const [verifyChangeEmailCode, { isSuccess, error }] = useVerifyChangeEmailCodeMutation()
  const { _id } = useSelector(selectUser)

  const {
    register,
    setFocus,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { code: '' }, ...DEFAULT_FORM_OPTIONS })

  const reg = register('code', FormValidator.validateVerifyCode())

  const handleSubmitForm = ({ code }: { code: string }) => {
    verifyChangeEmailCode({ author: _id, code })
  }

  const handleSubmitErrors = () => {
    if (errors.code?.message) {
      return <DefaultRedError title={errors.code.message} />
    }

    if (error && 'data' in error) {
      return (
        <DefaultRedError title={(error.data as IErrorResponseData).message} />
      )
    }
  }

  useEffect(() => {
    if (isSuccess) handleCloseModal()
  }, [isSuccess, handleCloseModal])

  useEffect(() => {
    setFocus('code', { shouldSelect: true })
  }, [setFocus])

  return (
    <Form onSubmit={handleSubmit(handleSubmitForm)}>
      <p>
        We just sent you a temporary verification code to <b>{email}</b>.
      </p>
      <OutlineInput
        type='email'
        placeholder='Enter verification code'
        register={reg}
      />
      {handleSubmitErrors()}
      <FilledButton
        title='Change email'
        onClickAction={handleSubmit(handleSubmitForm)}
      />
      <input type='submit' />
    </Form>
  )
}

export default ConfirmChangeEmailVerifyCodeForm
