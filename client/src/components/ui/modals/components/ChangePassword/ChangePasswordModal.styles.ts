import styled from 'styled-components'
import { alertBoxShadowPrimary, mobile } from 'assets/styles/uiKit'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 270px;
  width: 460px;
  margin: auto;
  border-radius: 3px;
  box-shadow: ${p => alertBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-alert-primary']};
  padding: 24px;

  div[data-btn='filled'] {
    width: 135px;
    height: 32px;
    margin-top: 14px;
    margin-bottom: 0;
    margin-left: 0;
  }
  
  h6 {
    margin-top: 6px;
  }
`

export const Title = styled.h4`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: ${p => p.theme.colors['text-statuses-modal-title']};
`
