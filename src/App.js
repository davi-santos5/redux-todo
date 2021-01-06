import React, {useState} from 'react';

import List from './component/List';
import Input from './component/Input';
import Button from './component/Button';

function App() {
  const [list, setList] = useState([])
  const [inputValue, setInputValue] = useState('')

  const addItem = () => setList([...list, inputValue])
  const clearInputValue = () => setInputValue('')
  const addToDo = () => {
    addItem()
    clearInputValue()
  }
  const handleInputChange = (event) => setInputValue(event.target.value)

  return (
    <>
      <h1>To Do List</h1>
      <List list={list} />
      <Input value={inputValue} onChange={handleInputChange}/>
      <Button action={addToDo}>Add Task</Button>
    </>
  );
}

export default App;
