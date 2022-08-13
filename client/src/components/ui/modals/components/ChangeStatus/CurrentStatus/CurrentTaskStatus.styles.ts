import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import { dFlex, txtOflow } from 'styles/uiKit'
import ColorsHandler from 'utils/stylesHandlers/colors'

export const Wrapper = styled.div`
  position: relative;
  ${dFlex['center-start']};
  width: 100%;
  height: 32px;
  padding-left: 7px;
  padding-right: 30px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: ${p =>
    `${
      p.theme.identifier === Theme.LIGHT
        ? 'rgb(55 53 47 / 16%)'
        : 'rgb(255 255 255 / 13%)'
    } 0 -1px inset`};
  background: ${p => p.theme.colors['bg-curr-task-status']};
`

export const Container = styled.div<{
  bgColor: TasksListTitleColorsEnum
}>`
  ${dFlex['center-s-between']};
  width: max-content;
  height: 20px;
  padding: 1px 0 1px 4px;
  border-radius: 3px;
  background: ${p => ColorsHandler.tasksListTitle(p.bgColor, p.theme)};
`

export const IconContainer = styled.div`
  ${dFlex.center};
  width: 20px;
  height: 20px;

  svg {
    cursor: pointer;
    opacity: 0.5;
    fill: ${p => p.theme.svgFills.primary} !important;

    &:hover {
      opacity: 0.4;
    }

    &:active {
      opacity: 0.3;
    }
  }
`

export const Value = styled.p`
  font-size: 14px;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: ${p => p.theme.colors['text-primary']};
  caret-color: ${p => p.theme.colors['caret-primary']};

  &::placeholder {
    color: ${p => p.theme.colors['text-secondary']};
  }
`
