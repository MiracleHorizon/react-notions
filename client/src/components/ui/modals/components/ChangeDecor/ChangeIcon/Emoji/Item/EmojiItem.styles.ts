import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex.center};
  min-width: 30px;
  width: calc(100% / 12.5);
  height: 30px;
  margin-right: auto;
  margin-bottom: 2px;
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

export const Image = styled.img`
  pointer-events: none;
  object-fit: cover;
  width: 75%;
  height: 75%;
`
