import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from '../componentes/itemContenedor/itemConteiner';
import ItemDetailContainer from '../componentes/itemContenedor/contenedorItemDos';
const App = () => {
  
  return (
    <> 
      <Navbar/>
      <itemConteiner/>
      <contenedorItemDos/>
    </>
      
  );
}

export default App;