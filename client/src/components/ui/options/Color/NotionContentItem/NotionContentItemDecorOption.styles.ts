import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { bgTransitions, dFlex, txtOflow } from 'assets/styles/uiKit'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import ContentItemColorsHandler from 'utils/ContentItemColorsHandler'

export const Container = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: calc(100% - 8px);
  height: 28px;
  margin: 1px 0;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const DecorPreviewBlock = styled.div<{
  dest: 'color' | 'bg'
  decor: NotionContentItemColorsEnum
}>`
  ${dFlex.center};
  width: 22px;
  height: 22px;
  margin-left: 10px;
  border-radius: 3px;
  ${p =>
    p.theme.identifier === Theme.LIGHT &&
    'box-shadow: rgb(15 15 15 / 10%) 0 0 0 1px inset'};
  background: ${p => p.dest === 'bg'
      ? ContentItemColorsHandler.setBgColor(p.decor, p.theme)
      : 'none'};

  span {
    font-size: 16px;
    font-weight: 500;
    ${txtOflow.ell};
    color: ${p => p.dest === 'color'
        ? ContentItemColorsHandler.setColor(p.decor, p.theme)
        : p.theme.colors['text-primary']};
  }
`

export const DecorTitle = styled.span`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 400;
  color: ${p => p.theme.colors['text-primary']};
`
