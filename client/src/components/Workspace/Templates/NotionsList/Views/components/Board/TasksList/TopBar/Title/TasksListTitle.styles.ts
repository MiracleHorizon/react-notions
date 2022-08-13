import styled from 'styled-components'
import colorsHandler from 'utils/stylesHandlers/colors'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export const Wrapper = styled.div`
  ${dFlex.center};
`

export const Container = styled.div`
  ${dFlex.center};
  max-width: 190px;
  min-height: 27px;
  margin-right: 2px;
  padding: 3px 4px;
  border-radius: 3px;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }
`

export const Content = styled.div<{ color: TasksListTitleColorsEnum }>`
  ${dFlex.center};
  min-height: 20px;
  width: 100%;
  padding: 1px 4px;
  border-radius: 3px;
  background: ${p => colorsHandler.tasksListTitle(p.color, p.theme)};
`

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`
