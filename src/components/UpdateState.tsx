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

  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 1, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 5 } : item
      ),
    });

    setGame({ ...game, player: { ...game.player, name: "Max" } });

    setPizza({ ...pizza, toppings: [...pizza.toppings, "Olive"] });

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
      {game.player.name}
      <br />
      {pizza.toppings.join(", ")}
      <br />
      {cart.items[0].quantity}
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdateState;
