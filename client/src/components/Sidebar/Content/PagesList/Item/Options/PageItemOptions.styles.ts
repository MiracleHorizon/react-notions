import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import ReactTransitionGroup from 'libs/react-transition-group'

export const appearDuration = 250

const Container = styled.div`
  ${dFlex.center};
  margin-right: 8px;
  
  ${ReactTransitionGroup.setDefaultAnimation(appearDuration)};
`

export default Container
