import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Components/Navbar";
import ProductsList from "./Components/ProductsList";
// import Product from "./Components/Product";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import Default from "./Components/Default";
import {Switch,Route} from "react-router-dom";
import Modal from "./Components/modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Navbar/>
          <Switch>
              <Route exact path={'/'} component={ProductsList}/>
              <Route exact path={'/details'} component={Details}/>
              <Route exact  path={'/cart'} component={Cart}/>
              <Route path={'*'} component={Default}/>
          </Switch>
          <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
