import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const IconWrapper = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  margin-right: 6px;
  user-select: none;

  svg {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`

export const IconContainer = styled.div`
  ${dFlex.center}
  width: 100%;
  height: 100%;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Image = styled.img`
  width: 85%;
  height: 85%;
  object-fit: cover;
  pointer-events: none;
`
