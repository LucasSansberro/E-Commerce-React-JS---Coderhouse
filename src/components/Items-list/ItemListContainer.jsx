import "../../styles.css";
import BookCard from "./BookCard.jsx";
import libros from "../../libros.json";

function ItemListContainer({ greetings }) {
  return (
    <>
      <h2 className="text-center mt-4">{greetings}</h2>
      <div className="container-fluid ">
        <div className="row justify-content-around mt-5">
          {libros.map((item) => (
            <BookCard key={item.id}
              img={item.img}
              nombre={item.nombre}
              genero={item.genero}
              precio={item.precio}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
