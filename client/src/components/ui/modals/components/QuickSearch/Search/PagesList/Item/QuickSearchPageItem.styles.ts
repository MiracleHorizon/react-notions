import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'assets/styles/uiKit'

export const Wrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  cursor: pointer;
  ${dFlex['center-s-between']};
  min-height: 40px;
  width: calc(100% - 8px);
  height: max-content;
  margin: 1px 4px;
  border-radius: 4px;
  background: ${p => p.isSelected && p.theme.colors['bg-el-hover-primary']};
  ${bgTransitions.esIn20};

  &:active {
    background: ${p => p.isSelected && p.theme.colors['bg-el-active-primary']};
  }
`

export const Container = styled.div`
  ${dFlex['center-start']};
  width: 100%;
  padding: 4px 0;
`

export const TitlesContainer = styled.div`
  padding: 1px;

  p {
    line-height: 20px;
    ${txtOflow.ell};
  }
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${p => p.theme.colors['text-primary']};
`

export const ParentTitle = styled.p`
  font-size: 12px;
  color: ${p => p.theme.colors['text-secondary']};
`

export const IconContainer = styled.div<{ isHasParent: boolean }>`
  ${dFlex.center};
  width: 40px;
  ${p => p.isHasParent && 'margin-top: -15px;'}
`

export const EnterContainer = styled.div`
  position: absolute;
  right: 5px;
  ${dFlex.center};
  width: 40px;
  height: 40px;

  svg {
    fill: ${p => p.theme.svgFills.primary} !important;
  }
`
