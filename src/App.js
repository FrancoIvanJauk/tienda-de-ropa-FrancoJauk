import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'





function App() {
  return (
    <BrowserRouter>
          <NavBar/>
      <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
      <Route path='/detalles/:itemId' element={<ItemDetailContainer/>}/>
      <Route path='/Cart' element={<Cart/>}></Route>

      <Route path='*' element={ <Navigate to='/'/> }/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
