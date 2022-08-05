import styled from 'styled-components'
import { txtOflow } from 'styles/variables'

export const Wrapper = styled.div`
  position: relative;
  margin: 0 2px;
  padding: 6px 0;
`

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  max-height: 30px;
  padding: 4px 6px;
  border-radius: 3px;
  transition: background 50ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Title = styled.span`
  font-size: 14px;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-primary']};
`

export const Border = styled.div`
  position: absolute;
  left: 8px;
  right: 8px;
  bottom: 0;
  border-bottom: 2px solid ${props => props.theme.colors['text-primary']};
`
