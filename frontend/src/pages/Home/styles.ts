import styled, { keyframes } from 'styled-components';

import callingImg from '../../assets/calling.svg';

export const Container = styled.div`
  max-width: 1380px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1366px) {
    height: 100vh;
    max-width: 1080px;
    text-align: center;
    flex-direction: column;
  }
`;

const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Content = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${slideFromLeft} 1.25s;

  h1 {
    color: var(--text-title);
    font-size: 4rem;
    line-height: 1.1;
  }

  p {
    margin-top: 3rem;
    font-size: 1.2rem;
    text-align: justify;
    color: var(--gray);
  }

  button {
    width: 240px;
    height: 48px;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 3rem;
    border-radius: 2rem;
    background: var(--orange);
    border: 3px solid var(--orange);
    transition: filter 0.2s, transform 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(0.9);
      transform: translateY(-4px);
    }

    svg {
      margin-left: 8px;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Background = styled.div`
  flex: 1;
  height: 60vh;
  margin-left: 4rem;
  background: url(${callingImg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: ${fadeIn} 1.25s;

  @media (max-width: 1366px) {
    width: 100%;
    margin: 0;
  }
`;
