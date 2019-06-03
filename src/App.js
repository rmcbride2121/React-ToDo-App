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

  deleteTodo = (index) =>{
    const removeTodo = this.state.items;
    removeTodo.splice(index, 1);
    this.setState({items:removeTodo})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.formSubmit} class="form-group">
            <input value={this.state.input} onChange={this.inputUpdate} class="form-control"/>
          </form>
          {this.state.items.map((items, index ) =>(
            <ListComponent 
              items={this.state.items}
              index={index}
              key={index}
              deleteTodo = {this.deleteTodo}
             />
          ))}  
        </header>
      </div>
    );
  }
  
}

export default App;

