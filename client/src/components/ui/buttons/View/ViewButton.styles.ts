import styled from 'styled-components'
import { bgTransitions, txtOflow } from 'styles/uiKit'

export const Wrapper = styled.div<{ isActive: boolean }>`
  align-self: flex-end;
  margin-right: 2px;
  padding-bottom: 4px;
  user-select: none;
  ${props =>
    props.isActive
      ? `border-bottom: 2px solid ${props.theme.colors['text-primary']};`
      : 'padding-bottom: 6px;'};

  div[data-btn='view-btn-icon'] {
    svg {
      width: 14px !important;
      fill: ${props =>
        !props.isActive
          ? props.theme.svgFills['view-btn']
          : props.theme.colors['text-primary']} !important;
    }
  }

  span {
    ${props =>
      props.isActive && `color: ${props.theme.colors['text-primary']};`}
  }
`

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 28px;
  padding: 2px 6px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const IconContainer = styled.div`
  width: 14px;
  height: 100%;
  margin-right: 6px;
`

export const Title = styled.span`
  margin-bottom: 1px;
  font-size: 14px;
  font-weight: 500;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-view-btn']};
`
