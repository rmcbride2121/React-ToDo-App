import React from "react";

function ListComponent(props) {
  console.log("This is firstComp props****", props.items);
  return (
    <div>
      <h1>To Do List</h1>
      <ul class="list-group">
        {props.items.map((item, index) => {
          return (
            <div>
              <li key={index}>{item}</li>
              <input type='radio' class="form-control"/>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListComponent;
