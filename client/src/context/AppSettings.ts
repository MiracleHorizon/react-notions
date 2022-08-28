import { createContext } from 'react'

interface IAppSettingsCtx {
  fullName: string | null
  handleChangeName: (value: string) => void
}

export const AppSettingsContext = createContext<IAppSettingsCtx>(
  {} as IAppSettingsCtx
)
