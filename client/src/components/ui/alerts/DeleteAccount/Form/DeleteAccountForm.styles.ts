import styled from 'styled-components'

const Form = styled.form`
  div[data-btn='outline'],
  div[data-el='outline-input-wrapper'] {
    margin-top: 16px;
  }

  div[data-el='outline-input-wrapper'] {
    height: 38px;

    input {
      height: 38px;
      padding: 4px 10px;
    }
  }

  input[type='submit'] {
    display: none;
  }
`

export default Form
