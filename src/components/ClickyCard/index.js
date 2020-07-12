import React from 'react';
import './style.css';

class ClickyCard extends React.Component {
  state = { clicked: 'false' };

  handleClick = () => {
    this.state.clicked === 'false'
      ? this.setState({ clicked: 'true', score: this.props.score + 1 })
      : this.setState({ clicked: 'false', score: 0 });
    console.log(this.state);
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
        {this.state.clicked}
        {this.state.score}
      </div>
    );
  }
}

export default ClickyCard;
