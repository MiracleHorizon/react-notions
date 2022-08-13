import styled from 'styled-components'
import { OptionsWrapperProps } from './DecorOptions.types'

export const Wrapper = styled.div<OptionsWrapperProps>`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: ${props => (props.template === 'Notion' ? 5 : 10)}px;
`

export const Container = styled.ul<{ isHovering: boolean }>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  opacity: ${props => (props.isHovering ? 1 : 0)};
  transition: opacity 0.15s ease-in-out;
`
