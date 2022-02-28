import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --shape: #ffffff;
    --background: #f0f2f5;

    --blue: #5429cc;
    --blue-light: #6933ff;
    --red: #e52e4d;

    --text-body: #969cb3;
    --text-light: #363f5f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
