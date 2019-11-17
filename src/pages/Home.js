import React from 'react';
import { Link } from 'react-router-dom';

import ProductList from '../components/ProductList';

function Home() {
  return (
    <>
      <header>
            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/about">
              <button>About</button>
            </Link>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/products/new" >
                  <i className="material-icons ic-create">create</i>
                </Link>
              </li>
            </ul>
      </header>
      <ProductList />
    </>
  );
}

export default Home;
