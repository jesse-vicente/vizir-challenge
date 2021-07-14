import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 2rem;
  width: 100%;

  color: #666360;
  border: 1px solid #cccccc;

  display: flex;
  align-items: center;
  transition: border-color 0.2s;

  & + div {
    margin-top: 8px;
  }

  ${(props) => props.isErrored && css`
    border-color: var(--red);
    border-width: 2px;
  `}

  ${(props) => props.isFocused && css`
    border-color: var(--blue);
    border-width: 2px;
  `}

  input {
    flex: 1;
    border: 0;
    color: var(--gray);
    font-size: 1rem;
    padding: 1rem;
    outline: none;
    appearance: none;
    background: transparent;

    &::placeholder {
      color: var(--gray);
    }

    webkit-autofill {
      background: transparent;
    }
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }

  svg {
    margin-right: 2rem;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  color: var(--red);

  span {
    background: var(--red);
    color: #fff;

    &::before {
      border-color: var(--red) transparent;
    }
  }
`;
