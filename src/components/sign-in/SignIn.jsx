import React from 'react';
import './sign-in.styles.scss';
import SignInAndSignUpPage from '../../pages/sign-in-and-sign-up/SignInAndSignUp';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    return (
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form>
          <label htmlFor="emailInput">
            Email
            <input name="email" type="email" value={this.state.email} required />
          </label>
          <label htmlFor="passwordInput">
            Password
            <input name="password" type="password" value={this.state.password} required />
          </label>

          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
