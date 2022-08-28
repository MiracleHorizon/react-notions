import styled from 'styled-components'
import { bgTransitions } from 'assets/styles/uiKit'

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 45px;
  height: 45px;
  margin-top: auto;
  padding: 5px 10px;
  box-shadow: ${p => p.theme.colors['b-shadow-divider']} 0 -1px 0;
  background: inherit;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  div[data-btn='plus'] {
    svg {
      width: 16px !important;
      height: 16px !important;
      fill: ${p => p.theme.svgFills.secondary} !important;
    }
  }
`

export const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${p => p.theme.colors['text-sb-option-title']};
`
