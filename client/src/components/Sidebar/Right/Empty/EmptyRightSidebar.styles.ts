import styled from 'styled-components'

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4,
  p {
    font-size: 14px;
    color: ${props => props.theme.colors['text-secondary']};
  }
`

export const Title = styled.h4`
  margin-top: 10px;
  margin-bottom: 7px;
  font-weight: 600;
`

export const Description = styled.p`
  width: 200px;
  font-weight: 400;
  text-align: center;
`
