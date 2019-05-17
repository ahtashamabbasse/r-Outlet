import React, {Component} from 'react';
import {ProductConsumers} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";
import styled from "styled-components";


class Modal extends Component {
    render() {
        return (
            <ProductConsumers>
                {value => {
                    const {modalOpen, closeModal} = value;
                    const {img, price, title} = value.modalProduct;
                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <ModalContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id={'modal'}
                                             className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                            <h5>Item has been added to cart</h5>
                                            <img src={'/'+img} alt={title} className={'img-fluid'}/>
                                            <h5>{title}</h5>
                                            <h5 className={'text-muted'}>Price : ${price}</h5>
                                            <Link to={'/'}>
                                                <ButtonContainer onClick={()=>{closeModal()}}>Continue Shopping</ButtonContainer>
                                            </Link>
                                            <Link to={'/cart'}>
                                                <ButtonContainer cart onClick={()=>{closeModal()}}> Go to Cart</ButtonContainer>
                                            </Link>



                                        </div>
                                    </div>
                                </div>
                            </ModalContainer>
                        )
                    }
                }}
            </ProductConsumers>
        );
    }
}

export default Modal;

const ModalContainer = styled.div`
    
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
#modal{
transition: 10s all linear;
    background-color: var(--mainWhite);
    border-radius: 5px;
}
`;