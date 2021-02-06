import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Home from './src/screens/Home';
import store, { persistor } from './src/store';

// 1. 상태값 조회하기
const App = () => {
  return (
    <Provider {...{ store }}>
      <PersistGate loading={null} {...{ persistor }}>
        <Home />
      </PersistGate>
    </Provider>
  );
};

export default App;
