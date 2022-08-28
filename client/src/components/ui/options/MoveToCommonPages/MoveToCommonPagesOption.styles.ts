import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  height: 27px;
  margin: 1px 0;
  padding-left: 5px;
  border-radius: 3px;
  background: ${p => p.isSelected ? p.theme.colors['bg-el-hover-primary'] : 'transparent'};
  user-select: none;
  ${bgTransitions.esIn20};

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  p,
  span {
    font-size: 14px;
  }

  div[data-el='empty-avatar'] {
    margin-left: 4px;
    margin-right: 5px;
  }
`

export const Icon = styled.img`
  width: 21px;
  height: 21px;
  margin: 0 3px;
  border-radius: 50%;
  object-fit: cover;
`

export const Title = styled.p`
  margin-left: 5px;
  font-weight: 300;
  color: ${p => p.theme.colors['text-primary']};
`

export const Subtitle = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  color: ${p => p.theme.colors['text-primary']};
`
