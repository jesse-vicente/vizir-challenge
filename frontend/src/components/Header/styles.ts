import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 3rem;

  @media (max-width: 540px) {
    padding: 1.5rem;
  }
`;

export const Title = styled.h1`
  color: var(--black);
  font-size: 2.5rem;
  margin-right: auto;
`;

export const Menu = styled.nav`
  ul {
    display: flex;
    align-items: center;
  }

  a {
    color: var(--gray);
    margin-right: 4rem;
    text-decoration: none;
  }

  button {
    width: 140px;
    height: 48px;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 2rem;
    background: var(--orange);
    border: 3px solid var(--orange);
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9)
    }

    &:first-of-type {
      color: var(--orange);
      font-weight: bold;
      background: transparent;
      border: 3px solid var(--gray-light);
    }
  }

  button + button {
    margin-left: 1rem;
  }

  svg {
    display: none;
    cursor: pointer;
    color: var(--gray);
  }

  @media (max-width: 1366px) {
    a, button {
      display: none;
    }

    svg {
      display: block;
    }
  }
`;

interface BurgerMenuProps {
  open: boolean;
}

export const BurgerMenu = styled.nav<BurgerMenuProps>`
  display: ${props => props.open ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--orange);

  strong {
    top: 2rem;
    left: 2rem;
    position: absolute;
    color: #fff;
    font-size: 2rem;
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    li {
      width: 100%;
      text-align: center;
      padding: 2rem;
      transition: all 0.2s;

      a {
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
        text-align: center;
        text-decoration: none;
        border: 0;
      }

      &:hover {
        transform: translateY(-4px);
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  svg {
    top: 2rem;
    right: 2rem;
    position: absolute;
    color: #fff;
    cursor: pointer;
  }
`;
