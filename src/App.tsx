import React from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

const App = () => {
  const todos = ["Study", "Exercise", "Code", "Meditate", "Run"];
  const heading = "To Do List";
  return (
    <div>
      <ListGroup items={todos} heading={heading} />
    </div>
  );
};

export default App;
