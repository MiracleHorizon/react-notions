import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'

export const Container = styled.div<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  margin: 1px 0;
  padding: 6px;
  border-radius: 3px;
  background: ${p => p.isSelected && p.theme.colors['bg-el-hover-primary']};
  user-select: none;
  ${bgTransitions.esIn20};

  &:active {
    background: ${p => p.isSelected && p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.p<{ dest: 'page' | 'search' }>`
  margin-left: 10px;
  font-size: 14px;
  font-weight: ${p => (p.dest === 'page' ? 500 : 400)};
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`

export const Enter = styled.div`
  position: absolute;
  right: 25px;

  svg {
    fill: ${p => p.theme.svgFills.primary} !important;
  }
`
