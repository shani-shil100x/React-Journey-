import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label className="" htmlFor={id}></label>}
      <select
        {...props}
        id={id}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black border border-gray-200 w-full duration-200 focus:bg-gray-50 outline-none ${className}`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select); // ---> this is another way to use forwardRef

// What is forwardRef?
// --> forwardRef in React is a function that allows a component to accept a ref from its parent and pass (or “forward”) it to one of its child DOM elements, so the parent can directly access that underlying element.
