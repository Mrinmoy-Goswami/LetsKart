import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart";
import "./Product.css"
function Product({ productObj }) {
  const styleinside = {
    padding: ".5vw",
    justifyContent: "center",
  };
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productObj));
  };

  return (
    <div className="product" style={{ width: "250px", border: "1px solid white", margin: "20px" }}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/products/${productObj.id}`}
      >
        <div style={{ height: "300px", overflow: "hidden" }}>
          <img
            style={styleinside}
            src={productObj.image}
            width="100px"
            height="100px"
          />
          <h5 style={styleinside}>{productObj.title}</h5>
          <p style={styleinside}>{productObj.description}</p>
        </div>
      </Link>
      <button
        className="addtoCart"
        style={{
          margin: "10px",
          backgroundColor: "black",
          color: "white",
        }}
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
     