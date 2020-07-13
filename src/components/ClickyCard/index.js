import React from 'react';
import './style.css';

export default class ClickyCard extends React.Component {
  handleClick = () => {
    if (!this.props.clicked) {
      this.props.changeScore(true, this.props.id);
    } else {
      this.props.changeScore(false);
    }
  };

  render() {
    const profile = this.props;
    return (
      <div
        onClick={this.handleClick}
        role="img"
        aria-label="click item"
        className="click-item"
        style={{ backgroundImage: `url(${profile.image})` }}></div>
    );
  }
}
