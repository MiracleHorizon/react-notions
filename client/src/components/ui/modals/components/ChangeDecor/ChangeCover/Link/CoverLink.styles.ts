import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 14px 13px 10px 13px;
`

export const Description = styled.p`
  margin: 0 auto;
  font-size: 12px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => props.theme.colors['text-cover-titles']};
`
