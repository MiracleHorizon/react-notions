import styled from 'styled-components'
import { dFlex, modalBoxShadowPrimary } from 'styles/uiKit'

export const Wrapper = styled.div`
  position: absolute;
  top: 72px;
  min-height: 45px;
  width: 960px;
  height: calc(100% - 144px);
  border-radius: 3px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-notion-task-modal']};
`

export const Container = styled.div<{ fullWidth: boolean }>`
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
`

export const Content = styled.div`
  width: 100%;
  padding: 0 120px;
`
