import React, {Component} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ProductConsumers} from "../../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "../Button";
import Title from '../Title'
import Cartcolumn from "./Cartcolumn";
import Emptycart from "./Emptycart";
import Cartlist from "./Cartlist";

class Cart extends Component {
    render() {
        return (
            <section>

                <ProductConsumers>
                    {value => {
                        const {cart} = value
                        if (cart.length) {
                            return (
                                <React.Fragment>
                                    <Title name={"Your"} title={'Cart'}/>
                                    <Cartcolumn/>
                                    <Cartlist value={value}/>
                                </React.Fragment>
                                )
                        } else {
                            return <Emptycart/>
                        }
                    }}
                </ProductConsumers>
            </section>
        );
    }
}

export default Cart;