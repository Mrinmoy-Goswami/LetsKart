import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import logo from '../assets/logo2.svg';
import "./Navbar.css";
import { useState } from "react";
import { Email } from "@mui/icons-material";

function Navbar() {
  const [email,setEmail] = useState("")
  const cartProducts = useSelector((store) => store.cart.value);

  let nCartItems = 0;
  cartProducts.forEach((productObj) => {
    nCartItems += productObj.qty;
  });
  function handleEmail(e){
   const em = e.target.value;
   setEmail(em);
  //  console.log(email);
  }

  return (
    // <div className='Navbar'>

    // <div style={{ display: "flex" }}>
    //     <Link to="/">
    //         <img src={logo} alt="Logo" />
    //     </Link>
    //     <div style={{ marginLeft: "50px" }}>
    //         <Link to="/products">
    //             <p>Products Page</p>
    //         </Link>
    //     </div>
    //     <div style={{ marginLeft: "30px" }}>
    //         <Link to='/cart'>
    //             <p>Cart ({nCartItems})</p>
    //         </Link>
    //     </div>
    // </div>
    // </div>

    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          LetsKart
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
            <li className="nav-item">
              <Link to={"/"} className="nav-link  mx-5" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link to={"/products"} className="nav-link">
                Products
              </Link>
            </li>

            <li className="nav-item mx-5">
              <Link to={"/Cart"} className="nav-link">
                Cart({nCartItems})
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link to={"/aboutus"} className="nav-link">
                About Us
              </Link>
            </li>

            <li className="nav-item mx-5">
              <Link to={"/privacypolicy"} className="nav-link">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>

          {/* <button
            type="button"
            className="btn btn-primary mx-3"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Login/Signup
          </button> */}

          
<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered ">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Enter yout credentials</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body bg-dark">
        <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email</label>
    <input type="email" onChange={handleEmail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check mx-5 px-5">
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
    {/* <label className="form-check-label text-light" htmlFor="exampleCheck1">Include Gift Card</label> */}
    {/* <p style={{color:"white"}}>Your order total is : Rs.  {totalProductsPrice}</p> */}

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
        <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Logged in </h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <p style={{color:"white"}}>Happy Shopping {email} !!</p>
      </div>
      <div className="modal-footer">
        {/* <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal"></button> */}
      </div>
    </div>
  </div>
</div>

<button 

type="button" className="btn btn-primary mx-2 " data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
  Login/Signup
</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
