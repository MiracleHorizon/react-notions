import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${p => p.theme.colors['bg-primary']};
  color: ${p => p.theme.colors['text-primary']};
`

export const Container = styled.div`
  position: relative;
  flex: 1 1 0;
  display: flex;
  width: 100vw;
  height: 100vh;
`

export const Main = styled.main`
  width: 100%;
  height: 100%;
  overflow: auto;
`
