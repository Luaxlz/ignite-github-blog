import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    width: 100%;
    border-radius: 6px;
    height: 50px;
    background-color: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};

    padding: 12px 16px;

    color: ${(props) => props.theme['base-text']};
    font-size: ${(props) => props.theme.fontSize['text-m']};
    outline: none;

    &::placeholder {
      font-size: ${(props) => props.theme.fontSize['text-m']};
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme['green-300']};
    color: ${(props) => props.theme['green-300']};
    border-radius: 6px;
    font-weight: bold;
    transition: all 0.2s;
    cursor: pointer;

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme['green-500']};
      border-color: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }
`;
