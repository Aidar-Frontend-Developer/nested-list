import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --padding-large: 2rem;
  --padding-medium: 1.5rem;
  --background-color: #fdfdfd;
  --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  --border-radius: 4px;
  --primary-color: #444;
  --font-size-large: 1.5rem;
  --font-size-medium: 1.25rem;
  --border-color: #888;
  --action-button-color: #007bff;
  --action-button-hover-color: #e0e0e0;
  --action-button-disabled-color: #aaa;
  }

  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: var(--background-color);
  }
`;

export default GlobalStyle;
