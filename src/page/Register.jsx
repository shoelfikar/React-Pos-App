import React, {Component} from 'react'
import Style from './Login.module.css'
import API from '../axios/Api'

class Register extends Component {
  state = {
    email: '',
    password: '',
    username: ''
  }
  getForm = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  registerForm = e => {
    e.preventDefault()
    API.post('user/register', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
    .then((res)=> {
      console.log(res)
      alert('register sukses')
      this.props.history.push("/")
    })
    .catch(error => {
      console.log(error)
    })
  }
  render(){
    return(
      <div>
        <div className={Style.modaladd}>
          <div class="card col-md-4 mx-auto mt-5">
            <div class="card-body">
              <form onSubmit={this.registerForm}>
                <div className="text-center">
                  <h1 className="mb-5">Register</h1>
                </div>
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-3 col-form-label">Username</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.getForm}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-3 col-form-label">Email</label>
                  <div className="col-sm-9">
                    <input type="email" className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.getForm}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="" className="col-sm-3 col-form-label">Password</label>
                  <div className="col-sm-9">
                    <input type="password" className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.getForm}
                    />
                  </div>
                </div>
                <button className="btn btn-outline-primary col-sm-4" type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) 
  }
}

export default Register
