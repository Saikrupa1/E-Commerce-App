// client/src/App.js
import React, { useEffect, useState } from "react";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return ( <
            div style = {
                { padding: "2rem" } } >
            <
            h1 > eCommerce Store < /h1> <
            h2 > Products < /h2> {
                products.map(product => ( <
                    div key = { product.id }
                    style = {
                        { marginBottom: "1rem" } } > { product.name } - $ { product.price } { " " } <
                    button onClick = {
                        () => addToCart(product) } > Add to Cart < /button> <
                    /div>
                ))
            } <
            h2 > Cart < /h2> <
            ul > {
                cart.map((item, index) => < li key = { index } > { item.name } - $ { item.price } < /li>)} <
                    /ul> <
                    strong > Total: $ { total } < /strong> <
                    /div>
                );
            }

            export default App;