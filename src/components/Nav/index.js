import React from 'react';
import './style.css';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li className="brand">
            <a href="/">Clicky Game</a>
          </li>
          <li className="">Click an image to begin!</li>
          <li>
            Score: {this.props.score} | Top Score: {this.props.maxScore}
          </li>
        </ul>
      </nav>
    );
  }
}
