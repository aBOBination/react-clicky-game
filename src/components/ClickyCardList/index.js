import React from 'react';
import './style.css';
import ClickyCard from '../ClickyCard/index';

const CardList = (props) =>
  props.profiles.map((profile) => (
    <ClickyCard key={profile.id} changeScore={props.changeScore} {...profile} />
  ));

export default CardList;
