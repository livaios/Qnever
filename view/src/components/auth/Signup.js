import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import './Login.css';

class SignUp extends Component {
    constructor() {
      super();
      this.state = {
        username: '',
        password: '',
        error: '',
      };
  
      this.handlePassChange = this.handlePassChange.bind(this);
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.dismissError = this.dismissError.bind(this);
    }
  
    dismissError() {
      this.setState({ error: '' });
    }
  
    handleSubmit(evt) {
      evt.preventDefault();
  
      if (!this.state.username) {
        return this.setState({ error: 'Username is required' });
      }
  
      if (!this.state.password) {
        return this.setState({ error: 'Password is required' });
      }
  
      return this.setState({ error: '' });
    }
  
    handleUserChange(evt) {
      this.setState({
        username: evt.target.value,
      });
    };
  
    handlePassChange(evt) {
      this.setState({
        password: evt.target.value,
      });
    }
  
    render() {

  
      return (
        <React.Fragment>
        <div className="center">
            <div>
            <h1>
                Welcome to Qnever
            </h1>
            <h3>
                Where you never have to wait in line again
            </h3>
            </div>
          <form onSubmit={this.handleSubmit}>
            {
              this.state.error &&
              <h3 data-test="error" onClick={this.dismissError}>
                <button onClick={this.dismissError}>✖</button>
                {this.state.error}
              </h3>
            }
            <label>User Name</label>
            <br/>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />
            <br/>
            <label>Password</label>
            <br/>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
            <br/>
            <input type="submit" value="Log In" data-test="submit" />
          </form>
        </div>
        <br/>
        <div className ="center">
        <Button onClick={this.handleSignUp}>
            SignUp
        </Button>
        </div>
        </React.Fragment>
      );
    }
  }
  
  export default SignUp;