/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../header/Header";

import { checkUserSession } from "../../redux/user/user.actions";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { GlobalStyle } from "../../GlobalStyles";

const HomePage = lazy(() => import("../pages/homepage/Homepage"));
const ShopPage = lazy(() => import("../pages/shop/ShopPage"));
const CheckoutPage = lazy(() => import("../pages/checkout/CheckoutPage"));
const SignInAndSignUpPage = lazy(() =>
  import("../pages/sign-in-and-sign-up/SignInAndSignUp")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<div>...Loading</div>}>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin">
            {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
          </Route>
        </Suspense>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
