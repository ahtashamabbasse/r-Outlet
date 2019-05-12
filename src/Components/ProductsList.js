import React, {Component} from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Title from "./Title";
import {ProductConsumers} from "../context";
import Product from "./Product";

class ProductsList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className={'container'}>
                        <Title name={'Our'} title={'Products'}/>

                        <div className="row">
                            <ProductConsumers>
                                {
                                    (value) => {
                                        // console.log(value)
                                        return value.products.map((product) => {
                                            return <Product key={product.id} product={product}
                                                            handleDetails={value.handleDetails}
                                                            handleCart={value.handleCart}

                                            />
                                        })
                                    }
                                }
                            </ProductConsumers>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductsList;