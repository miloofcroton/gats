import React, { Fragment } from 'react';
import Head from './Head';
import Header from './header';
import Footer from './footer';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './Globals';

import Data from './Data';

import addIcons from './fontAwesome';
addIcons();


const App = ({ data, children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Head data={data} />
        <GlobalStyle />
        <Header />
        {children}
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
};

export default Data(App);
