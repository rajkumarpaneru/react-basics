import React, { useState } from "react";

interface Props {
  children: string;
  count?: number;
}

const ExpandableTextRefactored = ({ children, count = 50 }: Props) => {
  const [isSummarized, setSummarized] = useState(true);

  if (children.length <= count) return <p>{children}</p>;

  const text = isSummarized ? children.substring(0, count) + "..." : children;

  return (
    <p>
      {text}
      <button onClick={() => setSummarized(!isSummarized)}>
        {isSummarized ? "More" : "Less"}
      </button>
    </p>
  );
};

export default ExpandableTextRefactored;
