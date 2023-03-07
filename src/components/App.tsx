import React from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../theme';
import GlobalStyle from '../styles/GlobalStyle';

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
