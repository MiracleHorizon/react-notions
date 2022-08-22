import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-start-col']};
  width: 100%;

  p {
    color: ${p => p.theme.colors['text-secondary']};
  }
`

export const Container = styled.div<{ fullWidth: boolean; isTask: boolean }>`
  width: ${p => (p.fullWidth ? '100%' : '900px')};
  padding: 0 90px;
  transition: width ease-in-out 0.25s;
`
