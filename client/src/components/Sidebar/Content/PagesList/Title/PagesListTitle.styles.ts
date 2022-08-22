import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex['center-start']};
  width: max-content;
  height: 17px;
  margin-left: 10px;
  margin-bottom: 3px;
  padding: 1px 5px;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};

    span {
      color: ${p => p.theme.colors['text-sb-list-active-title']};
    }
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Text = styled.span`
  font-size: 11.5px;
  font-weight: 600;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: ${p => p.theme.colors['text-secondary']};
  transition: color 20ms ease-in;
`
