import React, { useState } from 'react'
import './App.css'
import TodoLists from './TodoLists';


const App = () => {

  const [text, setText] = useState("");
  const initialData = JSON.parse(localStorage.getItem("todos"));
  const [items, setItems] = useState([...initialData]);

  const deleteItem = (id) => {
    const newItems = items.filter((item, index)=> index !== id)
    setItems(newItems)
    localStorage.setItem("todos", JSON.stringify(newItems))
  }
  
  const addItem = () =>{
    const newItems = [...items, text];
    setItems(newItems)
    setText("");
    window.localStorage.setItem("todos", JSON.stringify(newItems)) 
  }


  return (
    <div className='main_div'>
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" onChange={(e) => {setText(e.target.value)}} name="" id="" value={text} placeholder='Add a Items' onKeyPress={(e) => e.key==="Enter" && addItem()}/>
        <button onClick={addItem}>+</button>
        <ol>
          {items && (
            items.map((item, index) => <TodoLists item={item} index={index} deleteItem={deleteItem} key={index} />)
          )}
        </ol>
      </div>

    </div>
  )
}

export default App
