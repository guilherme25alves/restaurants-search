import React from 'react';
import { ThemeProvider } from 'styled-components'; // Responsável por receber o tema que configuramos globalmente e disponiblizá-lo para toda aplicação
import { Reset } from 'styled-reset';

import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
