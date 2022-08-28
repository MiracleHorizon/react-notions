import styled from 'styled-components'
import { OptionButtonProps } from './CoverOption.types'
import { bgTransitions, dFlex, txtOflow } from 'assets/styles/uiKit'

export const Container = styled.div<OptionButtonProps>`
  cursor: pointer;
  ${dFlex.center};
  padding: 4px 6px;
  border-right: ${p => p.bRight && `1px solid ${p.theme.colors['br-cover-option']}`};
  border-radius: ${p => (p.pos === 'left' ? '3px 0 0 3px' : '0 3px 3px 0')};
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-option-hover']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-option-active']};
  }
`

export const Title = styled.span`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-cover-option']};
`
