import styled from 'styled-components'
import { dFlex } from 'styles/variables'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  user-select: none;
`

export const Container = styled.div`
  flex: 1;
  ${dFlex['start-center']};
  flex-direction: column;
`
