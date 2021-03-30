import React from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'brands'
  }

  usernameChangedHandler() {

  }

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
