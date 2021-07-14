import styled, { keyframes } from 'styled-components';

import { Form as Unform } from '@unform/web';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  height: 80px;
  margin: 0.5rem 0;

  &:first-of-type {
    margin: 0 0 0.5rem;
  }
`;

export const Form = styled(Unform)`
  padding: 1.5rem;

  @media (max-width: 800px) {
    padding: 0.5rem;
  }

  display: flex;
  flex-direction: column;

  button {
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 2rem;
    border: 0;
    background: var(--orange);
    color: #fff;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9)
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  color: var(--orange);

  svg {
    fill: var(--orange);
    margin: 0 0 0 1rem;
  }
`;

export const Label = styled.label`
  color: var(--gray);
  font-weight: 600;
  font-size: 1rem;
  line-height: 19px;
  margin-bottom: 0.5rem;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 2rem;
  animation: ${fadeIn} 1.25s;

  p {
    font-size: 1.25rem;
    color: var(--text-body);

    .green {
      color: var(--green-light)
    }
  }
`;
