import styled from 'styled-components'
import { bgTransitions } from 'assets/styles/uiKit'

export const Container = styled.div<{
  margY?: boolean
  isSelected?: boolean
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 28px;
  margin: 0 4px ${p => (!p.margY ? 1 : 0)}px 4px;
  padding-left: 15px;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  ${p => p.isSelected !== undefined
      ? `background: ${p.isSelected && p.theme.colors['bg-el-hover-primary']}`
      : `
        &:hover {
          background: ${p.theme.colors['bg-el-hover-primary']}
        }`};

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${p => p.theme.colors['text-sb-option-title']};
`

export const HotKeyTitle = styled.h6`
  max-width: 100px;
  margin-left: auto;
  font-size: 12px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-secondary']};
`
