import React from 'react';
import Input from './components/input';
import Button from './components/button';
import ListItem from './components/listItem';
import './App.css';

// import './App.css';

class App extends React.Component  {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      todoList: [],
    }
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    })
  }

  onClickBtn = () => {
    const {inputValue, todoList} = this.state;

    this.setState({
      todoList: [inputValue, ...todoList],
      inputValue: "",
    });
  }

  onRemoveTodo = (toDoName) => {
    const { todoList } = this.state;

    const todoIndex = todoList.findIndex((str) => str === toDoName );

    const newTodoList = [...todoList.slice(0, todoIndex), ...todoList.slice(todoIndex + 1)];
    this.setState({
      todoList: newTodoList,
    })
  }

  render() {
    const {inputValue, todoList} = this.state;

    return (
      <div>
      <div>
        <h1 className='header'>TODO List</h1>
      </div>
      <div className='control'>
      <Input
      value = {inputValue}
      onChange={this.onChangeInput}
      />
      <Button
      name="add TODO"
      onClick={this.onClickBtn}
      />
      </div>
     <div className='table'>
      {todoList.map ((todoStr) => {
        return (
          <ListItem
          key={todoStr}
      toDoName={todoStr}
      remove={this.onRemoveTodo}
      />
        )
      })}
      
     </div>
      </div>
    )
  }
}

export default App;
