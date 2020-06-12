import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MenuContainer  from './containers/menu';
import AddToMenu from './containers/admin/addToMenu';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      
      <MenuContainer/>
      <AddToMenu/>  
      
      </div>
    </Provider>
    
  );
}

export default App;
