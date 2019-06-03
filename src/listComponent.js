import React from "react";

function ListComponent(props) {
  console.log("This is firstComp props****", props.items);
  return (
    <div>
      <h1>To Do List</h1>
      <ul class="list-group">
        {props.items.map((item, index) => {
          return (
            <li>
              <label>
                <input 
                  type='checkbox'
                  onClick = {()=>props.deleteTodo(props.index)}
                 />
              </label>
              <span key={index}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListComponent;
