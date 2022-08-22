import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  ${dFlex.center};
  height: 45px;
`

export const Container = styled.div`
  flex: 1;
  ${dFlex['center-s-between']};

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
