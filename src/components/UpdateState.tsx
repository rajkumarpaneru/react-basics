import React, { useState } from "react";

const UpdateState = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 12345,
    },
  });

  const [tags, setTags] = useState(["happy", "cheerful"]);

  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);

    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 54321 },
    });

    //add
    setTags([...tags, "excited"]);

    //remove
    setTags(
      tags.filter((tag) => {
        tag !== "happy";
      })
    );

    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));

    //mark first bug as fixed
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };
  return (
    <div>
      {drink.price}
      <br />
      {customer.address.zipCode}
      <br />
      {tags[tags.length - 1]}
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdateState;
