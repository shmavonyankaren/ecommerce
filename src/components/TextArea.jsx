import React from "react";

export default function TextArea({ message, id, placeholder }) {
  return (
    <div class="sm:col-span-2">
      <label for={id} className="block mb-2 text-sm font-medium text-gray-900">
        {message}
      </label>
      <textarea
        id={id}
        rows="6"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
