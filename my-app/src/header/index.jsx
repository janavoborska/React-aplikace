import React from 'react';
const Header = (props) => (
  <header>
    <div className="logo"></div>
    <h1>{props.title}</h1>
  </header>
);

export default Header;
