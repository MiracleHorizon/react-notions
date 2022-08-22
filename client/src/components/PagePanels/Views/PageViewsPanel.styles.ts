import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  margin-top: 10px;
  padding: 0 90px;
`

export const Container = styled.div`
  flex: 1;
  ${dFlex['center-s-between']};
  min-height: 40px;
  box-shadow: ${p => p.theme.colors['b-shadow-views-panel']} 0px -1px 0px inset;
`

export const ViewsList = styled.ul`
  ${dFlex['center-start']}
  min-width: 200px;
  height: 100%;
  background: inherit;
  box-shadow: ${p => p.theme.colors['b-shadow-views-panel']} 0px -1px 0px inset;
`
