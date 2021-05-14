import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Footer from './Footer';
import Main from './main';
import './style.css';

const App = () => (
  <div className="container">
    <Header title="Stranka Jany" />
    <Main content="Tohle jsem vytvorila ja " />
    <Footer autor="Jana Voborska" />
  </div>
);

render(<App />, document.querySelector('#app'));
