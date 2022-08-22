import styled from 'styled-components'
import { Theme } from 'themes/theme.model'
import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'
import { bgTransitions, dFlex, txtOflow } from 'styles/uiKit'
import handleTasksListTitleColor from 'utils/stylesHandlers/colors'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 36px;
  margin: 1px 0;

  div[data-btn='copy'] {
    top: 5px;
    right: 5px;
  }

  svg {
    fill: ${p => p.theme.identifier === Theme.LIGHT
        ? p.theme.svgFills.primary
        : p.theme.svgFills.secondary} !important;
  }
`

export const Container = styled.div`
  ${dFlex['center-start']};
  width: 100%;
  height: 100%;

  > div {
    ${dFlex['center-start']};
    height: 36px;
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
  width: 160px;
  margin-right: 10px;

  &:hover {
    background: ${p => p.theme.colors['bg-el-hover-primary']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-el-active-primary']};
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

  ${p => p.styleEvents &&
    `
    cursor: pointer;

    &:hover {
       background: ${p.theme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${p.theme.colors['bg-el-active-primary']};
    }
  `};
`

export const StatusContainer = styled.div<{
  bgColor: TasksListTitleColorsEnum
}>`
  ${dFlex.center};
  width: max-content;
  height: auto;
  padding: 0 4px;
  border-radius: 3px;
  background: ${p => handleTasksListTitleColor(p.bgColor, p.theme)};
`

export const Title = styled.span`
  color: ${p => p.theme.colors['text-secondary']};
`

export const Value = styled.span`
  color: ${p => p.theme.colors['text-primary']};
`

export const EmptyStatus = styled.span`
  font-size: 14px;
  color: ${p => p.theme.colors['text-secondary']};
`
