import React from 'react';
import './style.css';
import ClickyCard from '../ClickyCard/index';

const CardList = (props) =>
  props.profiles.map((profile) => <ClickyCard {...profile} />);

export default CardList;
