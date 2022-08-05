import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 10px;
  padding: 5px;
`

export const Title = styled.span`
  margin: auto;
  user-select: none;
  font-size: 14px;
  color: ${props => props.theme.colors['text-sb-option-title']};
`
