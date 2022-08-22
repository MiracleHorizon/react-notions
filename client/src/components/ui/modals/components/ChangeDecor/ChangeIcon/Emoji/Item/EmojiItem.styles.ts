import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: calc(100% / 10);
  height: 32px;
  margin-right: auto;
  margin-bottom: 1px;
  padding: 3px;
  border-radius: 3px;
  font-size: 24px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export default Container
