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
  };
  return (
    <div>
      {drink.price}
      <br />
      {customer.address.zipCode}
      <br />
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdateState;
