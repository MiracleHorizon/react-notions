import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
`

export const Container = styled.div`
  ${dFlex['center-s-between']};
  width: 100%;
  height: 45px;

  div[data-el='settings-panel'] {
    right: 7px;
  }

  div[data-btn='options'] {
    background: ${p => p.theme.colors['bg-notion-task-modal']};

    &:hover {
      background: ${p => p.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${p => p.theme.colors['bg-el-active-primary']};
    }
  }
`
