import React, { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandabaleText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxChars) return <div>{children}</div>;
  const text = !isExpanded ? children.substring(0, maxChars) : children;
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandabaleText;
