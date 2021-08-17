import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }


  boxClick = (e) => {
    this.setState({
      bgColor: "red"
    })
  }

  render() {
    return (
      <div className="App">

        <header className='headerStyle'>
          <h1>This is my React test page.</h1>
        </header>

        <article className='experimentsHolder'>
          <h2>Test 1</h2>
          <p>This is an example of a static view.</p>
          <div className='box'></div>
        </article>

        <article className='experimentsHolder'>
          <h2>Test 2</h2>
          <p>This is an example of a basic css animation 'renderd' by react.</p>
          <div className='boxBounce'></div>
        </article>

        <article className='experimentsHolder'>
          <h2>Test 3</h2>
          <p>This is an example of an onClick event 'renderd' by react.</p>
          <div className="boxClickCss" 
          style={{backgroundColor: this.state.bgColor}}
           onClick={this.boxClick}>Click Me!</div>
        </article>

      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
