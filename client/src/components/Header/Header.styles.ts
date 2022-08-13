import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  max-width: 100vw;
  width: 100%;
  background: ${p => p.theme.colors['bg-primary']};
  user-select: none;
  z-index: 100;

  div[data-btn='sbOpen'] {
    margin-right: 15px;
  }
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 45px;
`

export const Panel = styled.div<{ isOpen: boolean }>`
  ${dFlex['center-s-between']}
  padding-left: 10px;
`
