import './App.css';
import './components/NavBar';
import NavBar, { ItemListContainer } from './components/NavBar';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div> <NavBar/>
    <main><ItemListContainer/></main>
    <div><ItemCount/></div>
    </div>


  );
}

export default App;
