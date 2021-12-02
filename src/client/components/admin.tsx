import * as React from 'react';
import { useState, useEffect } from 'react';

const Admin = (props: AppProps) => {
    const [greeting, setGreeting] = useState<string>('');

    useEffect(() => {
        async function getGreeting() {
            try {
                const res = await fetch('/api/hello');
                const greeting = await res.json();
                setGreeting(greeting);
            } catch (error) {
                console.log(error);
            }
        }
        getGreeting();
    }, []);

    return (
        <form className="container my-5">
            <h1 className="text-primary text-center">Hello {greeting}!</h1>

            <div className="form-group">

            </div>
            <div className="input-group">
                <label htmlFor="Product-Title">Product Title</label>
                <input type="text" placeholder="Product Title" id="admin-product-title" className="admin-input-description form-control" />
                <label htmlFor="Product-Title">SKU</label>
                <input type="text" placeholder="SKU" className="admin-input-description form-control" />
                <label htmlFor="Product-Title">Regular Price</label>
                <input type="text" placeholder="Regular Price" className="admin-input-description form-control" />
                <label htmlFor="Product-Title">Sale Price</label>
                <input type="text" placeholder="Sale Price" className="admin-input-description form-control" />
                <label htmlFor="Product-Title">On Sale?</label>
                <input type="text" placeholder="On Sale?" className="admin-input-description form-control" />
                <label htmlFor="Product-Title">Description</label>
                <input type="text" placeholder="Description" className="admin-input-description form-control" />
            </div>
        </form>
    )
}

interface AppProps { }

export default Admin;








