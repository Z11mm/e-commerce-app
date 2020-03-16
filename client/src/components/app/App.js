/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Header from "../header/Header";
import Spinner from "../spinner/Spinner";
import ErrorBoundary from "../error-boundary/ErrorBoundary";

import { checkUserSession } from "../../redux/user/user.actions";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import { GlobalStyle } from "../../GlobalStyles";

const ProductDetails = lazy(() =>
  import("../pages/product-details/ProductDetails")
);
const HomePage = lazy(() => import("../pages/homepage/Homepage"));
const ShopPage = lazy(() => import("../pages/shop/ShopPage"));
const CheckoutPage = lazy(() => import("../pages/checkout/CheckoutPage"));
const SignInAndSignUpPage = lazy(() =>
  import("../pages/sign-in-and-sign-up/SignInAndSignUp")
);

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
    //   addCollectionAndDocuments(
    //     "collections",
    //     SHOP_DATA.map(({ title, items }) => ({ title, items }))
    //   );
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            {/* <Route path="/product/:productId" component={ProductDetails} /> */}
            <Route exact path="/signin">
              {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
            </Route>
          </Suspense>
        </ErrorBoundary>
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
