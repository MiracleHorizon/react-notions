import styled from 'styled-components'
import { bgTransitions } from 'styles/variables'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 27px;
  border-radius: 3px;
  margin: 1px 4px;
  padding-left: 5px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  p,
  span {
    font-size: 14px;
  }
`

export const Icon = styled.img`
  width: 22px;
  height: 22px;
  margin-right: 5px;
  margin-left: 3px;
  border-radius: 50%;
  object-fit: cover;
`

export const Title = styled.p`
  font-weight: 400;
  margin-left: 10px;
  color: ${props => props.theme.colors['text-primary']};
`

export const Subtitle = styled.span`
  margin-left: 5px;
  font-weight: 500;
  line-height: 16px;
  color: ${props => props.theme.colors['text-primary']};
`