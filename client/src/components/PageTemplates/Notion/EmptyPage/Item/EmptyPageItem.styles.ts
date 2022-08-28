import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  height: 32px;
  margin: 1px 0;
  padding: 3px 0;
  border-radius: 3px;
  user-select: none;
  background: ${p => p.isSelected && 'rgba(46, 170, 220, 0.15)'};
  ${bgTransitions.esIn20};

  &:active {
    background: rgba(46, 170, 220, 0.25);
  }

  svg {
    width: 20px !important;
    height: 20px !important;
    margin-left: 2px;
    fill: ${p => p.theme.svgFills.primary} !important;
  }
`

export const Title = styled.p`
  margin-left: 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.colors['text-secondary']};
`
