const validateEmailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i

const emailValidationOptions = {
  required: 'Please, enter your email.',
  pattern: validateEmailRegex,
}

const passwordValidationOptions = {
  minLength: {
    value: 3,
    message: 'Пароль должен быть длиннее 3 символов',
  },
  maxLength: {
    value: 25,
    message: 'Пароль должен быть не более 25 символов',
  },
}

const authFormValidator = (pathname: string) => ({
  email: emailValidationOptions,
  password: {
    required: `${
      pathname === '/login'
        ? 'Please, enter your password.'
        : 'Come up with some password.'
    }`,
    ...passwordValidationOptions,
  },
})

export default authFormValidator
