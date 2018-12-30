import React from 'react';
import Head from './Head';
import Header from './header';
import Footer from './footer';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './Globals';

import './all.sass';

const App = ({ data, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head data={data} />
        <GlobalStyle />
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
