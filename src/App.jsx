
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


function App() {

  let comentarioapp = 'hola'
  const onAdd = (cant) => {
    console.log(cant)
  }
   
  return (
    <>
    <NavBar />
    <Titulo/>
    <ItemListContainer comentario={comentarioapp}/>
    <ItemCount initial={1} stock={12} onAdd={onAdd}/>
    <ItemDetailContainer/>
    
    </>
  );
}

export default App;
  