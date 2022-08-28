import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 4px;
`

export const Container = styled.div`
  flex: 1;
  
  input[data-input='outline'] {
    height: 28px;
  }
`

export const Title = styled.h5`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-cover-titles']};
`
