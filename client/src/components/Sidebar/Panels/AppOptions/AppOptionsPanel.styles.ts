import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex.center};
  margin-bottom: 8px;
  user-select: none;
`

export const Container = styled.div`
  flex: 1;
  ${dFlex['start-center-col']};
`
