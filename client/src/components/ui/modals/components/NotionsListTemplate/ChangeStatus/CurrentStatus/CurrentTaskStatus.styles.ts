import styled from 'styled-components'
import { TasksListTitleColor } from 'models/decor/colors'
import { Theme } from 'themes/theme.model'
import { dFlex, txtOflow } from 'styles/variables'
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
  box-shadow: ${props =>
    `${
      props.theme.identifier === Theme.LIGHT
        ? 'rgb(55 53 47 / 16%)'
        : 'rgb(255 255 255 / 13%)'
    } 0 -1px inset`};
  background: ${props => props.theme.colors['bg-curr-task-status']};
`

export const Container = styled.div<{
  bgColor: TasksListTitleColor
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: max-content;
  height: 20px;
  padding: 1px 0 1px 4px;
  border-radius: 3px;
  background: ${props =>
    ColorsHandler.tasksListTitle(props.bgColor, props.theme)};
`

export const IconContainer = styled.div`
  ${dFlex.center};
  width: 20px;
  height: 20px;

  svg {
    cursor: pointer;
    opacity: 0.5;
    fill: ${props => props.theme.svgFills.primary} !important;

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
  color: ${props => props.theme.colors['text-primary']};
`

export const SearchInput = styled.input`
  height: 100%;
  width: 100%;
  font-size: 14px;
  color: ${props => props.theme.colors['text-primary']};
  caret-color: ${props => props.theme.colors['caret-primary']};

  &::placeholder {
    color: ${props => props.theme.colors['text-placeholder-primary']};
  }
`
