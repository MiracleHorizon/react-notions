import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Container = styled.div`
  ${dFlex.center};
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  margin: 0 2px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
  
  svg {
    width: 18px !important;
    height: 18px !important;
  }
`

export const Image = styled.img`
  min-width: 16px;
  min-height: 16px;
  width: 16px;
  height: 16px;
  object-fit: cover;
  pointer-events: none;
`
