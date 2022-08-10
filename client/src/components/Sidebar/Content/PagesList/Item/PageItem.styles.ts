import styled from 'styled-components'
import { ItemContainerProps } from './PageItem.types'
import { txtOflow } from 'styles/uiKit'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1px;
`

export const Container = styled.div<ItemContainerProps>`
  cursor: pointer;
  align-self: flex-end;
  display: flex;
  align-items: center;
  width: 100%;
  height: 27px;
  padding-left: ${props => props.pLeft}px;
  border-radius: 3px;
  background: ${props =>
    props.isSelected ? props.theme.colors['bg-el-hover-primary'] : 'inherit'};
  transition: background 50ms ease-in-out;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  p {
    max-width: ${props => (props.isHovering ? 65 : 85)}%;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`

export const Title = styled.p<{ isSelected: boolean }>`
  height: 100%;
  margin-left: 3px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${props =>
    props.theme.colors[
      !props.isSelected ? 'text-sb-page-item-selected' : 'text-primary'
    ]};
`
