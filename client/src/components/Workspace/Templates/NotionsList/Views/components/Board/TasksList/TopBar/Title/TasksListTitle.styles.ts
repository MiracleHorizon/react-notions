import styled from 'styled-components'
import colorsHandler from 'utils/stylesHandlers/colors'
import { bgTransitions, dFlex, txtOflow } from 'styles/variables'
import { TasksListTitleColor } from 'models/decor/colors'

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
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }
`

export const Content = styled.div<{ color: TasksListTitleColor }>`
  ${dFlex.center};
  width: 100%;
  min-height: 20px;
  padding: 1px 4px;
  border-radius: 3px;
  background: ${props =>
    colorsHandler.tasksListTitle(props.color, props.theme)};
`

export const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-primary']};
`
