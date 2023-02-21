import axios from 'axios';
import { useState, useEffect } from 'react';
import Product from '../components/Product';
import Navbar from '../components/Navbar';

function ProductsPage() {
    const [category, setCategory] = useState("all");
    const [products, setProducts] = useState([]);
    const [showProducts, setShowProducts] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        const promise = axios.get("https://fakestoreapi.com/products");
        promise.then(function (response) {
            setProducts(response.data);
            setShowProducts(response.data);
            setLoading(false);
        }).catch(function (error) {
            console.log("Error: ", error);
            setLoading(false);
            setError(true);
        });
    }, []);

    // const handleSelect = async (event) => {
    //     const cat = event.target.value;
    //     setCategory(cat);

    //     let res;
    //     try {
    //         setLoading(true);
    //         if (cat === "all") {
    //             res = await axios.get("https://fakestoreapi.com/products");
    //         } else {
    //             res = await axios.get(
    //                 `https://fakestoreapi.com/products/category/${cat}`
    //             );
    //         }
    //         setLoading(false);
    //         setProducts(res.data);
    //     } catch(err) {
    //         setError(true);
    //     }
    //     console.log("res: ", res);
    // }

    const handleSelect = (event) => {
        const cat = event.target.value;
        setCategory(cat);

        // take copy of the state
        let updatedProducts = [...products];

        if (cat !== "all") {
            // modify the copy
            updatedProducts = updatedProducts.filter((curProduct) => {
                return curProduct.category === cat;
            });
        }

        // give the copy to setState
        setShowProducts(updatedProducts);
    }

    // if (isLoading) return <p>Loading...</p>;
    // if (isError) return <p>Some error occurred!</p>

    return (
        <div>
            <Navbar />
            <div className='productList'>

            <p>Products Page</p>
            <select onChange={handleSelect} value={category}>
                <option value="all">All</option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewellery</option>
                <option value="men's clothing">Men's clothing</option>
                <option value="women's clothing">Women's clothing</option>
            </select>

            {isLoading ? 
                <p>Loading...</p> :
                <div style={{ display: "flex", flexWrap: 'wrap' }}>
                    {showProducts.map((product) => (
                        <Product key={product.id} productObj={product} />
                        ))}
                </div>
            }
            {isError && <p>Some error occurred!</p>}
        </div>
            </div>
    );
};

export default ProductsPage;
