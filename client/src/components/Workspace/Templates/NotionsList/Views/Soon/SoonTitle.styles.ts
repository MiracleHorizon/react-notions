import styled from 'styled-components'
import { dFlex } from 'styles/variables'

export const Wrapper = styled.div`
  ${dFlex.center};
  width: 100%;
  height: 30vh;
  user-select: none;
`

export const Container = styled.div`
  ${dFlex.center};
  width: 300px;
  height: 80px;
  box-shadow: ${props => props.theme.colors['b-shadow-soon-title']} 0 1px 0;
  filter: blur(0.7px);
`

export const Title = styled.h2`
  margin-left: 15px;
  margin-bottom: 9px;
  font-size: 60px;
  line-height: 50px;
  color: ${props => props.theme.colors['text-primary']};
`
