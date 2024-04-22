import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer title='Tienda' />} >
          </Route>
        </Routes>
            
          
          
      </BrowserRouter>
    </div>
  );
}

export default App;

