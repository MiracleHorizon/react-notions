import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'

export const Wrapper = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 28px;
  min-height: 28px;
  margin: 1px 0;
  padding-left: 10px;
  border-radius: 3px;
  background: ${p => p.isSelected ? p.theme.colors['bg-el-hover-primary'] : 'transparent'};
  ${bgTransitions.esIn20};

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`

export const Icon = styled.img`
  min-width: 18px;
  width: 18px;
  height: 18px;
  border-radius: 3px;
  object-fit: cover;
`

export const ButtonsContainer = styled.div`
  ${dFlex['center-s-between']};
  width: max-content;
  height: calc(100% - 4px);
  margin-left: auto;
  margin-right: 10px;

  svg {
    fill: ${p => p.theme.svgFills['pages-trash-btn']} !important;
  }
`
