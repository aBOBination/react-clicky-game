import React from 'react';
import './style.css';
import ClickyCard from '../ClickyCard/index';

export default class CardList extends React.Component {
  render() {
    return this.props.profiles.map((profile) => (
      <ClickyCard
        key={profile.id}
        changeScore={this.props.changeScore}
        {...profile}
      />
    ));
  }
}
