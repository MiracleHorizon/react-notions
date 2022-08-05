import styled from 'styled-components'
import { lightTheme } from 'themes/light'

export const Wrapper = styled.div`
  position: relative;
  top: 20%;
  width: 310px;
  user-select: none;

  div[data-el='divider'] {
    background: rgb(55 53 47 / 9%);
  }
`

export const Form = styled.form`
  margin-top: 10px;
  margin-bottom: 5px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  div[data-input='outline'] {
    color: ${lightTheme.colors['text-primary']};
    background: ${lightTheme.colors['bg-modal-secondary']};

    &::placeholder {
      opacity: 0.6;
    }
  }
`

export const Label = styled.label`
  margin: 4px 0;
  font-size: 12px;
  color: rgba(55, 53, 47, 0.65);
`
