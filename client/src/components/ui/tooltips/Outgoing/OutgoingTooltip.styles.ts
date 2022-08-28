import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div<{ isActive: boolean }>`
  position: fixed;
  align-self: end;
  ${dFlex['center-s-between']};
  max-width: 200px;
  width: max-content;
  height: 28px;
  left: 50%;
  right: 50%;
  padding: 3px 10px;
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 30%) 0 1px 4px;
  background: ${p => p.theme.colors['bg-primary-tooltip']};
  user-select: none;
  z-index: 3000;
  transform: translateY(${p => (p.isActive ? -40 : 40)}px) translateX(-50%);
  transition: all 0.5s ease-in-out;
`

export const Title = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${p => p.theme.colors['text-ttip-title']};
`
