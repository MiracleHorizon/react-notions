import React, { useEffect, useMemo, useState } from 'react'

import Dropdown from 'components/ui/Dropdown'
import useActions from 'hooks/useActions'
import useTypedSelector from 'hooks/useTypedSelector'
import { StartOpenOptionEnum } from 'store/slices/app/app.types'
import * as Option from './AppSettingsOption.styles'

const StartOpenOption = () => {
  const { setStartOpenOption } = useActions()
  const dropdownOptions = useMemo(() => Object.values(StartOpenOptionEnum), [])
  const { startOpen } = useTypedSelector(s => s.app)
  const [startOption, setStartOption] = useState<StartOpenOptionEnum>(startOpen)

  useEffect(() => {
    setStartOption(startOption)
    setStartOpenOption(startOption)
  }, [startOption, setStartOpenOption])

  return (
    <Option.Container>
      <Option.Content>
        <Option.Title>Open on start</Option.Title>
        <Option.Description>
          Choose what to show when Notion starts or when you switch workspaces.
        </Option.Description>
      </Option.Content>
      <Dropdown
        type='startOpen'
        options={dropdownOptions}
        activeOption={startOption}
        setOption={setStartOption}
      />
    </Option.Container>
  )
}

export default StartOpenOption
