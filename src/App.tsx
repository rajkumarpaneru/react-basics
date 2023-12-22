import React, { useState } from "react";
import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
import UpdateState from "./components/UpdateState";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

const App = () => {
  const handleClear = () => {
    setCartItems([]);
  };

  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <Navbar cartItemCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClear} />
    </div>
  );
};

export default App;
