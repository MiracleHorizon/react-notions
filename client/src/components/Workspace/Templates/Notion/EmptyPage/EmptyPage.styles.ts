import styled from 'styled-components'
import { dFlex, mobile, tablet } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-start-col']};
  width: 100%;

  p {
    color: ${p => p.theme.colors['text-secondary']};
  }
`

export const Container = styled.div<{ fullWidth: boolean; isTask: boolean }>`
  ${p =>
    p.isTask
      ? `
  width: 74%;
  `
      :`
  width: ${p.fullWidth ? 90 : 47}%;

  @media (max-width: ${tablet}) {
    width: ${p.fullWidth ? 95 : 70}%;
  }

  @media (max-width: ${mobile}) {
    width: 95%;
  }`}
`
