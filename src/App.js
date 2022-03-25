import './components/NavBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
    <div> 
      <NavBar/>
    
    <div className="productosBox">
        <ItemListContainer/>
    </div>
    <div>
      <ItemDetailContainer/>
    </div>

  
    </div>
  );
}

export default App;
