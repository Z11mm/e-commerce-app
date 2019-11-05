import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CustomButton from '../custom-button/CustomButton';
import './header.styles.scss';

class Header extends React.PureComponent {
  redirect = () => {
    const { history } = this.props;
    if (history) {
      history.goBack();
    }
  }
  render() {
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/shop">
            CONTACT
          </Link>
          <Link className="option" to="/shop">
            SIGN IN
          </Link>

          <CustomButton onClick={this.redirect}>
              back
          </CustomButton>
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
