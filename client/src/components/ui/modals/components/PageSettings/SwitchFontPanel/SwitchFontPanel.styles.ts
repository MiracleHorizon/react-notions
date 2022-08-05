import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2px;
  padding: 5px 5px 0 5px;
`

export const Title = styled.h4`
  margin: 5px 0 5px 7px;
  font-size: 11px;
  font-weight: 500;
  line-height: 13px;
  text-transform: uppercase;
  color: ${props => props.theme.colors['text-secondary']};
`

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
