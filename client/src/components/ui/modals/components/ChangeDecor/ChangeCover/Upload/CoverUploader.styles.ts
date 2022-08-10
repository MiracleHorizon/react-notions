import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Wrapper = styled.div`
  ${dFlex['center-start']};
  flex-direction: column;
  height: 130px;
  padding: 13px 0;
  user-select: none;

  p {
    margin-top: 15px;
    font-size: 12px;
    color: ${props => props.theme.colors['text-cover-titles']};
  }
`

export const Button = styled.div`
  position: relative;
  ${dFlex.center};
  width: 95%;
  height: 32px;
  border: 1px solid ${props => props.theme.colors['br-cover-uploader']};
  border-radius: 3px;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors['text-primary']};
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${props => props.theme.colors['bg-cover-uploader-hover']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-cover-uploader-active']};
  }
`
