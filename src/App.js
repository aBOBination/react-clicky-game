import React from 'react';
import Wrapper from './components/Wrapper/index';
import Nav from './components/Nav/index';
import Header from './components/Header/index';
import Container from './components/Container/index';
import ClickyCardList from './components/ClickyCardList/index';
import Footer from './components/Footer/index';
import profiles from './friends.json';
import './App.css';

class App extends React.Component {
  state = { profiles: profiles, score: 0, maxScore: 6 };

  changeScore = (status) => {
    status
      ? this.setState({ score: this.state.score + 1 })
      : this.setState({ score: 0 });
  };

  resetClicked = () => {
    //
  };

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} />
        <Header />
        <Container>
          <ClickyCardList
            score={this.state.score}
            profiles={this.state.profiles}
            changeScore={this.changeScore}
          />
        </Container>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
