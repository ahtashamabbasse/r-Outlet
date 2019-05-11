import React, {Component} from 'react';
import {storeProducts, productDetails} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: storeProducts,
        productDetails: productDetails
    };

    handleDetails = () => {
        console.log("Here is product details ")
    };
    handleCart = () => {
        console.log("Here is Cart Data")
    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleCart: this.handleCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumers = ProductContext.Consumer;

export {ProductProvider, ProductConsumers}