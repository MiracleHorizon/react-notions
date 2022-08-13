import styled from 'styled-components'
import { bgTransitions } from 'styles/uiKit'

export const Container = styled.div<{ margY?: boolean; isSelected?: boolean }>`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 28px;
  border-radius: 3px;
  margin: ${p => (!p.margY ? 1 : 0)}px 4px;
  padding-left: 15px;
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
