import styled from 'styled-components'
import { CoverWrapperProps } from './PageCover.types'

export const Wrapper = styled.div<CoverWrapperProps>`
  cursor: ${props => (props.isRepositionEnabled ? 'all-scroll' : 'default')};
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 0;
  width: 100%;
  height: ${props => (props.template === 'Notion' ? 290 : 195)}px; // Заменить на проценты
`

export const Image = styled.img<{ imagePosition: number }>`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center
    ${props => (props.imagePosition ? props.imagePosition : 50)}%;
  pointer-events: none;
`
