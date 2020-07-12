import React from 'react';
import Nav from './components/Nav/index';
import Header from './components/Header/index';
import Container from './components/Container/index';
import ClickyCardList from './components/ClickyCardList/index';
import Footer from './components/Footer/index';
import profiles from './friends.json';
import './App.css';

class App extends React.Component {
  state = { profiles: profiles, score: 4, maxScore: 6 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.score !== this.state.score) {
      console.log('score changed');
    }
  }

  render() {
    return (
      <>
        <Nav score={this.state.score} />
        <Header />
        <Container>
          <ClickyCardList
            score={this.state.score}
            profiles={this.state.profiles}
          />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
