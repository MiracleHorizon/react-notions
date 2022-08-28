import styled from 'styled-components'

export const Container = styled.div`
  min-width: 220px;
  width: 220px;
  margin-left: 17px;
  padding: 2px 4px;
`

export const Title = styled.span`
  user-select: none;
  font-size: 14px;
  line-height: 24px;
  color: ${p => p.theme.colors['text-secondary']};
`
