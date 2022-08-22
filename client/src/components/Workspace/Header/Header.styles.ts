import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.header`
  ${dFlex['center-start']};
  max-width: 100vw;
  width: 100%;
  background: ${p => p.theme.colors['bg-primary']};
  user-select: none;
  z-index: 100;

  div[data-btn='open-sb'] {
    margin-right: 15px;
  }
`

export const Container = styled.div`
  ${dFlex['center-s-between']};
  width: 100%;
  height: 45px;
`

export const Panel = styled.div`
  ${dFlex['center-s-between']}
  padding-left: 10px;
`
