//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="nav">
      <h href="/" className="site-title">SummarSci</h>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="../about">About</Link>
        </li>
        <li>
          <Link to="../help">Help</Link>
        </li>
        <li>
          <Link to="../contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;