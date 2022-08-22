import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-top: auto;
  padding: 0 30px;
`

export const Container = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
`

export const Title = styled.h4`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${p => p.theme.colors['text-primary']};
`
