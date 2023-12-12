import React from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";

const App = () => {
  let todos = ["Study", "Exercise", "Code", "Meditate", "Run"];
  // todos = [];
  const heading = "To Do List";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={todos}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
};

export default App;
