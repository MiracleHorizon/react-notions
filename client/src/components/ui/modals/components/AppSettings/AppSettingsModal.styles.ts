import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'
import { Theme } from 'themes/theme.model'

export const Container = styled.div`
  position: relative;
  max-height: 65vh;
  width: 50vw;
  height: 100%;
  margin: auto;
  border-radius: 4px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.identifier === Theme.LIGHT ? 'white' : 'rgb(32, 32, 32)'};
`

export const Content = styled.div<{ isScrollOnTop: boolean }>`
  width: 100%;
  height: calc(100% - 64px);
  padding: 20px 30px 0 30px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-top-right-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-top-right-radius: ${p => (p.isScrollOnTop ? 4 : 0)}px;
  }
  
  div[data-el='divider'] {
    background: ${p => p.theme.identifier === Theme.LIGHT
        ? 'rgba(55, 53, 47, 0.09)'
        : 'rgba(255, 255, 255, 0.094)'};
  }
`
