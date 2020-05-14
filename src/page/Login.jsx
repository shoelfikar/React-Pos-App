import React, {Component} from 'react'
import Style from './Login.module.css'
import API from '../axios/Api'

class Login extends Component {
  state = {
    user: [],
    email: '',
    password: ''
  } 
  getItem = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  getData = e => {
    e.preventDefault()
    API.post('/user/login',{
      email: this.state.email,
      password: this.state.password
    })
    .then((res) => {
      localStorage.setItem('id', res.data.result.id_user)
      localStorage.setItem('token', res.data.result.token)
      this.props.history.push("/home")
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){
    return(
      <div>
        <div className={Style.modaladd}>
          <div className="card col-md-4 mx-auto mt-5">
            <div className="card-body">
              <form onSubmit={this.getData}>
                <div className="text-center">
                  <h1 className="mb-5">Login</h1>
                </div>
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-4 col-form-label">Email</label>
                  <div className="col-sm-8">
                    <input 
                    type="text" 
                    className="form-control"
                    value={this.state.email}
                    onChange={this.getItem}
                    name="email"
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-4 col-form-label">Password</label>
                  <div className="col-sm-8 mb-4">
                    <input 
                    type="password" 
                    className="form-control"
                    value={this.state.password}
                    onChange={this.getItem}
                    name="password"
                    />
                  </div>
                </div>
                <button className="btn btn-outline-primary col-sm-4" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login