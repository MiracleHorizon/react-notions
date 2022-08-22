import styled from 'styled-components'
import { dFlex, modalBoxShadowPrimary } from 'styles/uiKit'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<{ isOnTop: boolean; isOnBottom: boolean }>`
  position: relative;
  width: 45vw;
  height: 55vh;
  margin: auto;
  border-radius: 5px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.identifier === Theme.LIGHT ? 'white' : 'rgb(32, 32, 32)'};
  overflow: auto;

  &::-webkit-scrollbar-thumb {
    border-top-right-radius: ${p => (p.isOnTop ? 4 : 0)}px;
    border-bottom-right-radius: ${p => (p.isOnBottom ? 4 : 0)}px;
  }
`

export const Content = styled.div`
  ${dFlex['center-col']};
  width: 100%;
  height: 100%;
  padding: 20px;
`
