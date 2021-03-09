import 'react-perfect-scrollbar/dist/css/styles.css';
import React from 'react';
import {useRoutes} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import 'src/mixins/chartjs';
import theme from 'src/theme';
import routes from 'src/routes';
import setupStore from './redux'
import {Provider} from 'react-redux';

const store = setupStore({}, { debug: false })

const App = () => {
  const routing = useRoutes(routes)

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {routing}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
