import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Container = styled.div`
  position: absolute;
  top: 72px;
  min-height: 45px;
  width: 960px;
  height: calc(100% - 144px);
  border-radius: 3px;
  box-shadow: rgb(15 15 15 / 2%) 0 0 0 1px, rgb(15 15 15 / 3%) 0 3px 6px,
    rgb(15 15 15 / 6%) 0 9px 24px;
  background: ${props => props.theme.colors['bg-notion-task-modal']};
`

export const Content = styled.div<{ fullWidth: boolean }>`
  ${dFlex['center-start']};
  flex-direction: column;
  min-height: 0;
  height: calc(100% - 45px);
  padding-bottom: 40px;
  overflow: auto;

  div[data-el='cover'] {
    height: 195px;
  }

  div[data-el='decor-panel'] {
    width: 74%;
  }
`
