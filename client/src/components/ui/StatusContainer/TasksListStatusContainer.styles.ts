import styled from 'styled-components'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import ColorsHandler from 'utils/stylesHandlers/colors'
import { txtOflow } from 'styles/uiKit'

export const Container = styled.div<{
  bgColor: TasksListTitleColorsEnum
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  height: 20px;
  padding: 1px 4px;
  border-radius: 3px;
  background: ${props =>
    ColorsHandler.tasksListTitle(props.bgColor, props.theme)};
`

export const Title = styled.p`
  font-size: 14px;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${props => props.theme.colors['text-primary']};
`
