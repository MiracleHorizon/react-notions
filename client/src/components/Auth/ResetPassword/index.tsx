import React, { useState } from 'react'

import AuthLayout from 'layouts/Auth'
import ForgotPasswordForm from './ForgotPasswordForm'
import ConfirmResetPasswordVerifyCodeForm from './ConfirmVerifyCodeForm'
import ResetPasswordForm from './ResetPasswordForm'
import Container from './ResetPassword.styles'

const ResetPassword = () => {
  const [isCodeSend, setCodeSend] = useState<boolean>(false)
  const [code, setCode] = useState<string | null>(null)

  const handleSendCode = () => setCodeSend(true)

  const handleConfirmEmail = (code: string) => setCode(code)

  return (
    <AuthLayout>
      <Container>
        {!isCodeSend && <ForgotPasswordForm handleSendCode={handleSendCode} />}
        {isCodeSend && !code && (
          <ConfirmResetPasswordVerifyCodeForm
            handleConfirmEmail={handleConfirmEmail}
          />
        )}
        {code && <ResetPasswordForm code={code} />}
      </Container>
    </AuthLayout>
  )
}

export default ResetPassword
