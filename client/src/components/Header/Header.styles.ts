import styled from 'styled-components'

export const Wrapper = styled.header`
  display: flex;
  justify-content: flex-start;
  max-width: 100vw;
  width: 100%;
  user-select: none;
  z-index: 100;
  background: ${props => props.theme.colors['bg-primary']};

  div[data-btn='lSbOpen'] {
    margin-right: 15px;
  }
`

export const Container = styled.div`
  flex: 1;
  display: flex;
  height: 45px;
`

export const Panel = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
`
