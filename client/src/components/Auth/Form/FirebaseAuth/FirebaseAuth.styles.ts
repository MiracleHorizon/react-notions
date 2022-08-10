import styled from 'styled-components'
import { dFlex } from 'styles/uiKit'
import { lightTheme } from 'themes/light'

export const Wrapper = styled.div`
  ${dFlex.center};
  flex-direction: column;
  max-width: 320px;
  margin-bottom: 15px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  div[data-btn='outline'] {
    height: 36px;
    margin-bottom: 5px;
    border: 1px solid rgba(55, 53, 47, 0.16);
    box-shadow: rgb(15 15 15 / 5%) 0 1px 2px;

    &:hover {
      background: ${lightTheme.colors['bg-el-hover-primary']};
    }

    &:active {
      background: ${lightTheme.colors['bg-el-active-primary']};
    }

    p {
      font-weight: 500;
      color: ${lightTheme.colors['text-primary']};
    }
  }
`
