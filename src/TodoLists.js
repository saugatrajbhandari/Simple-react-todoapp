import React from 'react'


const TodoLists = ({item, index, deleteItem}) => {
    
  return (
    <div className='todo_style'>
    <i className='fa fa-times' aria-hidden="true" onClick={() => deleteItem(index)} />
    <li>{item}</li>
    </div>
  )
}

export default TodoLists