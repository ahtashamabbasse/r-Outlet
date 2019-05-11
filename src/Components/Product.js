import React, {Component} from 'react';
import styled from 'styled-components'
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";

export default class Product extends Component {

    render() {
        const {id, title, img, price, inCart, count, total} = this.props.product;
        return (
            <React.Fragment>
                <Productwrapper className="col-md-6 col-lg-3 mx-auto my-9 ">
                    <div className={'card'}>
                        <div className={'img-container py-4'}>
                            <Link to={'/details'}>
                                <img src={'/' + img} className={'card-img-top'}/>
                            </Link>
                            <button className={'cart-btn'} disabled={inCart} onClick={this.props.handleCart}>

                                {
                                    inCart ? (<p className={'text-capitalize mb-0'}>In Cart</p>) : (
                                        <i className={'fas fa-cart-plus'}></i>)
                                }
                            </button>


                        </div>
                        <div className={'card-footer d-flex justify-content-between'}>
                            <p className={'align-self-center mb-0'}>{title}</p>
                            <h5 className={'text-blue align-self-center mb-0 font-italic'}>{price}</h5>

                        </div>
                    </div>
                </Productwrapper>
            </React.Fragment>
        );
    }
}

const Productwrapper = styled.div`
    .card{
      border-color:transparent ;
      transition: 1s all linear;
    }
    .card-footer{
      border-color:transparent ;
      transition: 1s all linear;
    }
    &:hover{
      .card{
        border: 0.09rem solid rgba(0,0,0,0.2) ;
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2) ;
      }
      .card-footer{
        background-color: rgba(247,247,247);
      }
      .cart-btn{
        transform:translate(0%,0%);
      }
     
    }
    .img-container{
        position: relative;
        overflow: hidden;
    }
    .card-img-top{
    width: 30%;
    display: flex; 
    margin: 0px auto;
    transition: 1s all linear;
    }
    .img-container:hover .card-img-top{
    transform: scale(1.2);
    }
    .cart-btn{
      position: absolute;
      right: 0px;
      bottom: 0px;
      padding: 0.2rem 0.4rem;
      background: var(--lightBlue);
      color:  var(--mainWhite);
      border: none;
      border-radius : 0.8rem 0rem 0rem 0rem;
      transform:translate(100%,100%);
      transition: 1s all linear;  
    }
    .cart-btn:hover{
      color:var(--mainDark);
    }

    
`;