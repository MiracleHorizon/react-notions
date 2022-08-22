import styled from 'styled-components'
import { txtOflow } from 'styles/uiKit'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 200px;
  margin-bottom: 25px;
  background: rgba(255, 137, 94, 0.24);
`

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1px;
`

export const Title = styled.h4`
  width: 100%;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 400;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`

export const Avatar = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  object-fit: cover;
  pointer-events: none;
`
