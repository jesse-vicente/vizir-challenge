import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f1f4f8;

    --red: #e52d4d;
    --orange: #f55d4e;

    --blue: #2684ff;
    --green: #004751;
    --green-light: #04d361;

    --gray: #868686;
    --gray-light: #c7c7c7;

    --text-title: #273760;
    --text-body: #969cb3;

    --black: #0b0d21;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    width: 100vw;
    height: 100vh;
    background: var(--background);
    -webkit-font-smoothing: antialised;
  }

  body, textarea, button {
    font-family: 'Poppins', sans-serif !important;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
    margin-bottom: 0;
  }

  button, select {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ant-card-head-title {
    font-weight: 600;
  }

  .ant-modal-title {
    font-weight: 600;
    font-size: 1.2rem;
  }
`;
