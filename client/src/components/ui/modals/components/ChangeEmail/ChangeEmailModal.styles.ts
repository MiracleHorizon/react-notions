import styled from 'styled-components'
import { alertBoxShadowPrimary } from 'assets/styles/uiKit'

const Container = styled.div`
  width: 460px;
  margin: auto;
  padding: 32px;
  border-radius: 3px;
  box-shadow: ${p => alertBoxShadowPrimary(p.theme)};
  background: ${p => p.theme.colors['bg-primary']};

  div[data-el='outline-input-wrapper'] {
    height: 28px;
    margin-bottom: 14px;

    input {
      height: 28px;
      padding: 4px 25px 4px 8px;
    }
  }

  div[data-btn='filled'] {
    height: 32px;
    margin: 0;

    span {
      color: white;
    }
  }

  div[data-el='red-error'] {
    margin-bottom: 8px;
  }

  input[type='submit'] {
    display: none;
  }

  p,
  span,
  b {
    font-size: 14px;
    line-height: 21px;
    color: ${p => p.theme.colors['text-primary']};
  }
`

export default Container
