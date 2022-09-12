import styled from 'styled-components'

export const Form = styled.form`
  input[type='submit'] {
    display: none;
  }

  div[data-el='outline-input-wrapper'] {
    margin-top: 6px;
    margin-bottom: 14px;

    input {
      height: 28px;
      padding: 4px 25px 4px 8px;
    }
  }
`
