import React, {Component} from 'react'
// import image from '../assets/img/bear.png'
import  './Content.css'
import API from '../axios/Api'

class Content extends Component{
  constructor(){
    super()
    this.state = {
      foods: []
    }
  
  }
  getFoods(){
    API.get('menu/')
      .then((res) => {
        this.setState({
          foods: res.data.result
        })
      })
  }
  logout(){
    // e.preventDefault()
    delete localStorage.token
    delete localStorage.id
  }
  componentDidMount(){
    this.getFoods()
  }
  render(){
    return(
      <div>
        <div className="myhome">
          <div className="mymenu">
            <div className="navbar-as">
              <div className=" d-flex justify-content-between align-items-center pt-2">
                <i className="fas fa-home fa-3x ml-4 menu"></i>
                <h1>Food Item</h1>
                <i className="fas fa-search fa-3x mr-5 menu"></i>
                </div>
            </div>
            <div className="menu-food">
              <div className="sidebar">
                <div className="text-center mt-5 mb-5">
                  <i className="fas fa-utensils fa-3x menu"></i>
                  </div>
                  <div className="text-center mb-5">
                  <i className="fas fa-clipboard-list fa-3x menu"></i>
                  </div>
                  <div className="text-center mb-5">
                  <i className="fas fa-plus-circle fa-3x menu"></i>
                  </div>
                  <div className="text-center mb-5">
                  <i className="fas fa-sign-out-alt fa-3x menu" onClick={this.logout}></i>
                  </div>
              </div>
              <div className="food">
                <div className="food-main">
                    {this.state.foods.map((food,i) => 
                  // eslint-disable-next-line no-unused-expressions
                  <div className="food-item" key={i}>
                  
                    <img src={food.image} alt=""/>
                    <h3>{food.name}</h3>
                    <p>Rp. {food.price}</p>
                    
                    
                  </div>
                    )}
                </div>
              </div>
            </div>
          </div>
          <div className="cart">
            <div className="cart-notif">

            </div>
            <div className="cart-item">

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Content