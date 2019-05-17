import React, {Component} from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Cartcolumn extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container-fluid text-center d-none d-lg-block">
                    <div className="row">
                        <div className="mx-auto col-lg-2 col-md-3 col-sm-6">
                            <p className="text-uppercase">Product</p>
                        </div>
                        <div className="mx-auto col-lg-2  col-md-3 col-sm-6">
                            <p className="text-uppercase">Name of Product</p>
                        </div>
                        <div className="mx-auto col-lg-2 col-md-3 col-sm-6">
                            <p className="text-uppercase">Price</p>
                        </div>
                        <div className="mx-auto col-lg-2 col-md-3 col-sm-6">
                            <p className="text-uppercase">Quantity</p>
                        </div>
                        <div className="mx-auto col-lg-2 col-md-3  col-sm-6">
                            <p className="text-uppercase">Remove</p>
                        </div>
                        <div className="mx-auto col-lg-2 col-md-3  col-sm-6">
                            <p className="text-uppercase">Total</p>
                        </div>



                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Cartcolumn;