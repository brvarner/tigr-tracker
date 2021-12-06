import React, { useState, useEffect } from 'react';


const Products = (props: ProductsProps) => {
    const [products, setProducts] = useState([]);

    // const getProducts = async () => {
    //     const res = await fetch('/api/products');
    //     const products = await res.json();
    //     setProducts(products);
    // };

    // useEffect(() => {
    //     getProducts();
    // }, []);

    React.useEffect(() => {
        (async () => {
          const res = await fetch('/api/products');
          if (res.ok) {
            const products = await res.json();
            setProducts(products);
          }
        })()
      }, [])

    return (
        <main className="container" >
            <h1> Products </h1>
            <section className="row justify-content-center mt-5">
                {products.map(product => (
                    <div className="col-2" key={`id`}>
                        <div className="card shadow-lg my-2">
                            <div className="card-body">
                                {/* <img src={product.image} alt="item image" className="card-img-top" /> */}
                                <h4 className="card-title">{product.product_title}</h4>
                                <p className="card-subtitle text-muted">{product.description}</p>
                                <p className="card-text">Price: $ {product.regular_price}</p>
                                {/* <p className="card-text">Price: Savings $ {product.dollarSavings}</p> */}
                                <p className="card-text">Sale Price: $ {product.sale_price}</p>
                                <a href="#" className="card-link btn btn-primary">Track</a>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}



interface ProductsProps { }

export default Products