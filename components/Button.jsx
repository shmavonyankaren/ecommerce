import React from 'react'

export default function Button({className, onClick, type, title}) {
  return (
        <button
            type={type && "submit"}
            className={className}
            onClick={onClick}
        >
            {title}
        </button>
 )
}
