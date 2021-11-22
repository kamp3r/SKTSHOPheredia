import React, {Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <Fragment>
      <Header />
      <ItemListContainer greeting="Bienvenido a SKTSHOP!" />
    </Fragment>
  );
}

export default App;
