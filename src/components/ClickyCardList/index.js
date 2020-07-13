import React from 'react';
import './style.css';
import ClickyCard from '../ClickyCard/index';

export default class CardList extends React.Component {
  reset() {}

  render() {
    return this.props.profiles.map((profile) => (
      <ClickyCard
        key={profile.id}
        score={this.props.score}
        changeScore={this.props.changeScore}
        init={this.init}
        {...profile}
      />
    ));
  }
}
