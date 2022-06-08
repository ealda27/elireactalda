
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Titulo from './components/Titulo/Titulo';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';



function App() {

  let comentarioapp = 'hola'
  
  return (
    <>
    <NavBar />
    <Titulo/>
    <ItemCount/>
    <ItemListContainer comentario={comentarioapp}/>
    </>
  );
}

export default App;
