import React, { Component } from 'react';

export default class ChangePassword extends Component {
  render() {
    return (
      <div>
        <form>
            <input type="email" placeholder="Email Address"/>
            <button>Reset my password</button>
            <a href="">Forgot password?</a>
        </form>
        <p>Dont have an account? <a href="">Sign Up</a></p>
      </div>
    );
  }
}


