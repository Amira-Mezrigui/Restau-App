import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MenuContainer  from './containers/menu';
import AdminInterface from './containers/admin/index';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Navbar/>
      <AdminInterface/>
      <Footer/> 
      <MenuContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
