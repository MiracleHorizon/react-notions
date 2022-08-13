import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import ColorsHandler from 'utils/stylesHandlers/colors'

export const Container = styled.div`
  cursor: pointer;
  ${dFlex['center-start']};
  width: 100%;
  height: 30px;
  margin: 2px 0;
  padding: 0 4px;
  border-radius: 3px;
  user-select: none;
  ${bgTransitions.esIn20};

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
  }

  div[data-btn='count'] {
    &:hover {
      background: transparent;
    }

    &:active {
      background: transparent;
    }
  }
`

export const TitleContainer = styled.div<{ color: TasksListTitleColorsEnum }>`
  max-width: 180px;
  width: max-content;
  height: 20px;
  margin-right: 3px;
  padding: 0 4px;
  border-radius: 3px;
  background: ${p => ColorsHandler.tasksListTitle(p.color, p.theme)};
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`
