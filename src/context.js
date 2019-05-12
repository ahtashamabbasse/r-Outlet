import React, {Component} from 'react';
import {storeProducts, productDetails} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        productDetails: productDetails
    };
    setProduct=()=>{
        let tempProducts=[];
        storeProducts.forEach(item=>{
            const singleProduct={...item};
            tempProducts=[...tempProducts,singleProduct]
        });
        this.setState(()=>{
            return {products:tempProducts}
        })
    };
    componentDidMount() {
        this.setProduct()
    }

    handleDetails = () => {
        console.log("Here is product details ")
    };
    handleCart = () => {
        console.log("Here is Cart Data")
    };
    addToCart= (id) => {
        console.log("Here is Cart Data  and id :: ",id )
    };



    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleCart: this.handleCart,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumers = ProductContext.Consumer;

export {ProductProvider, ProductConsumers}