import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import MenuContainer  from './containers/user/menu';
import AdminInterface from './containers/admin/index';
import Footer from './components/footer';
import Navbar from './components/navbar';
import ContainerUser from './containers/user';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Navbar/>
      <AdminInterface/>
      <Footer/> 
      <ContainerUser/>
      </div>
    </Provider>
    
  );
}

export default App;
