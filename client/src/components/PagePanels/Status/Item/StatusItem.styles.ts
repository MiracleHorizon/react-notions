import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'
import ColorsHandler from 'utils/stylesHandlers/colors'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 34px;
  margin: 1px 0;

  div[data-btn='copy'] {
    top: 5px;
    right: 5px;
  }

  svg {
    fill: ${props =>
      props.theme.identifier === Theme.LIGHT
        ? props.theme.svgFills.primary
        : props.theme.svgFills.secondary} !important;
  }
`

export const Container = styled.div`
  ${dFlex['center-start']};
  width: 100%;
  height: 100%;

  > div {
    ${dFlex['center-start']};
    height: 32px;
    border-radius: 3px;
    ${bgTransitions.esInOut50};

    span {
      font-size: 14px;
      line-height: 24px;
      ${txtOflow.ell};
    }
  }
`

export const TitleContainer = styled.div`
  cursor: pointer;
  margin-right: 10px;
  width: 160px;

  &:hover {
    background: ${props => props.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-el-active-primary']};
  }

  svg {
    margin-left: 6px;
    margin-right: 8px;
  }
`

export const ValueContainer = styled.div<{ styleEvents?: boolean }>`
  flex: 1;
  padding-right: 30px;
  padding-left: 7px;

  ${props =>
    props.styleEvents &&
    `
    cursor: pointer;

    &:hover {
       background: ${props.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${props.theme.colors['bg-el-active-primary']};
    }
  `};
`

export const StatusContainer = styled.div<{
  bgColor: TasksListTitleColorsEnum
}>`
  ${dFlex.center};
  width: max-content;
  height: 20px;
  padding: 1px 4px;
  border-radius: 3px;
  background: ${props =>
    ColorsHandler.tasksListTitle(props.bgColor, props.theme)};
`

export const Title = styled.span`
  color: ${props => props.theme.colors['text-secondary']};
`

export const Value = styled.span`
  color: ${props => props.theme.colors['text-primary']};
`

export const EmptyStatus = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors['text-secondary']};
`
