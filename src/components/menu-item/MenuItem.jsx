import React from 'react';
// import PropTypes from 'prop-types';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// MenuItem.propTypes = {
//   title: PropTypes.string,
// };

// MenuItem.defaultProps = {
//   title: 'Hats',
// };

export default MenuItem;
