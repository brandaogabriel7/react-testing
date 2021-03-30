import React from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends React.Component {
  state = {
    username: 'brands'
  }

  usernameChangedHandler = (event) => {
    const username = event.currentTarget.value;
    this.setState({username});
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangedHandler} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
