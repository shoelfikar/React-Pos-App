import React, {Component} from 'react'


class Navbar extends Component{
  render(){
    return(
      <div className="row fixed-top mr-0 ml-0 navbar-home">
        <div className="col-md-9 d-flex justify-content-between align-items-center">
        <i className="fas fa-home fa-3x ml-4 menu"></i>
        <h1>Food Item</h1>
        <i className="fas fa-search fa-3x mr-3 menu"></i>
        </div>
        <div className="col-md-3 d-flex justify-content-center">
          <h1>Card</h1>
          <label>0</label>
        </div>
      </div>
    )
  }
}

export default Navbar