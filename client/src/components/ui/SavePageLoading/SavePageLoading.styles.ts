import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'
import ReactTransitionGroup from 'libs/react-transition-group'

export const appearDuration = 200

export const Container = styled.div`
  ${dFlex['center-s-between']}
  height: 100%;
  margin-left: 5px;
  
  ${ReactTransitionGroup.setDefaultAnimation(appearDuration)};
`

export const Title = styled.span`
  margin-left: 6px;
  font-size: 14px;
  color: ${p => p.theme.colors['text-secondary']};
`
