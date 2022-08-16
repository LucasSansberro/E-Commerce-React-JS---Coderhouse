import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/Items-list/ItemListContainer";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greetings="¡Bienvenidos!" />
    </div>
  );
};

export default App