import React, { useEffect, useState } from 'react'
import { useTheme } from 'styled-components'

import Dropdown from 'components/ui/Dropdown'
import useActions from 'hooks/useActions'
import ITheme from 'themes/theme.model'
import * as Option from './AppSettingsOption.styles'

const reducer = (state: string, setLight: () => void, setDark: () => void) => {
  switch (state.toLowerCase()) {
    case 'light':
      setLight()
      break
    case 'dark':
      setDark()
      break
    case 'use system setting':
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark ? setDark() : setLight()
      break
    default:
      throw new Error('Error')
  }
}

const ThemeDropdownOptions = ['Use system setting', 'Light', 'Dark']

const AppAppearance = () => {
  const { identifier } = useTheme() as ITheme
  const [theme, setTheme] = useState<string>(identifier)
  const { setLightTheme, setDarkTheme } = useActions()

  // const [state, dispatch] = useReducer()

  useEffect(() => {
    reducer(theme, setLightTheme, setDarkTheme)
  }, [setDarkTheme, setLightTheme, theme])

  return (
    <Option.Container>
      <Option.Content>
        <Option.Title>Appearance</Option.Title>
        <Option.Description>
          Customize how Notion looks on your device.
        </Option.Description>
      </Option.Content>
      <Dropdown
        options={ThemeDropdownOptions}
        activeOption={theme}
        setOption={setTheme}
        pos='center'
        type='theme'
      />
    </Option.Container>
  )
}

export default AppAppearance
