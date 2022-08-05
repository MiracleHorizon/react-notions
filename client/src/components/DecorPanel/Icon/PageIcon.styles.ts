import styled from 'styled-components'
import { IconContainerProps } from './PageIcon.types'
import { bgTransitions, dFlex } from 'styles/variables'

export const Container = styled.div<IconContainerProps>`
  cursor: pointer;
  position: relative;
  ${dFlex.center};
  ${props =>
    props.template === 'Notion'
      ? `
        width: 140px;
        height: 140px
       `
      : `
        width: 36px; 
        height: 36px;
      `};
  margin-top: ${props =>
    props.coverUrl && props.template === 'Notion' ? -80 : 0}px;
  border-radius: 3px;
  z-index: 10;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  img {
    ${props =>
      props.template === 'Notion'
        ? `
          width: 125px; 
          height: 125px
        `
        : `
          width: 100%; 
          height: 100%
        `};
  };
`

export const Image = styled.img`
  border-radius: 3px;
  object-fit: cover;
  user-select: none;
  pointer-events: none;
`
