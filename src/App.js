import React from 'react';
import UserInput from './components/UserInput/UserInput';
import UserOutput from './components/UserOutput/UserOutput';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <UserInput />
        <UserOutput username="brands" />
        <UserOutput username="brands" />
        <UserOutput username="brands" />
      </div>
    );
  }
}

export default App;
