import React, {Component} from 'react';
import {productDetails, storeProducts} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        cart: storeProducts,
        productDetails: productDetails,
        modalProduct: productDetails,
        modalOpen: false,
        cartTax: 0,
        cartSubTotal: 0,
        carttotal: 0
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
        const product = this.getItemProducts(id);
        //console.log(product)
        this.setState({
            productDetails: product
        })
    };
    addToCart = (id) => {
        let tempProduct = [...this.state.products];
        let index = tempProduct.indexOf(this.getItemProducts(id));
        console.log("index is ", index);
        let product = tempProduct[index];
        product.inCart = true;
        product.count = 1;
        product.total = product.price;
        this.setState(
            () => {
                return {products: tempProduct, cart: [...this.state.cart, product]}
            },
            () => {
                console.log(this.state)
            }
        )
    };
    getItemCart = (id) => {
        return this.state.cart.find(item => item.id === id);
    };
    getItemProducts = (id) => {
        return this.state.products.find(item => item.id === id);
    };
    openModal = id => {
        console.log('open modal id ', id)
        const product = this.getItemProducts(id);
        this.setState({
            modalProduct: product,
            modalOpen: true
        })

    };
    closeModal = () => {
        console.log('close modal')
        this.setState({
            modalOpen: false
        })
    };
    incrementProduct = (id) => {
        let tempProduct = [...this.state.cart];
        console.log(tempProduct);
        let index = tempProduct.indexOf(this.getItemCart(id));
        let product = tempProduct[index];
        product.count += 1;
        this.setState(
            () => {
                return {cart: tempProduct}
            },
            () => {
                console.log(this.state)
            }
        )
    };
    decrementProduct = (id) => {
        let tempProduct = [...this.state.cart];
        let index = tempProduct.indexOf(this.getItemCart(id));
        let product = tempProduct[index];
        product.count = product.count > 1 ? (product.count - 1) : 1;
        this.setState(
            () => {
                return {cart: tempProduct}
            },
            () => {
                console.log(this.state)
            }
        )
    };
    removeProduct = (id) => {
        console.log("id:: ",id);
        let tempProduct = [...this.state.cart];
        let remainingProducts=tempProduct.filter((value)=>{
           return value.id!==id
        });
        console.log(remainingProducts)
        this.setState(
            () => {
                return {cart: remainingProducts}
            },
            () => {
                console.log(this.state)
            }
        )
    };
    clearCart = () => {

    };


    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetails: this.handleDetails,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                incrementProduct: this.incrementProduct,
                decrementProduct: this.decrementProduct,
                clearCart: this.clearCart,
                removeProduct: this.removeProduct
            }}>

                {this.props.children}

            </ProductContext.Provider>
        );
    }
}


const ProductConsumers = ProductContext.Consumer;

export {ProductProvider, ProductConsumers}