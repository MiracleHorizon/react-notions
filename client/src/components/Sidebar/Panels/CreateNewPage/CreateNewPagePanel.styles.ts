import styled from 'styled-components'

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 45px;
  margin-top: auto;
  padding: 5px 10px;
  box-shadow: ${props => props.theme.colors['b-shadow-sb-new-page-panel']} 0 -1px
    0;
  background: inherit;
  user-select: none;
  transition: background 20ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
  
  div[data-btn='plus'] {
    svg {
      width: 16px !important;
      height: 16px !important;
      fill: ${props => props.theme.svgFills.secondary} !important;
    }
  }
`

export const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors['text-sb-option-title']};
`
