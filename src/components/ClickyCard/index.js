import React from 'react';
import './style.css';

class ClickyCard extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    !this.state.clicked
      ? this.props.changeScore(true)
      : this.props.changeScore(false);
    this.setState({ clicked: true });
  };

  render() {
    const profile = this.props;
    return (
      <div
        onClick={this.handleClick}
        role="img"
        aria-label="click item"
        className="click-item"
        clicked={this.state.clicked}
        style={{ backgroundImage: `url(${profile.image})` }}>
        {this.state.clicked.toString()}
      </div>
    );
  }
}

export default ClickyCard;
