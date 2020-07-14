import React from 'react';
import Wrapper from './components/Wrapper/index';
import Nav from './components/Nav/index';
import Header from './components/Header/index';
import Container from './components/Container/index';
import ClickyCardList from './components/ClickyCardList/index';
import Footer from './components/Footer/index';
import profiles from './friends.json';
import './App.css';

export default class App extends React.Component {
  state = {
    profiles: profiles,
    score: 0,
    maxScore: 0,
    message: 'Click an image to begin!'
  };

  componentDidMount() {
    this.changeClicked(false);
  }

  changeScore = (status, id) => {
    if (status) {
      this.setState({ score: this.state.score + 1 });
      this.changeClicked(status, id);
    } else {
      this.changeMax();
      this.setState({ score: 0 });
      this.changeClicked(status, id);
    }
  };

  changeClicked = (status, id) => {
    const resetProfiles = [];
    if (status) {
      this.state.profiles.forEach((profile) => {
        if (profile.id === id) {
          profile.clicked = true;
        }
        resetProfiles.push(profile);
        this.setState({ message: 'You guessed correctly!' });
      });
    } else {
      this.state.profiles.forEach((profile) => {
        profile.clicked = false;
        resetProfiles.push(profile);
        this.setState({ message: 'You guessed incorrectly!' });
      });
    }
    this.setState({ profiles: this.shuffle(resetProfiles) });
  };

  changeMax = () => {
    if (this.state.score > this.state.maxScore) {
      this.setState({ maxScore: this.state.score });
    }
  };

  shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  render() {
    return (
      <Wrapper>
        <Nav
          message={this.state.message}
          score={this.state.score}
          maxScore={this.state.maxScore}
        />
        <Header />
        <Container>
          <ClickyCardList
            score={this.state.score}
            profiles={this.state.profiles}
            changeScore={this.changeScore}
            init={this.init}
          />
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}
