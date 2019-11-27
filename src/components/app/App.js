/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../pages/homepage/Homepage";
import ShopPage from "../pages/shop/ShopPage";
import Header from "../header/Header";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-up/SignInAndSignUp";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { setCurrentUser } from "../../redux/user/user.actions";
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount = () => {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  };

  componentWillUnmount = () => {
    this.unsubscribeFromAuth();
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin">
            {currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />}
          </Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
