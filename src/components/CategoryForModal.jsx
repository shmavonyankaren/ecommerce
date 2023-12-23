import React from "react";

export default function CategoryForModal({ text, category, difference }) {
  return (
    <div className="md:flex md:items-center mb-6">
      <div className="md:w-1/3">
        <label
          className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          {text} :
        </label>
      </div>
      <div className="md:w-2/3">
        <h3>
          {category}
          {difference}
        </h3>
      </div>
    </div>
  );
}
