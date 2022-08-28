import React from 'react'
import { useTheme } from 'styled-components'
import { ClipLoader } from 'react-spinners'

import ITheme from 'themes/theme.model'
import Container from './TasksListLoader.styles'

const TasksListLoader = () => (
  <Container>
    <ClipLoader
      size={30}
      speedMultiplier={0.8}
      color={(useTheme() as ITheme).colors['bg-app-loader']}
    />
  </Container>
)

export default TasksListLoader
