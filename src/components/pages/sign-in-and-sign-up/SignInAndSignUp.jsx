import React from 'react';
import SignIn from '../../sign-in/SignIn';
import SignUp from '../../sign-up/SignUp';
import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
