import styled from 'styled-components'
import { txtOflow } from 'styles/uiKit'

export const Wrapper = styled.div`
  width: 100%;
  height: max-content;
  max-height: 60px;
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
`

export const Title = styled.h5`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-cover-titles']};
`

export const Email = styled.span`
  max-width: 200px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`
