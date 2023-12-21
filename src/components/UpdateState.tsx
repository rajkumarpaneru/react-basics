import React, { useState } from "react";

const UpdateState = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    const newDrink = {
      ...drink,
      price: 6,
    };
    setDrink(newDrink);
  };
  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default UpdateState;
