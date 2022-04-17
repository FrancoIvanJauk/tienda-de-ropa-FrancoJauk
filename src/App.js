import './components/NavBar/NavBar';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';
import Compra from './components/Compra/Compra';



function App() {

  return (

    <CartProvider>
  
      <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/todo' element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoriaId' element={<ItemListContainer/>}/>
        <Route path='/detalles/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/compra' element={<Compra/>} />
        <Route path='*' element={ <Navigate to='/home'/> }/>
        </Routes>
        <Footer/>

      </BrowserRouter> 

    </CartProvider>

  );
}

export default App;
