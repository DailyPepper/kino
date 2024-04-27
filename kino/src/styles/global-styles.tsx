import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: var(--theme);
    color: var(--text);

  }
  html[data-theme="light"] {
    --theme: #fff;
    --text: #222121;
  }

  html[data-theme="dark"] {
    --theme: #222121;
    --text: #fff;
  }
`;
