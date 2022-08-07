import styled from 'styled-components'
import { txtOflow } from 'styles/variables'

export const Container = styled.div`
  flex: 1;
  padding: 4px;
`

export const Title = styled.h4`
  margin: 6px 0 6px 4px;
  font-size: 12px;
  font-weight: 500;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-statuses-modal-title']};
`
