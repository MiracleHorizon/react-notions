import styled from 'styled-components'
import { modalBoxShadowPrimary } from 'assets/styles/uiKit'

const Wrapper = styled.div`
  position: absolute;
  top: 72px;
  min-height: 45px;
  width: 960px;
  height: calc(100% - 144px);
  border-radius: 3px;
  box-shadow: ${p => modalBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-notion-task-modal']};
`

export default Wrapper
