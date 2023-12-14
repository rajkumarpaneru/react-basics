import React from "react";
import styles from "./Button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success" | "warning" | "info";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} type="button" className={styles.btn}>
        {children}
      </button>
    </>
  );
};

export default Button;
