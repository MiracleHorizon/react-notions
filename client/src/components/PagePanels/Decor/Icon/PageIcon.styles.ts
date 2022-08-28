import styled from 'styled-components'
import { IconContainerProps } from './PageIcon.types'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'

export const Container = styled.div<IconContainerProps>`
  cursor: pointer;
  position: relative;
  ${dFlex.center};
  ${p => p.template === 'Notion'
      ? `
        width: 140px;
        height: 140px
       `
      : `
        min-width: 36px;
        width: 36px; 
        height: 36px;
      `};
  margin-top: ${p => (p.coverUrl && p.template === 'Notion' ? -80 : 0)}px;
  border-radius: 3px;
  pointer-events: ${p => p.locked && 'none'};
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  img {
    ${p => p.template === 'Notion'
        ? `
          width: 125px; 
          height: 125px
        `
        : `
          width: 90%; 
          height: 90%
        `};
  }
`

export const Image = styled.img`
  border-radius: 3px;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`
