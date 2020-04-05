import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import CartProvider from './providers/cart/cart.provider.jsx';

render(
  <CartProvider>
    <Provider store={store}>
      <HashRouter>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </HashRouter>
    </Provider>
  </CartProvider>,
  document.getElementById('app')
);
