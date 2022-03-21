import './components/NavBar';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';


function App() {
  return (
    <div> <NavBar/>
  
    <div className="productosBox">
        <ItemListContainer/>
    </div>
    </div>


  );
}

export default App;
