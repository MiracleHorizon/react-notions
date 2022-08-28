import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  cursor: pointer;
  ${dFlex.start};
  width: 100%;
  height: 30px;
  padding: 3px 0;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Container = styled.div`
  position: relative;
  flex: 1;
  ${dFlex['center-start']};
  padding-left: 2px;

  div[data-btn='options'] {
    right: 8px;
    background: transparent;

    &:hover {
      background: ${p => p.theme.colors['bg-el-hover-primary']};
    }
  }
`

export const Title = styled.p`
  border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  user-select: none;
  font-weight: 500;
  color: ${p => p.theme.colors['text-primary']};
`
