import * as React from 'react';
import { useState, useEffect } from 'react';

const Admin = (props: AppProps) => {
    const [title, setTitle] = useState<string>('');
    const [sku, setSku] = useState<string>('');
    const [regPrice, setRegPrice] = useState<number>(0);
    const [salePrice, setSalePrice] = useState<number>(0);
    const [onSale, setOnSale] = useState<number>(0);
    const [desc, setDesc] = useState<string>('');


    return (
        <div className="container">
            <div className="bg-light">
                <form className="my-5">
                    <h1 className="mb-5 text-success text-center">Admin</h1>
                    <div className="card rounded" >
                        <div className="card-body">
                            <div className="input-group d-flex flex-column">

                                <div id="productTitle" className="mb-3">
                                    <label htmlFor="Product-Title">Product Title</label>
                                    <input type="text" placeholder="Product Title" id="admin-product-title" className="admin-input-description form-control" />
                                </div>

                                <div id="sku" className="mb-3">
                                    <label htmlFor="Product-Title">SKU</label>
                                    <input type="text" placeholder="SKU" className="admin-input-description form-control" />
                                </div>

                                <div id="regPrice" className="mb-3">
                                    <label htmlFor="Product-Title">Regular Price</label>
                                    <input type="text" placeholder="Regular Price" className="admin-input-description form-control" />
                                </div>

                                <div id="salePrice" className="mb-3">
                                    <label htmlFor="Product-Title">Sale Price</label>
                                    <input type="text" placeholder="Sale Price" className="admin-input-description form-control" />
                                </div>

                                <div id="onSale" className="mb-3">
                                    <label htmlFor="Product-Title">On Sale?</label>
                                    <input type="text" placeholder="On Sale?" className="admin-input-description form-control" />
                                </div>

                                <div id="desc" className="mb-3">
                                    <label htmlFor="Product-Title">Description</label>
                                    <input type="text" placeholder="Description" className="admin-input-description form-control" />
                                </div>
                                
                                <div id="desc" className="mb-3">
                                    <label htmlFor="Product-Title">Image Link</label>
                                    <input type="text" placeholder="Image Link" className="admin-input-description form-control" />
                                </div>

                                <button type="button" className="btn btn-primary btn-sm ">Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
interface AppProps { }

export default Admin;
