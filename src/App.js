import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';
import Section1 from './components/Section1/Section1';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer title='Tienda' />
      <Section1 />
    </div>
  );
}

export default App;

