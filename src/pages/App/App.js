import React, { Component } from 'react';
import Chars from '../../components/Chars/Chars';

import Validation from '../../components/Validation/Validation';

class App extends Component {
  state = {
    text: 'batata'
  };

  textChangedHandler = (event) => {
    const text = event.currentTarget.value;
    this.setState({ text });
  };

  charClickedHandler = (index) => {
    const chars = this.state.text.split('');
    chars.splice(index, 1);

    const text = chars.join('');
    this.setState({ text });
  };

  render() {
    return (
      <div className="App">
        <input type="text" value={this.state.text} onChange={this.textChangedHandler} />
        <p>{this.state.text.length}</p>
        <Validation text={this.state.text} />
        <Chars text={this.state.text} clicked={this.charClickedHandler} />
      </div>
    );
  }
}

export default App;
