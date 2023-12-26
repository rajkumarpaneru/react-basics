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

const App = () => {
  const [category, setCategory] = useState("");

  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="Household">Household</option>
      </select>
      <ProductList category={category} />
    </div>
  );
};

export default App;
