import styled from 'styled-components'
import { bgTransitions } from 'styles/uiKit'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 27px;
  margin: 1px 0;
  padding: 5px 5px 5px 10px;
  border-radius: 3px;
  background: transparent;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  user-select: none;
  pointer-events: none;
  object-fit: cover;
`

export const Title = styled.p`
  margin-left: 10px;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${props => props.theme.colors['text-primary']};
`
