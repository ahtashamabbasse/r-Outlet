import React, {Component} from 'react';
import {productDetails, storeProducts} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        cart: [],
        productDetails: productDetails
    };
    setProduct = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleProduct = {...item};
            tempProducts = [...tempProducts, singleProduct]
        });
        this.setState(() => {
            return {products: tempProducts}
        })
    };

    componentDidMount() {
        this.setProduct()
    }

    handleDetails = (id) => {
        const product=this.getItem(id);
        //console.log(product)
        this.setState({
            productDetails:product
        })
    };
    addToCart = (id) => {
        let tempProduct=[...this.state.products];
        let index=tempProduct.indexOf(this.getItem(id));
        console.log("index is ",index);
        let product=tempProduct[index];
        product.inCart=true;
        product.count=1 ;
        product.total=product.price;
        this.setState(
            ()=>{
                return {products:tempProduct,cart:[...this.state.cart,product]}
            },
            ()=>{
                console.log(this.state)
            }
        )
    };
    getItem = (id=3) => {
        return this.state.products.find(item => item.id === id);
    };


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart
            }}>

                {this.props.children}

            </ProductContext.Provider>
        );
    }
}


const ProductConsumers = ProductContext.Consumer;

export {ProductProvider, ProductConsumers}