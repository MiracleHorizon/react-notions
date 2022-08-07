import styled from 'styled-components'
import { dFlex } from 'styles/variables'

export const Wrapper = styled.div`
  display: flex;
  width: 88%;
  height: 40px;
  margin-top: 10px;
  box-shadow: ${props => props.theme.colors['b-shadow-views-panel']} 0px -1px 0px inset;
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  min-height: 40px;
`

export const ViewsList = styled.ul`
  ${dFlex['center-start']}
  min-width: 200px;
  height: 100%;
  background: inherit;
  box-shadow: ${props => props.theme.colors['b-shadow-views-panel']} 0px -1px 0px inset;
`
