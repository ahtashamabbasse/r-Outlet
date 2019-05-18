import React, { Component } from 'react';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title-text-uppercase pt-5">
              <h1 className="display-3">404 Error</h1>
              <h2>The requested url <span className={'text-danger'}>{this.props.location.pathname}</span> wasn't found</h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Default;