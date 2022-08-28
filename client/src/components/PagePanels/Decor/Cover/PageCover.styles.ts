import styled from 'styled-components'
import { CoverWrapperProps } from './PageCover.types'
import { dFlex } from 'assets/styles/uiKit'

export const Wrapper = styled.div<CoverWrapperProps>`
  position: relative;
  cursor: ${p => (p.isRepositionEnabled ? 'all-scroll' : 'default')};
  ${dFlex['center-col']};
  min-height: 0;
  width: 100%;
  height: ${p => (p.template === 'Notion' ? 290 : 195)}px;
` // Заменить на проценты

export const Image = styled.img<{ imagePosition: number }>`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center ${p => (p.imagePosition ? p.imagePosition : 50)}%;
  pointer-events: none;
`
