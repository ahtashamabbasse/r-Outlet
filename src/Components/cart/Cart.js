import React, {Component} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ProductConsumers} from "../../context/context";
import Title from '../Title'
import Cartcolumn from "./Cartcolumn";
import Emptycart from "./Emptycart";
import Cartlist from "./Cartlist";
import Carttotal from "./Carttotal";

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
                                    <Carttotal value={value} history={this.props.history} />

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