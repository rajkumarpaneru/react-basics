import React, { useEffect, useRef, useState } from "react";
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
import ProductList from "./components/ProductList";

const connect = () => console.log("Connecting");
const disconnect = () => console.log("Disconnecting");

const App = () => {
  useEffect(() => {
    connect();

    return () => disconnect();
  });
  return <div></div>;
};

export default App;
