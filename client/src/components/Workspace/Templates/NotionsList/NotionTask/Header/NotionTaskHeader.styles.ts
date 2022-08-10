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
  display: flex;
  align-items: center;
  justify-content: space-between;

  div[data-btn='close-r-sb'] {
    pointer-events: none;
    opacity: 0.5;
  }
  
  div[data-el='sgs-panel'] {
    right: 7px;
  }
  
  div[data-btn='options'] {
    background: ${props => props.theme.colors['bg-notion-task-modal']};
    
    &:hover {
      background: ${props => props.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${props => props.theme.colors['bg-el-active-primary']};
    }
  }
`
