import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MenuContainer  from './containers/menu';
import AdminInterface from './containers/admin/index';

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
      <AdminInterface/>
      <MenuContainer/>
      
      
      </div>
    </Provider>
    
  );
}

export default App;
