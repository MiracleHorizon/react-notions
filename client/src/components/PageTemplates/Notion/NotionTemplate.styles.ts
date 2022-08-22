import styled from 'styled-components'
import { dFlex, mobile, tablet } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-start-col']}
  width: 100%;
`

export const Container = styled.div<{ fullWidth: boolean }>`
  width: ${p => (p.fullWidth ? '100%' : '900px')};
  padding: 0 90px;
  transition: width ease-in-out 0.25s;
`

//width: ${p => (p.fullWidth ? 95 : 65)}%;
//padding: 0 90px;

//@media (max-width: ${tablet}) {
//   width: ${p => (p.fullWidth ? 95 : 85)}%;
//}
//
//@media (max-width: ${mobile}) {
//  width: 95%;
//}