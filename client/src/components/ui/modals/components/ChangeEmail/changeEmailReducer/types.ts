export interface ChangeEmailState {
  isConfirmed: boolean
  isCodeSent: boolean
  email: string
}

export interface ChangeEmailAction {
  type: ChangeEmailKind
  payload?: ChangeEmailPayload
}

export interface ChangeEmailPayload {
  email: string
}

export enum ChangeEmailKind {
  CONFIRM_PASSWORD = 'confirmPassword',
  SEND_VERIFY_CODE = 'sendVerifyCode',
  CLEAR_PASSWORD = 'clearPassword',
  CLEAR_EMAIL = 'clearEmail',
}
