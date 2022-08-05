import styled from 'styled-components'
import { bgTransitions } from 'styles/variables'
import { Theme } from 'themes/theme.model'

export const Wrapper = styled.div`
  cursor: pointer;
  position: static;
  width: 100%;
  height: auto;
  min-height: 40px;
  margin-bottom: 5px;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 2px 4px'
      : 'rgb(15 15 15 / 20%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 2px 4px'};
  background: ${props => props.theme.colors['bg-board-item']};
  user-select: none;
  ${bgTransitions.esOut100};

  &:hover {
    position: relative;
    background: ${props => props.theme.colors['bg-board-item-hover']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-board-item-active']};
  }

  div[data-btn='options'] {
    top: 8px;
    right: 8px;
    width: 26px !important;
  }
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 8px;
`

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 5px;
  object-fit: cover;
`

export const Title = styled.span`
  pointer-events: none;
  font-size: 14px;
  font-weight: 500;
  white-space: pre-wrap;
  word-break: break-word;
  line-height: 1.5;
  color: ${props => props.theme.colors['text-primary']};
`
