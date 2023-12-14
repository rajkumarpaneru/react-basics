import React, { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  let todos = ["Study", "Exercise", "Code", "Meditate", "Run"];
  // todos = [];
  const heading = "To Do List";

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleOnClick = () => {
    console.log("Clicked");
  };

  const [isAlertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <Button onClick={() => {}}>My Button</Button>
    </div>
  );
};

export default App;
