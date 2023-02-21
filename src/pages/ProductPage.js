import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar";

function ProductPage() {
    const params = useParams();
    const navigate = useNavigate();

    const productId = params.productId;
    const [state, setState] = useState();
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://fakestoreapi.com/products/${productId}`)
            .then((response) => {
                console.log(response);
                setState(response.data);
                setLoading(false);
            })
    }, []);

    const handleButtonClick = () => {
        navigate("/user");
    }

    return (
        <div>
            <Navbar />
            {/* <button onClick={handleButtonClick}>Go to user Page</button> */}
            {/* <p style={{marginLeft:"0px"}}>Product Page</p> */}
            {isLoading ? 
                <p>Loading...</p> :
                <>
                    <div style={{  overflow: "hidden",padding:"10%" }}>

                    {state && <img  width="300px"
            height="300px" src={state.image} alt={state.title} />}
                    <h1>{state && state.title}</h1>
                    <p>{state && state.description}</p>
            </div>
                </>
            }
        </div>
    )
}

export default ProductPage;
