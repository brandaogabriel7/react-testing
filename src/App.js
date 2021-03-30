import React from 'react';

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
      </div>
    );
  }
}

export default App;
