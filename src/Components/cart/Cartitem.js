import React, {Component} from 'react';

export default function Cartitem({item,value}) {
    const {id, title, img, price, inCart, count=0, total} = item
    const {incrementProduct,decrementProduct,removeProduct}=value
    const imgStyle = {
        height: "80px",
        width: "70px"
    }
    return (
        <React.Fragment>
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="mx-auto col-lg-2 col-md-3 col-sm-6">
                        <p className="text-uppercase"><img src={img} alt={title} className={'img-fluid'}
                                                           style={imgStyle}/></p>
                    </div>
                    <div className="mx-auto col-lg-2  col-md-3 col-sm-6">
                        <p className="text-uppercase">{title}</p>
                    </div>
                    <div className="mx-auto col-lg-2 col-md-3 col-sm-6">
                        <p className="text-uppercase">${price}</p>
                    </div>
                    <div className="mx-auto col-lg-2 col-md-3 col-sm-6">
                        <div className={'d-flex justify-content-center'}>
                            <span onClick={()=>{decrementProduct(id)}} className={'btn-block mx-1'}>-</span>
                            <span className={'btn-block mx-1'}>{count}</span>
                            <span onClick={()=>{incrementProduct(id)}} className={'btn-block mx-1'}>+</span>
                        </div>


                    </div>
                    <div className="mx-auto col-lg-2 col-md-3  col-sm-6">
                        <p onClick={()=>{removeProduct(id)}} className="text-uppercase"><i style={{color: "orange"}} className={'fas fa-trash'}/></p>
                    </div>
                    <div className="mx-auto col-lg-2 col-md-3  col-sm-6">
                        <p className="text-uppercase">{price*count}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

