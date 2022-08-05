import styled from 'styled-components'
import { Theme } from 'themes/theme.model'

export const Container = styled.div`
  position: relative;
  top: 40%;
  max-width: 380px;
  min-width: 380px;
  min-height: 150px;
  padding: 20px;
  border-radius: 3px;
  box-shadow: ${props =>
    props.theme.identifier === Theme.DARK
      ? 'rgb(15 15 15 / 10%) 0 0 0 1px, rgb(15 15 15 / 20%) 0 5px 10px, rgb(15 15 15 / 40%) 0 15px 40px;'
      : 'rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 5px 10px, rgb(15 15 15 / 20%) 0 15px 40px;'};
  background: ${props => props.theme.colors['bg-alert-primary']};
  z-index: 2;
`

export const Buttons = styled.div`
  margin: 0 10px 5px 10px;
`

export const TitleContainer = styled.div<{ textAlignCenter?: boolean }>`
  min-height: 64px;
  padding: 10px;
  text-align: ${props => (props.textAlignCenter ? 'center' : 'left')};
`

export const Title = styled.p`
  user-select: none;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.colors['text-primary']};
`
