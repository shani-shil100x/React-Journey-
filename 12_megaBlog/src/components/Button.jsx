import React from "react";

function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textCotor = "text—white",
  className = "",
  ...props
}) {
  return (
    <button
      className={`py-2 px-4 rounded-lg ${className} ${bgColor} ${textCotor}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
