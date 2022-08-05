import React from 'react'

import * as Option from './AppSettingsOption.styles'

const StartOpenOption = () => {
  return (
    <Option.Container>
      <Option.Content>
        <Option.Title>Open on start</Option.Title>
        <Option.Description>
          Choose what to show when Notion starts or when you switch workspaces.
        </Option.Description>
      </Option.Content>
      <div >
        Это дропдаун
      </div>
    </Option.Container>
  )
}

export default StartOpenOption
