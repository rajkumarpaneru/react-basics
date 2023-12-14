import React, { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

const App = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return <Like onClick={handleClick} />;
};

export default App;
