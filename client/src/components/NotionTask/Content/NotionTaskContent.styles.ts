import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.main<{ fullWidth: boolean; isOnBottom: boolean }>`
  ${dFlex['center-start-col']};
  min-height: 0;
  height: calc(100% - 45px);
  padding-bottom: 40px;
  overflow: auto;

  div[data-el='cover'] {
    height: 195px;
  }

  div[data-el='decor-panel'] {
    width: 100%;
    padding-left: 120px;
  }

  &::-webkit-scrollbar-track {
    border-bottom-right-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    border-bottom-right-radius: ${p => (p.isOnBottom ? 3 : 0)}px;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 0 120px;
`
