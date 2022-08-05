import styled from 'styled-components'

export const Container = styled.div`
  p {
    text-align: center;
    margin-bottom: 15px;
    font-size: 12px;
    color: ${props => props.theme.colors['text-cover-titles']};
  }
`

export const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  div:first-child {
    width: 65%;
  }

  div[data-btn='filled'] {
    width: 80px;
    margin: 0 0 0 10px;
  }
`

export const UploaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 0;
  user-select: none;

  p {
    margin-top: 15px;
    font-size: 12px;
    color: ${props => props.theme.colors['text-cover-titles']};
  }
`

export const UploaderContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 32px;
  border: 1px solid ${props => props.theme.colors['br-cover-uploader']};
  border-radius: 3px;
  font-size: 14px;
  line-height: 24px;
  color: ${props => props.theme.colors['text-primary']};
  transition: background 50ms ease-in;

  &:hover {
    background: ${props => props.theme.colors['bg-cover-uploader-hover']};
  }

  &:active {
    background: ${props => props.theme.colors['bg-cover-uploader-active']};
  }
`
