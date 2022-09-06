import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items-list/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import {CartProvider} from "./context/CartContext";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greetings="¡Bienvenidos!" />}
            />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route
              path="/cart"
              element={<Cart />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
