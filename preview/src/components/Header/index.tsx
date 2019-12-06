import React from "react";

const Header = () => {
  return (
    <div className="bg-indigo-900 text-center py-4 lg:px-4">
      <div
        className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
        role="alert"
      >
        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
          Live Preview
        </span>
        <span className="font-semibold mr-2 text-sm text-left flex-auto">
          Interact with components right in this view
        </span>
      </div>
    </div>
  );
};

export default Header;
