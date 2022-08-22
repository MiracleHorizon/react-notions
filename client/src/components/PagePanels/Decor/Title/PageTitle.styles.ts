import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { TitleContainerProps } from './PageTitle.types'
import fontFamilyHandler from 'utils/helpers/fontFamilyHandler'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 5px;
`

export const Container = styled.div`
  ${dFlex['center-start']};
  height: 100%;
`

export const Value = styled.h1<TitleContainerProps>`
  font-family: ${p => fontFamilyHandler(p.font)};
  width: 100%;
  margin-left: ${p => (p.template === 'NotionsList' && p.iconUrl ? 10 : 0)}px;
  font-size: ${p => (p.template === 'Notion' ? (p.smallText ? 32 : 40) : 32)}px;
  font-weight: 700;
  line-height: 50px;
  color: ${p => p.theme.colors['text-primary']};
`
