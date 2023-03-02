import React from "react";

const Button = ({children}) => {
  return (
    <button
      type="submit"
      className="group relative flex mx-auto justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
      {children}
    </button>
  );
};
export { Button };
