import React, {useState} from 'react';
import { connect } from 'react-redux';

import { addToDo } from './store/actions/toDo';

import List from './components/List';
import Input from './components/Input';
import Button from './components/Button';

function App({addToDo, toDoList}) {
  const [inputValue, setInputValue] = useState('')

  const clearInputValue = () => setInputValue('')

  const addItem = () => {
    addToDo(inputValue)
    clearInputValue()
  }
  
  const handleInputChange = (event) => setInputValue(event.target.value)

  return (
    <>
      <h1>To Do List</h1>
      <List list={toDoList.list}/>
      <Input value={inputValue} onChange={handleInputChange}/>
      <Button action={addItem}>Add Task</Button>
    </>
  );
}

const mapStateToProps = state => ({
  toDoList: state.toDo
})

export default connect(
  mapStateToProps,
  { addToDo }
)(App);
