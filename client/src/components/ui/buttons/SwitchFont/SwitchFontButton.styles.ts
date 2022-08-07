import styled from 'styled-components'
import fontFamilyHandler from 'utils/helpers/fontFamilyHandler'
import { FontAbbreviationProps } from './SwitchFontButton.types'
import { bgTransitions, dFlex } from 'styles/variables'
import { TPageFont } from 'models/decor/fonts'

export const Wrapper = styled.div`
  cursor: pointer;
  ${dFlex.center};
  width: 65px;
  height: 60px;
  margin: 0 1px;
  border-radius: 3px;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Container = styled.div`
  ${dFlex.center};
  flex-direction: column;
  width: 55px;
  height: 45px;
`

export const Title = styled.span`
  font-size: 11px;
  font-weight: 400;
  line-height: 16px;
  color: ${props => props.theme.colors['text-secondary']};
`

export const Abbreviation = styled.span<FontAbbreviationProps>`
  font-family: ${props =>
    fontFamilyHandler(props.fontFamily as TPageFont)} !important;
  margin-bottom: 5px;
  font-size: 26px;
  color: ${props =>
    props.isSelected
      ? 'rgb(46, 170, 220)'
      : props.theme.colors['text-primary']};
  transition: color 0.3s ease;
`
