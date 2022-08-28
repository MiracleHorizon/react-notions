import styled from 'styled-components'
import { DecorOptionsWrapperProps } from './DecorOptions.types'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div<DecorOptionsWrapperProps>`
  ${dFlex['center-start']};
  width: 100%;
  margin-top: ${p => (p.template === 'Notion' ? 5 : 10)}px;
`

export const Container = styled.ul<{ isHovering: boolean; locked: boolean }>`
  ${dFlex['center-start']};
  height: auto;
  opacity: ${p => (!p.isHovering || p.locked ? 0 : 1)};
  pointer-events: ${p => (p.locked ? 'none' : 'auto')};
  transition: opacity 0.15s ease-in-out;
`
