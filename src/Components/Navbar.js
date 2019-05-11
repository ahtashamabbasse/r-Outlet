import React, {Component} from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from '../logo.png'
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";
import styled from 'styled-components'

class Navbar extends Component {
    render() {
        return (
            <React.Fragment>
                <NavWrapper className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to={'/'}>
                        <img className="navbar-brand" alt={'logo'} style={{height: '80px'}} src={logo}/>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={'/'}>Products</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            <li>
                                <Link to={'cart'} className="nav-link">
                                    <ButtonContainer>
                                        <i className="fa fa-cart-plus"></i> Cart
                                    </ButtonContainer>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </NavWrapper>
            </React.Fragment>
        );
    }
}


const NavWrapper = styled.nav`
background: var(--mainBlue) !important;

.nav-link{
  font-size: 20px;
  color: var(--white);
  text-transform: capitalize;
}

`
export default Navbar;