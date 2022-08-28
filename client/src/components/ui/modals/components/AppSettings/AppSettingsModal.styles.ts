import styled from 'styled-components'
import { dFlex, modalBoxShadowPrimary } from 'assets/styles/uiKit'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<{ isScrollOnTop: boolean }>`
  position: relative;
  max-height: 65vh;
  width: 50vw;
  height: 100%;
  margin: auto;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.identifier === Theme.LIGHT ? 'white' : 'rgb(32, 32, 32)'};

  &::-webkit-scrollbar-track {
    border-top-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-top-right-radius: ${p => (p.isScrollOnTop ? 4 : 0)}px;
  }
`

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 64px);
  padding: 20px 30px 0 30px;
  overflow: auto;

  div[data-el='divider'] {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`
