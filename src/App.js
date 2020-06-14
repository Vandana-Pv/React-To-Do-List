import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

  onFormSubmitHandler = e =>{
    e.preventDefault();
    this.setState({
      newItem: "",
      list: [...this.state.items, this.state.term]
    })
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render(){
    return(
      <div className="App"> 
      {/* <h1> <span className="heading">To Do List</span></h1>
      <h1> <span className="heading">To Do List</span></h1> */}
      <div className="container">
        <h1> To Do List</h1>
      <form onSubmit={this.onFormSubmitHandler}>
          <input 
            type = "text" 
            placeholder="Type item here" 
            value={this.state.newItem}
            onChange = {e =>this.updateInput("newItem",e.target.value)} 
          />
          <button
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          > 
          <i class="material-icons">add_box</i>
          </button>       
      </form>
          <br>
          </br>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button 
                  onClick={() => this.deleteItem(item.id)}
                  >
                  <i class="material-icons">delete</i>
                  </button>
                </li>
              );
            })}
          </ul>
      </div>
      </div>
    )
  }
}

export default App;
