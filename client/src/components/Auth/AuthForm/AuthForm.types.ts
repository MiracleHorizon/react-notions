export default interface AuthFormProps {
  onSubmit: (values: SubmitAuthParams) => void
}

export interface SubmitAuthParams {
  email: string
  password: string
}
