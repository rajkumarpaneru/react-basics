import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };
  if (status) return <AiFillHeart size={40} onClick={toggle} color="red" />;
  return <AiOutlineHeart size={40} onClick={toggle} />;
};

export default Like;
