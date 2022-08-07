import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 130px;
  padding: 10px 13px;
`

export const Description = styled.p`
  margin: 0 auto;
  font-size: 12px;
  text-overflow: ellipsis;
  white-space: normal;
  overflow: hidden;
  color: ${props => props.theme.colors['text-cover-titles']};
`
