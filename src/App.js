import './App.css';
import './components/NavBar'
import NavBar, { ItemListContainer } from './components/NavBar';

function App() {
  return (
    <div> <NavBar/>
    <main><ItemListContainer/></main>
    </div>


  );
}

export default App;
