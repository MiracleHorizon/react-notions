import styled from 'styled-components'
import { Theme } from 'themes/theme.model'

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 15px;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid
    ${p => p.theme.identifier === Theme.LIGHT
        ? 'rgba(55, 53, 47, 0.16)'
        : 'rgba(255, 255, 255, 0.13)'};
`
