import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListComponent from './listComponent'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      items: []
    }
  }

  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }

  inputUpdate = event => {
    this.setState({input: event.target.value})
  }

  formSubmit = event => {
    event.preventDefault()
    this.setState({
      items: [...this.state.items, this.state.input],
      input: ''
    })
    console.log("This is state***", this.state.items)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.formSubmit} class="form-group">
            <input value={this.state.input} onChange={this.inputUpdate} class="form-control"/>
          </form>
          <ListComponent items={this.state.items} />
        </header>
      </div>
    );
  }
  
}

export default App;

