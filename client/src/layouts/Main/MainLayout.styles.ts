import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors['bg-primary']};
  color: ${props => props.theme.colors['text-primary']};
`

export const Container = styled.div`
  position: relative;
  flex: 1 1 0;
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const Main = styled.div`
  width: 100%;
  height: 100%;
  //transition: width 0.25s;
`

export const Content = styled.div`
  ${dFlex['center-start']};
  height: calc(100% - 45px);
  flex-direction: column;
  overflow: auto;
`
