import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from '../features/cart';
// import { useContext } from 'react';
// import { GlobalContext } from '../contexts/GlobalContext';
import Navbar from "../components/Navbar";


function CartPage() {
    const cartProducts = useSelector((store) => store.cart.value);
    const dispatch = useDispatch();

    // const { cart, setCart } = useContext(GlobalContext);
    let totalProductsPrice = 0;

    cartProducts.forEach((curProduct) => {
        totalProductsPrice += curProduct.price * curProduct.qty;
    });

    totalProductsPrice =  totalProductsPrice.toFixed(2);
    // totalProductsPrice = Math.round(totalProductsPrice)

    // with context
    // const handleRemoveProduct = (productId) => {
    //     let updatedCart = [...cart];
    //     // get all the product except the product with id = productId on which the click happend.
    //     updatedCart = updatedCart.filter((curProduct) => curProduct.id !== productId);
    //     console.log("updatedCart: ", updatedCart);
    //     setCart(updatedCart);
    // }

    // with redux
    const handleRemoveProduct = (productId) => {
        dispatch(removeItemFromCart(productId));
    }

    return (
        <div style={{textAlign:"center"}}>
            <Navbar/>
            <h2>My Cart</h2>
            <div >
                {cartProducts.map((product) => (
                    <div className = "cartproduct"
                        key={product.id}
                    >
                        <img src={product.image} width="100px" height="100px" />
                        <h4>{product.title}</h4>
                        <p>{product.description}</p>
                        <p>Quantity: {product.qty}</p>
                        <p> <strong>Price: Rs. {product.price * product.qty}</strong></p>
                        <button 
                         style={{
                            margin: "10px",
                            backgroundColor: "black",
                            color: "white",
                          }}
                            onClick={() => handleRemoveProduct(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <h4 
            style={{
                backgroundColor:"black",
                color: "white",
                paddingBottom:"1%",
                
                
            }}
            >Total Price: Rs {totalProductsPrice} </h4>
      





<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Enter Payment options to confirm</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-light">Debit Card number</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-light">Enter CVV</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check mx-5 px-5">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label text-light" htmlFor="exampleCheck1">Include Gift Card</label>
    <p style={{color:"white"}}>Your order total is : Rs.  {totalProductsPrice}</p>

  </div>
  {/* <button type="submit" className="btn btn-primary">Submit</button> */}
</form>
      </div>
      <div className="modal-footer">
        <button className="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Confirm</button>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Yayyyyy! </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        Your Order has been confirmed !!
      </div>
      <div className="modal-footer">
        {/* <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"></button> */}
      </div>
    </div>
  </div>
</div>

<button 
style={{
    marginBottom:"5%",
    marginTop:"0px"
}}type="button" className="btn btn-dark btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
  Buy
</button>
            
        </div>
    )
}

export default CartPage;
