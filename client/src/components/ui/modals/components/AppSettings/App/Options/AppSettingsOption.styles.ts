import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin-bottom: 15px;
  padding: 4px;
  // background: ${props => props.theme.colors['bg-modal-secondary']};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Title = styled.p`
  margin-bottom: 2px;
  font-size: 14px;
  color: ${props => props.theme.colors['text-primary']};
`

export const Description = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors['text-option-primary']};
`
