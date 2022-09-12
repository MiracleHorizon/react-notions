import {
  DEFAULT_PASSWORD_VALIDATION_OPTIONS,
  VALIDATE_PASSWORD_REGEX,
} from 'utils/constants/forms'

export type TPasswordChange = 'oldPass' | 'newPass' | 'newPassRepeat'

const NEW_PASSWORD_VALIDATION_PATTERN = {
  value: VALIDATE_PASSWORD_REGEX,
  message: 'Please include additional unique characters.',
}

const changePasswordFormValidator = (type: TPasswordChange) => {
  let required = ''

  switch (type) {
    case 'oldPass':
      required = 'Please enter your old password.'
      break
    case 'newPass':
      required = 'Please enter a password.'
      break
    case 'newPassRepeat':
      required = 'Please repeat your new password.'
      break
  }

  return {
    oldPass: {
      required,
      DEFAULT_PASSWORD_VALIDATION_OPTIONS,
    },
    newPass: {
      required,
      pattern: NEW_PASSWORD_VALIDATION_PATTERN,
      ...DEFAULT_PASSWORD_VALIDATION_OPTIONS,
    },
    newPassRepeat: {
      required,
      pattern: NEW_PASSWORD_VALIDATION_PATTERN,
      ...DEFAULT_PASSWORD_VALIDATION_OPTIONS,
    },
  }
}

export default changePasswordFormValidator
