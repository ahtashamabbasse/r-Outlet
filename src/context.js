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
    tester = () => {
        console.log("State products :: ", this.state.products[0].inCart);
        console.log("Data products :: ", storeProducts[0].inCart);

        const tempProduct = [...this.state.products];
        tempProduct[0].inCart = true

        this.setState(() => {
            return {products: tempProduct}
        }, () => {
            console.log("State products :: ", this.state.products[0].inCart);
            console.log("Data products :: ", storeProducts[0].inCart)
        });

    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                handleCart: this.handleCart,
            }}>
                <button onClick={this.tester}>Test</button>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}


const ProductConsumers = ProductContext.Consumer;

export {ProductProvider, ProductConsumers}