import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { txtOflow } from 'styles/uiKit'

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 8px;
  box-shadow: rgb(
      ${p => (p.theme.identifier === Theme.LIGHT ? '55 53 47' : '255 255 255')} /
        9%
    )
    0 -1px 0;
  user-select: none;
`

export const Container = styled.ul`
  display: flex;
  justify-content: flex-start;
`

export const Hotkey = styled.li`
  display: flex;
  align-items: center;
  margin: 0 5px;

  span {
    ${txtOflow.ell};
    color: ${p => p.theme.colors['text-secondary']};
  }
`

export const Title = styled.span`
  margin-left: 5px;
  font-size: 12px;
`
