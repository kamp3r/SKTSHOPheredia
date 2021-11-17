import React, {Fragment} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Fragment>
      <Navbar />
      <ItemListContainer greeting="Bienvenido a SKTSHOP!" />
    </Fragment>
  );
}

export default App;
