import FormValidator from './FormValidator'
import { DEFAULT_PASSWORD_VALIDATION_OPTIONS } from 'utils/constants/forms'

const authFormValidator = (pathname: string) => ({
  email: FormValidator.validateEmail(),
  password: {
    required: `${
      pathname === '/login'
        ? 'Please, enter your password.'
        : 'Come up with some password.'
    }`,
    ...DEFAULT_PASSWORD_VALIDATION_OPTIONS,
  },
})

export default authFormValidator
