import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default function Carttotal({value}) {
    const {clearCart,cartTax,cartSubTotal, cartTotal} = value;

    return (
        <React.Fragment>
            <div className="col-12 mt-2 ml-sm-5  col-sm-10 text-capitalize text-right">
                <Link to={'/'}>
                    <button
                        onClick={() => {
                            clearCart()
                        }}
                        className={'btn btn-outline-danger text-uppercase mb-3 px-3'}>
                        Clear Cart
                    </button>
                </Link>
            </div>
            <div className={'mt-2 ml-sm-5  col-sm-10 text-capitalize text-right'}>
                <h3>Subtotal : <span>${cartSubTotal}</span></h3>
            </div>
            <div className={'mt-2 ml-sm-5  col-sm-10 text-capitalize text-right'}>
                <h3>Tax : <span>${cartTax}</span></h3>
            </div>

            <div className={'mt-2 ml-sm-5  col-sm-10 text-capitalize text-right'}>
                <h3>Total : <span>${cartTotal}</span></h3>
            </div>

        </React.Fragment>
    );
}

