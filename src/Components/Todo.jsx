import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [inputList, setInputList] = useState("");

  const [items, setItems]= useState([]);

  const handleChange=(e)=>{
  setInputList(e.target.value)};

  const itemList =(event)=>{
    setItems((prevState)=>{
      return [...prevState, inputList]
    })
    setInputList("");
  };
  const handleDelete = (ind) => {
    const filtered = items.filter((a, b) => b !== ind )
    setItems(filtered);
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>To-Do List</h1>
        <br />
        <input type="text" placeholder="Add Items" onChange={handleChange} value={inputList} />
        <button className="add_input" onClick={itemList}>+</button>
          <button onClick={handleDelete}>Delete</button>
        <ol>
          {items.map((itemData, ind)=>{
            return <li>{itemData}</li>
          })}
        </ol>
      </div>
    </div>
  );
};

export default Todo;
