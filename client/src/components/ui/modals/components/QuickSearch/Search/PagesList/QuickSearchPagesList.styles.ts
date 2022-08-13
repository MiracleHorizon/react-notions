import styled from 'styled-components'

const Container = styled.div<{ isEmpty: boolean }>`
  width: 100%;
  height: 100%;
  padding: ${p => (p.isEmpty ? 0 : '6px 0')};
  overflow: hidden auto;
`

export default Container
