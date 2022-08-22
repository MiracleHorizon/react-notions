import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'styles/uiKit'

export const Container = styled.div`
  position: absolute;
  top: 100px;
  max-height: 50vh;
  min-height: 40px;
  width: 35%;
  height: 100%;
  border-radius: 5px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
`

export const Content = styled.div<{ isOnBottom: boolean }>`
  width: 100%;
  height: calc(100% - 50px);
  overflow: auto;

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isOnBottom ? 4 : 0)}px;
  }
`
