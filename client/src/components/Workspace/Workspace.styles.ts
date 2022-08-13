import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Container = styled.div`
  ${dFlex['center-start-col']};
  width: 100%;
  height: 100%;
  user-select: none;

  h1,
  p {
    color: ${p => p.theme.colors['text-primary']};
  }
`

export const Title = styled.h1`
  font-size: 40px;
`

export const Description = styled.p`
  font-size: 30px;
  font-weight: 500;
`

export const List = styled.ul`
  span {
    color: ${p => p.theme.colors['text-primary']};
  }
`
