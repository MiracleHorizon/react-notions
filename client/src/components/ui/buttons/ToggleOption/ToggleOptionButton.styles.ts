import styled from 'styled-components'
import { dFlex } from 'assets/styles/uiKit'

export const Container = styled.div<{ isActive: boolean }>`
  ${dFlex.center};
  width: 30px;
  height: 18px;
  padding: 0 2px;
  border-radius: 10px;
  background: ${p => p.isActive ? 'rgb(47, 170, 220)' : p.theme.colors['bg-toggle-button']};
  transition: background 0.2s ease-in-out;

  div {
    transform: translateX(${p => (p.isActive ? 6 : -6)}px);
  }
`

export const Checkbox = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: white;
  transition: transform 0.2s ease-in-out;
`
