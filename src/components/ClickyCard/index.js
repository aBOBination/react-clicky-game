import React from 'react';
import './style.css';
import profiles from '../../../src/friends.json';

class ClickyCard extends React.Component {
  state = { clicked: this.props.clicked };

  handleClick = () => {
    if (!this.state.clicked) {
      console.log(this.state.clicked);
      this.props.changeScore(true);
      this.setState({ clicked: true });
    } else {
      this.props.changeScore(false);
      this.init(profiles);
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
        style={{ backgroundImage: `url(${profile.image})` }}>
        {/* {this.props.clicked.toString()} */}
      </div>
    );
  }
}

export default ClickyCard;
