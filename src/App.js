import React, {useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { addToDo } from './store/actions/toDo';

import List from './components/List';
import Input from './components/Input';

import GlobalStyles from './themes/GlobalStyles'

const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: #214E34;
  color: #fff;
  font-size: 20px;
  padding: 12px;
  margin-left: 5px;
`

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
      <GlobalStyles />
      <h1>To Do List</h1>
      <Input value={inputValue} onChange={handleInputChange}/>
      <Button onClick={addItem}>Add Task</Button>
      <List list={toDoList.list}/>
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
