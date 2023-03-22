import React from 'react';

import { ThemeProvider } from 'styled-components';

import PageExample from '../pages/PageExample';
import GlobalStyle from '../styles/GlobalStyle';
import { defaultTheme } from '../theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PageExample />
    </ThemeProvider>
  );
}

export default App;
