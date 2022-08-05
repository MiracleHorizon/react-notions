import styled from 'styled-components'
import { dFlex, mobile, tablet } from 'styles/variables'

export const Wrapper = styled.div`
  ${dFlex['center-start']};
  flex-direction: column;
  width: 100%;

  p {
    color: ${props => props.theme.colors['text-secondary']};
  }
`

export const Container = styled.div<{ fullWidth: boolean }>`
  width: ${props => (props.fullWidth ? 90 : 47)}%;

  @media (max-width: ${tablet}) {
    width: ${props => (props.fullWidth ? 95 : 70)}%;
  }

  @media (max-width: ${mobile}) {
    width: 95%;
  }
`

export const Description = styled.p`
  margin-top: 15px;
  margin-bottom: 5px;
  user-select: none;
  font-size: 16px;
`

export const ViewsList = styled.ul`
  width: 100%;
  padding-left: 5px;
`

export const ViewItem = styled.li`
  display: flex;
  align-items: center;
  user-select: none;
  list-style: inside;
  margin: 2px 0;
  font-size: 15px;

  &::before {
    content: '\\2022';
    margin-right: 10px;
    color: ${props => props.theme.colors['text-primary']};
  }
  
  svg {
    fill: ${props => props.theme.svgFills.primary} !important;
  }
`

export const ViewTitle = styled.span`
  margin-left: 8px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors['text-primary']};
`
