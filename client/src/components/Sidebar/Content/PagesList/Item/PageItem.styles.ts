import styled from 'styled-components'
import { ItemContainerProps } from './PageItem.types'
import { bgTransitions, txtOflow } from 'styles/uiKit'

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
  padding-left: ${p => p.pLeft}px;
  border-radius: 3px;
  background: ${p => p.isSelected ? p.theme.colors['bg-el-hover-primary'] : 'inherit'};
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  p {
    max-width: ${p => (p.isHovering ? 65 : 85)}%;
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
  color: ${p => p.theme.colors[!p.isSelected ? 'text-sb-page-item-selected' : 'text-primary']};
`
