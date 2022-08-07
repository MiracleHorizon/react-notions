import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/variables'

export const Wrapper = styled.div`
  cursor: pointer;
  width: 100%;
  height: 28px;
  margin: 1px 0;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Container = styled.div`
  ${dFlex['center-start']};
  width: 100%;
  height: 100%;
  padding-left: 3px;
  padding-right: 30px;
`

export const ButtonContainer = styled.div<{ isHovering: boolean }>`
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: ${props => (props.isHovering ? 1 : 0)};
  transition: opacity 50ms ease-in-out;

  div[data-btn='options'] {
    position: relative;
    background: inherit;

    &:hover {
      background: ${props => props.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${props => props.theme.colors['bg-el-active-primary']};
    }
  }
`
