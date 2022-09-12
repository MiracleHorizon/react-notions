import {
  DEFAULT_PASSWORD_VALIDATION_OPTIONS,
  VALIDATE_EMAIL_REGEX,
} from 'utils/constants/forms'

export default class FormValidator {
  public static validatePassword = () => ({
    required: {
      value: true,
      message: 'Please enter your password.',
    },
    ...DEFAULT_PASSWORD_VALIDATION_OPTIONS,
  })

  public static validateEmail = () => ({
    required: {
      value: true,
      message: 'Please enter a valid email.',
    },
    pattern: {
      value: VALIDATE_EMAIL_REGEX,
      message: 'Please enter a valid email.',
    },
  })

  public static validateVerifyCode = () => ({
    required: {
      value: true,
      message: 'Your login code was incorrect. Please try again.',
    },
  })
}
