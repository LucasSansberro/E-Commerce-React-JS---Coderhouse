import "../styles.css";
const BookCard = (props) => {
  const { nombre, genero, precio, img } = props;

  return (
    <div className="card bookCard text-center">
      <img className="card-img-top" src={img} alt="Imagen de libro" />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{genero}</p>
        <p href="" className="btn btn-primary ">
          Comprar por ${precio}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
