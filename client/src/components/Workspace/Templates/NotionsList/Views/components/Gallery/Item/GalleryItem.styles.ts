import styled from 'styled-components'
import stylesHandler from 'utils/stylesHandlers/galleryItem'
import { bgTransitions } from 'styles/uiKit'

export const Wrapper = styled.div<{ primary: boolean; isSelected?: boolean }>`
  cursor: pointer;
  position: static;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 190px;
  border-radius: 3px;
  box-shadow: ${props => stylesHandler(props.primary, props.theme)};
  background: ${props =>
    props.primary
      ? props.isSelected
        ? props.theme.colors['bg-selection']
        : props.theme.colors['bg-gallery-item']
      : 'inherit'};
  user-select: none;
  ${bgTransitions.esInOut50};

  &:hover {
    position: relative;
    background: ${props =>
      !props.isSelected
        ? props.primary
          ? props.theme.colors['bg-gallery-item-hover']
          : props.theme.colors['bg-el-hover-primary']
        : props.theme.colors['bg-selection']};
  }

  &:active {
    background: ${props =>
      !props.isSelected
        ? props.primary
          ? props.theme.colors['bg-gallery-item-active']
          : props.theme.colors['bg-el-active-primary']
        : props.theme.colors['bg-selection']};
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 3px;

  div[data-btn='options'] {
    top: 8px;
    right: 8px;
    width: 26px !important;
  }
`

export const Cover = styled.div<{ coverUrl: string }>`
  width: 100%;
  min-height: 150px;
  height: 100%;
  padding: 1px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-image: url(${props => props.coverUrl});
  background-size: cover;
  object-position: center 50%;
`

export const TitleContainer = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  margin-top: auto;
  padding: 8px 10px;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  white-space: pre-wrap;
  word-break: break-word;
  color: ${props => props.theme.colors['text-primary']};
`

export const Untitled = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${props => props.theme.colors['text-secondary']};
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  width: 18px;
  height: 18px;
  margin-right: 5px;
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
