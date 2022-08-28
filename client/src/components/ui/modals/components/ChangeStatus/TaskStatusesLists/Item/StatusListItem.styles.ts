import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  width: 100%;
  height: 28px;
  margin: 1px 0;
  border-radius: 3px;
  background: ${p => p.isSelected && p.theme.colors['bg-el-hover-primary']};
  ${bgTransitions.esInOut50};

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Container = styled.div`
  ${dFlex['center-start']};
  width: 100%;
  height: 100%;
  padding-left: 3px;
  padding-right: 30px;
`

export const ButtonContainer = styled.div<{ isSelected: boolean }>`
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: ${p => (p.isSelected ? 1 : 0)};
  transition: opacity 50ms ease-in-out;

  div[data-btn='options'] {
    position: relative;
    background: inherit;

    &:hover {
      background: ${p => p.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${p => p.theme.colors['bg-el-active-primary']};
    }
  }
`
