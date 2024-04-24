import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/Navbar/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='asd' >
      <BrowserRouter>
          <NavBar />
        <Routes>
        
          <Route path='/' element={<ItemListContainer title='Tienda' />} />
          <Route path='/categoria/:categoryid' element={<ItemListContainer title='Tienda' />} />
          <Route path='/producto/:productid' element={<ItemDetailContainer/>} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
            
          
          
    </div>
  );
}

export default App;

