import styled from 'styled-components';

import ReactSelect from 'react-select';

export const Container = styled(ReactSelect)`
  color: var(--gray);
  font-size: 1rem;

  .react-select__control {
    background: transparent;
    border-radius: 2rem;
    padding: 0 1rem;
    cursor: pointer;
  }

  .react-select__single-value {
    color: inherit
  }

  svg {
    width: 2rem;
    margin: 0.5rem 0;
    fill: var(--gray);
  }
`;
