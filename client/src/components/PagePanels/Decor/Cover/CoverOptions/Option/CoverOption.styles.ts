import styled from 'styled-components'
import { OptionButtonProps } from './CoverOption.types'

export const Container = styled.div<OptionButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 6px;
  border-right: ${props =>
    props.bRight && `1px solid ${props.theme.colors['br-cover-option']}`};
  border-radius: ${props =>
    props.pos === 'left' ? '3px 0 0 3px' : '0 3px 3px 0'};
  transition: background 50ms ease-in-out;

  &:hover {
    background: ${props => props.theme.colors['bg-option-hover']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-option-active']};
  }
`

export const Title = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${props => props.theme.colors['text-cover-option']};
`
