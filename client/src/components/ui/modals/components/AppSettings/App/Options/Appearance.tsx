import React, { useEffect, useMemo, useState } from 'react'

import Dropdown from 'components/ui/Dropdown'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { Theme } from 'themes/theme.model'
import * as Option from './AppSettingsOption.styles'

const AppAppearance = () => {
  const { setTheme } = useActions()
  const dropdownOptions = useMemo(() => Object.values(Theme).reverse(), [])
  const { title: themeTitle } = useTypedSelector(s => s.app.themeState)
  const [theme, setThemeOption] = useState<string>(themeTitle)

  useEffect(() => {
    setTheme(theme as Theme)
    // eslint-disable-next-line
  }, [theme])

  return (
    <Option.Container>
      <Option.Content>
        <Option.Title>Appearance</Option.Title>
        <Option.Description>
          Customize how Notion looks on your device.
        </Option.Description>
      </Option.Content>
      <Dropdown
        type='theme'
        options={dropdownOptions}
        activeOption={theme}
        setOption={setThemeOption}
      />
    </Option.Container>
  )
}

export default AppAppearance
