import styled from 'styled-components'
import { mobile, tablet } from 'styles/uiKit'

export const Wrapper = styled.div<{ fullWidth: boolean }>`
  width: ${p => (p.fullWidth ? 95 : 65)}%;
  padding: 0 90px;

  @media (max-width: ${tablet}) {
    width: ${p => (p.fullWidth ? 95 : 85)}%;
  }

  @media (max-width: ${mobile}) {
    width: 95%;
  }
`

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
`
