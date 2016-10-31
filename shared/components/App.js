import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render () {
    return (
      <div>
        <header>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><Link to='/'>Link Home</Link></li>
            <li><Link to='/about'>Link About</Link></li>
          </ul>
        </header>
        <section>
          {this.props.children}
        </section>
      </div>
    );
  }
}