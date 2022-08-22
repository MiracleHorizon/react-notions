import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Wrapper = styled.div<{ drag: boolean }>`
  ${dFlex['center-start-col']};
  width: 100%;
  height: 130px;
  padding: 13px 0;
  user-select: none;
  background: ${p => p.drag && p.theme.colors['bg-upload-drag']};

  p {
    margin-top: 15px;
    font-size: 12px;
    color: ${p => p.theme.colors['text-cover-titles']};
  }
`

export const Button = styled.div`
  position: relative;
  ${dFlex.center};
  width: 95%;
  height: 32px;
  border: 1px solid ${p => p.theme.colors['br-cover-uploader']};
  border-radius: 3px;
  font-size: 14px;
  line-height: 24px;
  color: ${p => p.theme.colors['text-primary']};
  ${bgTransitions.esInOut50};

  &:hover {
    background: ${p => p.theme.colors['bg-cover-uploader-hover']};
  }

  &:active {
    background: ${p => p.theme.colors['bg-cover-uploader-active']};
  }
`
