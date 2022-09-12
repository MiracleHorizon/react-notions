import styled from 'styled-components'
import { dFlex, txtOflow } from 'assets/styles/uiKit'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import handleTasksListTitleColor from 'utils/stylesHandlers/handleTasksListTitleColor'

export const Container = styled.div<{
  bgColor: TasksListTitleColorsEnum
}>`
  ${dFlex['center-s-between']};
  width: max-content;
  height: 20px;
  padding: 1px 4px;
  border-radius: 3px;
  background: ${p => handleTasksListTitleColor(p.bgColor, p.theme)};
`

export const Title = styled.h6`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  ${txtOflow.ell};
  color: ${p => p.theme.colors['text-primary']};
`
