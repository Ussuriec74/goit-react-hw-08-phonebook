import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';
import './index.css';
import { theme } from 'components/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook/">
      <ThemeProvider theme={theme}>
        <Provider store={store}>       
          <App />       
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);