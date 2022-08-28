import styled from 'styled-components'
import { alertBoxShadowPrimary } from 'assets/styles/uiKit'

export const Container = styled.div`
  position: relative;
  top: 40%;
  max-width: 380px;
  min-width: 380px;
  min-height: 150px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: ${p => alertBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-alert-primary']};
  z-index: 2;
`

export const Buttons = styled.div`
  margin: 0 10px 5px 10px;
`

export const TitleContainer = styled.div<{ textCenter?: boolean }>`
  min-height: 64px;
  padding: 10px;
  text-align: ${p => (p.textCenter ? 'center' : 'left')};
`

export const Title = styled.p`
  user-select: none;
  font-size: 16px;
  line-height: 24px;
  color: ${p => p.theme.colors['text-primary']};
`
