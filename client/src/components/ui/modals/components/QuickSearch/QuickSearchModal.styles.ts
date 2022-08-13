import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'styles/uiKit'

const Container = styled.div`
  position: absolute;
  top: 150px;
  max-height: 50vh;
  min-height: 40px;
  width: 35%;
  height: max-content;
  border-radius: 5px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-modal-primary']};
`

export default Container
