import react from 'react';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';


const MyProducts = (props: MyProductsProps) => {
    const [products, setProducts] = useState([]);
    
    

    React.useEffect(() => {
        (async () => {
            const res = await fetch('/api/products');
            if (res.ok) {
                const products = await res.json();
                const prodArr = products.filter(product => product.id < 3)
                setProducts(prodArr);
            }
        })()
    }, [])

    const stopAlert = (event: React.MouseEvent<HTMLButtonElement>, id) => {
        event.preventDefault();
        const arr = products.filter(product => product.id !== id)
        setProducts(arr)
        Swal.fire(
            'Item Removed!',
            'You are no longer tracking this item',
            'error'
        )
    }

    
    return (
        <main className="container" >
            <h1>My Products </h1>
            <section className="row justify-content-center mt-5">
                {products.map(product => (
                    <div className="col-2" key={`product-card-${product.id}`}>
                        <div className="card shadow-lg my-2">
                            <div className="card-body">
                                <img src={product.image} alt="item image" className="card-img-top" />
                                <h4 className="card-title my-2">{product.product_title}</h4>
                                <p className="card-subtitle text-muted">{product.description}</p>
                                <p className="card-text">Price: $ {product.regular_price}</p>
                                <p className="card-text">Sale Price: $ {product.sale_price}</p>
                                <button className="btn btn-danger" onClick={e => stopAlert(e, product.id)}>Stop Tracking</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

interface MyProductsProps { }

export default MyProducts