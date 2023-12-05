import React, { useState } from "react";

const ListGroup = () => {
  const todos = ["Study", "Exercise", "Code", "Meditate"];

  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>My Todo List</h1>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
