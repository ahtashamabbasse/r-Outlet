import React, {Component} from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {ButtonContainer} from "./Button";
import {Link} from "react-router-dom";
import {ProductConsumers} from "../context";

class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumers>
                    {(value) => {
                        const {
                            id,
                            company,
                            img,
                            title,
                            price,
                            inCart,
                            info
                        } = value.productDetails;
                        return (
                            <div className={'container py-5'}>
                                {/* Title */}
                                <div className={'row'}>
                                    <div className={'col-10 max-auto text-center text-slanted text-blue'}>
                                        <h1>{title}</h1>
                                    </div>
                                </div>
                                {/* End Title */}
                                {/*Product info*/}
                                <div className={"row"}>
                                    <div className={"col-10 col-md-6 my-3 text-capitalize"}>
                                        <img alt={title} src={"/" + img} className={'img-fluid'}/>
                                    </div>
                                    <div className={"col-10 col-md-6 my-3 text-capitalize"}>
                                        <h2>Model : {title}</h2>
                                        <h4 className={'text-title text-muted mt-4 mb-2 text-uppercase'}>
                                            Made by: {company}
                                        </h4>
                                        <h4 className={'text-blue '}>
                                            <strong>Price: {price}</strong>
                                        </h4>
                                        <p className={'text-capitalize font-weight-bold mt-3 mb-0 '}>
                                            Some info about product
                                        </p>
                                        <p className={'text-muted '}>
                                            {info}
                                        </p>
                                        <div>
                                            <Link to={'/'}>
                                                <ButtonContainer>
                                                    Back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer cart disabled={inCart} onClick={()=>{value.addToCart(id)}}>
                                                {inCart ? "inCart" : "Add to Cart"}
                                            </ButtonContainer>


                                        </div>
                                    </div>

                                </div>
                                {/*Product info*/}

                            </div>
                        )
                    }}
                </ProductConsumers>
            </React.Fragment>
        );
    }
}

export default Details;