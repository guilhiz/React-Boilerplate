import React from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/GlobalStyle';
import { defaultTheme } from '../theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>
        <div>Ola mundo</div>
      </div>
    </ThemeProvider>
  );
}

export default App;
