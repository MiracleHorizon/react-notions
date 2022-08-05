import styled from 'styled-components'
import { bgTransitions } from 'styles/variables'

export const Container = styled.div<{ margY?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 27px;
  border-radius: 3px;
  margin: ${props => (!props.margY ? 1 : 0)}px 4px;
  padding-left: 15px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors['text-sb-option-title']};
`
