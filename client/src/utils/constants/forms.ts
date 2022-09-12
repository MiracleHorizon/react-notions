import IDefaultFormOptions from 'models/IDefaultFormOptions'

export const DEFAULT_PASSWORD_VALIDATION_OPTIONS = {
  minLength: {
    value: 3,
    message: 'Password must be longer than 3 characters.',
  },
  maxLength: {
    value: 25,
    message: 'Password must be no longer than 25 characters.',
  },
}

export const VALIDATE_PASSWORD_REGEX = /^(?=.*\d).+$/

export const VALIDATE_EMAIL_REGEX =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

export const DEFAULT_FORM_OPTIONS: IDefaultFormOptions = {
  shouldFocusError: false,
  reValidateMode: 'onSubmit',
  mode: 'onSubmit',
}
