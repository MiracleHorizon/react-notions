import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  padding: 8px 12px;

  div[data-el='outline-input-wrapper'] {
    margin-top: 10px;
    
    input {
      height: 28px;
    }
  }

  div[data-btn='clear-input'] {
    top: 50%;
    transform: translateY(-50%);
  }

  div[data-btn='options'] {
    background: ${p => p.theme.colors['bg-modal-primary']};
  }
`

export default Container
