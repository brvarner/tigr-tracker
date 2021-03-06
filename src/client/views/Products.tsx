import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


const Products = (props: ProductsProps) => {
    const [products, setProducts] = useState([]);
    

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/products');
            if (res.ok) {
                const products = await res.json();
                setProducts(products);
            }
        })()
    }, [])

    const trackAlert = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        Swal.fire(
            'Item Tracked!',
            'You can now view this item in your products page',
            'success'
        )
    }

    
    return (
        <main className="container" >
            <h1> Products </h1>
            <section className="row justify-content-center mt-5">
                {products.map(product => (
                    <div className="col-3" key={`product-card-${product.id}`}>
                        <div className="card shadow-lg my-2">
                            <div className="card-body">
                                <img src={product.image} alt="item image" className="card-img-top" />
                                <h4 className="card-title my-2">{product.product_title}</h4>
                                <p className="card-subtitle text-muted">{product.description}</p>
                                <p className="card-text">Price: $ {product.regular_price}</p>
                                <p className="card-text">Sale Price: $ {product.sale_price}</p>
                                <button className="btn btn-primary" onClick={e => trackAlert(e)}>Track</button>
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