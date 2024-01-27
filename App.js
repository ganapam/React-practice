import React from 'react';
import { Provider } from 'react-redux';
import Cake from './redux/cake';
import store from './redux/cakestore'; 

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Cake />
      </div>
    </Provider>
  );
}
export default App;
