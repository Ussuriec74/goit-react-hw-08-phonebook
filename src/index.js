import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import './index.css';
import { theme } from 'components/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);