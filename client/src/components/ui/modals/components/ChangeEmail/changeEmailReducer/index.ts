import { ChangeEmailAction, ChangeEmailKind, ChangeEmailState } from './types'

const changeEmailReducer = (
  state: ChangeEmailState,
  action: ChangeEmailAction
) => {
  switch (action.type) {
    case ChangeEmailKind.CONFIRM_PASSWORD:
      return {
        ...state,
        isConfirmed: true,
      }

    case ChangeEmailKind.SEND_VERIFY_CODE:
      if (action.payload) {
        return {
          ...state,
          email: action.payload.email,
          isCodeSent: true,
        }
      }

      return state

    case ChangeEmailKind.CLEAR_PASSWORD:
      return {
        ...state,
        isCodeSent: false,
        isConfirmed: false,
      }

    case ChangeEmailKind.CLEAR_EMAIL:
      return {
        ...state,
        isCodeSent: false,
      }

    default:
      return state
  }
}

export default changeEmailReducer
