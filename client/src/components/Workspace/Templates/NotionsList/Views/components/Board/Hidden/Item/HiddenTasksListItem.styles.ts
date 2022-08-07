import styled from 'styled-components'
import { bgTransitions, dFlex, txtOflow } from 'styles/variables'
import { TasksListTitleColor } from 'models/decor/colors'
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
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
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

export const TitleContainer = styled.div<{ color: TasksListTitleColor }>`
  max-width: 180px;
  width: max-content;
  height: 20px;
  margin-right: 3px;
  padding: 0 4px;
  border-radius: 3px;
  background: ${props =>
    ColorsHandler.tasksListTitle(props.color, props.theme)};
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-primary']};  
`
