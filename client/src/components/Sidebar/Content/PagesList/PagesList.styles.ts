import styled from 'styled-components'

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  margin-top: 10px;
  margin-bottom: ${props => (props.isOpen ? 10 : 0)}px;
`

export const Container = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
