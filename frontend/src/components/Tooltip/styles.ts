import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  span {
    width: 145px;
    background: var(--orange);
    padding: 8px;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 18%;
    transform: translateX(-50%);
    color: #fff;

    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);

    &::before {
      content: '';
      border-style: solid;
      border-color: var(--orange) transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;
