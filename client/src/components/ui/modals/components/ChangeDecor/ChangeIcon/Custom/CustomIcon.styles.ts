import styled from 'styled-components'
import { bgTransitions, dFlex } from 'styles/uiKit'

export const Container = styled.div<{ drag: boolean }>`
  background: ${p => p.drag && p.theme.colors['bg-upload-drag']};
  
  p {
    margin-bottom: 15px;
    font-size: 12px;
    text-align: center;
    color: ${p => p.theme.colors['text-cover-titles']};
  }
`

export const LinkContainer = styled.div`
  ${dFlex.center};
  width: 100%;
  margin-top: 10px;

  div:first-child {
    width: 65%;
    
    input {
      height: 28px;
    }
  }

  div[data-btn='filled'] {
    width: 80px;
    margin: 0 0 0 10px;
  }
`

export const UploaderWrapper = styled.div`
  ${dFlex['center-col']};
  padding: 10px 0;
  user-select: none;

  p {
    margin-top: 15px;
    font-size: 12px;
    color: ${p => p.theme.colors['text-cover-titles']};
  }
`

export const UploaderContainer = styled.div`
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
