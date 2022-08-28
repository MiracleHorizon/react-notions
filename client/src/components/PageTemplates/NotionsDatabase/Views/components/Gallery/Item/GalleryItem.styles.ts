import styled from 'styled-components'
import { bgTransitions, dFlex } from 'assets/styles/uiKit'
import ITheme, { Theme } from 'themes/theme.model'

export const Wrapper = styled.div<{ primary: boolean; isSelected?: boolean }>`
  cursor: pointer;
  position: relative;
  ${dFlex.center};
  min-height: 190px;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: ${p => stylesHandler(p.primary, p.theme)};
  background: ${p =>
    p.primary
      ? p.isSelected
        ? p.theme.colors['bg-selection']
        : p.theme.colors['bg-gallery-item']
      : 'inherit'};
  user-select: none;
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p =>
      !p.isSelected
        ? p.primary
          ? p.theme.colors['bg-gallery-item-hover']
          : p.theme.colors['bg-el-hover-primary']
        : p.theme.colors['bg-selection']};
  }

  &:active {
    background: ${p =>
      !p.isSelected
        ? p.primary
          ? p.theme.colors['bg-gallery-item-active']
          : p.theme.colors['bg-el-active-primary']
        : p.theme.colors['bg-selection']};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 3px;

  div[data-btn='options'] {
    top: 8px;
    right: 8px;
    width: 26px;
  }
`

export const Cover = styled.div<{ coverUrl: string }>`
  width: 100%;
  min-height: 150px;
  height: 100%;
  padding: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-image: url(${p => p.coverUrl});
  background-size: cover;
  object-position: center 50%;
`

export const TitleContainer = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  ${dFlex['center-start']};
  width: 100%;
  height: max-content;
  margin-top: auto;
  padding: 8px 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-word;
  color: ${p => p.theme.colors['text-primary']};
`

export const Untitled = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${p => p.theme.colors['text-secondary']};
`

export const IconContainer = styled.div`
  ${dFlex.center};
  min-width: 18px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const stylesHandler = (primary: boolean, theme: ITheme): string => {
  const primaryStyleColor = `rgb(15 15 15 / ${
    theme.identifier === Theme.LIGHT ? 10 : 20
  }%)`

  const secondaryStyleColor =
    theme.identifier === Theme.LIGHT
      ? 'rgb(55 53 47 / 9%)'
      : 'rgb(255 255 255 / 13%)'

  return primary
    ? `${primaryStyleColor} 0 0 0 1px, ${primaryStyleColor} 0 2px 4px`
    : `${secondaryStyleColor} 0 0 0 1px inset`
}
