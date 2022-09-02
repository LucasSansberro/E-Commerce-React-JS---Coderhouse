import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items-list/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greetings="¡Bienvenidos!" />}
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<i className="bi bi-cone-striped cono-wip"></i>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
