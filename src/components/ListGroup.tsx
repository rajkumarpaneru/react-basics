import React from "react";

const ListGroup = () => {
  const todos = ["Study", "Exercise", "Code", "Meditate"];
  return (
    <>
      <h1>My Todo List</h1>
      <ul className="list-group">
        {todos.map((todo, index) => (
          <li className="list-group-item" key={index}>
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
