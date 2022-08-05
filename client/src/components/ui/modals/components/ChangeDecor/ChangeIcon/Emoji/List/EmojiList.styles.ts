import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: max-content;
  margin-top: 5px;
  margin-bottom: 10px;
`

export const Title = styled.span`
  margin-bottom: 8px;
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors['text-cover-titles']};
`

export const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`
