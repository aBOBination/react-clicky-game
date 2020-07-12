import React from 'react';
import './style.css';

class ClickyCard extends React.Component {
  // state = { userName: '' };
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(this.state.userName);
  // };

  handleRemoveCard = (id) => {
    console.log(id);
    const Newfriends = this.state.friends.filter((friend) => friend.id !== id);
    this.setState({ friends: Newfriends });
  };

  render() {
    const profile = this.props;
    return (
      <div id={profile.id} className="card">
        <div className="img-container">
          <img alt={profile.name} src={profile.image} />
        </div>
      </div>
    );
  }
}

export default ClickyCard;
