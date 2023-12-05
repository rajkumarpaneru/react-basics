import React, { useState } from "react";

interface Props {
  items: string[];
  heading: string;
}
const ListGroup = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>{props.heading}</h1>
      <ul className="list-group">
        {props.items.map((todo, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {todo}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
