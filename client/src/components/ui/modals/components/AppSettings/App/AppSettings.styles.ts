import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 40px;
`

export const Container = styled.div`
  margin-top: 15px;
`

export const Title = styled.h4`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors['text-primary']};
`
