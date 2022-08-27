import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="row justify-content-around mt-5">
      {items.map((item) => (
        <Item
          key={item.id}
          img={item.img}
          nombre={item.nombre}
          genero={item.genero}
          precio={item.precio}
          stock={item.stock}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ItemList;
