import React from 'react';
import Header from './components/Header/index';
import Wrapper from './components/Wrapper/index';
import ClickyCardList from './components/ClickyCardList/index';
import profiles from './friends.json';
import './App.css';

class App extends React.Component {
  state = { profiles: profiles };

  render() {
    return (
      <>
        <Header />
        <Wrapper>
          <ClickyCardList profiles={this.state.profiles} />
        </Wrapper>
      </>
    );
  }
}

export default App;
