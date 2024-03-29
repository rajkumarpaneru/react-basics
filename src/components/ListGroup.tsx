import React, { useState } from "react";
import styles from "./ListGroup.module.css";
import { FaStarOfLife } from "react-icons/fa6";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <FaStarOfLife />
      <h1>{heading}</h1> <FaStarOfLife />
      {items.length === 0 && <p>No items found</p>}
      <ul className={styles.listGroup}>
        {items.map((todo, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(todo);
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
