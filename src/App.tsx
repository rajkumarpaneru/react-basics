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
      <ListGroup
        items={todos}
        heading={heading}
        onSelectItem={handleSelectItem}
      />

      {/* <Alert>List Items retrieved successfully.</Alert> */}
      {/* 
      {isAlertVisible && (
        <Alert onClick={() => setAlertVisible(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
        </Alert>
      )}

      <Button color="info" onClick={() => setAlertVisible(true)}>
        My Button
      </Button> */}
    </div>
  );
};

export default App;
