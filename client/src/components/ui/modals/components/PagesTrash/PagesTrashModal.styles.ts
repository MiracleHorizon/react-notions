import styled from 'styled-components'
import { Theme } from 'themes/theme.model'

export const Container = styled.div<{ lSidebarWidth: number }>`
  position: absolute;
  left: ${props => props.lSidebarWidth + 8}px;
  bottom: 8px;
  min-width: 180px;
  max-width: 100vw;
  min-height: 100px;
  width: 420px;
  height: 50vh;
  padding-bottom: 20px;
  border-radius: 4px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.LIGHT
      ? 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px, rgb(15 15 15 / 20%) 0 9px 24px;'
      : 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 3px 6px, rgb(15 15 15 / 40%) 0 9px 24px;'};
  background: ${props => props.theme.colors['bg-modal-primary']};
`

export const InputContainer = styled.div`
  padding: 10px 12px;
`
