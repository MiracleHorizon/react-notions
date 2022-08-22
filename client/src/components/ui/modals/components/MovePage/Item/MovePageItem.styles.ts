import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'

export const Container = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  height: 27px;
  margin: 1px 0;
  padding: 5px 5px 5px 10px;
  border-radius: 3px;
  background: ${p => p.isSelected ? p.theme.colors['bg-el-hover-primary'] : 'transparent'};
  ${bgTransitions.esIn20};

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
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
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`
