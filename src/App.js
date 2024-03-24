import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer title='Tienda' />
      
    </div>
  );
}

export default App;

{/*         
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}