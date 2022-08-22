import styled from 'styled-components'

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 100%;
  margin-top: 10px;
  margin-bottom: ${p => (p.isOpen ? 10 : 0)}px;
`

export const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
