import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

const Container = styled.div`
  position: relative;
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  height: 32px;
  padding-left: 5px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
  
  div[data-el='dnd-highlight'] {
    top: 0;
    left: 0;
  }
`

export default Container
