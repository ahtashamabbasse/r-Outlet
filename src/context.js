import React, {Component} from 'react';
import {productDetails, storeProducts} from "./data";

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        products: [],
        cart: [],
        productDetails: productDetails,
        modalProduct: productDetails,
        modalOpen: false,
        cartTax: 0,
        cartSubTotal: 0,
        cartTotal: 0
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
                this.cartTotal()
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
        console.log('open modal id ', id);
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
        product.total = product.count*product.price;

        this.setState(
            () => {
                return {cart: tempProduct}
            },
            () => {
                this.cartTotal()
                console.log(this.state)
            }
        )
    };
    decrementProduct = (id) => {
        let tempProduct = [...this.state.cart];
        let index = tempProduct.indexOf(this.getItemCart(id));
        let product = tempProduct[index];
        product.count = product.count > 1 ? (product.count - 1) : 1;
        product.total = product.count*product.price;
        this.setState(
            () => {
                return {cart: tempProduct}
            },
            () => {
                this.cartTotal()
                console.log(this.state)
            }
        )
    };
    removeProduct = (id) => {
        console.log("id:: ",id);
        let tempCartProduct = [...this.state.cart];
        let tempProducts = [...this.state.products];
        let remainingProducts=tempCartProduct.filter((value)=>{
           return value.id!==id
        });
        let index = tempProducts.indexOf(this.getItemProducts(id));
        let product = tempProducts[index];
        product.count=0;
        product.total=0;
        product.inCart=false;


        this.setState(
            () => {
                return {cart: remainingProducts,product:tempProducts}
            },
            () => {
                console.log(this.state)
            }
        )
    };
    clearCart = () => {
        this.setState(
            () => {
                return {cart: []}
            },()=>{
                this.setProduct();
                this.cartTotal();
            }
        )
    };

    cartTotal=()=>{
        let subTotal=0;
        this.state.cart.map((item)=>{
            return subTotal+=item.total
        });
        let temptex=parseFloat(0.1 * subTotal).toFixed(2);
        const total=Number(temptex)+Number(subTotal);
        this.setState(()=>{
            return {
                cartTax: temptex,
                cartSubTotal: subTotal,
                cartTotal: total
            }
        })


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