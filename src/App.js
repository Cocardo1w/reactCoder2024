import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/Navbar/Navbar";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { ContextProvider } from "./context/CartContext";
import Sucursales from "./components/Sucursales/Sucursales";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Tienda" />} />
            <Route
              path="/categoria/:categoryid"
              element={<ItemListContainer title="TIENDA" />}
            />
            <Route
              path="/producto/:productid"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            
            <Route path="*" element={<PageNotFound />} />
            <Route path="/Sucursales" element={<Sucursales/>} title="Sucursales" />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
