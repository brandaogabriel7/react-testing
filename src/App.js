import React from 'react';

import Validation from './components/Validation/Validation';

class App extends React.Component {
  state = {
    text: 'batata'
  }

  textChangedHandler = (event) => {
    const text = event.currentTarget.value;
    this.setState({text});
  }

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={this.textChangedHandler} />
        <p>{this.state.text.length}</p>
        <Validation text={this.state.text}/>
      </div>
    );
  }
}

export default App;
