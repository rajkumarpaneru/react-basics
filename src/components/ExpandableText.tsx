import { useState } from "react";

interface Props {
  children: string;
  count?: number;
}
const ExpandableText = ({ children, count = 100 }: Props) => {
  const [btnText, setBtnText] = useState("More");
  const [text, setText] = useState(children.substring(0, count) + "...");

  const handleClick = () => {
    if (btnText === "More") {
      setText(children);
      setBtnText("Less");
    }

    if (btnText === "Less") {
      setText(children.substring(0, count) + "...");
      setBtnText("More");
    }
  };

  return (
    <>
      <div>{text}</div>
      <button onClick={handleClick}>{btnText}</button>
    </>
  );
};

export default ExpandableText;
