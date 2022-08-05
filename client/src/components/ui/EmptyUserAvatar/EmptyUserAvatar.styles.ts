import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  min-height: 18px;
  width: 18px;
  height: 18px;
  padding-bottom: 1px;
  border-radius: 3px;
  background: ${props => props.theme.colors['bg-empty-avatar']};
`

export const Title = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  color: ${props => props.theme.colors['text-empty-avatar']};
`
