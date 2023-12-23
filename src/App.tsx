import React, { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import UpdateState from "./components/UpdateState";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText";
import ExpandableTextRefactored from "./components/ExpandableTextRefactored";
import Form from "./components/Form";

const App = () => {
  const handleClear = () => {
    setCartItems([]);
  };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
