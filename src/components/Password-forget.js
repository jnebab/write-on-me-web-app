import React, { Component } from 'react';

export default class PasswordForget extends React.Component {
  render() {
    return (
      <div>
        <form>
            <input type="password" placeholder="New password"/>
            <input type="password" placeholder="Confirm new password"/>
            <button>Update Password</button>
            <a href="">Forgot password?</a>
        </form>
        <p>Dont have an account? <a href="">Sign Up</a></p>
      </div>
    );
  }
}


