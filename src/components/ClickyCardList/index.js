import React from 'react';
import './style.css';
import ClickyCard from '../ClickyCard/index';

const CardList = (props) =>
  props.profiles.map((profile) => (
    <ClickyCard key={profile.id} score={props.score} {...profile} />
  ));

export default CardList;
