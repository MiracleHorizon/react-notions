import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: auto;
  width: 45vw;
  height: 55vh;
  border-radius: 5px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 5px 10px,
    rgb(15 15 15 / 20%) 0 15px 40px;
  background: ${props => props.theme.colors['bg-modal-primary']};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 20px;
`
